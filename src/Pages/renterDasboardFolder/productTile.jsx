const ProductTile = ({category,  image, title, description, price, amenities, googlemaplink, location} ) => {
    return(
        <div>
            <h1>{title}</h1>
            <h1>{category}</h1>
            <h1>{description}</h1>
            <h1>{price}</h1>
            <h1>{location}</h1>
            <h1>{googlemaplink}</h1>
            <h1>{amenities}</h1>
            <h1>{roomstatus}</h1>
            <img src={`https://savefiles.org/${image}?shareable_link=391`} alt="title" />
            
        </div>
    )
}

export default ProductTile