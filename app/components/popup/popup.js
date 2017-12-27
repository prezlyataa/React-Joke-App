import React, { Component } from 'react';
import './popup.scss';

export class Popup extends Component {
    constructor(props) {
        super(props);
    }

    remove(id){
        this.props.remove(id);
        this.props.closePopup();
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h2 className='popup_inner_name'>{this.props.selectedPerson.name}</h2>
                    <hr/>
                    <h4 className='popup_inner_joke'>{this.props.selectedPerson.selectedJoke}</h4>
                    <div className='popup_inner_btn'>
                        <button onClick={this.remove.bind(this, this.props.selectedPerson)}>Remove</button>
                        <button onClick={this.props.closePopup}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}
