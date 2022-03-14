import React, { Component } from 'react'
import './CSS_style/styles.css'


  
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            emailValidation:"",
            password: "",
            gender: "",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    emailhandler = (event) => {
this.setState({
    email:event.target.value
})
    }
    emailValidation = (event) => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(event)) {
    }
    else if (!regEx.test(event) && event !== "") {
    }
    else {
    }
    }
    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            email: "",
            gender: "",

        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={ this.state.lastName } onChange={ this.lasthandler } placeholder="LastName..." /><br />
                    <label>Email Address:</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="email..." /><br />
                    <label>Password :</label> <input type="password" value={ this.state.password } onChange={ this.passwordhandler } placeholder="Password..." /><br />

                    <label>Gender :</label>
                    <select onChange={ this.genderhandler } defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
<h1>click here</h1>
               
            </div>
            
        )
    }
}

export default Form
