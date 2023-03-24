import React,{useState} from 'react';
import {BiMessageAdd} from "react-icons/bi";
import "./Todo.css";
import List from "./List.js";

const Todo = () => {
    const [data , setData] = useState('');
    const [items , setItems] = useState([]);
    const [toggleBtn , setToggleBtn] = useState(true);
    const [isEditItem , setIsEditItem] = useState(null);
    
    

    const addData = () =>{
      if(!data){
          alert('Please Add Data Before Submit !')
      }else if(data && !toggleBtn){
        setItems(
          items.map((elem) => {
            if(elem.id === isEditItem) {
              return {...elem, name: data}
            }
            return elem;
          })
        )
        setToggleBtn(true);
        setData('');
        setIsEditItem(null);
      }
      else{
        const allInputData = {id : new Date().getTime().toString() , name:data}
        setItems([ ...items, allInputData]);
        setData('');
      }
    }

    const deleteItem = (index) =>{
        const updatedItems = items.filter((elem ) =>{
            return index !== elem.id;
        })
        setItems(updatedItems);
    }

    const editItem = (id)=>{
      let newEditItem = items.find((elem) => {
          return elem.id === id;
      });
     
      setToggleBtn(false);
        setData(newEditItem.name);
        setIsEditItem(id);
     
    };

   

  return (
    <>
      <div className="container">
        <div className="header">
            <h1 className="to-do">TODO LIST</h1>
        </div>
        <div className="input-box">
        
            <input type="text" placeholder=' 📝 🖊️ Add Your Data....'
                value={data}
                onChange={(e) => setData(e.target.value)}
               
              />
            {toggleBtn ? <button className='btn' title='Add items' onClick={addData}> <BiMessageAdd/></button> : <i className="far fa-edit add-btn" title="Update Item" onClick={addData}/>}
            
        </div>
        <div className='todo-items'>
        
        {
            items.map((elem) => {
                return(
                    <div className="each-item" key={elem.id}>
                   
                      <List 
                        text={elem.name}
                      />
               
                <div className="todo-btn">
                <i className="far fa-edit add-btn" title="Edit Item" onClick={ () => editItem(elem.id)}/>
                

              <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={ () => deleteItem(elem.id)}/>
                </div>

                
            </div>
                );
             })
        }
           
            
        </div>
       
         </div>
    </>
  )
}

export default Todo;
