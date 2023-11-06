import "./password-display.styles.css"

const PasswordDisplay = ({ password }) => {
    return (
        <div className="display">
            <h1 className="password">{password}</h1>
        </div>
    );
}

export default PasswordDisplay;