// import React from 'react'

import { IMG_CDN_URL } from "../utils/constant"

// eslint-disable-next-line react/prop-types
const MoiveCard = ({posterPath}) => {
  return (
    <div className="w-32 mx-2">
      <img alt="Movie Image" src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MoiveCard