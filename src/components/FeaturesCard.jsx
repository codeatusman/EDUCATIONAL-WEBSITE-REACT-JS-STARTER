import React from 'react'

const FeaturesCard = ({icon, title }) => {
  return (
    <div className="features__card">
        <img src={icon} alt={title} className='features__card-icon'/>
        <h4 className='features__card-title'>{title}</h4>
    </div>
  )
}

export default FeaturesCard