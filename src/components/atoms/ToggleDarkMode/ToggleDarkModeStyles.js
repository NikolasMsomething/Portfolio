import styled from 'styled-components';

export const StyledToggleWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  left: 24px;
  top: 14px;


  .checkbox {
    opacity: 0;
    position: absolute;
    left: 0;
  }

  svg {
    height: 17px !important;
  }

  .label {
    cursor: pointer;
    width: 50px;
    height: 26px;
    background-color :#111;
    display: flex;
    border-radius:50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 3px;
    left: 4px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  /*  target the elemenent after the label*/
  .checkbox:checked + .label .ball{
    transform: translateX(24px);
  }

  .fa-moon {
    color: pink;
    &:before {
      content: "\f185";
    }
  }

  .fa-sun {
    color: yellow;
    &:before {
      content: "\f185";
    }
  }
`;
