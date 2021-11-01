import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Footer from './Components/Footer';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";
function App() {
  return (
    <Router>
    <NavBar/>
    <Switch>
    <Route component={Home} path="/" exact />
    <Route component={About} path="/about" />
    <Route component={SinglePost} path="/post/:slug" />
    <Route component={Post} path="/post" />
    <Route component={Project} path="/project" />
    </Switch>
    <Footer/>
    </Router>
  )
}

export default App;
