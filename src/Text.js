import React from 'react'
export class Text extends React.Component{
constructor(props){
    super(props) 
}
render(){
    return (<span className={this.props.text} style={this.props.styleObject}>{this.props.text}</span>)
}
}