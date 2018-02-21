import React from 'react';

const User = (props) => {
    return (
      <div className="container">
        <h1>The user page</h1>
          <p>Username: {props.username}</p>
      </div>
    );
}

export default User;
