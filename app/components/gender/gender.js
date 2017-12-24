import React, { Component } from 'react';

export class Gender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedGender: 'Male'
        };

    }

    handleClick(gender) {
        this.setState({
            selectedGender: gender
        });

        this.props.selectGender(this.state.selectedGender);
    }

    render() {
        return(
            <div>
                <h3>Gender</h3>
                <div className='gender-radio'>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Male" name="gender" onClick={this.handleClick.bind(this, "Male")} required/>
                            Male
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Female" name="gender" onClick={this.handleClick.bind(this, "Female")}required/>
                            Female
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}