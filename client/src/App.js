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
  const [data, setData] = useState([]);
  
  // Fetch events from server
  const fetchData = async () => {
    // Database data from server
    const response = await APIService.getAllExamples();
    setData(response.data);
  }

  const dataToSubmit = {
    stringField: "Test",
    numberField: 10,
    dateField: new Date()
  }

  const handleSubmit = async () => {
    // Example
    try {
      // Axios automatically serializes object to JSON
      // https://masteringjs.io/tutorials/axios/post-json
      const response = await APIService.createExample(dataToSubmit);
      console.log(response);
    } catch (err) {
      console.error(err)
      return
    }

    // Re-fetch data after addition
    fetchData();
  }

  // Delete data
  const handleDelete = async (event, idToDelete) => {
    try {
      const response = await APIService.deleteExample(idToDelete);
      console.log(response);
    } catch (err) {
      console.error(err)
      return
    }

    // Re-fetch data after delete
    fetchData();
  }

  // See data after it's fetched for debugging purposes
  useEffect(() => {
    console.log("Got data:", data);
  }, [data])

  // Fetch the data on page load, don't set loading to false until data's fetched.
  useEffect(() => {
    setLoading(true);
    fetchData();
    fetch().then(setLoading(false)).catch(setLoading(false));
  }, [])

  // Render nothing while fetching for data from server
  if (loading) return null;

  return (
    <div className="">
      <NavBar />
      <Layout />

      <LoginWithDiscord DiscordIcon={FaDiscord} />

      <button className="mb-10" onClick={handleSubmit}>Press me to submit data!</button>

      <h1>mmmm Data:</h1>
      <div className="ml-10">
        {
          data.map(item =>
            <ul className="list-disc mt-5" key={item._id}>
              <li>{item.stringField}</li>
              <li>{item.numberField}</li>
              <li>{item.dateField}</li>
              <button onClick={(e) => { handleDelete(e, item._id) }}> Delet pls</button>
            </ul>
          )
        }
      </div>

      {/* TODO: Figure out how to keep context's state variable without refresh.
      Options include cookies, sessionStorage, or a routingContext like in together
      This should be discussed with the team */}
      <Routes>
        <Route path="/"></Route>
        <Route path="one" element={<FeatureOne />}></Route>
        <Route path="two" element={<FeatureTwo />}></Route>
      </Routes>
    </div>
  )
}

export default App