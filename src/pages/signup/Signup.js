import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

import styles from './Signup.module.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    // Destructure the signup function from the useSignup hook.
    const { signup, isPending, error } = useSignup();

    const handleSubmit = (e) => {
        // Prevent the default behavior of the form which is to refresh the page.
        e.preventDefault();
        
        signup(email, password, displayName);
    }

    return (
        // When using characters like a hyphen (-) in a class name within JSX, you need to use the bracket notation
        // instead of the dot notation and wrap the class name in quotes. Othwerwise, you will get an error.
        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
            <h2>Signup</h2>
            <label>
                <span>Email</span>
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
            { !isPending && <button className='btn'>Signup</button> }
            { isPending && <button className='btn' disabled>Loading...</button> }
            { error && <p>{ error }</p> }
        </form>
    );
}