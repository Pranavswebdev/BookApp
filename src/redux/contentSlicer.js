import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'contentSlicer',
  initialState: {
    content: '',
  },
  reducers: {

    bookContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { bookContent } = counterSlice.actions;

export default counterSlice.reducer;
