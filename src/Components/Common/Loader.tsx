import { Box, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


const Loader: React.FC = () => {
    return (
        <Container sx={{minHeight: "800px"}}>
            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        </Container>
    )
}

export default Loader;