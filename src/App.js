import React, {Component} from "react";

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Email: "",
            password: ""
        }

        this.handleSabmit = this.handleSabmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleSabmit(e){
        e.preventDefault()
        alert(`Email : ${this.state.Email}
Password : ${this.state.password}`)
    }
    handleUsernameChange(e){
        this.setState({Email: e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password: e.target.value})
    }

    render(){
        return(
            
            <form onSubmit={this.handleSabmit}>
                <div>
                    <h1>Регистрация</h1>
                    <label htmlFor="username"> Email   </label>
                    <input
                    placeholder="XXXXXX@gmail.com"
                    type="text"
                    id="Email" 
                    value={this.state.Email}
                    onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                <label htmlFor="password">Пароль </label>
                    <input
                    placeholder="Пароль"
                    type="password"
                    id="password" 
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        )
    }
}
export default LoginForm