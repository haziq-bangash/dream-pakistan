import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import styled from 'styled-components';

import DpLogo from '../Assets/DreamPakistan.png';
import Navbar from 'react-bootstrap/Navbar'
import Sidebar from './Sidebar'

import { GiHamburgerMenu } from 'react-icons/gi';
  import { BiTrendingUp, BiSearch } from 'react-icons/bi'
  import { BsPersonPlus, BsThreeDots } from 'react-icons/bs'

const Menubar = () => {
  return (
     <>
    <Wrapper>
        <LogoContainer>
            <Logo><Image src={DpLogo} alt="DreamPakistan logo" /></Logo>
        </LogoContainer>

        <IconsContainer>
            <NavIcon >
                < BiSearch />
            </NavIcon>
            <NavIcon >
                < GiHamburgerMenu />
            </NavIcon>
        </IconsContainer>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
   height: 60px;
   width: 100vw;
   padding: 1rem 1rem;
   position: fixed;
   top: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   z-index: 100;
   background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
`

const Logo = styled.div`
width: 10%;
object-fit: contain;
margin-left: 1.5rem;
@media (max-width: 400px) {
   width: 50%;
 }
`

const LogoWriting = styled.div`
   font-size: 2.5rem;
   color: red;
   font-weight: bold;
   margin: 0 1rem;
`

const LogoContainer = styled.div`
   padding: 0 2rem;
   display: flex;
   align-items: center;
   cursor: pointer;
`

const IconsContainer = styled.div`
   padding: 0 2rem;
   display: flex;
`

const NavIcon = styled.div`
   font-size: 2rem;
   padding: 0.5rem;
   margin: 0 1rem;
   display: grid;
   place-items: center;
   color: white;

   &:hover{
       border-radius: 50%;
       background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 16px );
-webkit-backdrop-filter: blur( 16px );
   }
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
   font-size: 1.3rem;
   font-weight: 500;
   border-radius: 0.5rem;
   margin-bottom : 1.5rem;
   height: 4rem;

   &:hover {
       background-color: #141519;
   }
`

const NavTitle = styled.div`
   font-size: 1.25rem;
   font-weight: 500;
`


export default Menubar