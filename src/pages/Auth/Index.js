import React from 'react'
import { useHistory } from 'react-router-dom'

function Index() {
    let history = useHistory();
    const Routing = ()=>{
        history.push("/Test");
    }
    return (
    <div class="py-5 text-center" >
    <div class="container">
      <div class="row">
        <div class="bg-white p-5 mx-auto col-md-8 col-10 border my-auto">
          <h3 class="display-3">Welcome</h3>
          <p class="mb-3 lead">Click On Start to Begin Your Exam</p>
          <p class="mb-4">Pls Note Once Click you have to complete your Exam in one go</p> <a class="btn btn-outline-primary" onClick={Routing}>Start</a>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Index
