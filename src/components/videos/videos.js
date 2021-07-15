import React, {useContext} from 'react'
import { videoContext } from '../../context/videoContext'
import './videos.css'

const Videos = ({history}) => {
    const [video] = useContext(videoContext)
    const { encodings} = video.resource
    return (<>
        <button className="back__button" onClick={()=>history.goBack()}><i class="fas fa-arrow-left"></i>Back</button>
        {video && <div className="video__container">
            <video className="video__content" autoPlay="on" controls="on">
                {encodings.map(items=>(
                    <source src={items.playUrl} type={items.mimeType}></source>
                ))}
                {/* <source src={video.resource.encodings[1].playUrl} type={video.resource.encodings[1].mimeType}></source> */}
            </video>
            </div>}
    </>)
}

export default Videos
