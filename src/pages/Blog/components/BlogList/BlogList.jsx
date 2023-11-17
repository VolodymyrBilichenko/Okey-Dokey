import React, {useEffect, useState} from 'react';
import {BlogListItem} from "./components/BlogListItem";
import {getAllBlogs} from "../../../../api/apiRequests";

export const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        const blogsData = await getAllBlogs();
        setBlogs(blogsData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ul className="blog__list">
            {blogs.map((blog) => (
                <BlogListItem key={blog.id} blog={blog}/>
            ))}
        </ul>
    );
}
