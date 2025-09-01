// src/components/PortfolioPreview.jsx
import React from "react";

const PortfolioPreview = ({ userData,onChooseTemplate }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{userData.name}</h1>
        <p className="text-lg text-gray-600">{userData.title}</p>
        <p className="text-gray-500">{userData.email}</p>
        <p className="text-gray-500">{userData.phone}</p>
        <p className="text-gray-500">{userData.location}</p>
      </section>

      {/* About */}
      {userData.about && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">{userData.about}</p>
        </section>
      )}

      {/* Experience */}
      {userData.experiences.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          {userData.experiences.map((exp, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold">{exp.role} @ {exp.company}</h3>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {userData.projects.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          {userData.projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold">{proj.name}</h3>
              <p>{proj.description}</p>
              <p className="text-sm text-gray-500">
                {proj.tech} | <a href={proj.link} className="text-blue-600">{proj.link}</a>
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {userData.education.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          {userData.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold">{edu.degree}</h3>
              <p>{edu.institution} ({edu.year})</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {userData.skills.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {userData.skills.map((s, i) => (
              <li key={i}>{s.name} - {s.level}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {userData.certifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          {userData.certifications.map((c, i) => (
            <p key={i}>{c.name} ({c.issuer}, {c.year})</p>
          ))}
        </section>
      )}

      {/* Hobbies */}
      {userData.hobbies.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
          <ul className="list-disc list-inside text-gray-700">
            {userData.hobbies.map((h, i) => (
              <li key={i}>{h.name}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>📧 {userData.email}</p>
        <p>📱 {userData.phone}</p>
        {userData.socialLinks.linkedin && <p>💼 {userData.socialLinks.linkedin}</p>}
        {userData.socialLinks.github && <p>🔗 {userData.socialLinks.github}</p>}
        {userData.socialLinks.leetcode && <p>🐦 {userData.socialLinks.leetcode}</p>}
        {userData.socialLinks.website && <p>🌐 {userData.socialLinks.website}</p>}
        {/* Button to choose template */}
      
      </section>

      {/* Button to choose template */}
      <div className="mt-6">
        <button
          onClick={onChooseTemplate}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Choose Template
        </button>
      </div>

    </div>
  );
};

export default PortfolioPreview;
