import { Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Title } from "../../Store/Interfaces/MainInterfaces/mainInterfaces";
import React from "react";
import TitleItem from "./TitleItem/TitleItem";


interface Props {
    titles: Title[];
}

function Main(props:Props) {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
                        Here you can find manga by search or by parameters
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Search..." variant="outlined" type="search" fullWidth />
                </Grid>
                {props.titles.map(title => (<TitleItem titleName={title.attributes.title.en} titleDescription={title.attributes.description.en} key={title.id}/>))}
            </Grid>
        </Container>
    )
}

export default Main;