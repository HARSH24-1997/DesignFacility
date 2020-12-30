import React,{useEffect,useState} from 'react'
import Axios from 'axios';
import Section from '../../components/Main/Section';
import QuestionLeft from '../../components/Main/QuestionLeft';
import Desc from '../../components/Main/Desc';
import Mcq from '../../components/Main/Mcq';


function Index() {

    const [secCount, setSecCount] = useState(0);
    const [respData, setRespData] = useState([]);
    const [resp, setResp] = useState([]);
    const [descData, setDescData] = useState({});
    const [value, setValue] = useState(0);

    useEffect(() => {
        Axios.get("http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/Harsh")
        .then((resp)=>{
            setSecCount(resp.data.exam.sections.length);
            setRespData(resp.data.exam.sections[0].Section1);
            setResp(resp.data.exam.sections);
            
            let obj = {
                examTime:parseInt(resp.data.exam.examDurationInMinutes),
                examTitle:resp.data.exam.examTitle
            }
            
            setDescData(obj);
        })
        .catch((err)=>{
            console.error(err);
        })
    }, [])

    const funValue = (temp)=>{
        if(temp===0){
            setRespData(resp[0].Section1)
        }
        else if(temp==1){
            setRespData(resp[1].Section2)
        }
        else {
            setRespData(resp[2].Section3)
        }
    }


    return (
        <div className="container-fluid" >
            <div className="row" style={{ height: "100vh", width: "100vw" }}>
                <div className="col-10">
                    <Desc Data={descData} Resp={respData}/>
                </div>
                <div className="col-2 px-0" style={{borderLeft:"2px solid #81A2BB"}} >
                    <QuestionLeft />
                    <Section SecCount={secCount} funValue={funValue}/>
                        <center><a class="btn btn-outline-secondary btn-block btn-lg " href="#" >Submit Exam</a></center>
                </div>
            </div>
        </div>
    )
}

export default Index
