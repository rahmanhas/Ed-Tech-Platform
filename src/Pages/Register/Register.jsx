// import React, { useState } from "react";

// const RegistrationPage = () => {
//   const [step, setStep] = useState(1);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [position, setPosition] = useState("");
//   const [instituteName, setInstituteName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [registrationComplete, setRegistrationComplete] = useState(false);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handlePrevious = () => {
//     setStep(step - 1);
//   };

//   const handleRegistration = () => {
//     // Perform registration logic here
//     setRegistrationComplete(true);
//   };

//   const renderStepContent = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <div>
//               <label htmlFor="fullName">Full Name:</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="position">Position:</label>
//               <select
//                 id="position"
//                 value={position}
//                 onChange={(e) => setPosition(e.target.value)}
//               >
//                 <option value="">-- Select Position --</option>
//                 <option value="student">Student</option>
//                 <option value="teacher">Teacher</option>
//               </select>
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div>
//               <label htmlFor="instituteName">Institute Name:</label>
//               <input
//                 type="text"
//                 id="instituteName"
//                 value={instituteName}
//                 onChange={(e) => setInstituteName(e.target.value)}
//               />
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <div>
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>User Registration</h2>
//       {!registrationComplete ? (
//         <>
//           <div>{renderStepContent()}</div>
//           <div>
//             {step > 1 && (
//               <button onClick={handlePrevious}>Previous</button>
//             )}
//             {step < 3 && (
//               <button onClick={handleNext}>Next</button>
//             )}
//             {step === 3 && (
//               <button onClick={handleRegistration}>Confirm</button>
//             )}
//           </div>
//         </>
//       ) : (
//         <div>
//           <h3>Registration Complete!</h3>
//           <p>Thank you for registering.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegistrationPage;
// import React, { useState } from 'react';

// function Register() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     { label: 'Register', primary: true },
//     { label: 'Choose plan', primary: true },
//     { label: 'Purchase', primary: true },
//     { label: 'Receive Product', primary: true }
//   ];

//   const nextStep = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   return (
//     <div>
//       <ul className="steps">
//         {steps.map((step, index) => (
//           <li
//             key={index}
//             className={`step ${step.primary ? 'step-primary' : ''} ${currentStep === index ? 'active' : ''}`}
//           >
//             {step.label}
//           </li>
//         ))}
//       </ul>

//       <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
//         Next
//       </button>
//     </div>
//   );
// }

// export default Register;
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
