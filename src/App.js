import logo from './logo.svg';
import './App.css' 
import {Keyboard} from './Keyboard'
import { Screen } from './Screen';
import React from 'react'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={text:''};

    this.addChar=this.addChar.bind(this);
    this.backspace=this.backspace.bind(this);
  }
  addChar(newChar){
    var newText=this.state.text+newChar;
    this.setState({text:newText})
  }
  backspace(){
    debugger
    var newText=this.state.text;
    newText=newText.substring(0,newText.length-1);
    this.setState({text:newText})
  }
render(){
  return (
    <div className="App">
      <Screen id="mainScreen" text={this.state.text}/>
      <Keyboard lenguage='hebrow' addChar={this.addChar} backspace={this.backspace}/>
    </div>
  );
}
}


export default App;
