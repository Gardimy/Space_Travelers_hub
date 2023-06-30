import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets/';
const initialState = {
  rockets: [],
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books', error);
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = parseInt(action.payload, 10);
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        return { ...rocket, isReserved: true };
      });
      state.rockets = newState;
    },

    cancelReservation: (state, action) => {
      const id = parseInt(action.payload, 10);
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, isReserved: false };
        }
        return rocket;
      });
      state.rockets = newRockets;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const allRockets = action.payload;
      const cleanedData = allRockets.map((rocket) => (
        {
          id: rocket.id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          image: rocket.flickr_images[0],
          description: rocket.description,
          isReserved: false,
        }
      ));
      state.rockets = cleanedData;
    });
  },
});

export default rocketsSlice.reducer;
export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export { fetchRockets };
