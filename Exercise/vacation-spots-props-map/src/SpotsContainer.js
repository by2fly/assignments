import React from 'react';
import Spot from './Spot';

import vacationSpots from './Spots.json';


const SpotsContainer = () => {
    const mappedSpots = vacationSpots.map((spot, i) => <spot key={spot.place.i}place={spot.place} price={spot.price} timeToGo={spot.timeToGo});
        return (
            <div>
                {mappedSpots}
            </div>
    )
}

export default SpotsContainer