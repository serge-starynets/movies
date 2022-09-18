import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
          <Paper elevation={1}>List of Movies</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies elevation={1}>Selected Movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
