import React from 'react'

const SearchRate = (props) => {
    return (
        <div>
            {Array.from({ length: 5 }, (star, i) => (
                <span onClick={() => { props.starSelected(i) }}>
                    {i <= props.rate ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
};

export default SearchRate;