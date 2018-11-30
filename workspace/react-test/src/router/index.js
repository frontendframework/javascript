import React from 'react';

export const RouterMain = ({match}) => (
    <div>
        Router param test...{match.url}...{match.params.id}
    </div>
)

export const Always = () => (
    <div>
        Always..............
    </div>
)