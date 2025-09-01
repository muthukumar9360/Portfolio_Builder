/* src/templates/Template1.jsx */
const Template1 = ({ userData }) => {
  return (
    <div className="text-center space-y-6 animate-fadeIn">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-blue-600">{userData.name}</h1>
      <p className="text-xl text-gray-500">{userData.title}</p>

      {/* About */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-gray-700">{userData.about}</p>
      </section>

      {/* Experience */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        {userData.experiences && userData.experiences.length > 0 ? (
          <div className="space-y-4">
            {userData.experiences.map((exp, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white shadow">
                <h3 className="text-lg font-bold">{exp.role} @ {exp.company}</h3>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No experience added</p>
        )}
      </section>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {userData.projects && userData.projects.length > 0 ? (
          <div className="space-y-4">
            {userData.projects.map((proj, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white shadow">
                <h3 className="text-lg font-bold">{proj.name}</h3>
                <p className="text-gray-700">{proj.description}</p>
                <p className="text-sm text-gray-500">Tech: {proj.tech}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No projects added</p>
        )}
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        {userData.education && userData.education.length > 0 ? (
          <ul className="space-y-2">
            {userData.education.map((edu, index) => (
              <li key={index} className="text-gray-700">
                <strong>{edu.degree}</strong> @ {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No education added</p>
        )}
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        {userData.skills && userData.skills.length > 0 ? (
          <ul className="flex flex-wrap justify-center gap-3">
            {userData.skills.map((skill, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
              >
                {skill.name} ({skill.level})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No skills added</p>
        )}
      </section>

      {/* Certifications */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-blue-600 mb-4 border-b-2 border-blue-200 pb-1">
          Certifications
        </h2>

        {userData.certifications && userData.certifications.length > 0 ? (
          <div className="space-y-4">
            {userData.certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 border border-blue-100 rounded-xl 
               bg-gradient-to-tr from-blue-50 via-white to-blue-50 
               shadow-sm hover:shadow-md hover:-translate-y-1 
               transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                  🏆 {cert.title}
                </h3>
                {cert.issuer && (
                  <p className="text-sm text-gray-700 mt-1">Issued by: {cert.issuer}</p>
                )}
                {cert.year && (
                  <p className="text-xs text-gray-500 mt-1">Year: {cert.year}</p>
                )}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-1.5 bg-blue-600 text-white text-xs rounded-lg
                   hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    🔗 View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No certifications added</p>
        )}
      </section>

      {/* Footer (Contacts & Social Links) */}
      <footer className="mt-6 space-y-2">
        <h1 className="text-2xl font-bold text-black mb-4 border-blue-200 pb-1">Contact Me</h1>
        <p>📧 {userData.email}</p>
        <p>📞 {userData.phone}</p>
        <p>📍 {userData.location}</p>
        {userData.socialLinks && (
          <div className="flex justify-center gap-4 mt-2">
            {userData.socialLinks.linkedin && (
              <a
                href={userData.socialLinks.linkedin}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {userData.socialLinks.github && (
              <a
                href={userData.socialLinks.github}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {userData.socialLinks.twitter && (
              <a
                href={userData.socialLinks.twitter}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
            {userData.socialLinks.website && (
              <a
                href={userData.socialLinks.website}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
          </div>
        )}
      </footer>
    </div>
  );
};

export default Template1;
