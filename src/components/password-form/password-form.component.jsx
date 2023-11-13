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
        // eslint-disable-next-line
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="col">
                <div className="range-cont">
                    <h3>Password Length</h3>
                    <h3>{formData.length}</h3>
                </div>
                <div className="range-wrapper">
                    <input className="range" name='length' type='range' min={3} max={36} value={formData.length} step={1} onChange={handleChange}/>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <input id="uppercase" name='uppercase' type='checkbox' onChange={handleChange}/>
                    <label htmlFor='uppercase'>Uppercase</label>
                    <input id="numbers" name='numbers' type='checkbox' onChange={handleChange}/>
                    <label htmlFor='numbers'>Numbers</label>
                    <input id="symbols" name='symbols' type='checkbox' onChange={handleChange}/>
                    <label htmlFor='symbols'>Symbols</label>
                    <input className="generate" type='submit' value='Generate'/>
                </div>
            </div>
        </form>
    );
}

export default PasswordForm;