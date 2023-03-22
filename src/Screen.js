import React from 'react'

 export class Screen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <p>{this.props.text}</p>

    }
}