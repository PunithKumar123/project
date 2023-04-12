import React from "react";
import PostForm from "./Postform";
import { useLocation } from "react-router";

export const posts = () => {
    
    const location=useLocation();
    const data=location.state;
    console.log(data);
    return(
  <PostForm title={data.title} description={data.description} />

);
}
