import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login =() => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === import.meta.env.VITE_ADMIN_USERNAME && password === import.meta.env.VITE_ADMIN_PASSWORD) {

            localStorage.setItem("isLoggedIn", "true");
            navigate("/admin/dashboard");

            }else {
                setError("Invalid username or password");
            }
    };


    return(
        <div className="login-cont">

            {/* HEADER */}
            <h1>Login Page</h1>

            {/* LOGIN FORM */}
            <form className="login-form" onSubmit={handleSubmit}>

                {/* Username */}
                <label htmlFor="username">Username:</label>
                <input type="text" 
                       name="username" 
                       value={username}
                       required 
                       onChange={(e) => setUsername(e.target.value)}
                />

                {/* Password */}
                <label htmlFor="password">Password:</label>
                <input type="password" 
                        name="password" 
                        value={password}
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                />
                
                {/* Error message */}
                {error && <p className="error">{error}</p>}

                {/* Button */}
                <button type="submit">Login</button>

                {/* Return Home */}
               <button type="button" onClick={() => navigate("/")}>Home</button>
              
            </form>
        </div>
    )
}

export default Login