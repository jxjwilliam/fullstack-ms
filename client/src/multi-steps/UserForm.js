import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
  state = {
    step: 1,
    open: true,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: ''
    }
  };

  // Proceed to next step
  nextStep = () => {
    this.setState(prevState => ({step: prevState.step + 1}));
  };

  // Go back to prev step
  prevStep = () => {
    this.setState(prevState => ({step: prevState.step - 1}));
  };

  // Handle fields change
  handleChange = ({target: {id, value}}) => {
    this.setState({
      form: {
        ...this.state.form,
        [id]: value
      }
    });
  };

  handleToggle = () => {
    this.setState(prevState => ({open: !prevState.open}));
  }

  render() {
    const {step, form} = this.state;

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleToggle={this.handleToggle}
            open={this.state.open}
            values={form}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleToggle={this.handleToggle}
            open={this.state.open}
            values={form}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleToggle={this.handleToggle}
            open={this.state.open}
            values={form}
          />
        );
      case 4:
        return (
          <Success
            open={this.state.open}
            handleToggle={this.handleToggle}
          />
        );
      default:
        return <h1>用户注册表单</h1>
    }
  }
}

export default UserForm;
