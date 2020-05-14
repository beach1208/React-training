import React from 'react';
import './App.css';

function App() {

    const myApp = {
        title: 'Indecision App',
        subtitle: 'Your subtitle come here',
        options: ['One','Two']
    };
    const user = {
        name: 'Andrew',
        age: 16,
        location: 'New York'
    };

    const getLocation = (location) => {
        if(location){
        return <p>Location: {location}</p>
        }
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Infro</h1>
        <p>This is some info</p>
        <ul>
            <li>{user.name ? user.name : 'Unknown'}</li>
            {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
            <li>{getLocation(user.location)}</li>
            {myApp && <p>{myApp.subtitle}</p>}
            <p>{myApp.options.length > 0 ? 'Here are Options': 'No Options'}</p>}
        </ul>
      </header>
    </div>
  );
}

export default App;