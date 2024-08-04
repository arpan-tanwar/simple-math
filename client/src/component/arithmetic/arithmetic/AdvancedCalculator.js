import React from "react";

const AdvancedCalculator = ({ onButtonClick, onCursorMove }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "√",
    "4",
    "5",
    "6",
    "*",
    "^2",
    "1",
    "2",
    "3",
    "-",
    "^3",
    "0",
    ".",
    "=",
    "+",
    "Backspace",
    "sin",
    "cos",
    "tan",
    "log",
    "ln",
    "π",
    "e",
    "(",
    ")",
    "x",
    "y",
    "z",
    "←",
    "→", // Left and right arrow keys
  ];

  return (
    <div style={styles.calculatorContainer}>
      <div style={styles.buttonGrid}>
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === "←" || button === "→") {
                onCursorMove(button);
              } else {
                onButtonClick(button);
              }
            }}
            style={styles.button}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  calculatorContainer: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "#f8f9fa",
    padding: "10px",
    borderTop: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.1)",
    zIndex: 60,
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // Adjust columns as needed
    gap: "10px", // Adequate spacing between buttons
    width: "100%",
    maxWidth: "500px", // Limit width for better appearance
  },
  button: {
    height: "30px", // Smaller height for buttons
    fontSize: "14px", // Smaller font size
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    textAlign: "center",
  },
};

export default AdvancedCalculator;
