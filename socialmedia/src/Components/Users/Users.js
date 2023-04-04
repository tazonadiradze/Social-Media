import React, { useState } from 'react';
import DATA from '../../user.json';
import './Users.css';
import Like from '../Like/Like';

function Users() {
 const [id, setId] = useState(1);

 const handleClick = () => {
  setId(id + 1);
 };

 return (
  <div className="user-container">
   {DATA.map((user) => {
    if (user.id === id) {
     const { firstName, lastName, age, eyeColor, image, id } = user;
     return (
      <div key={id}>
       {firstName} {lastName}
       <br />
       age: {age}
       <br />
       eye color: {eyeColor}
       <br />
       <img src={image} alt={`${firstName}-${lastName}`} />
       <br />
       <Like />
       <button onClick={handleClick}>show me next</button>
      </div>
     );
    } else {
     return null;
    }
   })}
  </div>
 );
}

export default Users;
