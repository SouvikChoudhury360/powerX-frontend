import React, {useEffect, useState} from "react";
import {buy_pic, sell_pic} from "../../assets/profile_assets/index"

const Stats=()=>{

  const API_BASE = "http://localhost:5500";
  
  const [buy, setBuy] = useState(0);
  const [sell, setSell] = useState(0);

  // console.log("stats")
  
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(API_BASE + '/transactions_buy');
      const response2 = await fetch(API_BASE + '/transactions_sell');
      const data = await response.json();
      const data2 = await response2.json();
      setBuy(data.amt);
      setSell(data2.amt);
    };

    fetchData();

}, []);

    return (
        <>
          <div className="statistics_p">
            <div className="stat-details-outer">
                <img src={buy_pic} className="stats-img-P" alt=""/>
                <h2 className="total_P">Total Buy</h2>
                <h3 className="total_value_P">{buy} KWh</h3>
            </div>
            <div className="stat-details-outer">
              <img src={sell_pic} className="stats-img-P"  alt=""/>
                <h2 className="total_P">Total Sold</h2>
                <h3 className="total_value_P">{sell} KWh</h3>
            </div>
          </div>
        </>
    );
};

export default Stats;