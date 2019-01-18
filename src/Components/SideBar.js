import React  from 'react';
import moment from 'moment';

const SideBar = ({history}) => {

return(
  <div className="sidebar">
        <ul className="notifications">
        { history && history.map(item => {
          return (
          <li key={item.id}>
            <span className="purple-text text-lighten-1">{item.action} </span>
            <span>{item.content}</span>
            <div className="grey-text note-date">{moment(item.time.toDate()).fromNow()}</div>
          </li> )
        })}
        </ul>
      </div>
  )
}

export default SideBar
