import {ADDNEWTASK,FILTERACT,EDITTASK} from '../Actions/types'
import { v4 as uuidv4 } from 'uuid';
let initState =[
    {
        id:uuidv4(),
        description:'to build an application',
        isDone:true,

    },
    {
        id:uuidv4(),
        description:'add new component',
        isDone: false,
    },
    {
        id:uuidv4(),
        description:'add task4',
        isDone: false,
    },
    {
        id:uuidv4(),
        description:'add task2',
        isDone: false,
    }

]
let tab;
const TaskReducer =(state=initState,action)=>{
    switch(action.type)
    { case ADDNEWTASK:
        return state.concat(action.payload)
      case FILTERACT:
        return state.filter(state =>state.isDone===action.payload)
          
       case EDITTASK:
        return state.map(e=>e.id===action.payload.id?action.payload:e)
      default: 
        return state
    }
   
}
export default TaskReducer