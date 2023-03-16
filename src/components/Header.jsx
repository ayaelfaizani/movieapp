import bg from '../images/bg.jpg'
// import Categories from './Categories'
import Movser from './Movser'
import Searching from './Searching'
export default function Header() {
  return (
    <div className="herocover">
            <img className='bg' src={bg} alt="" />
            <div className="title">
                <h1 >MOVIE LIST</h1>
            </div>

            <div className="inputSearch">

                <Searching/>
                <Movser/>
                
            </div>
            
        </div>
  )
}
