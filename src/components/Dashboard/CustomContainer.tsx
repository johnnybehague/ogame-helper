import React from "react";
import useStyles from "./Dashboard.styles";
import Container from "@material-ui/core/Container";
import CustomCopyright from "./CustomCopyright";
import Box from "@material-ui/core/Box";
import ListePlanete from "./../Planete/ListePlanete";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

const CustomContainer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {/* <RecipesList /> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <ListePlanete />
        </Grid>
      </Grid>

      <Box pt={4}>
        <CustomCopyright />
      </Box>
    </Container>
  );
};

export default CustomContainer;
