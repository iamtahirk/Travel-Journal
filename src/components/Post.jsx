export default (props) => {
    return (
        <>
            <div className='card'>
                <img src={`/images/${props.imageUrl}`} alt="" className="post-image" />
                
                <div className="post-contents">
                    <div className="location-container">
                        <div className="country">
                            <img src="/images/location_pin.svg" alt="" className="location-pin" />
                            <p>{props.location}</p>
                        </div>
                        <p className="map-link">
                            <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                        </p>
                    </div>

                    <h1 className="post-title">{props.title}</h1>
                    <p className="post-date">{props.startDate} - {props.endDate}</p>
                    <p className="post-description">{props.description}</p>
                </div>
            </div>
            <hr />
        </>
    )
}