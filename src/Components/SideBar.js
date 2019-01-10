import React, { Component } from 'react';

class SideBar extends Component {

render(){
  // const todoList = this.state.todos.length ? (this.state.todos.map(todo => {
  //   return(
  //       <div className="collection-item" key={todo.id}>
  //         <span>{todo.content}</span>
  //       </div>
  //   )
  // })) : (<p className=" center">You have no items left! </p>)
  // console.log("delete history prop",this.props.deleteHistory)
  return(
      <div className="sidebar container">
        <div className="blue-text center"><h5>Notifications</h5></div>
          <ul>
          <li><h6 className="red-text" >{this.props.deleteHistory}</h6></li>
        </ul>
      </div>
  )
}
}
export default SideBar
