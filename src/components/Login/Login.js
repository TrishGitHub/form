import React, { Component, Fragment } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
	  email: '',
	  password: '',
    errors: '',
  };

  handleChangeForm = (e) => {
      this.setState({ [e.target.name]: e.target.value, errors: '' });
  };

  handleClick = (e) => {
    e.preventDefault();
    
      const { email, password } = this.state;
      const { authorizeUser } = this.props;

      if (authorizeUser(email, password)) {
        this.setState( ({ errors }) => ({ errors: ''}));
        this.props.history.push('/private');
        
      } else {
	      this.setState( ({ errors }) => ({ errors: 'Проверьте введённые данные'}));
      }
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password } = this.props;
    const { errors } = this.state;

    const authForm = (
      <Fragment>
        <img src="images/swedavia-logo.png" alt="Swedavia logo" />
        <form>
          <input type="text" placeholder="Username"
                name='email'
                value={ email }
                onChange={ this.handleChangeForm }
          />
          <input type="text" placeholder="Password"
                name='password'
                value={ password }
                onChange={ this.handleChangeForm }
          />
          <fieldset>
            <button onClick={ this.handleClick } email={email}
            > Отправить
            </button>
            <a href="#" title="Forgot password link">Forgot password?</a>
          </fieldset>
          {errors !== '' ? <span>{ errors }</span> : null}
        </form>
        <p>
          Powered by <a href="#" title="Cygate link">Cygate</a>
        </p>
      </Fragment>
    )
    return isAuthorized ? <Redirect to="/" /> : authForm;
  }
}

export default AuthHOC(Login);
