import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const Message = (props) => {
  return (
    <div className='chat-entry remote'>
      <div className='entry-name'>{props.sender}</div>
      <div className='entry-bubble'>
        <p className='entry-body'>{props.body}</p>
        <div className='entry-time'>
          <Timestamp time={props.timeStamp} />
        </div>
      </div>
    </div>
  );
}

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.instanceOf(Timestamp),
}


export default Message;