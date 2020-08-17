import React from 'react';

import render from '../utils/render';

import { TopicItem } from '../../components';

const mockOpinion = {
  id: 1,
  title: 'opinion-title',
  upvotes_count: 0,
};

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

describe('TopicItem component', () => {
  it('should be able to render TopicItem component', () => {
    const { getByText } = render(<TopicItem opinion={mockOpinion} />);

    expect(getByText('opinion-title')).toBeTruthy();

    expect(getByText('0')).toBeTruthy();
  });
});
