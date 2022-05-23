import React, { useEffect, useState, Component } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { getCatTags } from '../services'

const CatTags = () => {
    const [catTags, setCatTags] = useState([]);

  useEffect(() => {
    getCatTags().then((newCatTags) => setCatTags(newCatTags))
  }, []);

  console.log('catTags: ',catTags);
  return (
    <Carousel>
  {catTags.map((item, index) => (
      <Carousel.Item key={index} >
            <Wrapper
            style={{
              backgroundImage: `url(${item.featuredphoto.url})`,
            }}>
              <VerticalDivider />
              <MainDiv>
                <Heading>{item.category.name}</Heading>
                <Divider />
                <SmallHeading>{item.called}</SmallHeading>
                <Details>{item.desc}</Details>
                <Circle>
                  <ButtonHeading>DISCOVER NOW</ButtonHeading>
                </Circle>
              </MainDiv>
            </Wrapper>
      </Carousel.Item>
        ))}
</Carousel>
  )
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
   height: 100vh;
   max-width: 100vw;
   background-color: #0a0b0d;
   background-size: cover;
   color: white;
   justify-content: center;
   align-items: center;
   overflow-x: hidden;
   padding: 50px;
   position: relative;
   @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`

const MainDiv = styled.div`
   display: flex;
   flex-direction: Column;
   height: fit-content;
   max-width: fit-content;
   padding: 30px;
   background-size: cover;
   color: white;
   overflow: hidden;
   justify-content: center;
   align-items: flex-start;
   @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`

const Heading = styled.h1`
font-size: 4.5rem;
font-weight: 200;
color: white;
margin: 0;
letter-spacing: 0.7rem;
font-family: 'IBM Plex Serif', serif;
cursor: pointer;
@media (max-width: 768px) {
  font-size: 2.7rem;
}
`

const Divider = styled.div`
width: 50%;
height: 1px;
background-color: white;
margin: 0px 0;
`

const VerticalDivider = styled.div`
width: 1px;
height: 80%;
background-color: white;
position: absolute;
left: 30px;
`

const SmallHeading = styled.h1`
font-size: 1.2rem;
color: white;
text-transform: uppercase;
letter-spacing: 0.4rem;
`

const Details = styled.p`
font-size: 1rem;
color: white;
width: 50%;
padding: 10px;
&:hover{
  cursor:pointer;
  background: rgba( 255, 255, 255, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.5px );
  -webkit-backdrop-filter: blur( 10.5px );
  border-radius: 10px;
}
@media (max-width: 768px) {
  width: 100%;
}
`

const Circle = styled.h1`
width: 180px;
height: 180px;
border: 1px solid white;
border-radius: 50%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 200px;
&:hover{
  cursor:pointer;
  background: rgba( 255, 255, 255, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.5px );
  -webkit-backdrop-filter: blur( 10.5px );
  color: green;
}
@media (max-width: 1200px) {
  position: unset;
}
`

const ButtonHeading = styled.h1`
font-size: 1.2rem;
letter-spacing:0.5rem;
`

const Line = styled.div`
height: 400px;
width: 1px;
transform: rotate( 45deg );
color: white;
`

export default CatTags