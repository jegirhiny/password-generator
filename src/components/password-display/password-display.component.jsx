import { useState } from "react";
import "./password-display.styles.css"
import PasswordStrength from "../password-strength/password-strength.component";

const PasswordDisplay = ({ password }) => {
    const [ copyText, setCopyText ] = useState('Copy');

    const handleClick = () => {
        navigator.clipboard.writeText(password);
        setCopyText('Copied!');

        setInterval(() => {
            setCopyText('Copy');
        }, 3000)
    }

    return (
        <div className="display">
            <PasswordStrength password={password} />
            <h1 className="password">{password}</h1>
            <button onClick={handleClick}>{copyText}</button>
        </div>
    );
}

export default PasswordDisplay;