import React from 'react';


export class StylingButtons extends  React.Component{
constructor(props){
    super(props)
    this.sizeHandleChange=this.sizeHandleChange.bind(this)
    this.colorHandleChange=this.colorHandleChange.bind(this)
    this.fontHandleChange=this.fontHandleChange.bind(this);
}
sizeHandleChange(e){
    debugger
    const size = e.target.value;
    this.props.changeFontSize(size);

}
colorHandleChange(e){
    const color = e.target.value;
    this.props.changeColor(color);
}
fontHandleChange(e){
    const font = e.target.value;
    this.props.changeFont(font);
}
render(){
    return <div>
        <select id="fontSize" onChange={this.sizeHandleChange}>
            <option value="12px">12</option>
            <option value="16px">16</option>
            <option value="20px">20</option>
        </select>
        <select id="color" onChange={this.colorHandleChange}>
            <option value="black" style={{color:"black"}}>Black</option>
            <option value="red" style={{color:"red"}}>Red</option>
            <option value="green" style={{color:"green"}}>Green</option>
            <option value="blue" style={{color:"blue"}}>Blue</option> 
        </select>
        <select id="fontFamily" onChange={this.fontHandleChange}>
            <option value="Arial" style={{fontFamily:"Arial"}}>Arial</option>
            <option value="Times New Roman" style={{fontFamily:"Times New Roman"}}>Times New Roman</option>
            <option value="verdana" style={{fontFamily:"verdana"}}>Verdana</option>
        </select>
    </div>


}
}