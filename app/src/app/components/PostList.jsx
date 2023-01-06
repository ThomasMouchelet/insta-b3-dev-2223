import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PostService from "../../setup/services/post.service";
import PostCard from "./PostCard";

const PostList = () => {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        fetAllPosts()
    }, [])

    const fetAllPosts = async () => {
        try {
            const response = await PostService.getAll()
            setPostList(response)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Box>
            <Typography variant="h1">Post List</Typography>
            {postList.map(post => (
                <PostCard post={post} key={post.id} />
            ))}
        </Box>
     );
}
 
export default PostList;