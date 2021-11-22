
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { FilterAct} from "../Actions/addTask-actions";
const Filter=()=>
{ const dispatch= useDispatch();
    return(
        <Form.Group   className="mb-3">
                <Form.Check className="radioLabel1" inline label="Done" name="group1" type="radio" id="1" value='true'onChange={()=>dispatch(FilterAct(true))}/>
                <Form.Check className="radioLabel2" inline label="Not done" name="group1" type="radio" id="2"  value='false'  onChange={()=>dispatch(FilterAct(false))}/>
        </Form.Group>
       
    )
}
export default Filter;
