import React from "react";
import { Link, Container, Grid, Box } from "@mui/material";

export const Links = ({ pages }) =>
  pages.map((page, index) => (
    <Grid item xs={3} align="center" sx={{ p: 2 }}>
      <Link href="#" underline="hover" key={index}>
        {page}
      </Link>
    </Grid>
  ));

export const Header = () => {
  const pages = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Links pages={pages} />
    </Grid>
  );
};

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xs">
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
