import { render, screen } from '@testing-library/react';
import Banner from './components/Main/Banner';

test('renders learn react link', () => {
  render(<Banner />);
  const linkElement = screen.getByText("Little Lemon");
  expect(linkElement).toBeInTheDocument();
});
