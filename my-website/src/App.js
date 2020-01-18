import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Contact } from "./components/Contact";


function App() {
  return (
   <main>
     <Switch>
       <Route path="/" component={Work} exact />
       <Route path="/about" component={About} />
       <Route path="/shop" component={Contact} />
     </Switch>
   </main>
  );
}

export default App;
