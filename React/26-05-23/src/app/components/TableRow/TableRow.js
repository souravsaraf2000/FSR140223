const TableRow = (props) => {

    let {user, selectedItem} = props;

    return <div>
        <tr className={`data-row ${selectedItem == user.id ? 'active' : ''}`} onClick={()=>props.handleClick(user.id)}>
            <td className="column1">{user.id}</td>
            <td className="column2">{user.firstName}</td>
            <td className="column3">{user.lastName}</td>
            <td className="column4">{user.email}</td>
            <td className="column5">{user.phone}</td>
        </tr> 
    </div>
}
export default TableRow;