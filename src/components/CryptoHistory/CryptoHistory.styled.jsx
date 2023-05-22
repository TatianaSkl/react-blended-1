import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  background-color: ${props => props.theme.colors.white};
  text-align: center;

  box-shadow: ${props => props.theme.shadows.small};
`;

export const THead = styled.thead`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.dark};
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.light};
  }
`;
