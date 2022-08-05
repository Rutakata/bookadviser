import { Grid, Pagination } from "@mui/material";
import React from "react";


interface Props {
    handlePageChange: (searchValue: string, selectedTags: string[], page: number) => void;
    total: number;
    searchValue: string;
    selectedTags: string[];
}

const PaginationBlock: React.FC<Props> = (props) => {
    let handlePageChange = (page: number) => {
        props.handlePageChange(props.searchValue, props.selectedTags, page);
        window.scrollTo({top: 150, left: 0, behavior: 'smooth'}); 
    }
    
    return (
        <Grid item xs={12}>
            <Pagination count={Math.ceil(props.total/9)} 
                        onChange={(event: React.ChangeEvent<unknown>, page: number)=> {handlePageChange(page)}}
            />
        </Grid>
    )
}

export default PaginationBlock;