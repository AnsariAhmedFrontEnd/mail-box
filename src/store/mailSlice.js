import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    emails: [],
    sent : [],
    selectedMsg : null,
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
    setSentBox : (state, action) => {
      state.sent = action.payload
    },
    openMsg : (state, action) => {
      state.selectedMsg = action.payload
    }
    
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
