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
          downButton={true}
        />
        <Section
          title='Model Y'
          description='Order Online for Touchless Delivery'
          backgroundImg='model-y.jpg'
          rightBtnText='Custom order'
          leftBtnText='Existing Invetory'
          downButton={true}
        />
        <Section
          title='Model 3'
          description='Order Online for Touchless Delivery'
          backgroundImg='model-3.jpg'
          rightBtnText='Custom order'
          leftBtnText='Existing Invetory'
          downButton={true}
        />
        <Section
          title='Model X'
          description='Order Online for Touchless Delivery'
          backgroundImg='model-x.jpg'
          rightBtnText='Custom order'
          leftBtnText='Existing Invetory'
          downButton={true}
        />
        <Section
          title='Lowest Cost Solar Panels in America'
          description='Money-back guarantee'
          backgroundImg='solar-panel.jpg'
          rightBtnText='Order now'
          leftBtnText='Learn more'
          downButton={true}
        />
        <Section
          title='Solar for New Roofs'
          description='Solar Rood Costs Less Than a New Roof Plus Solar Panels'
          backgroundImg='solar-roof.jpg'
          rightBtnText='Order now'
          leftBtnText='Learn more'
          downButton={true}
        />
        <Section
          title='Accessories'
          description=''
          backgroundImg='accessories.jpg'
          leftBtnText='Shop now'
          downButton={false}
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = style.div`
  height: 100vh;
`;
