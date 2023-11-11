import "./password-display.styles.css"
import clipboard from '../../images/clipboard.png'
import PasswordStrength from "../password-strength/password-strength.component";

const PasswordDisplay = ({ password }) => {
    const handleClick = () => {
        navigator.clipboard.writeText(password);
    }

    return (
        <div className="display">
            <PasswordStrength password={password} />
            <div className="password-group">
                <h1 className="password">{password}</h1>
                <img src={clipboard} alt="Copy" className="image" onClick={handleClick}/>
            </div>
            <div className="break"></div>
        </div>
    );
}

export default PasswordDisplay;