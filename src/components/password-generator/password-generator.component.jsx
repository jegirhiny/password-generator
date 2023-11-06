import React, { useState } from "react";
import PasswordForm from "../password-form/password-form.component";
import PasswordDisplay from "../password-display/password-display.component";
import { generatePassword } from "../../static/PasswordUtils";

const PasswordGenerator = () => {
    const [ password, setPassword ] = useState('');

    const submitFormData = (formData) => {
        setPassword(generatePassword(formData));
    };

    return (
        <React.Fragment>
            <PasswordDisplay password={password} />
            <PasswordForm submitFormData={submitFormData} />
        </React.Fragment>
    );
}

export default PasswordGenerator;