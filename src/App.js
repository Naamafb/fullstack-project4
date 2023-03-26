import logo from './logo.svg';
import './App.css' 
import {Keyboard} from './Keyboard'
import { Screen } from './Screen';
import { StyleClass } from './StyleClass';
import { Text } from './Text';
import {StylingButtons} from './StylingButtons'
import React from 'react'


class App extends React.Component {
  constructor(props){
    super(props);
    this.styleClass=new StyleClass()
    this.state={text:[],
      styleText:this.styleClass.returnObject()
    };

    this.addChar=this.addChar.bind(this);
    this.backspace=this.backspace.bind(this);
    this.changeFontSize=this.changeFontSize.bind(this);
    this.changeColor=this.changeColor.bind(this);
  }
  addChar(newChar){
    var spanChar=<Text text={newChar} styleObject={this.state.styleText}/>
    this.state.text.push(spanChar);
    this.setState({text:this.state.text})
  }
  backspace(){
    this.state.text.pop();
    this.setState({text:this.state.text})
  }
  changeFontSize(size){
    this.styleClass.FontSize=size;
    this.setState({styleText:this.styleClass.returnObject()})
  }
  changeColor(color){
    debugger
    this.styleClass.Color=color;
    this.setState({styleText:this.styleClass.returnObject()})
  }
  changeFont(font){
    debugger
    this.styleClass.FontFamily=font;
    this.setState({styleText:this.styleClass.returnObject()})
  }
render(){
  return (
    <div className="App">
      <Screen id="mainScreen" text={this.state.text}/>
      <StylingButtons  changeFontSize={this.changeFontSize} changeColor={this.changeColor} changeFont={this.changeFont}/>
      <Keyboard lenguage='hebrow' addChar={this.addChar} backspace={this.backspace}/>
    </div>
  );
}
}


export default App;
