import React from 'react';

import render from '../utils/render';

import { MarkdownViewer } from '../../components';

describe('MarkdownViewer component', () => {
  it('should be able to render MarkdownViewer component', () => {
    const { getByText } = render(<MarkdownViewer source="### Source" />);

    expect(getByText('Source')).toBeTruthy();

    expect(getByText('Source').nodeName).toBe('H3');
  });
});
