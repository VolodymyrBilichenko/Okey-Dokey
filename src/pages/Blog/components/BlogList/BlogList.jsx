import {BlogListItem} from "./components/BlogListItem";

export const BlogList = ({blogs}) => {

    return (
        <ul className="blog__list">
            {blogs.map((blog) => (
                <BlogListItem key={blog.id} blog={blog}/>
            ))}
        </ul>
    );
}
