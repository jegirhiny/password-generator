import PasswordForm from "../password-form/password-form.component";
import { generatePassword } from "../../static/PasswordUtils";

const PasswordDisplay = () => {
    const submitFormData = (formData) => {
        console.log(generatePassword(formData));
    };

    return (
        <PasswordForm submitFormData={submitFormData} />
    );
}

export default PasswordDisplay;