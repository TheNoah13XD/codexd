'use client';

import { useState } from "react";
import { MaterialSymbol } from 'react-material-symbols';

const CREATOR = {
    ME: 'me',
    BOT: 'bot'
}

const ChatMessage = ({text, from}) => {
    return (
        <>
            {from === CREATOR.ME && (
                <div className="display-f align-i-center justify-end">
                    <p className="custom-text bg-primary br-1 p-1 ml-1">{text}</p>
                </div>
            )}
            {from === CREATOR.BOT && (
                <div className="display-f align-i-center justify-start">
                    <p className="custom-text bg-secondary br-1 p-1 mr-1">{text}</p>
                </div>
            )}
        </>
    )
}

const ChatInput = ({onSend, disabled}) => {
    const [input, setInput] = useState('');

    const sendInput = () => {
        onSend(input);
        setInput('');
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            sendInput();
        }
    }

    return (
        <>
            <form>
                <input type="text" className="input-t" 
                    value={input} 
                    onChange={(e) => setInput(ev.target.value)}
                    placeholder="Type your message here..."
                    disabled={disabled}
                    onKeyDown={handleKeyDown}
                />
                {disabled && (
                    <MaterialSymbol icon="send" size={24} className="custom-text" />
                )}
                {!disabled && (
                    <MaterialSymbol icon="crop_square" size={24} className="custom-text" onClick={sendInput} />
                )}
            </form>
        </>
    )
}

const learn = () => {

    const [messages, setMessages, messagesRef] = useState([]);
    const [loading, setLoading] = useState(false);

    const callApi = async () => {
        setLoading(true);

        const myMessage = {
            text: input,
            from: 'me',
            key: new Date().getTime()
        }

        setMessages([...messagesRef.current, myMessage]);
        const response = await fetch('/api/generate-answer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input
            })
        }).then((res) => res.json());
        setLoading(false);

        if (response.text) {
            const botMessage = {
                text: response.text,
                from: 'bot',
                key: new Date().getTime()
            }
            setMessages([...messagesRef.current, botMessage]);
        } else {
            // error
        }
    }

    return (
        <>
            <div>
                <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
            </div>

            <div>
                {
                    messages.map((message) => {
                        <ChatMessage key={message.key} text={message.text} from={message.from} />
                    })
                }

                {
                    messages.length === 0 && <p className="custom-text">I am at your service!</p>
                }
            </div>
        </>
    );
}
 
export default learn;