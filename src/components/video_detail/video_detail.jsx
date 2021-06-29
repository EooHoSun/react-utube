import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = ({video}) => {
    return (
        <section className={styles.detail}> 

            <iframe
                className={styles.video}
                type="text/html"
                width="100%"
                height="500px"
                title="youtube video clip"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <h1>{video.snippet.title}</h1>
            <h2>{video.snippet.channelTitle}</h2>
            <p>{video.description}</p>
        </section>
    );
};
export default VideoDetail;