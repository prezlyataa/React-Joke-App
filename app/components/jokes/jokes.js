import React, { Component } from 'react';

export class Jokes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jokes: [],
            selectedJoke: ''
        }
    }

    handleClick(item) {
        this.setState({
            selectedJoke: item.joke
        });

        this.props.selectJoke(this.state.selectedJoke);
    }

    render() {
        return (
            <div>
                <h3>Jokes</h3>
                {this.props.jokes.map((item, id) => (
                    <div className="radio" key={id} onClick={this.handleClick.bind(this, item)}>
                        <label>
                            <input type="radio" id='joke' value={item.joke} name="joke" required/>
                            {item.joke}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}