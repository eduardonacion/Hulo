import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "@fontsource/averia-serif-libre";
import "../css/CasaAurelia.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "@fontsource/fugaz-one";
import "@fontsource/laila";
import Header from "./Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CasaSalud() {
  return (
    <div>
    <Header/>
    
    <Grid
      container
      spacing={2}
      columns={16}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box
        className="background4"
        sx={{
          display: "flex",
          minwidth: "95vw",
          height: "50vh",
          paddingTop: "30px",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/CasaSalud.jpg"}
          alt="test"
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid
          container
          spacing={2}
          columns={16}
          direction="column"
          sx={{ width: "90vw", paddingTop: "10px" }}
        >
          <Grid item xs={1}>
            <Box sx={{ flexGrow: 1, paddingTop: "15px" }}>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={11} lg={11}>
                  <Typography
                    variant="h5"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Boasting Capiz shell windows and wooden furniture, Casa
                    Salud is a Filipino-inspired bungalow that will remind you
                    of childhood trips to the province when visiting your
                    grandparents. It has two air-conditioned bedrooms that can
                    accommodate larger groups – it’s good for 10-30 guests for a
                    day tour. However, only up to six guests can be accommodated
                    for an overnight stay.
                  </Typography>
                </Grid>
                <Grid item xs={5} lg={5}>
                  <Typography
                    variant="h3"
                    textAlign="left"
                    fontFamily="Laila"
                    color="Black"
                    fontWeight="1000"
                  >
                    CASA SALUD
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs="auto" lg={8}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16}>
                <Grid
                  item
                  xs={11}
                  sx={{ minHeight: "30vh", backgroundColor: "#A8A021" }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3} columns={16}>
                      <Grid item xs="auto" lg={5}>
                        <Typography
                          variant="h3"
                          textAlign="left"
                          fontFamily="Averia Serif Libre"
                          color="Black"
                        >
                          Inclusion:
                        </Typography>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          fontFamily="Averia Serif Libre"
                          color="Black"
                        >
                          <li>Entire House</li>
                          <li>2 Airconditioned Bedroom</li>
                          <li>Master’s Bedroom and Bedroom 2</li>
                          <li>1 Bathroom</li>
                          <li>Kitchen Area with Basic Cooking Ware</li>
                          <li>Dining Area</li>
                          <li>Wide Alfresco Dining Area</li>
                          <li>Wide Parking Area</li>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} lg={5}>
                        <Typography
                          variant="h3"
                          textAlign="left"
                          fontFamily="Averia Serif Libre"
                          color="Black"
                        >
                          Free:
                        </Typography>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          fontFamily="Averia Serif Libre"
                          color="Black"
                        >
                          <li>Coffee</li>
                          <li>Towels</li>
                          <li>Basic Toiletries</li>
                          <li>Dishwashing Set</li>
                          <li>Breakfast for 6 pax</li>
                          <li>1 Container of Water</li>
                        </Typography>
                      </Grid>
                      <Grid item xs="auto" lg={5}>
                        <Typography
                          variant="h3"
                          textAlign="left"
                          fontFamily="Averia Serif Libre"
                          color="Black"
                        >
                          Add Ons:
                        </Typography>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          fontFamily="Averia Serif Libre"
                          color="Black"
                        >
                          <li>Extra Bed - P150/P300</li>
                          <li>Extra Breakfast - P200 per head</li>
                        </Typography>
                      </Grid>
                      <Grid item xs={9} lg={12}>
                        <Typography
                          variant="h5"
                          textAlign="left"
                          fontFamily="Averia Serif Libre"
                          color="Black"
                        >
                          STRICTLY FOR BOOKING AND RESERVATION ONLY!
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={6} lg={5}>
                  <Typography
                    variant="h5"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Daytour Soft Opening Rate:
                  </Typography>
                  <Grid item xs={10}>
                    <Typography
                      variant="h3"
                      textAlign="center"
                      fontFamily="Fugaz One"
                      color="Black"
                    >
                      P10,500
                    </Typography>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      fontFamily="Averia Serif Libre"
                      color="Black"
                    >
                      Check-in: 2PM Check-out: 12pm
                      <br></br>(Good for 6 pax)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
    </div>
  );
}

export default CasaSalud;
