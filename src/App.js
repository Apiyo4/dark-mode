import React, { useState, useEffect } from "react";
import axios from "axios";
import {Route} from 'react-router-dom';

import Details from './components/Details';
import Homepage from './components/Homepage';


 const App = () => {
    const [coinData, setCoinData] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => {
          console.log(res.data)
          setCoinData(res.data)
        })
        .catch(err => console.log(err));
    }, []);
    if (!coinData) return <h3>Loading...</h3>;
    return (
      <div className="App">
        {console.log(coinData)}
        <Route exact path= '/' render={(props)=>{
          return <Homepage {...props} coinData={coinData}/>
        }}  />
        <Route path = '/details'  render = {(props)=>{
          return <Details {...props} coinData= {coinData} />
        }}
        
        />
      </div>
    );
  };
  export default App;