import { useState } from "react"
import validator from 'validator';

const PasswordValidatoe = () => {

    const [CheckValidation, SetcheckValidation] = useState('');
    const [msgColor, SetmsgColor] = useState(false);

    const handleonChange = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1,
        })) {
            SetcheckValidation('Password is satisfing the condition and Strong')
            SetmsgColor(false);
        } else {
            SetcheckValidation('Password is not strong.');
            SetmsgColor(true);
        }
    }

    return (
        <div className="" style={{ textAlign: "center", marginTop: "100px" }}>
            <p>Check Password Strength</p>
            <input type="text" onChange={(e) => { handleonChange(e.target.value) }} />
            <p style={{ fontSize: "10px" }}>Password must contain minimum 1 uppercase, 1 lowercase, 1 number and 1 special charater.</p>
            <p style={msgColor ? { color: "red" } : { color: "green" }}>{CheckValidation == "" ? "" : CheckValidation}</p>
        </div>
    )
}

export default PasswordValidatoe;