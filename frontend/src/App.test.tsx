import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/AI Financial Analysis Crew/i)).toBeInTheDocument();
  });
});
