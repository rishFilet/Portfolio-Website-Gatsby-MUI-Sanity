import React, { useEffect } from 'react';
import { Layout, Hero } from '@components';
import { Placeholder } from 'semantic-ui-react';

// styles

function HomePage() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.document.getElementById('ui placeholder').style.display = 'none';
  }, []);

  return (
    <Layout>
      <div id="ui placeholder">
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
      <Hero />
    </Layout>
  );
}

export default HomePage;
