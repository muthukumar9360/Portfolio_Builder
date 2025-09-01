import React, { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    about: "",
    email: "",
    phone: "",
    location: "",
    socialLinks: {
      linkedin: "",
      github: "",
      leetcode: "",
      website: "",
    },
    experiences: [],
    projects: [],
    education: [],
    skills: [],
    certifications: [],
    hobbies: [],
  });

  // Handle basic input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [name]: value },
    }));
  };

  // Dynamic field handlers
  const addField = (section, newEntry) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newEntry],
    }));
  };

  const updateField = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, [section]: updated }));
  };

  const removeField = (section, index) => {
    const updated = [...formData[section]];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, [section]: updated }));
  };

  // 🚀 Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-2xl"
    >

      <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-6">Build Your Portfolio</h1>

      {/* ================= Personal Info ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Personal Info</h2>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="p-2 border rounded-lg" />
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Professional Title (e.g. Full Stack Developer)" className="p-2 border rounded-lg" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded-lg" />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-2 border rounded-lg" />
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="p-2 border rounded-lg" />
        </div>
        <textarea name="about" value={formData.about} onChange={handleChange} placeholder="About Me (short bio)" className="w-full p-2 mt-3 border rounded-lg" />
      </section>

      {/* ================= Social Links ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Social Links</h2>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="linkedin" value={formData.socialLinks.linkedin} onChange={handleSocialChange} placeholder="LinkedIn" className="p-2 border rounded-lg" />
          <input type="text" name="github" value={formData.socialLinks.github} onChange={handleSocialChange} placeholder="GitHub" className="p-2 border rounded-lg" />
          <input type="text" name="leetcode" value={formData.socialLinks.leetcode} onChange={handleSocialChange} placeholder="Leetcode" className="p-2 border rounded-lg" />
          <input type="text" name="website" value={formData.socialLinks.website} onChange={handleSocialChange} placeholder="Portfolio Website" className="p-2 border rounded-lg" />
        </div>
      </section>

      {/* ================= Work Experience ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
        {formData.experiences.map((exp, index) => (
          <div key={index} className="p-3 border rounded-lg mb-3 bg-white shadow">
            <input type="text" placeholder="Company" value={exp.company || ""} onChange={(e) => updateField("experiences", index, "company", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="Role" value={exp.role || ""} onChange={(e) => updateField("experiences", index, "role", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="Duration (e.g. 2021 - 2023)" value={exp.duration || ""} onChange={(e) => updateField("experiences", index, "duration", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <textarea placeholder="Description" value={exp.description || ""} onChange={(e) => updateField("experiences", index, "description", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <button type="button" onClick={() => removeField("experiences", index)} className="bg-red-500 text-white px-3 py-1 rounded-lg">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("experiences", { company: "", role: "", duration: "", description: "" })} className="bg-blue-600 text-white px-4 py-2 rounded-lg">+ Add Experience</button>
      </section>

      {/* ================= Projects ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Projects</h2>
        {formData.projects.map((proj, index) => (
          <div key={index} className="p-3 border rounded-lg mb-3 bg-white shadow">
            <input type="text" placeholder="Project Name" value={proj.name || ""} onChange={(e) => updateField("projects", index, "name", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <textarea placeholder="Description" value={proj.description || ""} onChange={(e) => updateField("projects", index, "description", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="Tech Stack (React, Node, etc.)" value={proj.tech || ""} onChange={(e) => updateField("projects", index, "tech", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="GitHub/Live Link" value={proj.link || ""} onChange={(e) => updateField("projects", index, "link", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <button type="button" onClick={() => removeField("projects", index)} className="bg-red-500 text-white px-3 py-1 rounded-lg">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("projects", { name: "", description: "", tech: "", link: "" })} className="bg-green-600 text-white px-4 py-2 rounded-lg">+ Add Project</button>
      </section>

      {/* ================= Education ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="p-3 border rounded-lg mb-3 bg-white shadow">
            <input type="text" placeholder="Institution" value={edu.institution || ""} onChange={(e) => updateField("education", index, "institution", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="Degree / Course" value={edu.degree || ""} onChange={(e) => updateField("education", index, "degree", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="Year (e.g. 2020 - 2024)" value={edu.year || ""} onChange={(e) => updateField("education", index, "year", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <button type="button" onClick={() => removeField("education", index)} className="bg-red-500 text-white px-3 py-1 rounded-lg">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("education", { institution: "", degree: "", year: "" })} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">+ Add Education</button>
      </section>

      {/* ================= Skills ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        {formData.skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 mb-2">
            <input type="text" placeholder="Skill (React, Node.js...)" value={skill.name || ""} onChange={(e) => updateField("skills", index, "name", e.target.value)} className="p-2 border rounded-lg flex-1" />
            <input type="text" placeholder="Level (Beginner, Intermediate, Expert)" value={skill.level || ""} onChange={(e) => updateField("skills", index, "level", e.target.value)} className="p-2 border rounded-lg flex-1" />
            <button type="button" onClick={() => removeField("skills", index)} className="bg-red-500 text-white px-3 py-1 rounded-lg">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("skills", { name: "", level: "" })} className="bg-yellow-600 text-white px-4 py-2 rounded-lg">+ Add Skill</button>
      </section>

      {/* ================= Certifications ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Certifications</h2>
        {formData.certifications.map((cert, index) => (
          <div key={index} className="p-3 border rounded-lg mb-3 bg-white shadow">
            <input type="text" placeholder="Certification Name" value={cert.name || ""} onChange={(e) => updateField("certifications", index, "name", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="Issuer" value={cert.issuer || ""} onChange={(e) => updateField("certifications", index, "issuer", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <input type="text" placeholder="Year" value={cert.year || ""} onChange={(e) => updateField("certifications", index, "year", e.target.value)} className="p-2 border rounded-lg w-full mb-2" />
            <button type="button" onClick={() => removeField("certifications", index)} className="bg-red-500 text-white px-3 py-1 rounded-lg">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("certifications", { name: "", issuer: "", year: "" })} className="bg-pink-600 text-white px-4 py-2 rounded-lg">+ Add Certification</button>
      </section>

      {/* ================= Hobbies ================= */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Hobbies</h2>
        {formData.hobbies.map((hobby, index) => (
          <div key={index} className="flex items-center gap-3 mb-2">
            <input type="text" placeholder="Hobby (e.g. Photography, Chess)" value={hobby.name || ""} onChange={(e) => updateField("hobbies", index, "name", e.target.value)} className="p-2 border rounded-lg flex-1" />
            <button type="button" onClick={() => removeField("hobbies", index)} className="bg-red-500 text-white px-3 py-1 rounded-lg">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("hobbies", { name: "" })} className="bg-teal-600 text-white px-4 py-2 rounded-lg">+ Add Hobby</button>
      </section>

      {/* ================= Submit ================= */}
      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-purple-700"
        >
          Next: Choose Template
        </button>
      </div>
      </div>
    </form>
  );
};

export default Form;
