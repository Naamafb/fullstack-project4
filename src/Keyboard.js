import React from 'react';
import {lenguages} from './Lenguages';

export class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lenguage:'english_small'
         };
         this.capsLockClick=this.capsLockClick.bind(this);
         this.cangheLenguage=this.cangheLenguage.bind(this);
         this.changeChars=this.changeChars.bind(this);
         this.changeEmojis=this.changeEmojis.bind(this);

         this.numbers='1234567890'.split("");

    }
    capsLockClick(){
        if(this.state.lenguage=='english_small'){
            this.setState({lenguage:"english_capital"})
        }
        else if(this.state.lenguage=='english_capital'){
                this.setState({lenguage:"english_small"})
             }
    }
    cangheLenguage(){
        if(this.state.lenguage=='hebrow'){
            this.setState({lenguage:"english_small"})
        }
        else{
            this.setState({lenguage:"hebrow"})
        }

    }
    changeChars(){
        if(this.state.lenguage=='chars'){
            this.setState({lenguage:"hebrow"})
        }
        else{
            this.setState({lenguage:"chars"})
        } 

    }
    changeEmojis(){
        debugger
        if(this.state.lenguage=='emojis'){
            this.setState({lenguage:"hebrow"})
        }
        else{
            this.setState({lenguage:"emojis"})
        } 
    }
    charClick(e){
        this.props.addChar(e);
    }

    render(){
        debugger;
        const chars=lenguages[this.state.lenguage];
        const letters1=chars.slice(0, 12).map((char,i)=><button className="keyboardButton" onClick={()=>{this.charClick(char)}} key={i}>{char}</button>);
        const letters2=chars.slice(12, 23).map((char,i)=><button className="keyboardButton" onClick={()=>{this.charClick(char)}} key={i}>{char}</button>);
        const letters3=chars.slice(23, 32).map((char,i)=><button className="keyboardButton" onClick={()=>{this.charClick(char)}} key={i}>{char}</button>);
        const numbers=this.numbers.map(num=><button className="keyboardButton" onClick={()=>{this.charClick(num)}} key={num}>{num}</button>);
        return (
        <div>
            <button onClick={this.props.clearAll}>ClearAll</button>
            <button onClick={this.props.upperAll}>UpperAll</button>
            <button onClick={this.props.lowerAll}>LowerAll</button>
            <button onClick={this.props.sizeAll}>SizeAll</button>
            <button onClick={this.props.colorAll}>ColorAll</button>
            <button onClick={this.props.fontAll}>FontAll</button>
            <button onClick={this.props.undo}><i className="material-icons cllasEmojis">&#xe166;</i></button>
            <div>
                {numbers}
                <button onClick={this.props.backspace}><i className='fas'>&#xf55a;</i></button>
            </div>
            <div>
                {letters1}
           </div>
            <div>
                {letters2}
           </div>
            <div>
                <button onClick={this.capsLockClick}>CapsLK</button>
                {letters3}
                <button onClick={()=>{this.charClick(<br></br>)}}>Enter</button>
           </div>
           <button onClick={this.cangheLenguage}><i className='fas'>&#xf0ac;</i></button>
           <button onClick={()=>{this.charClick(" ")}} id="SpaceButton">Space</button>
           <button onClick={this.changeChars}>!#1</button>
           <button onClick={this.changeEmojis} className='cllasEmojis'>&#128512;</button>
        </div>
        );
    }
}