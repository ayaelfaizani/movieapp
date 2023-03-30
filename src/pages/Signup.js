import { useState } from "react";
import Form from "../components/Form";
import { signupFields } from "../utils";

export default function Signup(){
    const [signup, setSignup] = useState({firstName: "", lastName:"", email:"", username:"", password:"", confirmPassword:""});
    return(
        <section className="section">
            <Form fields={signupFields} storeFields={[signup, setSignup]} submitBtn="Sign Up"/>
        </section>
    );
};