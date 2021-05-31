import * as c from '../constants/movies';

export const filterMovies = ({ filterBy, filterValue }) => ({
    type: c.FILTER_MOVIES,
    filterBy,
    filterValue,
});