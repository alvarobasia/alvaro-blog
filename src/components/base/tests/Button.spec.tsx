import React from 'react';
import {vi} from 'vitest';
import {MagnifyingGlass} from 'phosphor-react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';
const mockClick = vi.fn();

describe('Test Button component', () => {
  it('should render Button component', () => {
    const {baseElement} = render(
      <Button
        icon={<MagnifyingGlass />}
        onClick={mockClick}
        text="Teste"
        variant="primary"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should call onClick when the user click on button', async () => {
    render(
      <Button
        icon={<MagnifyingGlass />}
        onClick={mockClick}
        text="Teste"
        variant="primary"
      />
    );
    const button = screen.getByRole('button');

    await userEvent.click(button);
    await userEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(2);
  });

  it('should render the correct text', () => {
    render(
      <Button
        icon={<MagnifyingGlass />}
        onClick={mockClick}
        text="Teste"
        variant="primary"
      />
    );

    const text = screen.getByText('Teste');

    expect(text).toBeInTheDocument();
  });

  it('should render the correct style in primary variant', () => {
    render(
      <Button
        icon={<MagnifyingGlass />}
        onClick={mockClick}
        text="Teste"
        variant="primary"
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'p-2 bg-blue-500 hover:bg-blue-700 text-xl transition-all'
    );

    expect(button).not.toHaveClass(
      'p-2 border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700  hover:text-white text-blue-500 text-xl transition-all'
    );
  });

  it('should render the correct style in secondary variant', () => {
    render(
      <Button
        icon={<MagnifyingGlass />}
        onClick={mockClick}
        text="Teste"
        variant="secondary"
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'p-2 border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700  hover:text-white text-blue-500 text-xl transition-all'
    );

    expect(button).not.toHaveClass(
      'p-2 bg-blue-500 hover:bg-blue-700 text-xl transition-all'
    );
  });

  it('should render the icon', () => {
    render(
      <Button
        icon={<div data-testid="test" />}
        onClick={mockClick}
        text="Teste"
        variant="secondary"
      />
    );

    const icon = screen.getByTestId('test');

    expect(icon).toBeInTheDocument();
  });
});
