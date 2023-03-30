import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: {
    hasUserCompletedProfile: true,
  },
  reducers: {
    updateProfileStatus: (state) => {
      state.hasUserCompletedProfile = !state.hasUserCompletedProfile;
    },
  },
});

export const { updateProfileStatus } = userSlice.actions;

export default userSlice.reducer;
