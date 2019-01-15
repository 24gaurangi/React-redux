import React  from 'react';
import moment from 'moment';

const SideBar = ({history}) => {

return(
  <div className="sidebar container">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">History</span>
        <ul className="notifications">
        { history && history.map(item => {
          return (
          <li key={item.id}>
            <span className="pink-text">{item.action} </span>
            <span>{item.content}</span>
            <div className="grey-text note-date">{moment(item.time.toDate()).fromNow()}</div>
          </li> )
        })}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default SideBar
