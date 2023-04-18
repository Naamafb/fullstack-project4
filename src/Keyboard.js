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
        // if(this.state.lenguage=='english_small' || this.state.lenguage=='english_capital'){
        //     this.setState({lenguage:"hebrow"})
        // }
        if(this.state.lenguage=='hebrow'){
            this.setState({lenguage:"english_small"})
        }
        else{
            this.setState({lenguage:"hebrow"})
        }

    }
    changeChars(){
    //     if(this.state.lenguage=='english_small' || this.state.lenguage=='english_capital' ||this.state.lenguage=='hebrow'){
    //         this.setState({lenguage:"chars"})
    //     }
        if(this.state.lenguage=='chars'){
            this.setState({lenguage:"hebrow"})
        }
        else{
            this.setState({lenguage:"chars"})
        } 

    }
    charClick(e){
        //this.props.addChar(e.target.getAttribute("Key"));
        this.props.addChar(e);
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

    render(){
        debugger;
        const chars=lenguages[this.state.lenguage];
        const l = chars.length; //[0:l/3]
        const letters1=chars.slice(0, l/3).map(char=><button onClick={()=>{this.charClick(char)}} key={char}>{char}</button>);
        const letters2=chars.slice(l/3, 2*l/3).map(char=><button onClick={()=>{this.charClick(char)}} key={char}>{char}</button>);
        const letters3=chars.slice(2*l/3, l).map(char=><button onClick={()=>{this.charClick(char)}} key={char}>{char}</button>);
        const numbers=this.numbers.map(num=><button onClick={()=>{this.charClick(num)}} key={num}>{num}</button>);
        return (
        <div>
            <button onClick={this.props.clearAll}>ClearAll</button>
            <button onClick={this.props.upperAll}>UpperAll</button>
            <button onClick={this.props.lowerAll}>LowerAll</button>
            <button onClick={this.props.colorAll}>ColorAll</button>
            <button onClick={this.props.fontAll}>FontAll</button>
            <button onClick={this.props.sizeAll}>SizeAll</button>
            <button onClick={this.props.undo}><i class="material-icons">&#xe166;</i></button>
            <div>
                {numbers}
            </div>
            <div>
                {letters1}
           </div>
            <div>
                {letters2}
           </div>
            <div>
                {letters3}
           </div>
           <button onClick={this.capsLockClick}>CapsLK</button>
           <button onClick={()=>{this.charClick(" ")}}>Space</button>
           <button onClick={()=>{this.charClick(<br></br>)}}>Enter</button>
           <button onClick={this.cangheLenguage}><i class='fas'>&#xf0ac;</i></button>
           <button onClick={this.changeChars}>!#1</button>
           <button onClick={this.props.backspace}><i class='fas'>&#xf55a;</i></button>
           <button onClick={this.changeEmojis}>&#128512;</button>
        </div>
        );
    }
}