import React from 'react'
import { RiExternalLinkFill } from 'react-icons/ri'

const BlogCard = ({imgURL, ctg, title, info}) => {
  return (
    <div className="blog__card">
        <div className="blog__card-img">
            <img src={imgURL} alt={title} />
            <a href="" className='blog__card-link'>
                <RiExternalLinkFill className='blog__card-icon'/>
            </a>
        </div>
        <div className="blog__card-dtl">
            <h5>{ctg}</h5>
            <h4>{title}</h4>
            <p>{info}</p>
        </div>

    </div>
  )
}

export default BlogCard