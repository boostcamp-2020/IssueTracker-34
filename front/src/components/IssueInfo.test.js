import React from 'react';
import IssueInfo from './IssueInfo';
import '@testing-library/jest-dom/extend-expect'

import { getByText, render } from '@testing-library/react';

describe('<IssueInfo />', () => {
  const makeDate = {
    getTime: () => {
      return 1
    }
  }

  it('renders text', () => {
    // 둘다 됨. 둘중 하나 쓰면 될듯
    // const issueInfo = render(<IssueInfo issueId= {1} makeDate={makeDate} author='gibong' />)
    // expect(issueInfo.container.querySelector('span').textContent).toBe('#1 opened 50 years ago by gibong')

    const { getByText } = render(<IssueInfo issueId= {1} makeDate={makeDate} author='gibong' />);
    expect(getByText(/#1 opened 50 years ago by gibong/i)).toBeInTheDocument();
  });
})
