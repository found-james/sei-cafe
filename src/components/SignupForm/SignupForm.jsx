import React, {Component} from "react";

class SignupForm extends Component {
    state= {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = e => {
        this.setState({...this.state, [e.tagert.name]: e.target.value});
        
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
                        <label>password</label>
                        <input type="text" name="password"
                        value={this.state.password} 
                        onChange={ this.handleChange} required />
                        <label>confirm</label>
                        <input type="text" name="confirm"
                        value={this.state.confirm} 
                        onChange={ this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>                                    </form>
                </div>
            </>
        )
    }
}

export default SignupForm;
