import React, { Component } from 'react';
import { Popup } from 'app/components/popup';
import './list.scss';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    searchHandler(id) {
        this.props.searchHandler(id);
    }

    render() {
        return(
           <div className='list'>
               <div className='list_header'>
                   <h3>Persons: {this.props.persons.length}</h3>
                   {/*<button onClick={this.sortList.bind(this)}>Sort</button>*/}
                   <input type="text" className="search" placeholder='Search' onChange={this.searchHandler.bind(this)}/>
               </div>

               <hr/>

               <div className='list_person'>
                   <ul>
                       {this.props.persons.map((person, id) => (
                           <div className='person' onClick={this.togglePopup.bind(this)}  key={id}>
                               <li>
                                   <h3>
                                       {person.name}
                                   </h3>
                                   <h4>
                                       {person.gender}
                                   </h4>
                               </li>
                           </div>
                       ))}
                   </ul>
               </div>

               {this.state.showPopup ?
                   <Popup
                       persons={this.props.persons}
                       remove={this.props.remove}
                       closePopup={this.togglePopup.bind(this)}
                   />
                   : null
               }
           </div>
        );
    }
}

