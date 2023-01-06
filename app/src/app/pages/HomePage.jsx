import { Grid } from "@mui/material";
import PostList from "../components/PostList";

const HomePage = () => {
    return (  
        <Grid
            container
        >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <PostList />
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
     );
}
 
export default HomePage;