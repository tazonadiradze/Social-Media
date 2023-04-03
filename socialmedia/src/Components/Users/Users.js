import React, { useState, useEffect } from 'react';
import DATA from '../../user.json';
import './Users.css'
import Like from '../Like/Like';



function Users() {
 const [id, setId] = useState(1)

 const handleClick = () => {
  setId(id + 1)
 }

 return (
  <div className="user-container">
   {DATA.map((user) => {
    if (user.id === id) {
     return (
      <div key={user.id} >
       {user.firstName}
       {user.lastName}
       age: {user.age}
       eye color : {user.eyeColor}
       {<img src={user.image} alt={user.id} />}
       <Like />

       <button onClick={handleClick}>show me next </button>
      </div>
     )
    } else {
     return
    }
   })}
  </div >
 );
}

export default Users;
