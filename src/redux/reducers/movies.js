import { handleActions } from 'redux-actions';

import * as c from '../constants/movies';
import { moviesList } from '../../data';

const initialState = {
    initialMoviesList: moviesList,
    filteredMoviesList: moviesList,
    appliedFilters: {
        category: [],
        rating: [],
    }
};

const moviesData = handleActions(
    new Map([
        [
            c.FILTER_MOVIES,
            (state, { filterBy, filterValue }) => {
                const filters = {
                    ...state.appliedFilters,
                    [filterBy]: filterValue
                };
                const result = state.initialMoviesList.reduce((a, b) => {
                    if (filters.category.length && filters.rating.length) {
                        return (
                            filters.category.includes(b.category)
                            && Number.parseInt(filters.rating) === Number.parseInt(b.rating))
                            ? [...a, b] : a;
                    }
                    if (filters.category.length) {
                        return filters.category.includes(b.category) ? [...a, b] : a;
                    }
                    if (filters.rating.length) {
                        return Number.parseInt(filters.rating) === Number.parseInt(b.rating) ? [...a, b] : a;
                    }
                    return state.initialMoviesList;
                }, []);

                return {
                    ...state,
                    appliedFilters: {
                        ...state.appliedFilters,
                        [filterBy]: filterValue
                    },
                    filteredMoviesList: result
                    
                };
            } 
        ]
    ]),
    initialState
);

export default moviesData;
