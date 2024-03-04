import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  padding: 20px;

`;

export const InputForm = styled.form`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  margin:5px;
  cursor: pointer;
 
  
  &:hover {
    transition: 0.5s ease-in-out;
  background: #2AAA8A;
  }
`;
