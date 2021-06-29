
import { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchBar from './components/search_bar/search_bar';
import VideoDetail from './components/video_detail/video_detail';



const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');

  const selectVideo = useCallback(video => {
    setSelectedVideo(video);
  }, []);

  const handleSearch = useCallback(query => {
    youtube.search(query)
    .then(res => setVideos(res));

    setSelectedVideo(null);
  }, []);

  useEffect(() => {
    youtube.mostPopular()
    .then(res => setVideos(res));
  }, [youtube]);

  console.log('전체 랜더링!!');
  return (
    <div className={styles.app}>
      <SearchBar onSearch={handleSearch}/>
      <section className={styles.content}>
        {
        selectedVideo && 
          (<div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>)
        }
        <div className={styles.list}>
          <VideoList 
            videoList={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
      
    </div>
  );
}

export default App;
