import React from 'react';

const CTX = React.createContext();

const initState = {
  general: [
    { from: 'Marco', msg: 'Hola' },
    { from: 'Cindy', msg: 'Hola' },
    { from: 'Louise', msg: 'Hola' },
  ],
  topic2: [
    { from: 'Marco', msg: 'Hola' },
    { from: 'Cindy', msg: 'Hola' },
    { from: 'Louise', msg: 'Hola' },
  ]
}

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
    <CTX.provider value={reducerHook}>
      {props.children}
    </CTX.provider>
  )
}