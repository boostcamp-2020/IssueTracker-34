import React from 'react';
import styled, { css } from 'styled-components';

const Svg = styled.svg`
  position: absolute;
  left: 15px;
  margin-top: 8px;
  ${ props => {
    if (props.loginPage) {
      return css`
        left:0px;
        margin-top:0px;
        position:relative;
        width: 1.3rem;
        height: 1.2rem;
        & > * {
          fill: white;
        }
    `;
    }
  }}
`;

export default ({ loginPage }) => (
  <Svg loginPage={loginPage} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      fill="#586069"
      d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
    ></path>
  </Svg>
);
