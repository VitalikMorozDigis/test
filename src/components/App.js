import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Autocomplete from './Autocomplete';
import { Option, MultiValue } from './SelectOptions';
import Select from './Select';

import { filterMovies } from '../redux/actions';
import { ratingOptions, genreOptions } from '../data';


function App () {
    const dispatch = useDispatch();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);

    const handleCategoryChange = useCallback(selected => {
        setSelectedCategories(selected);
        if (selected.length - 1 === genreOptions.length) {
            return dispatch(filterMovies({ filterBy: 'category', filterValue: [] }));
        }
        dispatch(filterMovies({ filterBy: 'category', filterValue: selected.map(({ value }) => value) }));
    }, []);

    const handleRatingChange = useCallback(selected => {
        setSelectedRating(selected);
        if (selected.length - 1 === ratingOptions.length) {
            return dispatch(filterMovies({ filterBy: 'rating', filterValue: [] }));
        }
        dispatch(filterMovies({ filterBy: 'rating', filterValue: selected.map(({ value }) => value) }));
    }, []);

    return (
        <div className="flex justify-center p-16">
            <Autocomplete />
            <div className="w-80 mr-10">
                <Select
                    options={genreOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option, MultiValue }}
                    onChange={handleCategoryChange}
                    allowSelectAll
                    value={selectedCategories}
                    placeholder={'Select Genre'}
                />
            </div>
            <div className="w-80 mr-10">
                <Select
                    options={ratingOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option }}
                    onChange={handleRatingChange}
                    allowSelectAll
                    value={selectedRating}
                    placeholder={'Select Rating'}
                />
            </div>
        </div>
    );
}

export default App;