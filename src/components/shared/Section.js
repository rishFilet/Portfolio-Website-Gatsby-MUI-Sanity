import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from './SectionContainer';
import ContentContainer from './ContentContainer';
import SectionTitleContainer from './SectionTitleContainer';
import SectionContent from './SectionContent';

function Section({ title, children, content }) {
  return (
    <SectionContainer>
      <ContentContainer>
        <SectionTitleContainer title={title} content={content} />
        <SectionContent>{children}</SectionContent>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Section;

Section.defaultProps = {
  content: null,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  content: PropTypes.node,
};
