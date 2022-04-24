import React from 'react';
import { Section, SectionContentTitle } from '@shared';
import { styled, withTheme } from '@mui/styles';
import { Box } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Interests from './Interests';

function Hero() {
  const dataQuery = useStaticQuery(graphql`
    {
      sanitySection(title: { eq: "Rishi Khan" }) {
        title
        header
        description
        icons {
          url
          label
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        heroInterests {
          text
          alttext
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const {
    sanitySection: {
      title, header, description, icons, heroInterests,
    },
  } = dataQuery;

  return (
    <Section title={title} content={<Interests interests={heroInterests} />}>
      <SectionContentTitle title={header} />
      <Box sx={{ typography: 'h2', maxWidth: '500px' }}>{description}</Box>
      <SocialIconsContainer>
        {icons.map((icon) => (
          <SocialIcon>
            <a href={icon.url} target="_blank" rel="noreferrer">
              <GatsbyImage
                image={icon.image.asset.gatsbyImageData}
                alt={icon.label}
              />
            </a>
          </SocialIcon>
        ))}
      </SocialIconsContainer>
    </Section>
  );
}

export default Hero;

const SocialIconsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '25px',
}));

const SocialIcon = withTheme(
  styled('div')(({ theme }) => ({
    transition: ' all .2s ease-in-out',

    height: '40px',
    width: '40px',
    '&:hover': {
      transform: 'scale(1.15)',
      filter: `drop-shadow(4px 4px 3px ${theme.palette.secondary.main})`,
    },
    '&:active': {
      transform: 'translate(2px, 2px)',
    },
  })),
);
