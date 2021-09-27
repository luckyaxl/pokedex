import Link from "next/link";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { capitalize, leadZero } from "src/utils/leadZero";
import Image from "next/image";
import Grow from "@mui/material/Grow";

function PokemonCard({ data, index, owned }) {
  return (
    <Grow in={true}>
      <Grid item lg={2} md={3} sm={6} xs={6}>
        <Link
          href={owned ? `/mypokemons/${index}/${data.name}` : `/${data.name}`}
          passHref
        >
          <Card>
            <div className="id">
              <small>#{leadZero(data.id, 3)}</small>
            </div>

            <div className="img">
              <Image
                unoptimized={process.env.NODE_ENV !== "production"}
                alt="..."
                layout="fill"
                src={
                  data?.dreamworld ||
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
                }
              />
            </div>

            <div className="info">
              <div className="name">{capitalize(data.name)}</div>
              <div className="nickname">{data.nickname}</div>
            </div>
          </Card>
        </Link>
      </Grid>
    </Grow>
  );
}

const Card = styled.div`
  background-color: #282b39;
  color: #ffffff;
  border: 1px solid #3a3f50;
  min-height: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%);
  cursor: pointer;
  width: 100%;
  padding: 15px;
  user-select: none;
  position: relative;

  &:hover {
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 20%);
    border: 1px solid #000;
  }

  &:active {
    box-shadow: inset 0 4px 10px 0 rgb(0 0 0 / 20%),
      0 2px 10px 0 rgb(0 0 0 / 20%);
    background: yellow;
    color: black;

    .info {
      .nickname {
        color: black;
      }
    }
  }

  .id {
    padding: 3px 8px 5px;
    width: fit-content;
    background: #3a3f50;
    color: #fff;
    border-radius: 0px 5px 5px 0px;
    margin-left: -15px;

    small {
      font-weight: bold;
    }
  }

  .img {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    height: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    filter: drop-shadow(0 0 0.75rem crimson);
  }

  .info {
    text-align: center;

    .name {
      font-size: 20px;
    }

    .nickname {
      margin-top: 5px;
      font-size: 15px;
      color: yellow;
    }
  }
`;

export default PokemonCard;
