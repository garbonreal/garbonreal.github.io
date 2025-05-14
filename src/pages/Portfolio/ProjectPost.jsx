

const ProjectPost = ({ title, category, date, image, description }) => {
  return (
    <li className="project-post-item">
      <a href="#">
        <figure className="project-banner-box">
          <img src={image} alt={title} loading="lazy"/>
        </figure>
        <div className="project-content">
          <div className="project-meta">
            <p className="project-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="h3 project-item-title">{title}</h3>
          <p className="project-text">{description}</p>
        </div>
      </a>
    </li>
  );
}

export default ProjectPost;
