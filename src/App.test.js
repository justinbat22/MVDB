import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/IMT-logo/i);
  expect(logoElement).toBeInTheDocument();
});