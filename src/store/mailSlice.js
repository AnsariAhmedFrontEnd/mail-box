import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    emails: [],
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    setEmails : (state, action) => {
      state.emails = action.payload
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
