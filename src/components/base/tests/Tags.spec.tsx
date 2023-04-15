import React from 'react';

import {render, screen} from '@testing-library/react';

import Tags from '../Tags';

describe('Test Tags component', () => {
  it('should render Avatar component', () => {
    const {baseElement} = render(<Tags tag="teste" />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should show correct tag', () => {
    render(<Tags tag="teste" />);
    const text = screen.getByText('#teste');
    expect(text).toBeInTheDocument();
  });
});
