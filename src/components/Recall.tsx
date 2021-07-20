// !!!
/* eslint-disable */
import React, {useEffect, useState} from "react";
import "./recall.scss"

const Recall = () => {
    const [phone, setPhone] = useState("");
    const [isEnabled, setIsEnabled] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
            // @ts-ignore
            if (window.jivo_api) {
                // @ts-ignore
                window.jivo_api.isCallbackEnabled((res) => {
                    setIsEnabled(res.result.includes('ok'))
                    if (!res.result.includes('ok')) {
                        setErrorMessage('В настоящий момент обратный звонок недоступен')
                    }
                })
            } else {
                setErrorMessage('В настоящий момент обратный звонок недоступен')
            }
        },
        // @ts-ignore
        [window.jivo_api]
    )
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
    const renderForm = (disabled: boolean) => <div className='recall_form'>
        <input id="recall_input" onChange={handleInput} disabled={disabled} placeholder={"+7 (___) ___-__-__"}
               value={phone}/>
        <button id="recall_submit" disabled={disabled} onClick={handleSubmit}>ЗАКАЗАТЬ ЗВОНОК</button>
    </div>

    const renderMessage = () => <span id='recall_success'>Мы уже перезваниваем вам!</span>

    return <div id="recall">
        {isSent ? renderMessage() : renderForm(!isEnabled)}
        <div className='errorMessage'>{errorMessage}</div>
    </div>
}

export default Recall;