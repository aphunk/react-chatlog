import React from 'react';
import Message from './Message';

const generateMessage = (messages) => {
  return messages.map((message) => {
    const { sender, body, timeStamp } = message;
    return (<Message
      sender={sender}
      body={body}
      timeStamp={timeStamp}
      key={sender}
    />);
  });
};

const ChatLog = (props) => {
  const { messages } = props;
  return (
    <div className='chat-log'>
      {generateMessage(messages)}
    </div>
  );
}

export default ChatLog;