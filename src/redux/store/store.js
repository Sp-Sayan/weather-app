import { configureStore } from '@reduxjs/toolkit';
import mainTempSlice from '../slices/mainTemp/index.js'
import astroSlice from '../slices/astronomy/index.js'
import realTimeSlice from '../slices/realtime/index.js'

export const store = configureStore({
    reducer: {
        mainTemp: mainTempSlice,
        astro: astroSlice,
        realtime: realTimeSlice,
    },
});



