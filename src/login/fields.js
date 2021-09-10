import styled from 'styled-components';

export const Frame = styled.div`
  margin: 0.5em;
  padding: 2em;
  border: solid 0.2em #eee;
  border-radius: 0.5em;
`;

export const H3 = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
`;

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

export const Button = styled.button`
  margin-top: 1em;
  height: 3em;
  width: 10em;
  border-radius: 0.6em;
  font-size: 1em;
`;