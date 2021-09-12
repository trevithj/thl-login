import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux'
import App from './App';
import {createAppStore} from '../store/root';

const warning = jest.spyOn(global.console, 'warn');

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
    warning.mockReset();
  })

  it('renders the relevant components', async () => {
    const heading = screen.getByText(/Login/i);
    expect(heading).toBeInTheDocument();
    expect(fields.usrInput).toBeInTheDocument();
    expect(fields.pwdInput).toBeInTheDocument();
    expect(fields.signin).toBeDisabled();
    expect(warning).not.toBeCalled();
  });

  it('checks for minimal password', async () => {
    let error = screen.queryByTitle('error');
    expect(error).toBeNull();

    fireEvent.change(fields.usrInput, {
      target: {value: 'something'},
    });
    expect(fields.signin).toBeDisabled();

    fireEvent.change(fields.pwdInput, {
      target: {value: 'tiny'},
    });
    fireEvent.click(fields.signin);
    error = await screen.findByTitle('error');
    expect(error).toHaveTextContent(/Password must be at least/i);
    expect(warning).not.toBeCalled(); //no error, front-end check only
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
    expect(warning).toHaveBeenCalledTimes(1); //logs warning message

    //right username, wrong password
    fireEvent.change(fields.usrInput, {target: {value: 'admin'}});
    fireEvent.change(fields.pwdInput, {target: {value: 'minad'}});
    fireEvent.click(fields.signin);

    error = await screen.findByTitle('error');
    expect(error).toHaveTextContent(/unauthorized/i);
    expect(warning).toHaveBeenCalledTimes(2); //logs 2nd warning message

    //right credentials
    fireEvent.change(fields.usrInput, {target: {value: 'admin'}});
    fireEvent.change(fields.pwdInput, {target: {value: 'admin'}});
    fireEvent.click(fields.signin);

    info = await screen.findByTitle('info');
    expect(info).toHaveTextContent(/please wait/i);
    await screen.findByText('Main Admin Screen');
    expect(info).toHaveTextContent(/signin was successful/i);
    error = screen.queryByTitle('error');
    expect(error).toBeNull();

  });

});

