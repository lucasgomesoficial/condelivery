import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ArrowLeft, Send } from 'lucide-react';

export function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Função para adicionar a mensagem do usuário
  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { sender: 'user', text: inputMessage };

    // Simular uma resposta automática do bot
    const botMessage = { sender: 'bot', text: 'Olá! Como posso te ajudar?' };

    // Adiciona tanto a mensagem do usuário quanto a do bot
    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

    setInputMessage(''); // Limpa o campo de entrada
  };

  return (
    <div className="w-full mx-auto border border-gray-300 p-4">
      <div className="max-h-72 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${msg.sender === 'user' ? 'text-right bg-primary text-white w-[257px] ml-[359px]' : 'text-left bg-gray-100 w-5/12'
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <Input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Permite enviar com Enter
        placeholder="Digite sua mensagem..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"

      />
      <div className='flex justify-end mt-3'>
        <Button onClick={sendMessage} className="bg-white hover:bg-white ">
          <Send color='#0074D9' />
        </Button>
      </div>
    </div>
  );
}



