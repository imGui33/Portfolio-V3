import React from 'react';
import Home from '../Home';
import ProgressBlog from '../ProgressBlog';

import { Container } from './style';

const WebInterface: React.FC = () => {
  return <Container>
    <ProgressBlog />
    <Home />
  </Container>;
}

export default WebInterface;