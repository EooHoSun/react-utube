
import { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchBar from './components/search_bar/search_bar';
import VideoDetail from './components/video_detail/video_detail';
import Youtube from './service/youtube';


type AppPropsType = {
  youtube : Youtube;
}
type SnippetType = {
  title : string;
  channelTitle : string;
  thumbnails : ThumbnailsType;
}
type ThumbnailsType = {
  medium : UrlType
}
type UrlType = {
  url : string;
}
type VideoType = {
  snippet : SnippetType;
  description : string;
  id: string;
}

export type SearchBarPropsType = {
  onSearch : Function;
}

export type VideoItemPropsType = {
  video : VideoType;
  onVideoClick : Function;
  display : string;
}

export type VideoDetailPropsType = {
  video : VideoType;
}

export type VideoListPropsType = {
  videoList : Array<VideoType>;
  onVideoClick : Function;
  display : string;
};


const App : React.FunctionComponent<AppPropsType> = ({youtube}) => {
  const [videos, setVideos] = useState<Array<VideoType>>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

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
