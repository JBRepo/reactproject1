import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Add from './Add';
import List from './List';
import data from './input.json';

class Main extends React.Component{    
    constructor(props){
      super(props);              
      this.state = {elementList : [], elementTypes : data["elementTypes"]}; 
      this.addToListArray = this.addToListArray.bind(this);  
    }

    addToListArray(param1){
      var elementListl = this.state.elementList;
      elementListl.push(param1)
      this.setState({elementList:elementListl});        
    }

    render(){
      return (
        <div>
          <Switch>
      <Route exact path='/AddElement' render={() => <Add elementList={this.addToListArray} />} />
            <Route exact path='/ListElement' render={() => <List eventTypes = {this.state.elementTypes} elementList={this.state.elementList} />}/>            
          </Switch>        
        </div>
      );
    }
  }

  export default Main;