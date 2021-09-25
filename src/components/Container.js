import styled from "@emotion/styled";
import MuiContainer from "@mui/material/Container";

const Container = styled(MuiContainer)`
  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: 600px) {
    padding-top: 80px;
  }

  .title {
    font-size: 30px;
  }
`;

export default Container;
