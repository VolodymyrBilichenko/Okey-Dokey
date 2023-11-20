import React, {useState} from 'react';
import {BlogFilterSelect} from "./components/BlogFilterSelect";

export const BlogFilter = ({blogs, setBlogs}) => {
    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setBlogs([...blogs].sort((a, b) => {
            if (sort === 'short_description') {
                const dateA = new Date(a[sort]);
                const dateB = new Date(b[sort]);

                return dateA - dateB;
            } else {
                return a[sort].localeCompare(b[sort]);
            }
        }))
    }

    return (
        <form className="blog__filter">
            <div className="blog__search">
                <label>
                    <input type="search" name="search" placeholder="Поиск" required/>
                </label>
                <button className="blog__search--submit" type="button" title="Поиск">
                    <svg width="17" height="17" viewBox="0 0 17 17">
                        <use xlinkHref="#search"></use>
                    </svg>
                </button>
            </div>

            <div className="blog__sort">
                <span className="blog__sort--name">Сортировать</span>
                <div className="blog__sort--select">

                    <BlogFilterSelect
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue='За'
                        options={[
                            {value: 'short_description', name: 'За Датой'},
                            {value: 'title', name: 'В алфавитном порядке'},
                        ]}
                    />
                </div>
            </div>
        </form>
    );
}
