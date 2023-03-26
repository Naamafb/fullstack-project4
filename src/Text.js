import React from 'react'
export class Text extends React.Component{
constructor(props){
    super(props) 
}
render(){
    return (<span style={this.props.styleObject}>{this.props.text}</span>)
}
}