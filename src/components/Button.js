import styled from "@emotion/styled";

const Button = styled.button`
  color: white;
  padding: 8px 24px;
  font-weight: 800;
  border-radius: 8px;
  font-size: 14px;
  background: ${props => props.bg || 'rgb(3, 172, 14)'};
  cursor: pointer;
  border: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  &:hover {
    filter: brightness(85%)
  }
`;

export default Button;
