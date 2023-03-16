import { categories } from "../util/categories";
export default function Categories() {
    
  return (
    <label htmlFor="categories">
        <select name="categories" id="categories" className="selection">
            <option value="">Catigories</option>
            {categories.map((ctg,idx)=><option key={idx} value={ctg.toLowerCase}>{ctg}</option>)}
        </select>
    </label>
  )
}
