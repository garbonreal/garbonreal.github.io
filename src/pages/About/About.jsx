/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/backend.svg",
    title: "Backend Development",
    description: "Building secure, high-performance backend systems using the MVC architecture and optimized database management."
  },
  {
    icon: "/images/fullstack.svg",
    title: "Full-Stack Development",
    description: "Developing frontend with React and component libraries, covering the full software lifecycle from designing to testing and CI/CD automation."
  },
  {
    icon: "/images/api.svg",
    title: "API Development",
    description: "Creating RESTful APIs for scalable frontend-backend communication, leveraging gRPC for efficient, strongly-typed inter-service connections."
  },
  {
    icon: "/images/AI.svg",
    title: "AI & Machine Learning",
    description: "Building data pipelines for training and fine-tuning machine learning models and embedding them into data-driven applications."
  }
];


const About = () => {
  useEffect(()=> {
    const typingText = document.querySelector(".text2");
    const myArray = [
      "Web Developer",
      "Backend Developer",
      "Master of Data Science and AI",
      "Full Stack Developer",
      "Passionate Learner",
      "AI & ML Engineer",
      "Gratuate Student at UWaterloo"
    ];

    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseAfterTyping = 2000;
    const pauseAfterDeleting = 500;

    function typeEffect() {
      const currentText = myArray[arrayIndex];

      if (isDeleting) {
        typingText.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseAfterTyping);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        arrayIndex = (arrayIndex + 1) % myArray.length; // Cycle through words
        setTimeout(typeEffect, pauseAfterDeleting);
        return;
      }

      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeEffect();
  }, []); // Run only once when the component mounts

  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <h2>
      👋 Hi there! I'm Jiapeng Shi, a recent graduate from the MDSAI program at UWaterloo and an enthusiastic full-time new grad job seeker! 🚀
      </h2>

      <div className="type-container">
          <div className="type-text text1">I'm a</div>
          <div className="type-text text2"></div>
      </div>

      <p>
        🌏 Globally educated and experienced, I'm eager to pursue a data-driven software development role, thriving in harnessing the power of AI and data to create life-changing applications in an agile and passionate environment!
      </p>

      <h4>💼 Work Experience</h4>
      <p></p>
      
      <p>
        💡 Backend Developer Co-op | WealthyPlanet: Developed an AI-driven Financial Assistant, providing economic situation analysis and optimization suggestions.
      </p>

      <p>
        📊 Full-stack Developer Intern | Think Tank team: Built an AI-powered news report editing platform from scratch, automating data extraction, NLP analysis, and summarization, enabling analysts to efficiently generate reports.
      </p>

    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* Skills Section */}
    <section className="skills-section">
      <h3 className="h3 s">Skills</h3>
          <div className="skills-list">
            <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" /> 
            <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++" /> 
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white" alt="SQL" />
            <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
            <img src="https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white&style=for-the-badge" alt="Flask" />
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />  
            <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
            <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" /> 
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /> 
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" alt="Kafka" />
            <img src="https://img.shields.io/badge/Apache%20Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white" alt="Spark" />
            <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
            <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
            <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" /> 
            <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /> 
          </div>
    </section>

    <section className="achievements">
      <h3 className="h3 achievements">Achievements</h3>
      <ul>
        <li>🥇 3rd Place @ Scotia DSD Hackathon 2024</li>
      </ul>
    </section>

  </article>
  )
}

export default About