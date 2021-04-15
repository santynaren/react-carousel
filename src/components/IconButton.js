import React from 'react';

const IconButton = (props) => {
  return props.visibile ? (
    <div onClick={props.action}>{props.children}</div>
  ) : null;
};
export { IconButton };
