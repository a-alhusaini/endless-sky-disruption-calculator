import Head from "next/head";
import disruptionCalculator from "../disruption";
import { useState } from "react";
import {
  Grid,
  Item,
  TextField,
  Typography,
  Container,
  Box,
  Input,
} from "@material-ui/core";

export default function Home() {
  const frames = [60, 120, 180, 240, 300, 360, 420, 480, 540, 600];
  const [disruptors, setDisruptors] = useState("");
  return (
    <>
      <Head>
        <title>Endless Sky Disruption Calculator</title>
      </Head>
      <Container>
        <Box padding={2}>
          <Box paddingBottom={2}>
            <Typography variant={"h3"}>
              Endless Sky Disruption Calculator
            </Typography>
          </Box>
          <Typography variant={"body1"}>
            Disruption in Dndless Sky is hard to calculate. And figuring out if
            disruptors are worth using sometimes gets complicated.
          </Typography>
          <Typography variant={"body1"}>
            This is why I made this calculator
          </Typography>
          <Box paddingY={2}>
            <TextField
              onChange={(e) => setDisruptors(e.target.value)}
              value={disruptors}
              fullWidth
              label="Number of Disruptors"
            />
          </Box>
          <Grid container spacing={2}>
            {frames.map((frameCount) => (
              <Grid xs={6} item key={frameCount}>
                <Box paddingY={1}>
                  <Typography variant="body2">
                    Disruption after {frameCount / 60} seconds:{" "}
                    {disruptionCalculator(frameCount, disruptors)}
                  </Typography>
                  <Box padding={1} />
                  <Typography variant="body2">
                    Hull damage after {frameCount / 60} seconds:{" "}
                    {Math.floor(
                      (1 - disruptionCalculator(frameCount, disruptors)) * 100
                    )}
                    %
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
