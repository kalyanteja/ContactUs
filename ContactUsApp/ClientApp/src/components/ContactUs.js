import React, { Component } from 'react';

class ContactUs extends Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            message: "",
            isValid: true,
            savedSuccessfully: false,
            showErrorMessage: false
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleUserNameChange(e) {
        this.setState({ userName: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    isNotEmpty(val) {
        return val != null && val.length > 0;
    }

    areInputsValid() {
        // check for empty fields
        return this.isNotEmpty(this.state.userName)
            && this.isNotEmpty(this.state.email)
            && this.isNotEmpty(this.state.message)
    }

    sendUserMessage = async (e) => {
        e.preventDefault();
        console.log('sending message');

        this.setState({ showErrorMessage: false });
        if (this.areInputsValid()) {
            this.setState({ isValid: true });
            //calling the MVC api to insert the form data
            const dbCall = await fetch('/api/ContactUsMessage/SendContactUsMessage', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });

            const dbResponse = dbCall;
            this.setState({ showErrorMessage: !dbResponse.ok, savedSuccessfully: dbResponse.ok });
        } else {
            this.setState({ isValid: false, savedSuccessfully: false });
        }
    }

    render() {
        const formCode = (
            <form onSubmit={this.sendUserMessage}>
                <h2>Give us your feedback</h2>
                <div className="form-element">
                    <input type="text" className="w-50" id="userName" placeholder="your name..." value={this.state.userName}
                        onChange={this.handleUserNameChange} />
                </div>
                <div className="form-element pt-3">
                    <input type="email" id="email" className="w-50" placeholder="your email..." value={this.state.email}
                        onChange={this.handleEmailChange} />
                </div>
                <div className="form-element pt-3">
                    <textarea type="text" id="meassage" className="w-75" placeholder="write your message here..." value={this.state.message}
                        onChange={this.handleMessageChange} />
                </div>
                {this.state.isValid ? "" : <div className="pt-2 error-msg">Please enter values...</div>}
                <div className="form-actions pt-5">
                    <input type="submit" id="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        );

        const messageCode = (<p> Appreciate your feedback {this.state.userName}, we'll contact you soon! </p>);

        return (
            <div>
                {this.state.savedSuccessfully && !this.state.showErrorMessage ? messageCode : formCode}
                {this.state.showErrorMessage && "Oops, please try again later..."}
            </div>
        );
    }
}

export default ContactUs;