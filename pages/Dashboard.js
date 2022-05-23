import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { LandingPage, Menubar, WhyPakistan, Provinces, CatTags } from '../Components/index'

import { getCategories, getCatTags } from '../services';


import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, []);

  console.log(categories);

  return (
    <Wrapper>
        <Menubar />
       <LandingPage />
       <WhyPakistan />
       <Sidebar />
       <CatTags />
    </Wrapper>
  )
}

const Wrapper = styled.div`
   color: white;
   background-color: #537895;
background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
`

export default Dashboard