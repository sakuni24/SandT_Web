import React from 'react';

export default class AdminForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onRoleChange = this.onRoleChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: props.admin ? props.admin.name : '',
            role: props.admin ? props.admin.role : 0,
            email: props.admin ? props.admin.email : '',
            username: props.admin ? props.admin.username : '',
            password: props.admin ? props.admin.password : ''

            error: ''
        };
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name: name }));
    }

    onRoleChange(e) {
        const role = parseInt(e.target.value);
        this.setState(() => ({ role: role }));
    }

    onEmailChange(e) {
        const email = e.target.value;
        this.setState(() => ({ email: email }));
    }

    onUsernameChange(e) {
        const username = e.target.value;
        this.setState(() => ({ username: username }));
    }

    onPasswordChange(e) {
        const password = e.target.value;
        this.setState(() => ({ password: password }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.name || !this.state.role || !this.state.email || !this.state.username || !this.state.password) {
            this.setState(() => ({ error: 'Please fill all details' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitAdmin(
                {
                    name: this.state.name,
                    role: this.state.role,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password
                }
            );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-admin-form'>

                    <input type="text" placeholder="name" autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange} />
                    <br />

                    <input type="number" placeholder="role"
                        value={this.state.role}
                        onChange={this.onRoleChange} />
                    <br />

                    <input type="email" placeholder="email"
                        value={this.state.email}
                        onChange={this.onEmailChange} />
                    <br />

                    <input type="text" placeholder="username"
                        value={this.state.username}
                        onChange={this.onUsernameChange} />
                    <br />

                    <input type="password" placeholder="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange} />
                    <br />
                    <button>Assign Admin</button>
                </form>
            </div>
        );
    }
}
