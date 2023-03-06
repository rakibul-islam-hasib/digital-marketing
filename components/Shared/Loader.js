import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <>
                <div className="preloader-area">
                    <div className="lds-hourglass"></div>
                </div>
            </>
        );
    }
}

export default Loader;