import React from "react";
import {saveEnergy} from "../../assets/node_assets/index"
import { useAuth } from "../../contexts/AuthContext"

const Profile=()=>{

    const { currentUser} = useAuth()

    return(
        <>
          <div className="window_N">
            <div className="W1_N">
                {/* <div>
                <img src={profile}  alt="err" style={{height:"120px", width:"120px" , cursor:"pointer"}} />
                </div> */}
                <h1 className="header-intro_N">
                    Here, you can connect with neighbouring nodes & participate in <span className="color_left_N">Energy Exchange</span>
                    <img src={saveEnergy}  alt="err" className="energy-connect_N"/>
                </h1>
            </div>
            <div className="W2_N">
                <div className="W2_innder_N">
                    Your Wallet_id: {currentUser.walletid}
                </div>
            </div>
          </div>
        </>
    )
}

export default Profile;