import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Form, Frame, H3} from './fields';
import {submitLogin} from './submitLogin';

function Login() {
  const dispatch = useDispatch();
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');

  function doSignIn(event) {
    event.preventDefault();
    dispatch(submitLogin(usr, pwd));
  }

  function onUsrChange(evt) {
    const value = evt.target.value;
    setUsr(value);
  }
  function onPwdChange(evt) {
    const value = evt.target.value;
    setPwd(value);
  }

  return (
    <Frame>
      <H3>Login</H3>
      <Form>
        <label>
          <span>User Name:</span>
          <input name="username" type="text" placeholder="Enter username" value={usr} onChange={onUsrChange}/>
        </label>
        <label>
          <span>Password:</span>
          <input name="password" type="password" placeholder="Enter password" value={pwd} onChange={onPwdChange} />
        </label>
      </Form>
      <Button onClick={doSignIn}>Sign In</Button>
    </Frame>
  )
}

export default Login;
