import React, { useState, useEffect} from "react";

const PasswordForm = ({ submitFormData }) => {
    const [ formData, setFormData ] = useState({
        length: 50,
        prefix: '',
        suffix: '',
        uppercase: false,
        numbers: false,
        symbols: false
    });

    const [ formChanged, setFormChanged ] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
    
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: e.target.checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        setFormChanged(true);
    };

    useEffect(() => {
        if(formChanged) {
            submitFormData(formData);
            setFormChanged(false);
        }
    }, [formData, formChanged, submitFormData]);

    return (
        <form>
            <label htmlFor='length'>{ formData.length }</label>
            <input name='length' type='range' min={1} max={100} step={1} onChange={handleChange}/>
            <label htmlFor='prefix'>Prefix</label>
            <input name='prefix' type='text' onChange={handleChange}/>
            <label htmlFor='suffix'>Suffix</label>
            <input name='suffix' type='text' onChange={handleChange}/>
            <label htmlFor='uppercase'>Uppercase</label>
            <input name='uppercase' type='checkbox' onChange={handleChange}/>
            <label htmlFor='numbers'>Numbers</label>
            <input name='numbers' type='checkbox' onChange={handleChange}/>
            <label htmlFor='symbols'>Symbols</label>
            <input name='symbols' type='checkbox' onChange={handleChange}/>
        </form>
    );
}

export default PasswordForm;