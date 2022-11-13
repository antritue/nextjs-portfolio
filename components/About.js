import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = ({ information }) => {
  return (
    <div className='about center'>
      {information.name && (
        <h1>
          Hi, I am <span className='about__name'>{information.name}</span>
        </h1>
      )}

      {information.role && <h2 className='about__role'>{information.role}</h2>}
      <p className='about__desc'>
        {information.description && information.description}
      </p>

      <div className='about__contact center'>
        <div className='social'>
          <>
            {information.github && (
              <a
                href={information.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {information.linkedin && (
              <a
                href={information.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        </div>
        <div className='resume'>
          {information.resume && (
            <a href={information.resume} target='_blank' rel='noreferrer'>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
