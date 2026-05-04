import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "PHP", icon: <FaPhp color="#777BB4" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "SQL", icon: <SiMysql color="#4479A1" /> },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;