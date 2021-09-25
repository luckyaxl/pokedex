import styled from "@emotion/styled";
import MuiContainer from "@mui/material/Container";

const Container = styled(MuiContainer)`
  padding-top: 40px;
  padding-bottom: 40px;

  .layout {
    @media only screen and (max-width: 600px) {
      margin-top: 20px;
    }
  }
`;

export default Container;
