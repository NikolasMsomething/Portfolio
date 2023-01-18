import { keyframes } from 'styled-components';

export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;
export const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

export const move = keyframes`
  0 % {
    transform: none;
  }

  25 % {
    transform: translateX(2px);
  }

  100 % {
    transform: translateX(-2px);
  }
`;
