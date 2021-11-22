import { ADDNEWTASK,FILTERACT,EDITTASK} from "./types"
export const addNewTask =(newTask)=>
{ 
    return{
        type:ADDNEWTASK,
        payload:newTask
    };  

};

export const FilterAct=(isDone)=>{
    return{
        type:FILTERACT,
        payload:isDone
    };

};

export const editTask=(editableTask)=>{
    return{
        type:EDITTASK,
        payload:editableTask
    };
};
