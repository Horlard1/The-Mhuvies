import React, { createContext, useState } from 'react'

export const videoContext = createContext()

const VideoContextProvider= (props)=>{
    const [videos, setVideos] = useState(null)
    const videoData = [videos, setVideos]
    return(
        <videoContext.Provider value={videoData}>
            {props.children}
        </videoContext.Provider>
    )
}
export default VideoContextProvider
