const API = {
  GET_BANNER: '/3/movie/top_rated?api_key=cf8f6a53d30a9b0ff444944a5383c213',
  GET_POPULER: '/3/movie/popular?api_key=cf8f6a53d30a9b0ff444944a5383c213&page=1&per_page=10',
  GET_NEW_MOVIE: '/3/movie/now_playing?api_key=cf8f6a53d30a9b0ff444944a5383c213&page=1&per_page=10',
  GET_LIST_GENRE: '/3/genre/movie/list?api_key=cf8f6a53d30a9b0ff444944a5383c213',
  GET_CATEGORY: '/3/discover/movie?api_key=cf8f6a53d30a9b0ff444944a5383c213',
  GET_SEARCH_MOVIE: '/3/search/movie?api_key=cf8f6a53d30a9b0ff444944a5383c213',
  GET_LIST_GENRE_TV: '/3/genre/tv/list?api_key=cf8f6a53d30a9b0ff444944a5383c213',
  GET_TV_SHOW: '/3/discover/tv?api_key=cf8f6a53d30a9b0ff444944a5383c213'
}

export default API
