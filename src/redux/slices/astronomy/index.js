import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sunrise: "",
    sunset: "",
    moonrise: "",
    moonset: "",

}

const astroSlice = createSlice({
    name: 'astronomy',
    initialState,
    reducers: {
        setAstroData: (state, action) => {
            return action.payload;
        }
    }
})

export const { setAstroData } = astroSlice.actions;
export default astroSlice.reducer;