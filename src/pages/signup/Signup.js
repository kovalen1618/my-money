import { useState } from 'react';
import styles from './Signup.module.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleSubmit = (e) => {
        // Prevent the default behavior of the form which is to refresh the page.
        e.preventDefault();
        
        console.log(email, password, displayName);
    }

    return (
        // When using characters like a hyphen (-) in a class name within JSX, you need to use the bracket notation
        // instead of the dot notation and wrap the class name in quotes. Othwerwise, you will get an error.
        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
            <h2>Signup</h2>
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
            <label>
                <span>Display Name</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <button className='btn'>Signup</button>
        </form>
    );
}