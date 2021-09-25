import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import styled from "@emotion/styled";

function PokemonCard({ data }) {
  return (
    <Grid item lg={2} md={3} sm={6} xs={6}>
      <Link href={`/${data?.name}`}>
        <Card>
          <div className="id">
            <small>#{data?.id}</small>
          </div>

          <div className="img">
            <img height="100%" width="150" src={data?.dreamworld} />
          </div>

          <div className="info">
            <div className="title">{data?.name}</div>
          </div>
        </Card>
      </Link>
    </Grid>
  );
}

const Card = styled.div`
  background-color: #ffffff;
  min-height: 100px;
  border-radius: 8px;
  box-shadow: 1px 1px 60px 0px #00000017;
  cursor: pointer;
  width: 100%;
  padding: 15px;
  user-select: none;

  .id {
    padding: 3px 8px 5px;
    width: fit-content;
    background: #212121;
    color: #fff;
    border-radius: 0px 5px 5px 0px;
    margin-left: -15px;
  }

  .info {
    text-align: center;

    .title {
      font-size: 20px;
    }

    small {
      color: #d2d2d2;
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
    filter: drop-shadow(0 0 0.75rem crimson);
  }
`;

export default PokemonCard;
