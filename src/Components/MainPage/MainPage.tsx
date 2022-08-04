import { Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MainPageItemContainer from "./MainPageItem/MainPageItemContainer";
import { TitleData } from "../Common/TitlePage/Title";
import { Tag } from "../../Store/Interfaces/MainInterfaces/mainInterfaces";


interface Props {
    titles: TitleData[];
    handleSearch: (search: string) => void;
    searchValue: string;
    loading: boolean;
    tags: Tag[];
}

const MainPage = (props:Props) => {
    return (
        <Container sx={{minHeight: "800px", marginBottom: "30px"}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
                        Find what you will love
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Search..." variant="outlined" type="search" fullWidth value={props.searchValue}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        props.handleSearch(e.target.value);
                    }}/>
                </Grid>

                {props.titles.length === 0 ? 
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h5" sx={{textAlign: "center"}}>
                            You haven't searched anything yet
                        </Typography>
                    </Grid>:
                props.loading ? 
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
                            Loading...
                        </Typography>
                    </Grid>:
                props.titles.map(title => (
                    <MainPageItemContainer key={title.id} titleData={title} />
                ))}
            </Grid>
        </Container>
    )
}

export default MainPage;