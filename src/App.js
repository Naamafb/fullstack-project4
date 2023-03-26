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
    this.saveHistory=[]
    this.state={text:[],
      styleText:this.styleClass.returnObject(),
    };
    this.saveHistory.push({...this.state})

    this.addChar=this.addChar.bind(this);
    this.backspace=this.backspace.bind(this);
    this.changeFontSize=this.changeFontSize.bind(this);
    this.changeColor=this.changeColor.bind(this);
    this.changeFont=this.changeFont.bind(this);
    this.clearAll=this.clearAll.bind(this);
    this.upperAll=this.upperAll.bind(this);
    this.lowerAll=this.lowerAll.bind(this);
    this.undo=this.undo.bind(this);

  }
  addChar(newChar){
    var spanChar=<Text text={newChar} styleObject={this.state.styleText}/>
    this.state.text.push(spanChar);
    this.setState({text:this.state.text})
    this.saveHistory.push({text:[...this.state.text], styleText:{...this.state.styleText}})
  }
  backspace(){
    this.state.text.pop();
    this.setState({text:this.state.text})
    this.saveHistory.push({...this.state})
    }
  clearAll(){
    this.setState({text:[]})
    this.saveHistory.push({...this.state})
    }
  upperAll(){
    debugger
    const newText=this.state.text.map(charSpan=>(<Text text={charSpan.props.text.toUpperCase()} styleObject={charSpan.props.styleObject}/>));
    this.setState({text:newText})
    this.saveHistory.push({...this.state})
    }
  lowerAll(){
    const newText=this.state.text.map(charSpan=>(<Text text={charSpan.props.text.toLowerCase()} styleObject={charSpan.props.styleObject}/>));
    this.setState({text:newText})
    this.saveHistory.push({...this.state})

  }
  undo(){
    debugger
    this.saveHistory.pop()
    var prevState=this.saveHistory.pop()
    this.setState(prevState)
    
  }
  changeFontSize(size){
    this.styleClass.FontSize=size;
    this.setState({styleText:this.styleClass.returnObject()})
    this.saveHistory.push({...this.state})
  }
  changeColor(color){
    debugger
    this.styleClass.Color=color;
    this.setState({styleText:this.styleClass.returnObject()})
    this.saveHistory.push({...this.state})  
  }
  changeFont(font){
    debugger
    this.styleClass.FontFamily=font;
    this.setState({styleText:this.styleClass.returnObject()})
    this.saveHistory.push({...this.state})
  }
render(){
  return (
    <div className="App">
      <Screen id="mainScreen" text={this.state.text}/>
      <StylingButtons  changeFontSize={this.changeFontSize} changeColor={this.changeColor} changeFont={this.changeFont}/>
      <Keyboard lenguage='hebrow' addChar={this.addChar} 
      backspace={this.backspace} clearAll={this.clearAll} 
      upperAll={this.upperAll} lowerAll={this.lowerAll} undo={this.undo}/>
    </div>
  );
}
}


export default App;
