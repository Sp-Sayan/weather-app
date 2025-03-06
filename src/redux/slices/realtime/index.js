import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uv: "1",
    windspeed: "1",
    winddir: "1",
    feelslike: "1",
    humidity: "1"
}

const realTimeSlice = createSlice({
    name: 'realTime',
    initialState,
    reducers: {
        setRealTimeData: (state, action) => {
            return action.payload;
        }
    }
})

export const { setRealTimeData } = realTimeSlice.actions;
export default realTimeSlice.reducer;