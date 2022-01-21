import React from 'react';

class CheckOutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      lastName: '',
      formErrors: { email: '', text: '' },
      emailValid: false,
      textValid: false,
      formValid: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let textValid = this.state.textValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        textValid = value.length >= 2;
        fieldValidationErrors.text = textValid ? '' : ' is too short';
      case 'lastName':
        textValid = value.length >= 2;
        fieldValidationErrors.text = textValid ? '' : ' is too short';

        break;
      default:
        break;
    }
    this.setState(
      { formErrors: fieldValidationErrors, emailValid: emailValid, textValid: textValid },
      this.validateForm,
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.textValid });
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    return (
      <form className="check-out-form" onSubmit={this.handleSubmit}>
        <h2>Check out</h2>
        <div className="cof-errors">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <div>
            <input
              className="cof-input"
              type="email"
              required
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </div>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.text)}`}>
          <div className='cof-name-block'>
            <label htmlFor="name">name</label>
            <div className="cof-input">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleUserInput}
              />
            </div>
            <label htmlFor="lastName">lastName</label>
            <div>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="lastName"
                value={this.state.lastName}
                onChange={this.handleUserInput}
              />
            </div>
          </div>
        </div>
        <input type="submit" value="Отправить" disabled={!this.state.formValid} />
      </form>
    );
  }
}

export const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {formErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
export default CheckOutForm;
