import React, { useState, useEffect} from "react";
import "./password-form.styles.css"

const PasswordForm = ({ submitFormData }) => {
    const [ formData, setFormData ] = useState({
        length: 12,
        uppercase: false,
        numbers: false,
        symbols: false
    });

    const [ formChanged, setFormChanged ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        submitFormData(formData);
    }

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

    useEffect(() => {
        submitFormData(formData);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Password Length</h2>
                <div>
                    <label htmlFor='length'>{formData.length}</label>
                    <input name='length' type='range' min={1} max={36} value={formData.length} step={1} onChange={handleChange}/>
                </div>
            </div>
            <div className="checkbox-col">
                <div className="checkbox-row">
                    <label htmlFor='uppercase'>Uppercase</label>
                    <input name='uppercase' type='checkbox' onChange={handleChange}/>
                </div>
                <div className="checkbox-row">
                    <label htmlFor='numbers'>Numbers</label>
                    <input name='numbers' type='checkbox' onChange={handleChange}/>
                </div>
                <div className="checkbox-row">
                    <label htmlFor='symbols'>Symbols</label>
                    <input name='symbols' type='checkbox' onChange={handleChange}/>
                </div>
            </div>
            <button className="generate">Generate</button>
        </form>
    );
}

export default PasswordForm;