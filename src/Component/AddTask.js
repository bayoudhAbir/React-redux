import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch}  from 'react-redux';
import { addNewTask } from "../Actions/addTask-actions";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddTask=()=>{
    const dispatch= useDispatch();
    const [description,setDescription]=useState();
    const [isDone,setIsDone]= useState();
    const handleChange=event=>{
        event.preventDefault();
        setDescription(event.target.value)
    }
   const  handleRadio=event=>{
        event.preventDefault();
        console.log(event.target.value);
         event.target.value==="true"?setIsDone(true):setIsDone(false)
    }
    const newTask={
        id:uuidv4(),
        description:description,
        isDone:isDone,
    }
    return(
        <Form className="addTaskForm">
            <Form.Group className="mb-3">
                <Form.Label  className="taskLabel">Task description</Form.Label>
                <Form.Control value ={description}className="formTextArea" as="textarea" onChange={handleChange} />
            </Form.Group>
            <Form.Group onChange={handleRadio} className="mb-3">
                <Form.Check className="radioLabel1" inline label="Done" name="group1" type="radio" id="1" value='true'/>
                <Form.Check className="radioLabel2" inline label="Not done" name="group1" type="radio" id="2"  value='false' defaultChecked/>
            </Form.Group>
            <Link to='/'>
            <Button className="addButton" variant="primary" type="submit" onClick={()=>dispatch(addNewTask(newTask))}>
                Add +
            </Button>
            </Link>
             
        </Form>
        
    );
};
export default AddTask;