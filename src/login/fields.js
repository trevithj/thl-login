import styled from 'styled-components';
export { Frame, H3, Button } from '../common/Frame';

export const Form = styled.div`
  & label {
    display: block;
    padding: 1em;
    text-align: center;
  }
  label > span {
    display: inline-block;
    width: 7em;
    text-align: left;
  }
  input {
    height: 2.4em;
    border-radius: 0.6em;
    width: 18em;
    font-size: 1em;
  }
`
