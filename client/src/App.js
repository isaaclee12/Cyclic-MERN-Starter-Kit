import React from 'react'
import FeatureOne from './features/FeatureOne';
import FeatureTwo from './features/FeatureTwo';
import NavBar from './features/NavBar';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/Layout';

const App = () => {
  return (
    <div className="">
      <NavBar/>
      <Layout/>
      {/* TODO: Figure out how to keep context's state variable without refresh.
      Options include cookies, sessionStorage, or a routingContext like in together
      This should be discussed with the team */}
      <Routes>
        {/* <Route index element={}></Route> */}
        <Route path="one" element={<FeatureOne/>}></Route>
        <Route path="two" element={<FeatureTwo/>}></Route>
      </Routes>
    </div>
  )
}

export default App