import React from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Avatar,
  IconButton,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import CircularProgress from "@mui/material/CircularProgress";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ContainerBox = styled(Box)({
  backgroundColor: "brown",
  width: "200px",
});

const Mui = () => {
  return (
    <div>
      <h1>Mui</h1>

      <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />

      <Tooltip title="Hello" placement="top" arrow>
        <Button
          variant="contained"
          color="success"
          size="large"
          startIcon={<AdbIcon color="primary" />}
          endIcon={<SendIcon color="error" />}
        >
          Login
        </Button>
      </Tooltip>

      <ButtonGroup orientation="vertical">
        <Button sx={{ backgroundColor: "red" }}>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>

      <Checkbox
        color="error"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      ></Checkbox>

      <Fab>
        <NavigationIcon />
      </Fab>

      <IconButton aria-label="cart">
        <StyledBadge badgeContent={198765} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      <CircularProgress color="success" />

      <Typography variant="h1">Heading</Typography>

      <ContainerBox>Hello class</ContainerBox>
    </div>
  );
};

export default Mui;
