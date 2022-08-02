import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


const Loader: React.FC = () => {
    return (
        <Container sx={{minHeight: "800px"}}>
            <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
                Loading...
            </Typography>
        </Container>
    )
}

export default Loader;