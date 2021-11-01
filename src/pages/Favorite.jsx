import React from 'react'

import Card from '../components/Card/Card'

const Favorite = ({items, onAddToFavorite}) => {
    return (
        <div>
            <h1>Мои закладки</h1>
            <div className='boots'>
            {
            items
            .map((el) => (
                <Card
                key={el.id}
                favorited
                onFavorite={onAddToFavorite}
                {...el}
                />
            ))
            }
            </div>
        </div>
    )
}

export default Favorite
