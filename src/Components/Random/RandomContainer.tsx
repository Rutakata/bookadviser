import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


const RandomContainer = () => {
    return (
        <Container sx={{minHeight: "800px"}}>
            <Typography variant="h4" component="h4">Random anime</Typography>
        </Container>
    )
}

export default RandomContainer;