import React from 'react';
import ReactStars from 'react-rating-stars-component';

export const genreOptions = [
    { value: 'Action', label: 'Action' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Thriller', label: 'Thriller' }
];
  
export const ratingOptions = Array
    .from({ length: 10 }, (_, i) => i + 1)
    .map(value => ({
        value,
        label: 
        <ReactStars
            size={15}
            activeColor="#ffd700"
            isHalf
            edit={false}
            count={10}
            value={value}
        />
    }));

export const moviesList = [
    {
        name: 'The Matrix',
        rating: 7.5,
        category: 'Action'
    },
    {
        name: 'Focus',
        rating: 6.9,
        category: 'Comedy'
    },
    {
        name: 'The Lazarus Effect',
        rating: 6.4,
        category: 'Thriller'
    },
    {
        name: 'Everly',
        rating: 5.0,
        category: 'Action'
    },
    {
        name: 'Maps to the Stars',
        rating: 7.5,
        category: 'Drama'
    }
];
