// components/auth/SignIn.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginCheck } from '../../store/actions/account';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import PasswordInput from '../PasswordInput';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: false,
    showPassword: false,
    redirect: false,
  };

  handleChange = props => event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeMemorise = () => {
    this.setState(state => ({ rememberMe: !state.rememberMe }));
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(e);
    console.log("defef");
    await this.props.loginCheck(this.state.username, this.state.password, this.props.activeClubId);
    this.setState({ redirect: true })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/booking' />
    }
  }

  render() {
    const { classes } = this.props;
    const errorMsg = this.props.loginError?"The credential are not correct":""
    return (

      <div className={classes.root}>
        {this.renderRedirect()}

        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography variant="body1" className={classes.error}>
            {errorMsg}
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl required fullWidth className={classes.margin}>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange()}
                autoFocus
                autoComplete="username"
              />
            </FormControl>
            <PasswordInput name="password" password={this.state.password} handleChange={this.handleChange} />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              onChange={this.handleChangeMemorise}
            />
            <Button fullWidth type="submit" variant="contained" color="primary" className={classes.button}>
              Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  margin: {
    margin: "normal",
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    marginTop: theme.spacing(3),
  },
  error: {
    color: "red",
  },
});

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    activeClubId: state.club.activeClubId,
    loginError: state.account.loginError,
});


const mapDispatchToProps = (dispatch) => ({
    loginCheck: (username, passwordHash, idClub) => dispatch(loginCheck(username, passwordHash, idClub))
});

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(SignIn));
