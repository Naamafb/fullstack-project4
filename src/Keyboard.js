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
        if(this.state.lenguage=='english_small' || this.state.lenguage=='english_capital'){
            this.setState({lenguage:"hebrow"})
        }
        else if(this.state.lenguage=='hebrow'){
            this.setState({lenguage:"english_small"})
        }

    }
    changeChars(){
        if(this.state.lenguage=='english_small' || this.state.lenguage=='english_capital' ||this.state.lenguage=='hebrow'){
            this.setState({lenguage:"chars"})
        }
        else if(this.state.lenguage=='chars'){
            this.setState({lenguage:"hebrow"})
        }

    }
    charClick(e){
        //this.props.addChar(e.target.getAttribute("Key"));
        this.props.addChar(e);
    }
   

    render(){
        const chars=lenguages[this.state.lenguage]
        const letters=chars.map(char=><button onClick={()=>{this.charClick(char)}} key={char}>{char}</button>);
        const numbers=this.numbers.map(num=><button onClick={()=>{this.charClick(num)}} key={num}>{num}</button>);
        return (
        <div>
            <div>
            {numbers}
            </div>
            <div>
           {letters}
           </div>
           <button onClick={this.capsLockClick}>CapsLK</button>
           <button onClick={()=>{this.charClick(" ")}}>Space</button>
           <button onClick={this.cangheLenguage}>Leng</button>
           <button onClick={this.changeChars}>Chars</button>
           <button onClick={this.props.backspace}>Backspace</button>

        </div>
        );
    }
}