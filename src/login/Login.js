import {useState} from 'react';

function Login() {
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    return false;
  }

  function doSignIn(event) {
    event.preventDefault();
    // todo: submitLogin(usr, pwd);
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
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>User Name:</span>
          <input name="username" type="text" placeholder="Enter username" value={usr} onChange={onUsrChange}/>
        </label>
        <label>
          <span>Password:</span>
          <input name="password" type="password" placeholder="Enter password" value={pwd} onChange={onPwdChange} />
        </label>
      </form>
      <button onClick={doSignIn}>Sign In</button>
    </div>
  )
}

export default Login;
