import Moviecard from './Moviecard'

export default function Movcategories({title}) {
  return (
    <div className="movserlst">
        <h2>{title}:</h2>
        <ul>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"serie title"} genera={"serie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
            <Moviecard title={"movie title"} genera={"movie"}/>
        </ul>
    </div>
  )
}
