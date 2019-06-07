import React from 'react';

const CTX = react.createContext();

function reducer (state, action) {
  const {from, msg, topic} = action.payload;
  switch(action.type) {
    case 'RECEIVE MESSAGE':
      return {
        ...state,
        [topic]: [
          ...state[topic],
          { from, msg }
        ]
      }
      default:
        return state
  }
}

export default function Store (props) {

  const reducerHook = React.useReducer(reducer, initState )

  return (
    <CTX.provider value={}>
      {props.children}
    </CTX.provider>
  )
}