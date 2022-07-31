import { Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Title } from "../../Store/Interfaces/MainInterfaces/mainInterfaces";
import React, {  Dispatch, SetStateAction } from "react";
import TitleItem from "./TitleItem/TitleItem";


interface Props {
    titles: Title[];
    handleSearch: (search: string) => void;
    setSearchValue: Dispatch<SetStateAction<string>>;
    searchValue: string;
    loading: boolean;
}

function Main(props:Props) {
    return (
        <Container sx={{height: "800px"}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
                        Here you can find manga by search or by parameters
                    </Typography>

                </Grid>
                <Grid item xs={12}>
                    <TextField label="Search..." variant="outlined" type="search" fullWidth value={props.searchValue}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        props.setSearchValue(e.target.value);
                        props.handleSearch(e.target.value);
                    }}/>
                </Grid>
                {props.titles.length === 0 ? <Grid item xs={12}><Typography variant="h5" component="h5" sx={{textAlign: "center"}}>You haven't searched anything yet</Typography></Grid>:
                props.loading ? <Grid item xs={12}><Typography variant="h3" component="h3" sx={{textAlign: "center"}}>Loading...</Typography></Grid>:
                props.titles.map(title => (<TitleItem titleName={title.attributes.title.en} titleDescription={title.attributes.description.en} key={title.id}/>))}
            </Grid>
        </Container>
    )
}

export default Main;