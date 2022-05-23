import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'

import ReactPlayer from 'react-player';

import styled from 'styled-components';

const WhyPakistan = () => {
  return (
    <Wrapper>
        <Container>
            <Heading>Why visit Pakistan?</Heading>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><SubHeading>1. It’s the best time to visit Pakistan</SubHeading></Accordion.Header>
    <Accordion.Body>
    <Details>
            Towards the end of last year, Condé Nast astounded many travellers all over the world when it crowned Pakistan as its number one destination for 2021: “this is a place of exquisite landscapes, where green spaces are overlooked by towering mountains,” they said. While there are still things to consider when travelling to the country, travel advisories have been softened, and after almost two decades, tourism is once again being promoted to Pakistan. 
            </Details>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><SubHeading>2. Pakistan is adventure’s best-kept secret</SubHeading></Accordion.Header>
    <Accordion.Body>
    <Details>
    In June of 2018, CNN Travel published an article showcasing Pakistan as adventure’s best-kept secret. It sparked a storm in the country’s local media, and the story went viral, friends who were up north at the time told me that residents in the remotest of Pakistani villages were sharing it.
    </Details>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
  <Accordion.Header><SubHeading>3. Friendly and hospitable locals</SubHeading></Accordion.Header>
  <Accordion.Body>
    <Details>
    Being hospitable is embedded in Pakistani culture; there’s no real concept of a formal invitation; you are simply welcome. People call on one another at home without a prior meeting, shopkeepers will ask you to have chai with them while you go through endless blocks of fabric, and if you’re travelling to the country, you will be embraced with open arms.
    </Details>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </Container>
        <Container>
            <ReactPlayer url='https://www.youtube.com/watch?v=AeSadjRblyM' width="100%" height="100%" />
            <Details></Details>
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
   display: flex;
   position: relative;
   flex-direction: row;
   height: 100vh;
   max-width: 100vw;
   color: white;
   overflow-x: hidden;
   @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`

const GlassDiv = styled.div`
background: rgba( 201, 198, 198, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3px );
-webkit-backdrop-filter: blur( 3px );
width: 100vw;
height: 150px;
position: absolute;
top: -75px;
z-index: 10;
background-image: linear-gradient(to bottom, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.5)
100%);
`

const Container = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
justify-content: center;
padding: 100px 50px 0 50px;

@media (max-width: 768px) {
  width: 100vw;
}
`

const Heading = styled.h1`
font-size: 2.6rem;
color: white;
margin: 1rem;
`

const SubHeading = styled.div`
font-size: 1.7rem;
color: #09203f;
`

const Details = styled.p`
font-size: 1rem;
color: gray;
margin: 1rem;
`

export default WhyPakistan