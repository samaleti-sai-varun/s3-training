import React from "react";

const Register=()=>{
    return(
        <>
        <h1>Welcome to Register Page</h1>
        <form action="">
            Name: <input type="text" name="uname" /><br />
            Password: <input type="password" name="psw" /><br />
            Email: <input type="email" name="email" /><br />
            Address: <input type="text" name="address" /><br />
            <input type="submit" value="Register"/><br />
        </form>
        </>
    )
}
export default Register;