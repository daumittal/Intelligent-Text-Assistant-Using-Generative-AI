import React, { useState } from 'react';
import axios from 'axios';

function ChatAssistant() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        const response = await axios.post('http://127.0.0.1:5000/chat', { message });
        setChat([...chat, { role: 'user', text: message }, { role: 'assistant', text: response.data.reply }]);
        setMessage('');
    };

    return (
        <div>
            <h1>Intelligent Text Assistant</h1>
            <div>
                {chat.map((msg, idx) => (
                    <p key={idx} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                        <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatAssistant;
