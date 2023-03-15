import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from "./component/AppNavigator";
import ColorScreen from "./containers/ColorScreen";

export default function App() {
  return (
      <Router>
         <AppNavigator/>
         <Route exact path="/ColorScreen/:color" component={ColorScreen}/>
      </Router> 
        
  )
}