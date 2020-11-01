import axios from 'axios';

const KEY = "AIzaSyAuLYCzK_9RacKR-yW2Qv92-c2LHTLX7As";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})