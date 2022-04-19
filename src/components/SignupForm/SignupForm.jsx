import React, {Component} from "react";
import { signUp } from '../../utilities/users-service.js'
class SignupForm extends Component {
    state= {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = e => {
        this.setState({...this.state, [e.target.name]: e.target.value, error: ''});

    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
            

        } catch {
            this.setState({error: "SIGN UP FAILED"});
        }
    }
    render (){
        const disable = this.state.password !== this.state.confirm;

        return (
            <>
                <div className="form-container">
                    <form autoComplete="off"
                    onSubmit={this.handleSubmit}>

                        <label>name</label>
                        <input type="text" name="name"
                        value={this.state.name} 
                        onChange={ this.handleChange} required />
                        <label>email</label>
                        <input type="email" name="email"
                        value={this.state.email} 
                        onChange={ this.handleChange} required />
                        <label>password</label>
                        <input type="password" name="password"
                        value={this.state.password} 
                        onChange={ this.handleChange} required />
                        <label>confirm</label>
                        <input type="password" name="confirm"
                        value={this.state.confirm} 
                        onChange={ this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>                                    </form>
                </div>
                <h1 className="error-message">{ this.state.error }</h1>
            </>
        )
    }
}

export default SignupForm;
