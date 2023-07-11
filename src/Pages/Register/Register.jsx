import React, { useState } from 'react';

function Register() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Register', primary: true },
    { label: 'Choose plan', primary: true },
    { label: 'Purchase', primary: true },
    { label: 'Receive Product', primary: true }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <ul className="steps">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${step.primary ? 'step-primary' : ''} ${currentStep === index ? 'active' : ''}`}
          >
            {step.label}
          </li>
        ))}
      </ul>

      <div>
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Register;
