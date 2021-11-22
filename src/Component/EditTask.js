import react,{ useState,useEffect}from 'react'
import { useParams,Link} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { editTask } from '../Actions/addTask-actions';
const EditTask=()=>{
    const [tab, setTab] = useState("");
    //const [description,setDescription]=useState();
    const dispatch= useDispatch();
    let { id } = useParams();
    const tasks = useSelector(state=>state.TaskTodo)
    useEffect(() => {
    const results =tasks.find(el=>el.id===id);
    setTab(results);
    },[id,tasks]);
    console.log("tab",tab)
    const handleChange=(e)=>{
        setTab({...tab,description:e.target.value})
    }
     const editableTask={
        id:tab.id,
        description:tab.description,  
        isDone: tab.isDone
        
    }
    const handleRadio =(e)=>{
        setTab({...tab,isDone:Boolean(e.target.value)})
        
    }
   console.log("editableTask",editableTask)
    if(tab){
        
        return (
            <div>
            <Form className="addTaskForm">
                <Form.Group className="mb-3">
                    <Form.Label  className="taskLabel">Task description</Form.Label>
                    <Form.Control value={tab.description}className="formTextArea" as="textarea" onChange={handleChange}/>
                </Form.Group>
                
                <Form.Group onChange={handleRadio} className="mb-3">
                    <Form.Check className="radioLabel1" inline label="Done" name="group1" type="radio" id="1" value='true' checked={tab.isDone} />
                    <Form.Check className="radioLabel2" inline label="Not done" name="group1" type="radio" id="2" value='false'checked={!tab.isDone}/>
                </Form.Group>
                <Link to='/'>
                <Button  onClick={()=>dispatch(editTask(editableTask))}> Edit </Button>
                </Link>
                </Form>
            </div>
        )
    }
  else{ return null}
    
};
export default EditTask