import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
