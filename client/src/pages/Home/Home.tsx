import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import MovieCard from "../../components/MovieCard";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 140px)",
  position: "sticky",
  top: theme.spacing(2),
}));

function Home() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={1}>Filters</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={1}>
          <Box sx={{ flexGrow: 1, padding: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <MovieCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <MovieCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <MovieCard />
              </Grid>
            </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies elevation={1}>Selected Movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
