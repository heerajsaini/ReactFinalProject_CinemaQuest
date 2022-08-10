import styled from 'styled-components';

export const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 500px;
  margin: auto;
  text-align:center;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 15px;
  font-weight:bold;
  border-radius: 12px;
  color: #474646;
  

  &::placeholder {
    font-weight: 300;
    font-weight:450;
    color: #8d8d8d;
  }
`;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    margin: 0 40px;
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;

  button {
    color: #fff;
    background-color:#2d76c4;
    width:250px;
    height:50px;
    margin: auto;
    padding: 10px 50px; 
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

