import React from 'react'
import Mcq from '../../components/Main/Mcq';
import { useState, useEffect, useLayoutEffect } from 'react';

function Desc({ Data, Resp }) {
  const [minutes, setMinutes] = useState(Data.examTime === undefined ? 0 : Data.examTime);
  const [seconds, setSeconds] = useState(0);

  useLayoutEffect(() => {
    setMinutes(Data.examTime)
  }, [Data])


  useLayoutEffect(() => {
    console.log("Section 2")
  }, [Resp])

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  if (Resp) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item px-4"><h4>Design Facility</h4></li>
              <li className="nav-item "> <h4>{Data.examTitle}</h4></li>
            </ul>
            <h4> {minutes === 0 && seconds === 0
              ? null
              : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            }</h4>
          </div>
        </nav>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {Resp.map((props, index) => {
            if (index === 0) {
              return (
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id={`a${props._id}-tab`} data-bs-toggle="tab" href={`#a${props._id}`} role="tab" aria-controls={`#a${props._id}`} aria-selected="true">{index}</a>
                </li>
              )
            }
            else {
              return (
                <li className="nav-item" role="presentation">
                  <a className="nav-link " id={`a${props._id}-tab`} data-bs-toggle="tab" href={`#a${props._id}`} role="tab" aria-controls={`#a${props._id}`} aria-selected="false">{index}</a>
                </li>
              )
            }
          })}
        </ul>
        <div className="tab-content" id="myTabContent">
          {Resp.map((props, index) => {
            if (index === 0) {
              return (
                <Mcq Data={props} True={true} />
              )
            }
            else {
              return (
                <Mcq Data={props} True={false} />
              )
            }
          })}
          </div>
      </>
    )
  }
  else {
    return (
      <></>
    )
  }
}

export default Desc

