import './App.css';
import'./TaskcardCSS.css';
import './AddTaskCSS.css';

import TasksList from './Component/TasksList';
import AddComponent from './Component/AddbuttComp';
import {Routes,Route} from 'react-router-dom';
import AddTask from './Component/AddTask';
import backImage from './backGroundImage.jpg';
import toDo from './todo.jpg';
import Filter from './Component/Filter';
import EditTask from './Component/EditTask';
function App() {
  return (
    
    <div className="App" style={{ backgroundImage: `url(${toDo})` }}>
         <div className='title'> <h1>ToDo Application</h1></div>
         <Routes>
            <Route path='/' element={
              <div className='Container' style={{ backgroundImage: `url(${backImage})` }}>
              <div><Filter/></div>
              <div><AddComponent /></div>
              <TasksList/>
              </div>
            }/>
            <Route exact path="/EditTask/:id" element={<EditTask/>}/>
            <Route path='/AddTask' element={<AddTask/>}/>
          </Routes>
    </div>
  
  );
}

export default App;
