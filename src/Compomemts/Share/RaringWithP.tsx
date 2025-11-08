

function RaringWithP(rating:{rating?:number}) {
    return (
        <div className="text-yellow-500 text-xs mt-2 flex items-center">

            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <p className="pl-4 text-base text-gray-400">{rating.rating}</p>
        </div>
    )
}

export default RaringWithP
