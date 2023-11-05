import PasswordForm from "../password-form/password-form.component";

const PasswordDisplay = () => {
    const submitFormData = (formData) => {
        console.log(formData)
    };

    return (
        <PasswordForm submitFormData={submitFormData} />
    );
}

export default PasswordDisplay;