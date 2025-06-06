// Search.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

// Mock the JSON data
jest.mock('../components/searchdata.json', () => [
  { mobile: 'pradeep123', price: '1000' },
  { mobile: 'john456', price: '2000' },
  { mobile: 'pradeep999', price: '3000' },
]);

describe('Search Component', () => {
  test('renders input and default value', () => {
    render(<Search />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('pradeep');
    expect(screen.getByText(/search text pradeep/i)).toBeInTheDocument();
  });

  test('renders filtered results based on initial input', () => {
    render(<Search />);
    expect(screen.getByText(/pradeep123/i)).toBeInTheDocument();
    expect(screen.getByText(/1000/)).toBeInTheDocument();
    expect(screen.getByText(/pradeep999/i)).toBeInTheDocument();
    expect(screen.getByText(/3000/)).toBeInTheDocument();
  });

  test('filters results when input is changed', () => {
    render(<Search />);
    const input = screen.getByRole('textbox');

    // Type a new value
    fireEvent.change(input, { target: { value: 'john' } });

    expect(screen.getByText(/john456/i)).toBeInTheDocument();
    expect(screen.getByText(/2000/)).toBeInTheDocument();
    expect(screen.queryByText(/pradeep123/i)).not.toBeInTheDocument();
  });
});
