import React, { Component } from 'react';
import './list.scss';

export class List extends Component {
    constructor(props) {
        super(props);
    }

    remove(id){
        this.props.remove(id);
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
                           <div className='person'  key={id}>
                               <li>
                                   <h3>
                                       {person.name}
                                   </h3>
                                   <h4>
                                       {person.gender}
                                   </h4>
                                   <h5>
                                       {person.selectedJoke}
                                   </h5>
                                   <button onClick={this.remove.bind(this, person)}>Remove</button>
                               </li>
                           </div>
                       ))}
                   </ul>
               </div>
           </div>
        );
    }
}

