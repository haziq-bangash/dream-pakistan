import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DpLogo from '../Assets/DreamPakistan.png';
import { getCategories } from '../services';

import styled from 'styled-components';

import { MdLocationOn, MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi';


const Sidebar = () => {

    const [categories, setCategories] = useState([]);
    const [showMe, setShowMe] = useState(false);
    function toggle(){
    setShowMe(!showMe); }

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, []);

  console.log(categories);

  return (
     <>
     <NavIcon aria-label='Open Menu' onClick={toggle} >
           < GiHamburgerMenu />
      </NavIcon>
    <Wrapper style={{display: showMe?"block":"none"}} >
    <LogoContainer>
            <Logo><Image src={DpLogo} alt="DreamPakistan logo" /></Logo>
        </LogoContainer>
       <NavItemsContainer>
       {categories.map((category, index) => (
          
          <NavItem key={index} >
                <NavIcon>
                   <MdLocationOn />
                </NavIcon>
                <NavTitle>{category.name}</NavTitle>
          </NavItem>
         
      ))}      
       </NavItemsContainer>
    </Wrapper>
    </>
  )
}



const Wrapper = styled.div`
width: 95vw;
padding: 0 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow-x: hidden ;
   z-index: 100000;
   background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
`

const LogoContainer = styled.div`
   margin: 1.5rem 0;
`

const Logo = styled.div`
   width: 100px;
   object-fit: contain;
   margin-left: 1.5rem;
   margin-top: 2rem;
`

const NavItemsContainer = styled.div`
   margin-top: 2rem;

   &:hover {
       cursor: pointer;
       
   }
`

const NavItem = styled.div`
   display: flex;
   align-items: center;
   font-size: 1rem;
   font-weight: 300;
   border-radius: 0.5rem;
   margin-bottom : 1.5rem;
   height: 4rem;

   &:hover {
       border-radius: 10px;
       background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 16px );
-webkit-backdrop-filter: blur( 16px );
   }
`

const NavIcon = styled.div`
font-size: 2rem;
padding: 0.7rem;
margin: 0 1rem;
display: grid;
place-items: center;
color: white;

&:hover{
    border-radius: 10px;
    background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 16px );
-webkit-backdrop-filter: blur( 16px );
}
`

const NavTitle = styled.div`
   font-size: 1.25rem;
   font-weight: 500;
`

export default Sidebar
