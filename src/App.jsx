import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route> 
                <Route exact path="/home" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default App;
