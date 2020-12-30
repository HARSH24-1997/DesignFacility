import React from 'react'

function QuestionLeft() {
    return (
        <div style={{height:"40vh"}} className="p-0">
              <div class="row mx-0 py-2">
                <div class="col-lg-2 col-3"> <img class="img-fluid d-block rounded-circle align-self-center" style={{height:"25px",width:"25px"}} src="https://static.pingendo.com/img-placeholder-2.svg"/> </div>
                <div class="col-lg-10 col-9 d-flex align-items-center" >
                  <p >Harsh Rajput</p>
                </div>
              </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item border-0 "> <span className="dot" style={{backgroundColor:"#4D5358"}}><center>4</center></span> Question Not Visited</li>
            <li class="list-group-item border-0 "> <span className="dot" style={{backgroundColor:"#F2C4C4"}}><center>4</center></span> Question Not Ans.</li>
            <li class="list-group-item border-0 "> <span className="dot" style={{backgroundColor:"#2CB927"}}><center>4</center></span> Question Ans.</li>
            <li class="list-group-item border-0 "> <span className="dot"><center>4</center></span> Question Ans. & Marked</li>
            <li class="list-group-item border-0 "> <span className="dot" style={{backgroundColor:"#A4A82C"}}><center>4</center></span> Question Marked for Review </li>
          </ul>
        </div>
    )
}

export default QuestionLeft
