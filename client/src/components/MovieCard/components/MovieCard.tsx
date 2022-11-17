import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import CardMenu from "./CardMenu";

export type Movie = {
  _id: string;
  title: string,
  image: string,
  releaseDate: string,
};

type Props = {
  movie: Movie;
  onCardSelect?: any;
};

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

function MovieCard({ movie, onCardSelect }: Props) {
  const { image, title, releaseDate } = movie;
  return (
    <Card sx={{ maxWidth: 260, position: "relative" }}>
      <CardMenu onCardSelect={onCardSelect} />
      <CardMedia component="img" height="350" image={image} alt={title} />
      <CardInfo>
        <Typography variant="h5" gutterBottom component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
}

export default MovieCard;
