import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
   <main>
     <Navbar/>
     <Switch>
       <Route path="/" component={Work} exact />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
     </Switch>
   </main>
  );
}

export default App;
