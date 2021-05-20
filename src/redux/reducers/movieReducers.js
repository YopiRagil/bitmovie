const initialState = {
  isLoading: true,
  movies: null,
  detail: null,
  save: null,
};

export default function movieReducer(movieState = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...movieState,
        isLoading: true,
      };
    case 'MOVIE_LIST':
      return {
        ...movieState,
        isLoading: false,
        movies: action.payload,
        save: action.save,
      };
    case 'MOVIE_LIST_NEXT':
      return {
        ...movieState,
        isLoading: false,
        movies: {
          ...movieState.movies,
          Search: [...movieState.movies.Search, ...action.payload?.Search],
        },
        save: action.save,
      };
    case 'RESET_MOVIE':
      return {
        ...movieState,
        isLoading: false,
        movies: null,
      };
    case 'SET_DETAIL':
      return {
        ...movieState,
        detail: action.payload,
      };
    default:
      return movieState;
  }
}
