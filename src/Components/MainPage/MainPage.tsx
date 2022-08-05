import { Grid, Pagination, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Dispatch, SetStateAction } from "react";
import MainPageItemContainer from "./MainPageItem/MainPageItemContainer";
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterContainer from "./Filter/FilterContainer";
import Loader from "../Common/Loader";
import { Title } from "../../Store/Interfaces/mainInterfaces";
import { paginationActionType } from "./MainPageContainer";
import PaginationBlock from "./Pagination";


interface Props {
    titles: Title[];
    handleSearch: (search: string) => void;
    searchValue: string;
    loading: boolean;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    total: number;
    handlePageChange: (searchValue: string, selectedTags: string[], page: number) => void;
    paginationAction: paginationActionType;
    setPaginationAction: React.Dispatch<React.SetStateAction<paginationActionType>>;
    selectedTags: string[];
}

const MainPage = (props:Props) => {
    return (
        <Container sx={{minHeight: "800px", marginBottom: "30px"}}>
            <FilterContainer isOpen={props.isOpen} setOpen={props.setOpen} setPaginationAction={props.setPaginationAction} />

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
                        Find what you will love
                    </Typography>
                </Grid>

                <Grid item xs={10} md={11}>
                    <TextField label="Search..." variant="outlined" type="search" fullWidth value={props.searchValue}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        props.handleSearch(e.target.value);
                    }}/>
                </Grid>
                <Grid item xs={2} md={1}>
                    <FilterListIcon fontSize="large" color="primary" onClick={() => props.setOpen(!props.isOpen)}/>
                </Grid>

                {props.titles.length === 0 ? 
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h5" sx={{textAlign: "center"}}>
                            You haven't searched anything yet
                        </Typography>
                    </Grid>:
                props.loading ? 
                    <Grid item xs={12}>
                        <Loader />
                    </Grid>:
                props.titles.map(title => (
                    <MainPageItemContainer key={title.id} titleData={title} />
                ))}
                <Grid item xs={12}>
                    <PaginationBlock handlePageChange={props.handlePageChange} searchValue={props.searchValue} 
                                     selectedTags={props.selectedTags} total={props.total} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainPage;