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

    filterList(event) {
        this.props.filterList(event.target.value.toLowerCase());
    }

    sortPersonsAZ() {
        this.props.sortPersonsAZ();
    }

    sortPersonsZA() {
        this.props.sortPersonsZA();
    }

    render() {
        return(
           <div className='list'>
               <div className='list_header'>
                   <h3>Persons: {this.props.persons.length}</h3>
                   <div className='sorted_btn'>
                       <button onClick={this.sortPersonsAZ.bind(this)}>A-Z</button>
                       <button onClick={this.sortPersonsZA.bind(this)}>Z-A</button>
                   </div>
                   <input type="text" className="search" placeholder='Search' onChange={this.filterList.bind(this)}/>
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

