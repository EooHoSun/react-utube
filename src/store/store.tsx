import { VideoType } from "app";
import { action, makeObservable, observable } from "mobx";
import Youtube from "service/youtube";
import axios, { AxiosInstance } from "axios";


export class Store{

    @observable 
    private _videoList : Array<VideoType> = [];
    @observable
    private _selectedVideo: any;
    private _youtube : Youtube;

    constructor(httpClient : AxiosInstance) {
        makeObservable(this);
        this._youtube = new Youtube(httpClient);
        this.initVideoList();
    }

    public get videoList() : Array<VideoType> {
        console.log(`computed videoList`);
        return this._videoList;
    }

    public get selectedVideo() : VideoType{
        console.log(`computed selectedVideo`);
        return this._selectedVideo;
    }
    
    public set videoList(videoList : Array<VideoType>) {
        this._videoList = videoList;
    }

    public set selectedVideo(selectedVideo : VideoType){
        this._selectedVideo = selectedVideo;
    }

    @action
    public initVideoList():void{
        console.log('initVideoList');
        this._youtube = new Youtube(httpClient);
        this._youtube.mostPopular()
        .then(res => {
            this.videoList = res;
        });
    }
    
    @action
    public selectVideo(video : VideoType):void{
        console.log('selectVideo');
        debugger;
        this.selectedVideo = video;
    }

    @action
    public handleSearch(query : string):void{
        console.log('handleSearch');
        this._youtube.search(query)
        .then(res => {
            this.videoList = res;
        });
        //this.selectedVideo = null;
    }

}


const youtubeAPIKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {key: youtubeAPIKey},
});

export default new Store(httpClient);