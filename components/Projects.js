import ProjectContainer from './ProjectContainer';

const Projects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
