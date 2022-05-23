import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


import styled from 'styled-components';

import {festivals} from '../static/Festivals'

import { MdLocationOn} from 'react-icons/md'

const Slide = () => {
  return (
    <Carousel>
  {festivals.map((item, index) => (
      <Carousel.Item key={index} >
            <SmallGlassDiv >
                <DateDiv>
                <Date>{item.startDate}</Date>
                <Date>{item.endDate}</Date>
                </DateDiv>
                <SmallHeading>{item.title}</SmallHeading>
                <Details><MdLocationOn/> {item.region} </Details>
                <Details>{item.desc}</Details>
            </SmallGlassDiv>
            </Carousel.Item>
        ))}
</Carousel>
     )
}

export default Slide;

const SmallGlassDiv = styled.div`
background: rgba( 201, 198, 198, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3px );
-webkit-backdrop-filter: blur( 3px );
border-radius: 10px;
padding: 20px;
width: 250px;
&:hover{
    cursor:pointer;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.5px );
    -webkit-backdrop-filter: blur( 10.5px );
  }
`

const SmallHeading = styled.h1`
font-size: 1.3rem;
color: white;
`

const Details = styled.p`
font-size: 1rem;
color: white;
`

const Date = styled.p`
font-size: 1rem;
color: white;
transform: rotate(45deg);
width: fit-content;
`

const DateDiv = styled.p`
display: flex;
justify-content: space-between;
`
