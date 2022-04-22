// import { graphql, useStaticQuery } from 'gatsby';

// export const useSiteDate = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allSection(where: { title: { eq: "Rishi Khan" } }) {
//         title
//         author {
//           name
//         }
//       }
//     }
//   `);
//   const {
//     purpose,
//     team,
//     aboutUsCards: { aboutUsCardsContent },
//   } = data;
//   return {
//     purpose,
//     team,
//     aboutUsCardsContent,
//   };
// };

// export const useAboutUsData = () => {
//   const data = useStaticQuery(graphql`
//     {
//       purpose: contentfulSection(contentId: { eq: "aboutUs-purpose" }) {
//         header
//         title
//         body {
//           body
//         }
//       }

//       team: contentfulSection(contentId: { eq: "aboutUs-team" }) {
//         title
//       }

//       aboutUsCards: allContentfulCard(
//         filter: { contentId: { eq: "aboutUs-card-team" } }
//         sort: { fields: orderNumber }
//       ) {
//         aboutUsCardsContent: nodes {
//           name
//           body {
//             body
//           }
//           image {
//             gatsbyImageData(quality: 100, placeholder: BLURRED)
//             description
//           }
//           role
//           email
//           orderNumber
//         }
//       }
//     }
//   `);

//   const {
//     purpose,
//     team,
//     aboutUsCards: { aboutUsCardsContent },
//   } = data;
//   return {
//     purpose,
//     team,
//     aboutUsCardsContent,
//   };
// };

// export default useAboutUsData;
