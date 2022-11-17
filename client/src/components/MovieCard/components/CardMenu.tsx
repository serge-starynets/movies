import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  onCardSelect: (movie: any) => void;
};

function CardMenu(props: Props) {
  const { onCardSelect } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  console.log(anchorEl);

  const handleToggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("close");

    setAnchorEl(null);
  };

  return (
    <IconButton
      aria-label="more"
      onClick={handleToggleMenu}
      sx={{
        position: "absolute",
        right: 5,
        top: 5,
        background: "rgba(255, 255, 255, .3)",
      }}
    >
      <MoreVertIcon />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onCardSelect}>Select</MenuItem>
      </Menu>
    </IconButton>
  );
}

export default CardMenu;
