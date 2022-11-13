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

export const INFORMATION = gql`
  query Information($id: ID) {
    information(where: { id: $id }) {
      name
      description
      role
      email
      skill
      resume
      linkedin
      github
      portfolio
      metaTitle
      metaDesc
      metaKeywords
    }
  }
`;
