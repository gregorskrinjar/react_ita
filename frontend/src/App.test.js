import App from './App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, screen } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'


describe("<App />", () => {
  afterEach(cleanup)

    it("Renders <App /> component correctly", () => {
      const { container } = render(<App />);
      expect(container.firstChild.classList.contains('App')).toBe(true)
    })
  });