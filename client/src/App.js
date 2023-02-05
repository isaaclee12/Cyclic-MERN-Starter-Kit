import React, { useEffect, useState } from 'react'
import FeatureOne from './features/FeatureOne';
import FeatureTwo from './features/FeatureTwo';
import NavBar from './features/NavBar';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/Layout';
import APIService from './services/apiService';
import MainPage from 'features/MainPage';


const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState([]);

  // Fetch events from server
  const fetchData = async () => {
    // Database data from server
    const response = await APIService.getAllExamples();
    setData(response.data);
  }
  
  // Fetch the data on page load, don't set loading to false until data's fetched.
  useEffect(() => {
    setLoading(true);
    fetchData()
    .then(setLoading(false)).catch(setLoading(false));
  }, [])


  /* Handle Data Changes */
  const handleChangeInForm = (e) => {
    // Set the target state to the new form field value
    const {name, value} = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  /* Data Submission */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example
    try {
      // Axios automatically serializes object to JSON
      // https://masteringjs.io/tutorials/axios/post-json
      const response = await APIService.createExample(formData);
    } catch (err) {
      return
    }

    // Re-fetch data after addition
    fetchData();
  }

  /* Data Deletion */
  const handleDelete = async (event, idToDelete) => {
    try {
      const response = await APIService.deleteExample(idToDelete);
    } catch (err) {
      return
    }

    // Re-fetch data after delete
    fetchData();
  }

  // Render nothing while fetching for data from server
  if (loading) return null;

  return (
    <div className="">
      <NavBar />

      <main className="mx-[10%] text-center flex flex-col justify-center">
        <Layout />

        <Routes>
          <Route index element={<MainPage/ >}></Route>
          <Route path="one" element={<FeatureOne />}></Route>
          <Route path="two" element={<FeatureTwo />}></Route>
        </Routes>

        <form className="mx-[20%] mt-10 px-[5%] border-2">
          <div className="mt-10 overflow-auto">
            <label className="float-left">String Field:</label>
            <input type="text" name="stringField" onChange={(e) => handleChangeInForm(e)} className="border-2 float-right" />
          </div>

          <div className="mt-10 overflow-auto">
            <label className="float-left">Number Field:</label>
            <input type="text" name="numberField" onChange={(e) => handleChangeInForm(e)} className="border-2 float-right" />
          </div>

          <div className="mt-10 overflow-auto">
            <label className="float-left">Date Field:</label>
            <input type="date" name="dateField" onChange={(e) => handleChangeInForm(e)} className="border-2 float-right" />
          </div>

          <button className="my-10" onClick={(e) => handleSubmit(e)}>Press me to submit data!</button>
        </form>

        <h1 className="mt-20">Here is your Data:</h1>
        <div className="mx-[20%] mb-20">
          { data?.map(item =>
              <ul className="my-10" key={item._id}>
                <li>stringField: {item.stringField}</li>
                <li>numberField: {item.numberField}</li>
                <li>dateField: {item.dateField.substring(0,10)}</li>
                <button onClick={(e) => { handleDelete(e, item._id) }}> Delete Me!</button>
              </ul>
            )
          }
        </div>
      </main>

    </div>
  )
}

export default App