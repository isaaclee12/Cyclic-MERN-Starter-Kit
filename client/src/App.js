import React, { useEffect, useState } from 'react'
import FeatureOne from './features/FeatureOne';
import FeatureTwo from './features/FeatureTwo';
import NavBar from './features/NavBar';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/Layout';
import APIService from './services/apiService';
import LoginWithDiscord from "./features/auth/LoginWithDiscord";
import { FaDiscord } from "react-icons/fa";


const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const dataToSubmit = {
    title: "Test 1 - EST",
    description: "i", 
    location: "i",
    discordName: "i",
    firstEventStart: "1674957600000",
    firstEventEnd: "1674961200000", 
    lastEventStart: "1674957600000",
    recurring: {
      rate: "noRecurr",
      days: [],
    }
    // groupId: "tycFfLNJW7EPjVeAtWCja",
    // startAt: "2023-01-29T03:00:00.000+00:00",
    // endAt: "2023-01-29T04:00:00.000+00:00",
    // user: "63c87c689a3c012aa8c974c2__v0",    
  }

  const handleSubmit = async async => {
    try {
        // Axios automatically serializes object to JSON
        // https://masteringjs.io/tutorials/axios/post-json
        const response = await APIService.create(dataToSubmit);
        console.log(response);
      } catch (err) {
        console.error(err)
        return
      }
  }

  useEffect(() => {
    console.log("Got data:", data);
  }, [data])

  useEffect(() => {

    setLoading(true);
    // Fetch events from server
    const fetch = async () => {
      // Database data from server
      const response = await APIService.getAll();
      setData(response.data);
    };

    fetch().then(setLoading(false)).catch(setLoading(false));
  }, [])

  // Render nothing while fetching for data from server
  if (loading) return null;

  return (
    <div className="">
      <NavBar/>
      <Layout/>

      <LoginWithDiscord DiscordIcon={FaDiscord} />



      <button onClick={handleSubmit}>Press me to submit data!</button>
      {/* TODO: Figure out how to keep context's state variable without refresh.
      Options include cookies, sessionStorage, or a routingContext like in together
      This should be discussed with the team */}
      <Routes>
        <Route path="/"></Route>
        <Route path="one" element={<FeatureOne/>}></Route>
        <Route path="two" element={<FeatureTwo/>}></Route>
      </Routes>
    </div>
  )
}

export default App