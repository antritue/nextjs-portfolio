import { gql } from 'graphql-request';

export const PROJECTS = gql`
  query Projects {
    projects {
      name
      description
      stack
      sourceCode
      livePreview
    }
  }
`;
