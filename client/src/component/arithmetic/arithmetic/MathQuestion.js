import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import AdvancedCalculator from "./AdvancedCalculator";

const MathQuestion = ({ initialQuestion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [question, setQuestion] = useState(initialQuestion);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleButtonClick = (value) => {
    if (value === "Backspace") {
      setQuestion((prevQuestion) => prevQuestion.slice(0, -1));
      return;
    }

    let latexValue = value;

    const specialSymbols = {
      "√": "\\sqrt{}",
      π: "\\pi ",
      e: "e",
      "^2": "^2",
      "^3": "^3",
      sin: "\\sin()",
      cos: "\\cos()",
      tan: "\\tan()",
      log: "\\log()",
      ln: "\\ln()",
    };

    if (specialSymbols[value]) {
      latexValue = specialSymbols[value];
    }

    setQuestion((prevQuestion) => prevQuestion + latexValue);
  };

  return (
    <div style={isEditing ? styles.pageShift : null}>
      <MathJaxContext>
        <div style={styles.content}>
          {isEditing ? (
            <div>
              <textarea
                value={question}
                onChange={handleChange}
                rows={4}
                cols={50}
                placeholder="Edit the equation here using LaTeX syntax"
                style={styles.textarea}
              />
              <button onClick={handleSaveClick} style={styles.saveButton}>
                Save
              </button>
              <div style={styles.previewContainer}>
                <p>Preview:</p>
                <MathJax>{`\\(${question}\\)`}</MathJax>
              </div>
            </div>
          ) : (
            <div>
              <MathJax>{`\\(${question}\\)`}</MathJax>
              <button onClick={handleEditClick} style={styles.editButton}>
                Edit
              </button>
            </div>
          )}
        </div>
        {isEditing && <AdvancedCalculator onButtonClick={handleButtonClick} />}
      </MathJaxContext>
    </div>
  );
};

const styles = {
  content: {
    marginBottom: "60px", // Ensure content is above the calculator
  },
  pageShift: {
    marginBottom: "80px", // Shift page up by the height of the calculator + margin
    transition: "margin-bottom 0.3s ease", // Smooth transition effect
  },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
  },
  saveButton: {
    marginTop: "10px",
  },
  editButton: {
    marginTop: "10px",
  },
  previewContainer: {
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default MathQuestion;
