import axios from 'axios';
const movieUrl = 'http://www.omdbapi.com';
const apiKey = 'faf7e5bb';
const url = `${movieUrl}/?apikey=${apiKey}`;

export const getMovieAll = (page = 1, keyword = null, type) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING',
    });
    await axios
      .get(
        url +
          `&s=${keyword ? keyword : 'action'}${
            type ? '&type=' + type : ''
          }&page=${page}`
      )
      .then((response) => {
        if (page === 1) {
          dispatch({
            type: 'MOVIE_LIST',
            payload: response.data,
            save: {
              page: page,
              keyword: keyword,
              type: type,
            },
          });
        } else {
          dispatch({
            type: 'MOVIE_LIST_NEXT',
            payload: response.data,
            save: {
              page: page,
              keyword: keyword,
              type: type,
            },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: 'RESET_MOVIE',
        });
      });
  };
};

export const setDetails = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_DETAIL',
      payload: data,
    });
  };
};
