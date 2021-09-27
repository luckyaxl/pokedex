import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Grow from "@mui/material/Grow";
import React, { useContext, useState } from "react";
import Convetti from "react-confetti";
import Button from "src/components/Button";
import { PokemonContext } from "src/contexts/PokemonContext";
import Image from "next/image";
import pokeBall from "public/pokeball.png";

export default function ModalNickname({ open, data, close }) {
  const { savePokemon } = useContext(PokemonContext);
  const [nickname, setNickname] = useState("");

  const changeNickName = async (e) => {
    setNickname(e.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const pokemonData = {
      ...data,
      nickname,
    };

    savePokemon(pokemonData);
    setNickname("");
    close();
  };

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
        TransitionComponent={Grow}
        transitionDuration={200}
        PaperProps={{
          className: "main",
        }}
      >
        <form onSubmit={handleSave}>
          <div className="content">
            <div className="title">
              <h3>Gotcha !!!</h3>
              <small>You caught {data.name}</small>
            </div>
            <div className="form">
              <Image
                src={pokeBall}
                alt=".."
                height={30}
                width={30}
                className="balls"
              />
              <input
                required
                placeholder={`Nickname for ${data.name}`}
                type="text"
                value={nickname}
                onChange={changeNickName}
              />
            </div>
          </div>

          <div className="actions">
            <div className="box">
              <Button type="button" bg="red" onClick={close}>
                Release
              </Button>
            </div>
            <div className="box">
              <Button type="submit">Save</Button>
            </div>
          </div>
        </form>
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

      .title {
        h3 {
          margin-top: 0px;
          margin-bottom: 0px;
        }

        small {
          font-size: 14px;
          color: #d1d1d1;
        }
        margin-bottom: 14px;
      }

      .form {
        display: flex;
        align-items: center;

        .balls {
          -webkit-animation: spin 3s linear infinite;
          -moz-animation: spin 3s linear infinite;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        input {
          margin-left: 10px;
          outline: none;
          border-radius: 10px;
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
      float: right;
      display: flex;

      .box {
        margin-left: 10px;
      }
    }
  }
`;
