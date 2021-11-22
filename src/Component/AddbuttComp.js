import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const addComponent=()=>{

    return(
        <div className="mb-2">
      <Link to='/AddTask'>
          <Button classeName="addButton1" variant="primary">
              Add new task
          </Button>
     </Link>
     </div>
    );
}
export default addComponent;