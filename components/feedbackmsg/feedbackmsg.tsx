import React from 'react';

import {
  FeedbackContainer
} from './feedbackmsg.styles';


export interface FeedbackMsgProps {
  className?: string;
  msg?: string;
}

export const FeedbackMsg = ({ className = 'error', msg }: FeedbackMsgProps) => {
  return (
    <FeedbackContainer className={className}>
      {msg}
    </FeedbackContainer>
  );
};
