import React from 'react'

function Mcq({ Data, True }) {
  if (True === true) {
    return (
      <div className="tab-pane fade show active" aria-labelledby={`a${Data._id}-tab`} role="tabpanel" id={`a${Data._id}`}>
        <div className="p-3"><h4>{Data.quesText}</h4></div>

        <div className="list-group" >
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option1}
          </label>
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option2}
          </label>
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option3}
          </label>
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option4}
          </label>
        </div>
        <div className="row p-3" style={{ backgroundColor: "#2F6690", position:"absolute",bottom: "0" ,width:"83.5%"}}>
          <div className="clearfix">
            <button type="button " class="btn btn-primary float-start mx-4">Mark For Review and Next</button>
            <button type="button" class="btn btn-secondary float-start">Clear Response</button>
            <button type="button " class="btn btn-primary float-end">Save And Next</button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="tab-pane fade" aria-labelledby={`a${Data._id}-tab`} role="tabpanel" id={`a${Data._id}`}>
        <div className="p-3"><h4>{Data.quesText}</h4></div>
        <div className="list-group" >
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option1}
          </label>
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option2}
          </label>
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option3}
          </label>
          <label className="list-group-item border my-3">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {Data.option4}
          </label>
        </div>
        <div className="row p-3" style={{ backgroundColor: "#2F6690", position:"absolute",bottom: "0" ,width:"83.5%"}}>
          <div className="clearfix">
            <button type="button " class="btn btn-primary float-start mx-4">Mark For Review and Next</button>
            <button type="button" class="btn btn-secondary float-start">Clear Response</button>
            <button type="button " class="btn btn-primary float-end">Save And Next</button>
          </div>
        </div>
      </div>

    )
  }
}


export default Mcq
