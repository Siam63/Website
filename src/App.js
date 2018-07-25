import React, { Component } from 'react';
import './App.css';
import pdf from './RESUME_GOOD_PDF.pdf'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Navigation from "./Components/Navigation";

class App extends Component {
  render() {
      // This is a test
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Siam Rahman</h1>
        </header>

          <div className="jumbotron">
              <h1 className="display-4">
                  Hello, and welcome to my website!
              </h1>
              <p className="lead">
                  To learn more about my accomplishments, click the buttons below to view my resume, blog and so on.
              </p>
              <hr className="my-4"/>
                  <p>
                      More information to come!
                  </p>
              <div className={"btnPrimary"}>
                  <a target={"_BLANK"} className="btn btn-primary btn-lg" role="button" onClick={()=>{
                        window.open(pdf, '_BLANK')
                    }}>View Resume
                  </a>
              </div>
              <div className={"btnSecondary"}>
                  <button type="button" className="btn btn-outline-primary" onClick={()=>{
                      window.open('https://siamrahman.wordpress.com/')
                  }}>
                      Visit Blog
                  </button>
                </div>

              <div className={"btnSecondary"}>
                  <button type="button" className="btn btn-outline-primary" onClick={()=>{
                      window.open('https://www.google.com')
                  }}>
                      Redirect to Google
                  </button>
              </div>
            </div>

          <div className="list-group">
              <h3>List:</h3>

              <a href="#" className="list-group-item list-group-item-action" onClick={()=> {
                  window.open('https://www.google.com')
              }}>Projects</a>

              <a href="#" className="list-group-item list-group-item-action" onClick={()=>{
                  window.open('https://www.google.com')
              }}>Motivation</a>

              <a href="#" className="list-group-item list-group-item-action" onClick={()=> {
                  window.open('https://www.google.com')
              }}>Work Habits</a>

              <a href="#" className="list-group-item list-group-item-action" onClick={()=> {
                  window.open('https://www.google.com')
              }}>Stuff</a>
          </div>

          <div className="card">
              <div className="card-header">
                  Quote
              </div>
              <div className="card-body">
                  <blockquote className="blockquote mb-0">
                      <p><i>Work as if you had an interview tomorrow.</i></p>
                      <footer className="blockquote-footer">
                          Siam Rahman 2k18
                      </footer>
                  </blockquote>
              </div>
          </div>

          <BrowserRouter>
              <div>
                  <Navigation/>
                    <Switch>
                      <Route path ="/" component={Home} exact />
                      <Route path ="/about" component={About}/>
                      <Route path ="/contact" component={Contact}/>
                        <Route component={Error}/>
                    </Switch>
              </div>
          </BrowserRouter>
      </div>

    );
  }
}

export default App;
