import { Link } from 'react-router-dom';
import '../style/form.css';
export default function Form({fields, storeFields, submitBtn}){
    const [fieldsets, setFieldsets] = storeFields;

    const handelChange = e=>{
        const fieldset = Object.keys(fieldsets).find(field => field === e.target.placeholder.toLowerCase().split(" ").join(""));
        setFieldsets({...fieldsets, [fieldset]: e.target.value});
    }

    return(
        <form>
            {fields.map((field, idx)=> <input onChange={handelChange} placeholder={field.placeholder} type={field.type} key={idx}/>)}
            <button type="submit">{submitBtn || "Submit"}</button>
            <p>{submitBtn.toLowerCase() === "login" ? "Don't have an account?" : "Do have an account"} <Link to={submitBtn.toLowerCase() === "login" ? "/signup" : "/login"}>{submitBtn.toLowerCase() === "login" ? "Sign Up" : "Login"}</Link></p>
        </form> 
    );
};