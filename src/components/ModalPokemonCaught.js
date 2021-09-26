import Dialog from "@mui/material/Dialog";
import styled from "@emotion/styled";
import Convetti from "react-confetti";
import Button from "src/components/Button";

export default function AlertDialog({ open, close }) {
  return (
    <div>
      {open && (
        <Convetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <PokemonDialog
        open={open}
        onClose={close}
        fullWidth
        maxWidth="xs"
        transitionDuration={0}
        PaperProps={{
          className: "main",
        }}
      >
        <div className="content">
          <h3>Gotcha !!!</h3>
          <div className="form">
            <img src="/pokeball.png" alt=".." height="30" />
            <input autoFocus placeholder="Nickname" />
          </div>
        </div>

        <div className="actions">
          <div className="box">
            <Button onClick={close}>Release</Button>
          </div>
          <div className="box">
            <Button>Save</Button>
          </div>
        </div>
      </PokemonDialog>
    </div>
  );
}

const PokemonDialog = styled(Dialog)`
  .main {
    background: #282b39;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid #3a3f50;
    color: #ffffff;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%);

    .content {
      margin-bottom: 15px;

      h3 {
        margin-top: 0px;
        margin-bottom: 10px;
      }

      .form {
        display: flex;
        align-items: center;

        img {
          margin-right: 10px;
        }

        input {
          outline: none;
          border-radius: 5px;
          border: 1px solid #3a3f50;
          padding: 20px 20px;
          height: 32px;
          width: 100%;
          color: #ffffff;
          background: #1d1d27;
          font-size: 16px;
        }
      }
    }

    .actions {
      align-self: flex-end;
      display: flex;

      .box {
        margin-left: 10px;
      }
    }
  }
`;
