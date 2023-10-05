import React from 'react'
import users from '/images/users.png'
import duration from '/images/duration.png'

const CoursesCard = ({ imgURL, title, prof, students, des }) => {
    return (
        <div className="courses__card">
            <div className="courses__img"><img src={imgURL} alt={title} /></div>
            <div className="courses__card-info">
                <h4>{title}</h4>
                <h5>{prof}</h5>
                <p>{des}</p>
                <div className="courses__card-row">
                    <div>
                        <span className='courses__card-icon'><img src={users} alt="" />{students}</span>
                    </div>
                    <div>
                        <span className='courses__card-icon'><img src={duration} alt="" />6 Months</span>
                    </div>
                    <div className="courses__card-price">$99.00</div>
                </div>
            </div>
        </div>
    )
}

export default CoursesCard