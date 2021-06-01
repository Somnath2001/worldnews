import React,{useState} from "react";
import {
    Input,
    InputGroupAddon,
    Button,

} from "reactstrap";

const Inputform = ({search}) => {
const[text ,setText] = useState("");

const handleChange = (e) => {
    setText(e.target.value);
    search(text)
}


  const callSearch = (e) => {
    e.preventDefault();
    search(text)
    
  };

return(
<div>
  
  <Input
placeholder="Enter the Title of News"
onChange={handleChange}
search={(text) => setText(text)}
style={{background:"#CAD5E2"}}/>
<InputGroupAddon addonType="prepend">
    <Button
    color="primary"
     type="submit"
    onClick={callSearch}
    >Search</Button>

</InputGroupAddon>


</div>

    )
}

export default Inputform;
