import React from 'react';
import style from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <div>
      <Container>
        <Section
          title='Model S'
          description='Order Online for Touchless Delivery'
          backgroundImg='model-s.jpg'
          rightBtnText='Custom order'
          leftBtnText='Existing Invetory'
        />
        <Section
          title='Model Y'
          description='Order Online for Touchless Delivery'
          backgroundImg='model-y.jpg'
          rightBtnText='Custom order'
          leftBtnText='Existing Invetory'
        />
        <Section
          title='Model 3'
          description='Order Online for Touchless Delivery'
          backgroundImg='model-3.jpg'
          rightBtnText='Custom order'
          leftBtnText='Existing Invetory'
        />
        <Section
          title='Model X'
          description='Order Online for Touchless Delivery'
          backgroundImg='model-x.jpg'
          rightBtnText='Custom order'
          leftBtnText='Existing Invetory'
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = style.div`
  height: 100vh;
`;
