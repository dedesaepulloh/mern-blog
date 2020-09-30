import React from 'react';
import { RegisterBg } from '../../assets';
import { Gap, Link } from '../../components';
import './detailBlog.scss';
import { useHistory } from 'react-router-dom';

const DetailBlog = () => {

    const history = useHistory();

    return (
        <div className="detail-blog-wrapper">
            <Gap height={30} />
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia, soluta, laborum reprehenderit, animi necessitatibus impedit laudantium earum enim voluptatibus minima unde quasi tempore quam maxime ut expedita non quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia, soluta, laborum reprehenderit, animi necessitatibus impedit laudantium earum enim voluptatibus minima unde quasi tempore quam maxime ut expedita non quo.</p>
            <Gap height={20} />
            <Link title="Kembali ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
