import React from 'react'
import '../App.css'

const styles = {
    color: "pink",
    fontSize: 20,
    backgroundColor: "maroon"
}

const ToDoList = ( ) => (
    <div className="todo-item">
    {/* <input type = "checkbox" /> <p style = {styles} >Go shopping</p>
    <input type = "checkbox"/> <p style = {{color: "pink", fontSize: 24, backgroundColor: "maroon"}}>Cook</p> */}
    <input type = "checkbox"/> <p>Fly to Nairobi</p>
    </div>

)

export default ToDoList;