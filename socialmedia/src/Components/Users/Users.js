import React, { useState, useEffect } from 'react';
import DATA from '../../user.json';
import './Users.css'


function Users() {
 return (
  <div className="user-container">
   {DATA.map((user) => {
    return (
     <div key={user.id} className="user">
      <img src={user.image} alt={user.id} className="user-image" />
      <div className="user-info">
       <p className="user-name">{user.firstName} {user.lastName}</p>
       <p className="user-email">{user.email}</p>
      </div>
     </div>
    );
   })}
  </div>
 );
}

export default Users;
