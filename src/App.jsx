import { useState, useEffect } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑"
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setStep(1); // Reset step to 1 when the component is shown
    }
  }, [isOpen]);

  function handlePrevious() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  }

  return (
    <div className="">
      <button className="close" onClick={() => setOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button style={{ backgroundColor: "#7950f2", color: "white" }} onClick={handlePrevious}>
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2", color: "white" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
