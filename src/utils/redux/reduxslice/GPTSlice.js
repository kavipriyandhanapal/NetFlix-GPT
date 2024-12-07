import { createSlice } from "@reduxjs/toolkit";

const GPTSSlice = createSlice({
  name: "gptMovies",
  initialState: {
    showGptpage: false,
  },
  reducers: {
    toggleGptPageView: (state, action) => {
      state.showGptpage = !state.showGptpage;
    },
  },
});

export const { toggleGptPageView } = GPTSSlice.actions;
export default GPTSSlice.reducer;
