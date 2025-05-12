import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{type: 'user' | 'bot', text: string}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add initial greeting when opening for the first time
      setMessages([
        {
          type: 'bot',
          text: 'Hello! I\'m the DDC AI assistant. How can I help you with your dental care today?'
        }
      ]);
    }
  };

  // Auto-scroll to bottom of chat when new messages appear
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages([...messages, { type: 'user', text: inputValue }]);
    
    // Simulate AI response
    setTimeout(() => {
      let botResponse = '';
      const userQuestion = inputValue.toLowerCase();
      
      // Simple pattern matching for common dental questions
      if (userQuestion.includes('appointment') || userQuestion.includes('book') || userQuestion.includes('schedule')) {
        botResponse = 'You can book an appointment by calling us at +91 80 2224 5678 or using our online booking form on the Contact page.';
      } else if (userQuestion.includes('emergency') || userQuestion.includes('urgent')) {
        botResponse = 'For dental emergencies, please call our emergency line at +91 80 2224 5680 immediately.';
      } else if (userQuestion.includes('hours') || userQuestion.includes('timing')) {
        botResponse = 'We are open Monday to Thursday from 8:00 AM to 5:00 PM, Friday from 8:00 AM to 3:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays.';
      } else if (userQuestion.includes('location') || userQuestion.includes('address') || userQuestion.includes('where')) {
        botResponse = 'We are located at Parvathi Plaza, Richmond Rd, Langford Gardens, Bengaluru, Karnataka 560025, India.';
      } else if (userQuestion.includes('insurance') || userQuestion.includes('payment')) {
        botResponse = 'We accept most major Indian health insurance plans including Star Health, Manipal Cigna, and more. We also offer various payment options including UPI and EMI.';
      } else if (userQuestion.includes('video') || userQuestion.includes('telehealth') || userQuestion.includes('remote')) {
        botResponse = 'Yes, we offer telehealth consultations via secure video conferencing. You can schedule a virtual appointment by calling our office.';
      } else if (userQuestion.includes('covid') || userQuestion.includes('safety')) {
        botResponse = 'We follow strict safety protocols that exceed international standards. Our sterilization procedures ensure a safe environment for all patients.';
      } else {
        botResponse = 'Thank you for your question. For more specific information, please call us at +91 80 2224 5678 or speak with Dr. Khan during your next visit.';
      }
      
      setMessages(prevMessages => [...prevMessages, { type: 'bot', text: botResponse }]);
    }, 1000);
    
    setInputValue('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <Button 
        onClick={toggleChat}
        className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        size="icon"
      >
        {isOpen ? (
          <i className="fa-solid fa-times text-xl"></i>
        ) : (
          <i className="fa-solid fa-comments text-xl"></i>
        )}
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary p-3 text-white">
            <h3 className="font-semibold">DDC AI Assistant</h3>
            <p className="text-xs opacity-80">Powered by AI</p>
          </div>
          
          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-3 bg-neutral-light">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.type === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white shadow rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-3 border-t flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question here..."
              className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button 
              type="submit" 
              className="rounded-l-none"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;