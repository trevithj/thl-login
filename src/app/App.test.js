import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const header = screen.getByText(/THL Digital/i);
  expect(header).toBeInTheDocument();
});
