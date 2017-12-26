import React, { Component } from 'react';
import './popup.scss';

export class Popup extends Component {
    constructor(props) {
        super(props);
    }

    remove(id){
        this.props.remove(id);
    }

    render() {
        return (
            <div className='popup'>
                {this.props.persons.map((person, id)=> (
                    <div className='popup_inner' key={id}>
                        <h4 className='popup_inner_name'>{person.name}</h4>
                        <h5 className='popup_inner_joke'>{person.selectedJoke}</h5>
                        <div className='popup_inner_btn'>
                            <button onClick={this.remove.bind(this, person)}>Remove</button>
                            <button onClick={this.props.closePopup}>Close</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
