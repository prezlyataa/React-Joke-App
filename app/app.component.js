import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form } from 'app/components/form';

import './app.component.scss';

export class AppComponent extends Component {
    render() {
        return (
            <div className='app'>
                <h2>Chuck Norris Jokes Application</h2>
                <Form/>
            </div>
        );
    }
}

render(<AppComponent/>, document.getElementById('app'));