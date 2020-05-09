import React, { Component } from 'react';

class Padding extends Component {
    render() {
        return (
            <div className="addpadding">
                {this.props.children}
            </div>
        );
    }
}

export default Padding;
