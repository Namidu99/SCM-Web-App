import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../src/pages/Login';

test('renders login button', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // match the actual button text
  const button = screen.getByRole('button', { name: /sign in/i });
  expect(button).toBeInTheDocument();
});
