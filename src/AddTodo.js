import React, { Component } from 'react'


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            content: ''
        }
    }

    handleChange = (e) => {
        if (e.target.name === 'id') {
            this.setState({id: e.target.value});
        } else {
            this.setState({content: e.target.value});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Id:&emsp;&emsp;&emsp;&emsp;
                    <input type="text" name="id" onChange={this.handleChange} /><br></br><br></br>
                </label>
                <label>
                    Content:&emsp;&nbsp;
                    <input type="text" name="content" onChange={this.handleChange} /><br></br><br></br>
                </label>
                <input type="submit" value="Add Todo"/><br></br><br></br><br></br>
            </form>
        );
    }
}

export default AddTodo;