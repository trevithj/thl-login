import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux'
import App from './App';
import {createAppStore} from '../store/root';


describe('The login screen', () => {
  beforeEach(() => {
    const store = createAppStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })

  it('renders the login screen', () => {
    const heading = screen.getByText(/Login/i);
    expect(heading).toBeInTheDocument();
    const usrInput = screen.getByPlaceholderText('Enter username');
    const pwdInput = screen.getByPlaceholderText('Enter password');
    expect(usrInput).toBeInTheDocument();
    expect(pwdInput).toBeInTheDocument();
  });

});

