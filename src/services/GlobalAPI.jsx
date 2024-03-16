import axios from "axios";
import { useState } from "react";

const api_key = "676a0a0a2b880675567917d7c83454dc";
const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}` ;
const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&api_key=${api_key}` ;
const movieDetails = `https://api.themoviedb.org/3/movie/`;





const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

const getMovieByGenreId = (id) => {
    return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
}

const getSearchMovieUrlFun = (name) => {
    return axios.get(`${searchMovieUrl}&query=${name}`);
}

const getmovieDetails = (id) => {
    return axios.get(`${movieDetails + id}?api_key=${api_key}`);
}

const getSimilarMovies = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`;
    return axios.get(url);
}

const getRecommendationsMovies = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`;
    return axios.get(url);
}

const getMovieTrailer = (id) => {
    // const [key, setKey] = useState("");
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`;

    return axios.get(url);


    // useEffect(() => {
    //     const fetchTrailerKey = async () => {
    //       try {
    //         const response = await axios.get(url);
    //         setKey(response.data.results?.[0].key);
    //       } catch (error) {
    //         console.error('Error fetching trailer key:', error);
    //       }
    //     };
    
    //     fetchTrailerKey();
    // }, [id]);

    // return `https://www.youtube.com/watch?v=${key}`;
}

const getActorsOfMovie = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`;
    return axios.get(url);
}

const getPopularMovies = (page) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${page}`;
    return axios.get(url);
}

const getPopularTvshows = (page) => {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=${page}`;
    return axios.get(url);
}

const getTvshowDetails = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`;
    return axios.get(url);
}

const getTvshowTrailer = (id) => {
    // const [key, setKey] = useState("");
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${api_key}`;
    return axios.get(url);
}

const getSimilarTvshows = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${api_key}`;
    return axios.get(url);
}

const getRecommendationsTvshows = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${api_key}`;
    return axios.get(url);
}

const getActorsOfTvshow = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${api_key}`;
    return axios.get(url);
}

const getActors = (page) => {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&page=${page}`;
    return axios.get(url);
}

const getActorDetails = (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`;
    return axios.get(url);
}

const getActorImages = (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}/images?api_key=${api_key}`;
    return axios.get(url);
}

const getActorMovieCredits = (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${api_key}`;
    return axios.get(url);
}

const getActorTvshowCredits = (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${api_key}`;
    return axios.get(url);
}

const getMovieImages = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${api_key}`;
    return axios.get(url);
}

const getTvshowImages = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/images?api_key=${api_key}`;
    return axios.get(url);
}

export default {
    getTrendingVideos, 
    getMovieByGenreId, 
    getSearchMovieUrlFun,
    getmovieDetails,
    getRecommendationsMovies,
    getSimilarMovies,
    getMovieTrailer,
    getActorsOfMovie,
    getPopularMovies,
    getPopularTvshows,
    getTvshowDetails,
    getTvshowTrailer,
    getSimilarTvshows,
    getRecommendationsTvshows,
    getActorsOfTvshow,
    getActors,
    getActorDetails,
    getActorImages,
    getActorMovieCredits,
    getActorTvshowCredits,
    getMovieImages,
    getTvshowImages
}