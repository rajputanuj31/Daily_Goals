import React,{useState} from 'react'
import { BsFillCheckCircleFill,BsFillXCircleFill,BsFillDashCircleFill } from "react-icons/bs";
const Task = ({title,description,deleteTask,index}) => {
    const [mystyle,setMystyle] = useState({
        opacity:1
    })
    const complete=()=>{
        if (mystyle.opacity===1) {
            setMystyle({
                opacity:0.3,
                backgroundColor:'green'
            })
        }
        else{
            setMystyle({
                opacity:1,
                backgroundColor:'white'
            })
        }
    }
    const Incomplete=()=>{
        if (mystyle.opacity===1) {
            setMystyle({
                opacity:0.3,
                backgroundColor:'red'
            })
        }
        else{
            setMystyle({
                opacity:1,
                backgroundColor:'white'
            })
        }
    }
    return (
        <div className='Task' style={mystyle}>
            <div>
                <p>{title}</p>
                <span>{description}</span>
            </div>
            <BsFillCheckCircleFill className='complete' onClick={complete}/>
            <BsFillXCircleFill className='complete' onClick={Incomplete}/>
            <BsFillDashCircleFill className='complete' onClick={()=>deleteTask(index)}/>
        </div>
    )
}

export default Task
