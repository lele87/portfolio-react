import './index.scss'

const Project = ({
  project: { name, description, image, demoLink, sourceLink },
}) => {
  return (
    <div className="project--container">
      <div className="project--card">
        <h3 className="project--name">{name}</h3>
        <img src={image} alt={`${name} homepage`} className="project--image" />
        <div className="project--text">
          <p>{description}</p>
        </div>
        <div className="project--buttons">
          <a href={demoLink}>
            <button className="demo__button">Live Demo</button>
          </a>
          <a href={sourceLink}>
            <button className="code__button">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
