import { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        // Prevent the default behavior of the form which is to refresh the page.
        e.preventDefault();
        
        console.log(email, password);
    }

    return (
        // When using characters like a hyphen (-) in a class name within JSX, you need to use the bracket notation
        // instead of the dot notation and wrap the class name in quotes. Othwerwise, you will get an error.
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    // Whenever the state is changed, it will be reflected in the input field.
                    value={email}
                />
            </label>
            <label>
                <span>Password</span>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button className='btn'>Login</button>
        </form>
    );
}