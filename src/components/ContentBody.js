import React, { Component } from 'react'

export default class ContentBody extends Component {
    
    render() {
        const { children } = this.props
        return (
            <div className="content">
            <div className="container-fluid">
                {children}
            </div>
        </div>
        )
    }
}

