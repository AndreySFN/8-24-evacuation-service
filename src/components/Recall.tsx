// !!!
/* eslint-disable */
import React, {useState} from "react";
import "./recall.scss"
const Recall = () => {
    const [phone, setPhone] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleInput = (e: any) => {
        setErrorMessage("");
            setPhone(e.target.value)
    }
    const handleSubmit = () => {
        // !!!
        // @ts-ignore
        if (window.jivo_api.startCall(phone.replace(/^8/g, '+7')).result === 'ok') {
            setIsSent(true);
        } else {
            setErrorMessage('Кажется, что-то пошло не так. Проверьте правильность номера.')
        }
        return false;
    }
    const renderForm = () => <div className='recall_form'>
            <input id="recall_input" onChange={handleInput} placeholder={"+7 (___) ___-__-__"}
                   value={phone}/>
        <button id="recall_submit" onClick={handleSubmit}>ЗАКАЗАТЬ ЗВОНОК</button>
    </div>

    const renderMessage = () => <span id='recall_success'>Мы уже перезваниваем вам!</span>

    return <div id="recall">
        {isSent ? renderMessage() : renderForm()}
        <div className='errorMessage'>{errorMessage}</div>
    </div>
}

export default Recall;