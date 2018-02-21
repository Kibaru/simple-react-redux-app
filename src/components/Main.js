import React from 'react';

const Main = (props) => {
    return (
      <div className="container">
        <h1>This is the main page</h1>
          <button className="btn btn-primary" onClick={() =>props.changeUsername('Kibaru')}>
            Change the Username
          </button>
      </div>
    );
}

export default Main;
