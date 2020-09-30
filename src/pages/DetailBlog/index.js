import React from 'react';
import { RegisterBg } from '../../assets';
import { Gap } from '../../components';
import './detailBlog.scss';

const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <Gap height={30} />
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia, soluta, laborum reprehenderit, animi necessitatibus impedit laudantium earum enim voluptatibus minima unde quasi tempore quam maxime ut expedita non quo.</p>
        </div>
    )
}

export default DetailBlog
