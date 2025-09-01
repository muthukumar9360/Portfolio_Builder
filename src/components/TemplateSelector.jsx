// src/components/TemplateSelector.jsx
import React, { useRef } from "react";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TemplateSelector = ({ userData, selectedTemplate, setSelectedTemplate }) => {
  const previewRef = useRef();

  const templates = [
    { id: 1, name: "Modern Clean", description: "Minimal and clean design" },
    { id: 2, name: "Classic Resume", description: "Professional CV look" },
    { id: 3, name: "Creative Portfolio", description: "Stylish portfolio design" },
    { id: 4, name: "Vibrant Experience", description: "Colorful and dynamic layout" },
  ];

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <Template1 userData={userData} />;
      case 2:
        return <Template2 userData={userData} />;
      case 3:
        return <Template3 userData={userData} />;
      case 4:
        return <Template4 userData={userData} />;
      default:
        return <p className="text-center text-gray-500">Select a template to preview</p>;
    }
  };

  const exportPDF = async () => {
    const input = previewRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`portfolio-template${selectedTemplate}.pdf`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Template</h1>

      {/* Template Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer ${
              selectedTemplate === template.id ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
            <p className="text-gray-600">{template.description}</p>
          </div>
        ))}
      </div>

      {/* Live Preview */}
      <div
        ref={previewRef}
        className="bg-white shadow-lg rounded-xl p-6 min-h-[500px] mb-6"
      >
        {renderTemplate()}
      </div>

      {/* Export Button */}
      {selectedTemplate && (
        <div className="text-center">
          <button
            onClick={exportPDF}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
          >
            Export as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
