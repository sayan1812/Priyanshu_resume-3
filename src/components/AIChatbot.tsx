import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, RotateCcw, Settings, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatbot-history');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(messagesWithDates);
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    } else {
      // Welcome message
      const welcomeMessage: Message = {
        id: '1',
        text: "Hi! I'm Priyanshu's AI assistant. I can help you learn more about his skills, projects, and experience. Feel free to ask me anything!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatbot-history', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const lowerMessage = userMessage.toLowerCase();
    
    // Predefined responses based on keywords
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "Priyanshu is proficient in multiple programming languages including C++, Java, JavaScript, and Python. He has experience with web technologies like HTML, CSS, React.js, Node.js, and databases like MySQL. He's also skilled in data structures, algorithms, and various development tools.";
    }
    
    if (lowerMessage.includes('project')) {
      return "Priyanshu has worked on several impressive projects including a TimeTable Generator in Java, Library Management System in C++, Autocorrect Tool, Resume Parser, Music Player, and Translator App. Each project demonstrates different technical skills and problem-solving abilities.";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('internship')) {
      return "Priyanshu has completed two internships: a Front-End Developer role at CodeAlpha where he worked with HTML, CSS, and JavaScript, and a DSA C++ Developer position at InternPe focusing on data structures and algorithms. Both experiences enhanced his practical development skills.";
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('college') || lowerMessage.includes('study')) {
      return "Priyanshu is currently pursuing B.Tech in Computer Science & Engineering at IEM Kolkata (2022-2026). His curriculum covers DSA, Web Development, AI, DBMS, and Operating Systems, providing a strong foundation in computer science fundamentals.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach Priyanshu at priyanshuhalder2001@gmail.com or call him at +91 8389937791. He's also active on LinkedIn and GitHub. Feel free to connect with him for opportunities or collaborations!";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Nice to meet you! I'm here to help you learn more about Priyanshu Halder. You can ask me about his skills, projects, education, experience, or how to contact him. What would you like to know?";
    }
    
    if (lowerMessage.includes('github')) {
      return "You can find all of Priyanshu's projects on his GitHub profile at github.com/sayan1812. He has repositories showcasing various technologies including Java applications, C++ systems, and web development projects.";
    }
    
    // Default response
    return "That's an interesting question! While I have information about Priyanshu's technical background, projects, and experience, I'd recommend reaching out to him directly for more specific details. You can contact him through the contact section below or connect on LinkedIn!";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isStreaming) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setIsStreaming(true);

    try {
      const response = await generateResponse(userMessage.text);
      
      setIsTyping(false);
      
      // Simulate streaming response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Stream the response word by word
      const words = response.split(' ');
      for (let i = 0; i < words.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          lastMessage.text = words.slice(0, i + 1).join(' ');
          return newMessages;
        });
      }
      
    } catch (error) {
      setIsTyping(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble responding right now. Please try again later or contact Priyanshu directly.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem('chatbot-history');
    // Add welcome message back
    const welcomeMessage: Message = {
      id: '1',
      text: "Hi! I'm Priyanshu's AI assistant. I can help you learn more about his skills, projects, and experience. Feel free to ask me anything!",
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-glow-pulse"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] animate-scale-in">
          <div className="bg-card/95 backdrop-blur-lg rounded-2xl border border-glass-border shadow-elegant overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-primary p-4 text-primary-foreground">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-glow-pulse"></div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs opacity-90">Ask me about Priyanshu</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-primary-foreground hover:bg-white/20"
                    onClick={clearHistory}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-primary-foreground hover:bg-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground ml-4'
                        : 'bg-muted/50 text-foreground mr-4'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <div className={`text-xs opacity-70 mt-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted/50 p-3 rounded-2xl mr-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-glass-border">
              <div className="flex items-end gap-3">
                <Textarea
                  ref={textareaRef}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Priyanshu's skills, projects..."
                  className="flex-1 min-h-[40px] max-h-32 resize-none border-muted/50 focus:border-primary"
                  disabled={isStreaming}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isStreaming}
                  className="bg-gradient-primary hover:shadow-glow"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Disclaimer */}
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Info className="h-3 w-3" />
                <span>This chatbot uses AI. Do not share sensitive information.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;