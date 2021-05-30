import React from 'react';
import styled from "styled-components"
import {Section} from "../";

const Home = () => {
   return (
      <Container>
         <Section
            title={"Model S"}
            description={"Order Online For Touchless Delivery"}
            backgroundImage={"model-s.jpg"}
            leftButtonText={"Custom Order"}
            rightButtonText={"Existing Inventory"}
         />
         <Section
            title={"Model Y"}
            description={"Order Online For Touchless Delivery"}
            backgroundImage={"model-y.jpg"}
            leftButtonText={"Custom Order"}
            rightButtonText={"Existing Inventory"}
         />
         <Section
            title={"Model 3"}
            description={"Order Online For Touchless Delivery"}
            backgroundImage={"model-3.jpg"}
            leftButtonText={"Custom Order"}
            rightButtonText={"Existing Inventory"}
         />
         <Section
            title={"Model X"}
            description={"Order Online For Touchless Delivery"}
            backgroundImage={"model-x.jpg"}
            leftButtonText={"Custom Order"}
            rightButtonText={"Existing Inventory"}
         />
         <Section
            title={"Lowest Cost Solar Panels in America"}
            description={"Money-back guarantee"}
            backgroundImage={"solar-panel.jpg"}
            leftButtonText={"Order Now"}
            rightButtonText={"Learn More"}
         />
         <Section
            title={"Solar for New Roofs"}
            description={"Solar Roof Costs Less Than a New Roof Plus Solar Panels"}
            backgroundImage={"solar-roof.jpg"}
            leftButtonText={"Order Now"}
            rightButtonText={"Learn More"}
         />
         <Section
            title={"Accessories"}
            description={""}
            backgroundImage={"accessories.jpg"}
            leftButtonText={"Shop Now"}
         />
      </Container>
   )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`
