import React from 'react';
import Navbar from './Navbar';

export default function Details({coinData}){
    return(

        < div >
            <Navbar />
          
                <div className='details' >
                                
                <table>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24 hr</th>
                    <th>mkt Cap</th>
                </tr>
                { coinData.map(coin=>(
                <tr key={coin.name}>
               
                    <td>{coin.market_cap_rank}</td>
                    <td><img src={coin.image} alt={coin.name} height='10px' width='10px' /></td>
                    <td>{coin.name}</td>
                    <td>${coin.current_price}</td>
                    <td>{coin.price_change_percentage_24h}%</td>
                    <td>${coin.market_cap}</td>
                   
                </tr>
                   )
                   )
    
                    }
                </table>
                </div>
                 
    
                    
            
        </div>
    )
}