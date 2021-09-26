import styled from "@emotion/styled";

const PokeBall = styled.div`
  background-image: url("/pokeball.png");
  background-position: cover;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80px;
  width: 80px;
  margin-right: 20px;
  margin-bottom: 30px;
  position: fixed;
  z-index: 1000;
  right: 0;
  bottom: 0;
  cursor: pointer;
  transition: 100ms;

  &:hover {
    transform: scale(0.9);
  }
`;

export default PokeBall;
