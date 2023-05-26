const InfoWrapper = (props) => {
    let {info} = props;
    return <div id="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div id="info-content">
            <div><b>User selected:</b> {info.firstName} {info.lastName}</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                    {info.description}
                </textarea>
            </div>
            <div><b>Address:</b> {info.address.streetAddress}</div>
            <div><b>City:</b> {info.address.city}</div>
            <div><b>State:</b> {info.address.state}</div>
            <div><b>Zip:</b> {info.address.zip}</div>
        </div>
    </div> 
}

export default InfoWrapper;