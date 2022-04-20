import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlicer';

export default configureStore(
  {
    reducer: {
      content: contentReducer,

    },

  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

);
