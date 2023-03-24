import React,{useState} from 'react';
import "./Todo.css";

const List = (props) => {
    const [open , setOpen] = useState(false);
    const checked = () => {
    setOpen(!open)
    };


  return (
    <div>
         <div className='check' ><input type="checkbox" onClick={checked}/>

      <h3 style={{ textDecoration: open ? "line-through" : "none" }}>{ props.text }</h3>
       </div>
    </div>
  )
}

export default List;
