
import React from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchBar from './components/search_bar/search_bar';
import VideoDetail from './components/video_detail/video_detail';
import {observer, inject} from 'mobx-react';
import {Store} from 'store/store'


type AppPropsType = {
  store : Store;
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

export type VideoType = {
  snippet : SnippetType;
  description : string;
  id: string;
}

export type SearchBarPropsType = {
  store ?: Store;
}

export type VideoItemPropsType = {
  video : VideoType;
  store ?: Store;
  display : string;
}

export type VideoDetailPropsType = {
  video : VideoType;
}

export type VideoListPropsType = {
  videoList : Array<VideoType>;
  display : string;
};


@inject('store')
@observer
class App2 extends React.Component<AppPropsType,AppPropsType>{

  render(){
    const {store} = this.props;
    return (
      <div className={styles.app}>
        <SearchBar/>
        <section className={styles.content}>
          {
            store.selectedVideo && 
            (<div className={styles.detail}>
              <VideoDetail video={store.selectedVideo}/>
            </div>)
          }
          <div className={styles.list}>
            <VideoList 
              videoList={store.videoList}
              display={store.selectedVideo ? 'list' : 'grid'}
            />
          </div>
        </section>
        
      </div>
    );
  }
}

const App : React.FunctionComponent<AppPropsType> = inject('store')(observer(({store})  => {

  return (
    <div className={styles.app}>
      <SearchBar/>
      <section className={styles.content}>
        {
          store.selectedVideo && 
          (<div className={styles.detail}>
            <VideoDetail video={store.selectedVideo}/>
          </div>)
        }
        <div className={styles.list}>
          <VideoList 
            videoList={store.videoList}
            display={store.selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
      
    </div>
  );
}));

export default App;
