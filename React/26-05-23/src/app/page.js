"use client"
import { useEffect, useState } from "react"
import "./style.css"
import axios from "axios"
import TableRow from "./components/TableRow/TableRow"
import InfoWrapper from "./components/InfoWrapper/InfoWrapper"

export default function Home() {

  let [userData, setUserData] = useState([])
  let [searchQuery, setSearchQuery] = useState("")
  let [filteredUserData, setFilteredUserData] = useState([])
  let [activeRowIndex, setActiveRowIndex] = useState(2);
  let [activeRowId, setActiveRowId] = useState()
  let [activeRowData, setActiveRowData] = useState()

  useEffect(()=>{
    axios.get("https://admin-panel-data-edyoda-sourav.vercel.app/admin/data")
    .then(res => {
      setUserData(res.data)
      setActiveRowId(res.data[activeRowIndex].id)
      setActiveRowData(res.data[activeRowIndex])
    })
    .catch(err => console.log(err))
  },[])

  const getSearchValue = (e) => {
    let search = e.target.value;
    let filteredUser = userData.filter((item)=>item.firstName.toLowerCase().includes(search.toLowerCase()))
    setFilteredUserData(filteredUser)
    setSearchQuery(e.target.value)
  }

  const handleSelectedRow = (id) => {
    let selectedRowRecords = userData.find(user=> user.id == id)
    setActiveRowId(id)
    setActiveRowData(selectedRowRecords)
  }

  return (
    <main>
        <div id="table-section">

            <form action="/">
                <input 
                  type="text" 
                  placeholder="Enter something" 
                  name="search-box" 
                  id="search-box" 
                  onChange = {(e)=>getSearchValue(e)}
                  value={searchQuery}
                />
            </form>

            <div id="table-wrapper">

                <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Id</th>
                                <th className="column2">FirstName</th>
                                <th className="column3">LastName</th>
                                <th className="column4">Email</th>
                                <th className="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="table-data">
                    <table>
                        <tbody>
                            {
                              searchQuery == "" && filteredUserData.length == 0 ?
                              userData.map(item => <TableRow 
                                user = {item} 
                                key={item.id}
                                selectedItem = {activeRowId}  
                                handleClick = {handleSelectedRow}
                              />):
                              filteredUserData.map(item => <TableRow 
                                user = {item} 
                                key={item.id}
                                selectedItem = {activeRowId}
                                handleClick = {handleSelectedRow}
                              />)
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

        {
          activeRowData && <InfoWrapper info={activeRowData}/>
        }
    </main>
  )
}
