import React, { useState, useEffect} from "react";
import "./password-form.styles.css"

const PasswordForm = ({ submitFormData }) => {
    const [ formData, setFormData ] = useState({
        length: 12,
        uppercase: true,
        numbers: true,
        symbols: true
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
            <div className="row">
                <div className="input-wrapper">
                    <input id="uppercase" name='uppercase' type='checkbox' checked={formData.uppercase} onChange={handleChange}/>
                    <label htmlFor='uppercase'>Uppercase</label>
                </div>
                <div className="input-wrapper">
                    <input id="numbers" name='numbers' type='checkbox' checked={formData.numbers} onChange={handleChange}/>
                    <label htmlFor='numbers'>Numbers</label>
                </div>
                <div className="input-wrapper">
                    <input id="symbols" name='symbols' type='checkbox' checked={formData.symbols} onChange={handleChange}/>
                    <label htmlFor='symbols'>Symbols</label>
                </div>
                <input className="generate" type='submit' value='Generate'/>
            </div>
        </form>
    );
}

export default PasswordForm;