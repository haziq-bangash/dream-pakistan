import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_TOUR_ENDPOINT;

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getCatTags = async () => {
  const query = gql`
  query GetCatTags {
    catTags {
      desc
      category {
        name
        slug
      }
      featuredphoto {
        url
      }
      photos {
        url
      }
      rating
      title
      location {
        distance(from: {latitude: 1.5, longitude: 1.5})
        latitude
        longitude
      }
      slug
      called
    }
  }
  
        `;

  const result = await request(graphqlAPI, query);

  return result.catTags;
};
