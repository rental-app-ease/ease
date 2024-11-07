const ProductTile = ({category,  icon, title, description, price} ) => {
    return(
        <div>
            <h1>{title}</h1>
            
            <img src={`https://savefiles.org/${icon}?shareable_link=391`} alt="title" />
        </div>
    )
}

export default ProductTile