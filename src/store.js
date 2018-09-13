import { createStore } from 'redux';

const reducer = (state = { storeAccessCount: 0 }, action) => {
  switch (action.type) {
    default: 
      return {
        storeAccessCount: state.storeAccessCount + 1
      }
  }
};

export default createStore(reducer);
