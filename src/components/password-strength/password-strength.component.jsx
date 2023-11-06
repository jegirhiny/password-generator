import { getStrength } from "../../static/PasswordUtils";
import "./password-strength.styles.css";

const PasswordStrength = ({ password }) => {
    return (
        <div className="strength-wrapper">
            <div className="strength" style={{width: `${getStrength(password)}vw`}}></div>
        </div>
    );
}

export default PasswordStrength;