import { UserState } from "../types/user";
import { createSlice } from "@reduxjs/toolkit";


const initialState: UserState = {
  id: null,
  role: null,
  firstName: '',
  lastName: '',
  isOnline: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
})

export default userSlice.reducer;
