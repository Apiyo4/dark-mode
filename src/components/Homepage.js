import React from 'react';

import Charts from "./Charts";
import Navbar from "./Navbar";

function Homepage(props){
    
    console.log(props.coinData);
    return(
        <div>
           <Navbar />
           <Charts coinData={props.coinData} />
        </div>
    )
}
export default Homepage;