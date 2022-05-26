function RestorantDetails(){
    return(
        <div style={{display:"flex",gap:"2rem"}}>
            <div>
                <img src={url} alt={title} />
            </div>
            <div>
                <div>{title}</div>
                <div>{tags?.join(", ")}</div>
                <div>Cost ₹${cost} for One</div>
            </div>
            <div>
                <div>{rating}</div>
                <div>{votes} votes</div>
                <div>{reviews} rev</div>
            </div>
        </div>
    )
}

export default RestorantDetails