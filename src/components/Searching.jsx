import { Search } from "react-bootstrap-icons"
export default function Searching() {
  return (
    <div className="search">
        <input type="text" id="movietitle" placeholder="Search..."/>
        <button className="add"><Search/></button>
    </div>
  )
}
