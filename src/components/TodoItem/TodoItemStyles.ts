import styled from 'styled-components';

export const ListItem = styled.li<{ completed: boolean }>`
  cursor: pointer;
  padding: 5px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;