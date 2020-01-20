import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Work from "./components/Home/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';


library.add(faEnvelope, faLinkedin, faGithub, faDribbble); 


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
