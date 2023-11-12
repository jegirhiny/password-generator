import { getStrength } from "../../static/PasswordUtils";
import "./password-strength.styles.css";

const PasswordStrength = ({ password }) => {
    const { strength, color } = getStrength(password);

    return (
        <div className="strength-wrapper">
            <div className="strength" style={{width: `${strength}vw`, backgroundColor: `#${color}`}}></div>
        </div>
    );
}

export default PasswordStrength;