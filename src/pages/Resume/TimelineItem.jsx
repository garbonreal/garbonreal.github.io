

const TimelineItem = ({ title, subtitle, date, description }) => {
  return (
    <li className="timeline-item">
      <h3 className="h3 timeline-item-title">{title}</h3>
      <h4 className="h4 timeline-item-subtitle">{subtitle}</h4>
      <span>{date}</span>
      <ul className="timeline-text">
        {Array.isArray(description) ? (
          description.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{description}</li>
        )}
      </ul>
    </li>
  );
}

export default TimelineItem;