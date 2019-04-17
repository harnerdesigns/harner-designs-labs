import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Fullscreen extends Component {




    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 0,
            zIndex: 9999
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            maxWidth: '100%',
            minHeight: '100vh',
            margin: '0 auto',
            display: 'grid',
            gridTemplateRows: '100px 1fr'
        };

        const iframeStyle = {
            width: "100%",
            height: "100%"

        }

        const headerStyle = {

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    <header className="modal--header" style={headerStyle}>
                        <h1>{this.props.Title}</h1>
                        <a href={this.props.url} >
                            <FontAwesomeIcon icon="expand" className='fa-fw' />
                        </a>
                        <button onClick={this.props.onClose}>
                            <FontAwesomeIcon icon="times" className='fa-fw' />
                        </button>
                    </header>
                    <iframe style={iframeStyle} src={this.props.url} title={this.props.Title} ></iframe>
                </div>
            </div>
        );
    }
}


export default Fullscreen;