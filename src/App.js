import React, { useState, Fragment } from 'react';
import './App.css';
import axios from 'axios';

import persondetails from './data/persondetails.json';

import Details from './components/Details';

const App = () => {
  const [data] = useState(persondetails);

  // const api = axios.create({
  //   baseURL: "https://classmarker-app.herokuapp.com/mockData"
  // })

  // api.get("/").then(res => {
  //   console.log(res.data);
  //   setData(res.data);
    
  // })

  return (
    <Fragment>
      <div className="container-fluid text-light bg-dark">
        <div className="container text-center">
          <h2 className="m-5 p-5 font-weight-bold h1">Personal Detail List</h2>
          </div>
      <div className="container px-5">
        <Details data={data} itemsPerPage={20} />
        
      </div>
      </div>
    </Fragment>
  );
}

export default App;
