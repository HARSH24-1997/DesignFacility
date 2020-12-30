import React,{useEffect} from 'react'
import times from 'lodash/times';
import _ from "lodash";
import "./Main.css"


function Section({ SecCount , funValue}) {

    const changeSection = (temp) =>{
        funValue(temp);
    }


    return (
        <div style={{ height: "50vh" }}>
            <div className="text-center py-2" style={{ backgroundColor: "#62B6CB" }}>
                <h5><b>Name Of Sections</b></h5>
            </div>
            <div className="py-1 px-2">
                <p>Choose a Section:</p>
                <div className=" d-flex justify-content-around flex-row">
                {[...Array(SecCount)].map((props,i)=>{
                    
                    return (
                        <span className="dot" key={i} onClick={()=>changeSection(i)} ><center>{i}</center></span>
                    )
                  
                })}
                  </div>
            </div>
        </div>
    )
}

export default Section
