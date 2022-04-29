import React from 'react';
import { Section, SectionContentTitle } from '@shared';
import { styled, withTheme } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
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
          <SocialIcon key={icons.indexOf(icon)}>
            <OutboundLink href={icon.url} target="_blank" rel="noreferrer">
              <GatsbyImage
                image={icon.image.asset.gatsbyImageData}
                alt={icon.label}
              />
            </OutboundLink>
          </SocialIcon>
        ))}
      </SocialIconsContainer>
      {/* <CtaButton>
        Request CV
      </CtaButton> */}
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

export const CtaButton = withTheme(
  styled(Button)(({ theme }) => ({
    fontWeight: 400,
    fontSize: '20px',
    maxWidth: '200px',
    color: `${theme.typography.color}`,
    letterSpacing: '1px',
    height: '50px',
    display: 'block',
    textTransform: 'uppercase',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    backgroundColor: `${theme.palette.secondary.main}`,
    borderRadius: '8px',
    padding: '0px 30px',
    borderwidth: '0px',
    borderStyle: 'initial',
    borderColor: 'initial',
    borderImage: 'initial',
    filter: 'drop-shadow(0px 3px 3px #000000cc)',
    transition: '0.2s',
    outline: '0px',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.light}`,
      color: `${theme.palette.text.dark}`,
    },
    '&:active': {
      filter: 'drop-shadow(0px 0px 1px #00000066)',
      transform: 'translateY(3px)',
    },
  })),
);
