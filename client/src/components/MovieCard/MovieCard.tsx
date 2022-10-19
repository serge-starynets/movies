import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MovieCard() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleToggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 260, position: "relative" }}>
      <IconButton 
        aria-label="more"
        onClick={handleToggleMenu}
        sx={{ position: "absolute", right: 0 }}
        >
        <MoreVertIcon />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {}}>More</MenuItem>
      </Menu>
      </IconButton>
      <CardMedia
        component="img"
        height="350"
        image="https://www.themoviedb.org/t/p/w440_and_h660_face/w2nOl7KhwcUj11YxEi9Nknj9cqu.jpg"
        alt="Lisa"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          Lisa
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Jan 25, 2021
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
