import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../portfolio';

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        <div className='social'>
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                  target='_blank'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                  target='_blank'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
        <div className='resume'>
          {resume && (
            <a href={resume} target='_blank'>
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
