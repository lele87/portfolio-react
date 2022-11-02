import './index.scss'
import { projects } from '../../utils/projects'
import Project from '../Project'

const ProjectList = () => {
  return (
    <div className="project__list--container">
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Project project={project} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectList
