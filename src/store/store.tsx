import { VideoType } from "app";
import { observable } from "mobx";
import Youtube from "service/youtube";
import axios, { AxiosInstance } from "axios";


class Store{

    @observable 
    private videoList : Array<any> = [];
    @observable
    private selectedVideo : VideoType | undefined;
    private youtube : Youtube;

    constructor(httpClient : AxiosInstance) {
        this.youtube = new Youtube(httpClient);
        this.initVideoList();
    }

    initVideoList(){
        this.youtube.mostPopular()
        .then(res => {
            this.videoList = res;
        });
    }
    
    selectVideo(video : VideoType){
        this.selectedVideo = video;
    }

    handleSearch(query : string){
        this.youtube.search(query)
        .then(res => {
            this.videoList = res;
        });
        this.selectedVideo = undefined;
    }

}


const youtubeAPIKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {key: youtubeAPIKey},
});
export default new Store(httpClient);