import { useState } from "react";
import "./password-display.styles.css"
import PasswordStrength from "../password-strength/password-strength.component";

const PasswordDisplay = ({ password }) => {
    const handleClick = () => {
        navigator.clipboard.writeText(password);
    }

    return (
        <div className="display">
            <PasswordStrength password={password} />
            <h1 className="password" onClick={handleClick}>{password}</h1>
        </div>
    );
}

export default PasswordDisplay;