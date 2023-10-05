import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'

const TeamCard = ({imgURL, prof, des}) => {
  return (
    <div className="team__card">
        <img src={imgURL} alt={prof} />
        <h4>{prof}</h4>
        <div className="team__card-info">
            <h5>{des}</h5>
            <div className="team__card-social">
                <a href=""><RiFacebookFill/></a>
                <a href=""><RiInstagramFill/></a>
                <a href=""><RiTwitterFill/></a>
                <a href=""><RiLinkedinFill/></a>
            </div>
        </div>
    </div>
  )
}

export default TeamCard