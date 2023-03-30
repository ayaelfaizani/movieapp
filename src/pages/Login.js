import { useState } from "react";
import Form from "../components/Form";
import { loginFields } from "../utils";

export default function Login(){
    const [login, setLogin] = useState({emailorusername:"", password:""});
    return(
        <section className="section">
            <Form fields={loginFields} storeFields={[login, setLogin]} submitBtn="Login"/>
        </section>
    );
};