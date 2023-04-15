import React from 'react';

import {render, screen} from '@testing-library/react';

import Avatar from '../Avatar';

describe('Test Avatar component', () => {
  it('should render Avatar component', () => {
    const {baseElement} = render(
      <Avatar src="https://github.com/alvarobasia.png" />
    );
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fgithub.com%2Falvarobasia.png&w=256&q=75'
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should show correct image in Avatar', () => {
    render(<Avatar src="https://github.com/alvarobasia.png" />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fgithub.com%2Falvarobasia.png&w=256&q=75'
    );
  });
});
