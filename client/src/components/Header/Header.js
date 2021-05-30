import React, {useState} from 'react';
import styled from "styled-components";
import {Close, Menu} from "@material-ui/icons";
import {selectCars} from "../../features/car/carSlice";
import {useSelector} from "react-redux";

const Header = () => {
   const [burgerStatus, setBurgerStatus] = useState(false)
   const cars = useSelector(selectCars)

   return (
      <Container>
         <a href="#"><img src="/images/logo.svg" alt=""/></a>
         <MiddleMenu>
            {cars && cars.map((car, index) => (
               <a key={index} href="#">{car}</a>
            ))}
         </MiddleMenu>
         <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true)}/>
         </RightMenu>
         <BurgerNav show={burgerStatus}>
            <CloseWrapper>
               <CustomClose onClick={() => setBurgerStatus(false)}/>
            </CloseWrapper>
            {cars && cars.map((car, index) => (
               <li><a key={index} href="#">{car}</a></li>
            ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadaster</a></li>
         </BurgerNav>
      </Container>
   )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const MiddleMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
  }
`

const CustomMenu = styled(Menu)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? "translateX(0)" : " translateX(100%)"};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(Close)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
