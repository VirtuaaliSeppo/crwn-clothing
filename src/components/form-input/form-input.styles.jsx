import styled, { css } from "styled-components";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

const normalLabel = css`
  top: 10px;
  font-size: 16px;
  color: grey;
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const InputLabel = styled.label`
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  transition: 300ms ease all;
  top: 10px;
  font-size: 16px;
  color: grey;
  ${(props) => (props.shrink ? shrinkLabel : normalLabel)}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkLabel}
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

//
