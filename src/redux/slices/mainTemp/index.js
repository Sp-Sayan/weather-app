import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    city: "Dummy City",
    country: "Dummy Country",
    localtime: "Dummy Country",
    temperature: "Dummy Country",
    weathercond: "Dummy Country",
    icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
    weathercode: null,
};

const mainTempSlice = createSlice({
    name: 'main_temp',
    initialState,
    reducers: {
        setMainTempData: (state, action) => {
            return action.payload;
        }
    }

})



export const { setMainTempData } = mainTempSlice.actions;
export default mainTempSlice.reducer;