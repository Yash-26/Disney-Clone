import axios from "axios";

const BaseUrl = 'https://api.themoviedb.org/3'

const api_key = '19b2cbfaa12b727ed5e314ca543b7312'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf'

const getTrendingVideos = axios.get(BaseUrl+'/trending/all/day?api_key='+api_key)

const getMovieByGenreID = (id) => axios.get(movieByGenreBaseURL+'&with_genres='+id)

export default {
    getTrendingVideos,
    getMovieByGenreID
}