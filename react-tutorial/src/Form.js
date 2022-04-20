import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        activity:'',
        link:'',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    state = this.initialState
    render() {
        const {activity, link} = this.state;

        return (
            <form>
                <label htmlFor="activity">Repeat Activity</label>
                <input
                    type="text"
                    name="activity"
                    id="activity"
                    value={activity}
                    onChange={this.handleChange} />
                <label htmlFor="link">Relevant Link</label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    value={link}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;