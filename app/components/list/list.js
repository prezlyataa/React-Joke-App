import React, { Component } from 'react';
import { Popup } from 'app/components/popup';
import './list.scss';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            selectedPerson: {}
        };
    }

    togglePopup(person) {
        this.setState({
            showPopup: !this.state.showPopup,
            selectedPerson: person
        });
    }

    searchHandler(id) {
        this.props.searchHandler(id);
    }

    sortPersons() {
        this.props.sortPersons();
    }

    render() {
        return(
           <div className='list'>
               <div className='list_header'>
                   <h3>Persons: {this.props.persons.length}</h3>
                   <button onClick={this.sortPersons.bind(this)}>Sort</button>
                   <input type="text" className="search" placeholder='Search' onChange={this.searchHandler.bind(this)}/>
               </div>

               <hr/>

               <div className='list_person'>
                   <ul>
                       {this.props.persons.map((person, id) => (
                           <div className='person' onClick={this.togglePopup.bind(this, person)}  key={id}>
                               <li>
                                   <h2 className='person_name'>
                                       {person.name}
                                   </h2>
                                   <hr/>
                                   <h4 className='person_gender'>
                                       {person.gender}
                                   </h4>
                               </li>
                           </div>
                       ))}
                   </ul>
               </div>

               {this.state.showPopup ?
                   <Popup
                       selectedPerson={this.state.selectedPerson}
                       remove={this.props.remove}
                       closePopup={this.togglePopup.bind(this)}
                   />
                   : null
               }
           </div>
        );
    }
}

