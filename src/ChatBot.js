import * as React from 'react';

export const ChatBot = () => {
    
    return React.createElement('iframe', {
      src: 'https://webchat.botframework.com/embed/DevScopeAssistant?s=RriFmsfJv4E.zKfO59xigMbKzIy9_0eXHaaKBWipr5EqdB--WqAO-sw',
      style: { height: '502px', maxHeight: '502px' }
      
    });
    
  };
  
  export default ChatBot;