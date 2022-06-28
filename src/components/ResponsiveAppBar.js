import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


import BasicMenu from "./BasicMenu";

// const pages = ["About Us", "The ThieLot Difference", "Services", "Contact Us"];
const pages = [
  { link: "#mission", text: "About Us" },
  { link: "#difference", text: "The ThieLot Difference" },
  { link: "#services", text: "Services" },
  { link: "#contact", text: "Contact Us" },
];
const services = [
  { link: "#residential", text: "Residential Painting" },
  { link: "#commercial", text: "Commercial Painting" },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      {/* <img className="logo-dark" src={logosmall} alt="" /> */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* About Us  */}
              <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                <a href={"#mission-section"}>
                  <Typography textAlign="center">ABOUT US</Typography>
                </a>
              </MenuItem>

              {/* ThieLot Difference */}
              <MenuItem key={"Difference"} onClick={handleCloseNavMenu}>
                <a href={"#difference"}>
                  <Typography textAlign="center">
                    THE THIELOT DIFFERENCE
                  </Typography>
                </a>
              </MenuItem>

              {/* Services */}
              <MenuItem key={"Contact"} onClick={handleCloseNavMenu}>
                <a href={"#residential"}>
                  <Typography textAlign="center">RESIDENTIAL PAINTING</Typography>
                </a>
              </MenuItem>
              <MenuItem key={"Contact"} onClick={handleCloseNavMenu}>
                <a href={"#commercial"}>
                  <Typography textAlign="center">COMMERCIAL PAINTING</Typography>
                </a>
              </MenuItem>

              {/* Contact Us */}
              <MenuItem key={"Contact"} onClick={handleCloseNavMenu}>
                <a href={"#contact"}>
                  <Typography textAlign="center">CONTACT US</Typography>
                </a>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {/* About Us */}
            <a href={"#mission-section"}>
              <Button
                key={"mission"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About Us
              </Button>
            </a>
            {/* ThieLot Difference */}
            <a href={"#difference"}>
              <Button
                key={"difference"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                The ThieLot Difference
              </Button>
            </a>
            {/* Services*/}
            <BasicMenu mainItem="Services" subItems={services} />
            {/* Contact Us*/}
            <a href={"#contact"}>
              <Button
                key={"contact"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contact Us
              </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
      <a href="tel:5198599458">
        <p id="dynamic-call" className="dynamic-call-hide">Call Now for a Free Estimate</p>
      </a>
    </AppBar>
  );
}
