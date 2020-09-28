import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';

const BlogItem = () => {
    return ( 
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi maxime quidem reprehenderit quos reiciendis, consectetur sequi ipsam quis ullam corporis. Veritatis unde ratione magni numquam? Soluta necessitatibus quia ex.</p>
            </div>
        </div>
    )
}

export default BlogItem
