import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from './components/Header';
import Footer from "./components/Footer";


function App() {
  return (
   <main>
     <Header/>
     <Switch>
       <Route path="/" component={Work} exact />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
     </Switch>
     <Footer/>
   </main>
  );
}

export default App;
