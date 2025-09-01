// src/App.jsx
import { useState } from "react";
import Form from "./components/Form";
import PortfolioPreview from "./components/PortfolioPreview";
import TemplateSelector from "./components/TemplateSelector";

function App() {
  const [userData, setUserData] = useState(null);
  const [step, setStep] = useState("form"); // form → preview → templates
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
    setStep("preview"); // move to preview page
  };

  const handleChooseTemplate = () => {
    setStep("templates"); // move to template selection page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {step === "form" && <Form onFormSubmit={handleFormSubmit} />}

      {step === "preview" && (
        <PortfolioPreview
          userData={userData}
          onChooseTemplate={handleChooseTemplate}
        />
      )}

      {step === "templates" && (
        <TemplateSelector
          userData={userData}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}
    </div>
  );
}

export default App;
