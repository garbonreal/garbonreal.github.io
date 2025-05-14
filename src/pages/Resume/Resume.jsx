import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import TimelineItem from './TimelineItem';

const Resume = () => {

  const handleDownload = () => {
    const pdfUrl = './public/Jiapeng_Shi_SDE.pdf';
    window.open(pdfUrl, '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jiapeng-shi-740a142a7', '_blank');
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="button-container">
        <button onClick={handleLinkedIn} className="linkedin-btn">
          <FaLinkedin className='icon'/> LinkedIn
        </button>
        <button onClick={handleDownload} className="download-btn">
          <FaDownload className='icon'/> Download CV
        </button>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of Waterloo"
            subtitle="Master of Data Science and Artificial Intelligence"
            date="Sep. 2023 - May. 2025"
            description={[
              "GPA: 3.9/4.0",
              "Relevant Courses: Machine Learning, Deep Learning, Database Management, Big Data, NLP, Statistical Analysis, Data Engineering, Exploratory Data Analysis"
            ]}
          />
          <TimelineItem
            title="Hunan University"
            subtitle="Bachelor of Computer Science"
            date="Sep. 2019 - Jun. 2023"
            description={[
              "GPA: 3.8/4.0",
              "Relevant Courses: Data Structures, Algorithms, Computer Networks, Operating Systems, Software Engineering, Database Management, Distributed Computing, Cloud Computing"
            ]}
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Software Engineering Co-op"
            subtitle="WealthyPlanet Financial Holdings Inc."
            date="May. 2024 - Aug. 2024"
            description={[
              "• Developed core backend features for Abi Financial AI Assistant in a fast-paced startup.",
              "• Built RESTful APIs with TypeScript and Prisma ORM for dynamic financial plan updates.",
              "• Designed microservices with gRPC for type-safe AI interactions, reducing latency by 30%."
            ]}          />
          <TimelineItem
            title="Full Stack Developer Intern"
            subtitle="Peking University Changsha Institute for Computing and Digital Economy"
            date="May. 2023 - Aug. 2023"
            description={[
              "• Built a full-stack report editing platform for a think tank, enabling news collection, online editing, and automated report generation, boosting efficiency by 3–6×.",
              "• Developed RESTful APIs with Flask, SQLAlchemy, and MySQL",
              "• Created a data pipeline for scraping 1,000+ news articles daily, performing NLP analysis, and storing results in MongoDB, managed by Airflow."
            ]}
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
