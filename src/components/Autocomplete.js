import React, { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

const AutocompleteItem = ({ item, highlighted }) => (
    <div
        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
        className={'flex px-5 my-2 w-80 justify-between	justify-items-center cursor-pointer'}
    >
        <div className="flex flex-col">
            {item.label}
            <ReactStars
                size={10}
                activeColor="#ffd700"
                isHalf
                edit={false}
                count={10}
                value={item.rating}
            />
        </div>

        {item.category}
    </div>
);
const Autocomplete = () => {
    const filteredMoviesList = useSelector(state => state.movies.filteredMoviesList);
    const [movie, setMovie] = useState('');

    return (
        <ReactAutocomplete
            renderInput={props => (
                <input {...props} className={'h-8 border-gray-600 border mr-5 p-2'} />
            )}
            items={filteredMoviesList.map(({ name, rating, category }) => ({
                id: name,
                label: name,
                rating,
                category
            }))}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) => (
                <AutocompleteItem key={item.id} item={item} highlighted={highlighted} />
            )}
            value={movie}
            onChange={e => setMovie(e.target.value)}
            onSelect={value => setMovie(value )}
            className={'m-10'}
        />
    );
};

export default Autocomplete;

AutocompleteItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        rating: PropTypes.number,
        category: PropTypes.string,
    }),
    highlighted: PropTypes.bool,
};