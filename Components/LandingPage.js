import React, { useState, useEffect } from 'react'
import Clock from 'react-live-clock';
import ReactPlayer from 'react-player';

import styled from 'styled-components';

import Slide from './Slide'

import bg from '../Assets-Copy/kumrat.jpg';

import { MdLocationOn, MdPhotoCamera } from 'react-icons/md'

const LandingPage = () => {
  return (
    <Wrapper
    style={{
        backgroundImage: `url(${bg.src})`,
      }}
     >
         {/* <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' /> */}
        <Container>
            <div>
            <SubHeading>Dream<span style={{
        color: '#24562B', fontWeight: 'bold',
      }} >Pakistan</span></SubHeading>
            <Heading>The Land Of Adventure And Nature.</Heading>
            <Details>From the mighty stretches of the Karakorams in the North to the vast alluvial delta of the Indus River in the South, Pakistan remains a land of high adventure and nature. Trekking, mountaineering, white water rafting, wild boar hunting, mountain and desert jeep safaris, camel and yak safaris, trout fishing and bird watching, are a few activities, which entice the adventure and nature lovers to Pakistan.</Details>
            </div>
            <Button>Discover ></Button>
            <SubContainer>
            <GlassDiv>
                <Details>Your time:</Details>
            <Clock
              format={'h:mm:ssa'}
              style={{fontSize: '1.5em'}}
              ticking={true} />
            </GlassDiv>
            <GlassDiv>
                <Details>Pakistan time:</Details>
            <Clock
              format={'h:mm:ssa'}
              style={{fontSize: '1.5em'}}
              ticking={true}
              timezone={'Asia/Karachi'}
               />
            </GlassDiv>
            </SubContainer>
            <GlassDiv>
                <MdPhotoCamera/> Kumrat, Kpk
            </GlassDiv>
        </Container>

        <CenteredContainer> 
          <Slide />
          {/*  
            <SmallGlassDiv>
                <DateDiv >
                <Date>07/07</Date>
                <Date>09/07</Date>
                </DateDiv>
                <SmallHeading>Shandur Festival</SmallHeading>
                <Details><MdLocationOn/> Chitral, Kpk </Details>
                <Details>Shandur Polo Festival is one of the big festivals in Pakistan.The polo match is played between the teams of Gilgit-Baltistan Districts and Chitral District, is a free style game.</Details>
            </SmallGlassDiv>
          */}
        </CenteredContainer>
    </Wrapper>
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
border-radius: 10px;
padding: 15px;
width: fit-content;
&:hover{
    cursor:pointer;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.5px );
    -webkit-backdrop-filter: blur( 10.5px );
  }
`

const Container = styled.div`
display: flex;
flex-direction: column;
width: 55vw;
justify-content: space-evenly;
padding: 100px 50px 0 50px;

@media (max-width: 768px) {
  width: 100vw;
}
`

const CenteredContainer = styled.div`
display: flex;
flex-direction: column;
width: 55vw;
justify-content: space-evenly;
padding: 100px 50px;
align-items: center;
@media (max-width: 768px) {
  width: 100vw;
}
`

const SubContainer = styled.div`
display: flex;
width: 50%;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
  width: 80vw;
  margin: 20px 0;
}
`

const SubHeading = styled.div`
font-size: 2rem;
color: white;
`

const SmallHeading = styled.h1`
font-size: 1.3rem;
color: white;
`

const Heading = styled.h1`
font-size: 2.6rem;
color: white;
margin: 0;
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

const Button = styled.div`
background: rgba( 201, 198, 198, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3px );
-webkit-backdrop-filter: blur( 3px );
padding: 10px 30px;
border-radius: 25px;
width: fit-content;
font-size: 1.3rem;
text-transform: uppercase;
animation: 0.5s ease-in;

&:hover{
    cursor:pointer;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.5px );
    -webkit-backdrop-filter: blur( 10.5px );
  }
`

export default LandingPage
