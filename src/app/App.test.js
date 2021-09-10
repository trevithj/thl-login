import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux'
import App from './App';
import {createAppStore} from '../store/root';


describe('The login screen', () => {
  const fields = {};
  beforeEach(() => {
    const store = createAppStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fields.usrInput = screen.getByPlaceholderText('Enter username');
    fields.pwdInput = screen.getByPlaceholderText('Enter password');
    fields.signin = screen.getByText(/sign in/i);
  })

  it('renders the login screen', async () => {
    const heading = screen.getByText(/Login/i);
    expect(heading).toBeInTheDocument();
    expect(fields.usrInput).toBeInTheDocument();
    expect(fields.pwdInput).toBeInTheDocument();

    //and objects if submit is clicked too soon
    fireEvent.click(fields.signin);
    const error = await screen.findByTitle('error');
    expect(error).toHaveTextContent(/username is not set/i);
  });

  it('checks for minimal password', async () => {
    let error = screen.queryByTitle('error');
    expect(error).toBeNull();

    fireEvent.change(fields.usrInput, {
      target: {value: 'something'},
    });
    fireEvent.click(fields.signin);
    error = await screen.findByTitle('error');
    expect(error).toHaveTextContent(/password is not set/i);

    fireEvent.change(fields.pwdInput, {
      target: {value: 'tiny'},
    });
    fireEvent.click(fields.signin);
    error = await screen.findByTitle('error');
    expect(error).toHaveTextContent(/Password must be at least/i);

  });

  it('checks for correct login', async () => {
    let error = screen.queryByTitle('error');
    let info = screen.queryByTitle('info');
    expect(error).toBeNull();
    expect(info).toBeNull();

    //wrong username, right password
    fireEvent.change(fields.usrInput, {target: {value: 'dufus'}});
    fireEvent.change(fields.pwdInput, {target: {value: 'admin'}});
    fireEvent.click(fields.signin);

    error = await screen.findByTitle('error');
    expect(error).toHaveTextContent(/unauthorized/i);

    //right username, wrong password
    fireEvent.change(fields.usrInput, {target: {value: 'admin'}});
    fireEvent.change(fields.pwdInput, {target: {value: 'minad'}});
    fireEvent.click(fields.signin);

    error = await screen.findByTitle('error');
    expect(error).toHaveTextContent(/unauthorized/i);

    //right credentials
    fireEvent.change(fields.usrInput, {target: {value: 'admin'}});
    fireEvent.change(fields.pwdInput, {target: {value: 'admin'}});
    fireEvent.click(fields.signin);

    info = await screen.findByTitle('info');
    expect(info).toHaveTextContent(/login successful/i);
    error = screen.queryByTitle('error');
    expect(error).toBeNull();

  });

});

