import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <a href='/images/logo.svg'>
        <img src='/images/logo.svg' alt='' />
      </a>
    </Container>
  );
}

export default Header;

const Container = styled.div``;
