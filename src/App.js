
import Header from './components/Header';
import Movcategories from './components/Movcategories';
import { categories } from "./util/categories";



function App() {
  return (
    <>
    <div>Hello</div>
    <Header/>
    {categories.map((ctg,idx)=><Movcategories key={idx} title={ctg}/>)}
    </>
  );

}

export default App;
