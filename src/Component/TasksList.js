import Button from "@restart/ui/esm/Button";
import React from "react";
//import TaskCard from "./TaskCard";
import {useSelector}  from 'react-redux'
import { Link } from "react-router-dom";
const ListTasks=()=>{
    const tasks = useSelector(state=>state.TaskTodo)
    console.log("tasks",tasks)  
    return(
  
     tasks.map(ele=> <div className='Row'>
            <h2>{ele.description}</h2>
          <Link to={`/EditTask/${ele.id}`}>
           <div> <Button  variant="primary">
              Edit
            </Button></div>
            </Link>
       </div>
      )
     
    );
};
export default ListTasks;