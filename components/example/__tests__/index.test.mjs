import { render, screen } from '@testing-library/react';

import Example from '..';

describe('Example', () => {
  it('example to be rendered', () => {
    render(<Example>example</Example>);

    expect(screen.findByText('example')).toBeTruthy();
  });
});
