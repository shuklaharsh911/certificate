import React, { Component } from 'react';

class Sample extends Component {
    render() {
        return (
            <div>
                {this.props.child}
            </div>
        );
    }
}

export default Sample;
