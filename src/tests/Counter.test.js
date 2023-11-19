/* eslint-disable testing-library/no-render-in-setup */
// import necessary react testing library helpers here
import { fireEvent, render, screen } from "@testing-library/react";

// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialNum = screen.getByText('0');
  expect(initialNum).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  expect(incrementButton).toBeInTheDocument();
  fireEvent.click(incrementButton);
  const incrementNum = screen.getByText('1');
  expect(incrementNum).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('-');
  expect(incrementButton).toBeInTheDocument();
  fireEvent.click(incrementButton);
  const incrementNum = screen.getByText('-1');
  expect(incrementNum).toBeInTheDocument();
});
