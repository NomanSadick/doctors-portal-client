import React from 'react';

const BlogPost = (props) => {
    const { title, author, authorImg, date, description } = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="60"/>
                <div>
                    <h6>{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h6>{title}</h6>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;