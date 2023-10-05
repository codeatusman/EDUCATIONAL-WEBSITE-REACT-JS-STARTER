import React from 'react'
import quotes from '/images/quotes.png'

const TestimonialCard = ({imgURL, title, about, des}) => {
  return (
    <div className="testimonial__card">
      <img src={quotes} alt="" />
      <p>{des}</p>
      <div className="testimonial__card-info">
        <img src={imgURL} alt={title} />
        <div>
          <h4>{title}</h4>
          <span>{about}</span>
        </div>
      </div>

    </div>
  )
}

export default TestimonialCard