/* src/templates/Template2.jsx */
const Template2 = ({ userData }) => {
  return (
    <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Header */}
      <header className="border-b pb-4 mb-6">
        <h1 className="text-4xl font-bold text-green-700">{userData.name}</h1>
        <p className="text-lg text-gray-600">{userData.title}</p>
      </header>

      {/* About */}
      {userData.about && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-green-600 mb-2">About Me</h2>
          <p className="text-gray-700">{userData.about}</p>
        </section>
      )}


      {/* Experience */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Experience</h2>
        {userData.experiences && userData.experiences.length > 0 ? (
          <div className="grid gap-4">
            {userData.experiences.map((exp, index) => (
              <div
                key={index}
                className="p-5 border border-gray-200 rounded-xl bg-gradient-to-r from-green-50 to-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {exp.role} <span className="text-green-600">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500 italic mt-1">{exp.duration}</p>
                <p className="text-gray-700 mt-2 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No experience added</p>
        )}
      </section>


      {/* Projects */}
      {userData.projects && userData.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-1">
            Projects
          </h2>
          <ul className="space-y-4">
            {userData.projects.map((proj, index) => (
              <li
                key={index}
                className="p-5 border border-green-100 rounded-xl 
                     bg-gradient-to-tr from-green-50 via-white to-green-50
                     shadow-sm hover:shadow-md hover:-translate-y-1 
                     transition-all duration-300"
              >
                {/* Project Title */}
                <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
                  📌 {proj.name}
                </h3>

                {/* Description */}
                {proj.description && (
                  <p className="text-sm text-gray-700 mt-2">{proj.description}</p>
                )}

                {/* Tech Stack */}
                {proj.tech && proj.tech.length > 0 && (
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Tech:</strong> {proj.tech.split(",").join(", ")}
                  </p>
                )}

                {/* Project Link */}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-1.5 bg-green-600 text-white text-xs rounded-lg
                         hover:bg-green-700 transition-colors shadow-sm"
                  >
                    🔗 View Project
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-1">
          🎓 Education
        </h2>

        {userData.education && userData.education.length > 0 ? (
          <ul className="space-y-3">
            {userData.education.map((edu, index) => (
              <li
                key={index}
                className="p-4 border border-green-100 rounded-lg 
                     bg-gradient-to-tr from-green-50 via-white to-green-50 
                     shadow-sm hover:shadow-md hover:-translate-y-1 
                     transition-all duration-300"
              >
                <p className="text-gray-800 font-semibold">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-600">
                  {edu.institution} <span className="text-green-700">({edu.year})</span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No education added</p>
        )}
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4 border-b-2 border-green-200 inline-block pb-1">
          Skills
        </h2>

        {userData.skills && userData.skills.length > 0 ? (
          <ul className="flex flex-wrap gap-3">
            {userData.skills.map((skill, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium
                     hover:bg-green-200 hover:text-green-900 transition-colors duration-300 shadow-sm"
              >
                {skill.name} {skill.level ? `(${skill.level})` : ""}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No skills added</p>
        )}
      </section>


      {/* Certifications */}
      {userData.certifications && userData.certifications.length > 0 && (
        <section className="mb-6 mt-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Certifications</h2>
          <ul className="space-y-3">
            {userData.certifications.map((cert, index) => (
              <li
                key={index}
                className="p-4 border border-green-100 rounded-lg bg-green-50 shadow-sm 
                     hover:bg-green-100 transition-colors"
              >
                <p className="font-semibold text-green-700">{cert.title}</p>
                {cert.issuer && <p className="text-sm text-gray-700">Issued by: {cert.issuer}</p>}
                {cert.year && <p className="text-xs text-gray-500">Year: {cert.year}</p>}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-800 underline text-sm"
                  >
                    🔗 View Certificate
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Footer / Contact */}
      <footer className="border-t pt-4 mt-6 text-sm text-gray-700 space-y-1">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Contact Me</h2>
        {userData.email && <p>📧 {userData.email}</p>}
        {userData.phone && <p>📞 {userData.phone}</p>}
        {userData.socialLinks?.github && <p>🔗 GitHub: {userData.socialLinks.github}</p>}
        {userData.socialLinks?.linkedin && <p>💼 LinkedIn: {userData.socialLinks.linkedin}</p>}
        {userData.socialLinks?.leetcode && <p>🐦 Leetcode: {userData.socialLinks.leetcode}</p>}
        {userData.socialLinks?.website && <p>🌐 Website: {userData.socialLinks.website}</p>}
      </footer>
    </div>
  );
};

export default Template2;
