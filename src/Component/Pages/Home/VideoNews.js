import React from 'react'
import './Home.css'

function VideoNews() {
  return (
      <>
      <div className="container-fluid videoNews">
          <div className="videoNw">
         <div className="container">
             <div className="video-heading">
                 <p className='vid-heading'> Video News</p>
             </div>
             <iframe className='iframe' width="100%" height="530vh" src="https://www.youtube.com/embed/gTM-mDgHbBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
          </div>
      </div>
      </>
  )
}

export default VideoNews