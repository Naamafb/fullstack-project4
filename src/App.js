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
    this.saveHistory.push({text:[], styleText:{...this.state.styleText}})

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
    debugger
    var spanChar=<Text text={newChar} styleObject={this.styleClass.returnObject()}/>
    this.state.text.push(spanChar);
    this.setState({text:this.state.text,styleText:this.styleClass.returnObject()})
    this.saveHistory.push({text:[...this.state.text], styleText:{...this.state.styleText}})
  }
  backspace(){
    this.state.text.pop();
    this.setState({text:this.state.text})
    this.saveHistory.push({text:[...this.state.text], styleText:{...this.state.styleText}})
    }
  clearAll(){
    this.setState({text:[]})
    this.saveHistory.push({text:[...this.state.text], styleText:{...this.state.styleText}})
    }
  upperAll(){
    debugger
    const newText=this.state.text.map(charSpan=>(<Text text={charSpan.props.text.toUpperCase()} styleObject={charSpan.props.styleObject}/>));
    this.setState({text:newText})
    this.saveHistory.push({text:[...this.state.text], styleText:{...this.state.styleText}})
    }
  lowerAll(){
    const newText=this.state.text.map(charSpan=>(<Text text={charSpan.props.text.toLowerCase()} styleObject={charSpan.props.styleObject}/>));
    this.setState({text:newText})
    this.saveHistory.push({text:[...this.state.text], styleText:{...this.state.styleText}})

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
  undo(){
    debugger
    this.saveHistory.pop()
    if(this.saveHistory.length>1){
    var prevState=this.saveHistory[this.saveHistory.length-1]
    this.setState(prevState)
    }
    else{
      var state={text:[],styleText:this.styleClass.returnObject()}
      this.setState(state);
      this.saveHistory.push({text:[],styleText:this.styleClass.returnObject()})
    }
    
  }
render(){
  return (
    <div className="App">
      <div 
      style={{
          borderStyle: "dotted",
          marginRight: 500,
          marginLeft: 500,
          marginTop: 150,
          height:180}}>
          <Screen id="mainScreen" text={this.state.text}/>
      </div>
      <StylingButtons  changeFontSize={this.changeFontSize} changeColor={this.changeColor} changeFont={this.changeFont}/>
      <Keyboard lenguage='hebrow' addChar={this.addChar} 
      backspace={this.backspace} clearAll={this.clearAll} 
      upperAll={this.upperAll} lowerAll={this.lowerAll} undo={this.undo}/>
    </div>
  );
}
}


export default App;
