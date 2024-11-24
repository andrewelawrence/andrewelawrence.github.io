import React, { useEffect, useState } from 'react';
import {
        BlogsContainer,
        BlogsIntro,
        BlogDesc,
        BlogTitle,
        BlogTags,
        BlogEndList,
} from '../styles/Blog.styled';
import { Link } from '../styles/Output.styled';
import Usage from '../Usage';

// Import the pre-generated blog data
import blogData from '../../assets/blogsData.json';

const Blogs: React.FC = () => {
        const [blogs, setBlogs] = useState(blogData);

        useEffect(() => {
                // You can do additional data processing here if needed
        }, []);

        return (
                <div data-testid="blogs">
                        <BlogsIntro>{/* Intro text here */}</BlogsIntro>
                        {blogs.map(
                                ({
                                        date,
                                        title,
                                        author,
                                        description,
                                        tags,
                                        txtUrl,
                                        pdfUrl,
                                }) => (
                                        <BlogsContainer key={date}>
                                                <BlogTitle>{`${title}`}</BlogTitle>
                                                <p>
                                                        {date}
                                                        {' - '}
                                                        {author}
                                                        {' | '}
                                                        <Link
                                                                href={txtUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                        >
                                                                .txt
                                                        </Link>
                                                        {', '}
                                                        <Link
                                                                href={pdfUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                        >
                                                                .pdf
                                                        </Link>
                                                </p>
                                                <BlogDesc>
                                                        {description}
                                                </BlogDesc>
                                                <BlogTags>
                                                        <strong>Tags: </strong>
                                                        {tags.join(', ')}
                                                </BlogTags>
                                        </BlogsContainer>
                                ),
                        )}
                        <BlogEndList />
                </div>
        );
};

export default Blogs;
