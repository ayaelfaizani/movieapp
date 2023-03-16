import { HeartFill } from "react-bootstrap-icons"
export default function Moviecard({title,genera}) {
  return (
    <li className="moviecard"> 
        <div className="detailes">
            <div className="titelgenra">
                <h4>{title}</h4>
                <h5>{genera}</h5>
            </div>
            <button className="favbtn"><HeartFill color="#a10574" size={10}/></button>
        </div>
    </li>
  )
}
