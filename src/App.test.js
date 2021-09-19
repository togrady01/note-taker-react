import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Note Taker', () => {
  render(<App />);
  const linkElement = screen.getByText(/Note Taker/i);
  expect(linkElement).toBeInTheDocument();
});


