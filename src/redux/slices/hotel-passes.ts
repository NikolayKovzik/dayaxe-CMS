import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createHotel, deleteHotel, getAllHotels, updateHotel } from '../asyncActions/hotels';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import { createHotelPass, deleteHotelPass, getAllHotelPasses, updateHotelPass } from '../asyncActions/hotel-passes';

interface State {
  hotelPasses: HotelPass[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: State = {
  hotelPasses: [],
  loading: false,
  success: false,
  error: null,
};

const onPending = (state: State) => {
  state.loading = true;
  state.error = null;
  state.success = false;
};

const isError = (action: AnyAction) => action.type.endsWith('rejected');

const onFulfilled = (state: State) => {
  state.loading = false;
  state.success = true;
};

const hotelPasses = createSlice({
  name: 'hotel-passes',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    resetSuccess: (state) => {
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHotelPasses.pending, (state) => {
      onPending(state);
    });
    builder.addCase(getAllHotelPasses.fulfilled, (state, action: PayloadAction<HotelPass[]>) => {
      onFulfilled(state);
      state.hotelPasses = action.payload;
    });

    builder.addCase(createHotelPass.pending, (state) => {
      onPending(state);
    });
    builder.addCase(createHotelPass.fulfilled, (state, action: PayloadAction<HotelPass>) => {
      onFulfilled(state);
      state.hotelPasses.push(action.payload);
    });

    builder.addCase(updateHotelPass.pending, (state) => {
      onPending(state);
    });
    builder.addCase(updateHotelPass.fulfilled, (state, action: PayloadAction<HotelPass>) => {
      onFulfilled(state);
      state.hotelPasses = state.hotelPasses.map((hotelPass) => {
        if (hotelPass._id !== action.payload._id) {
          return hotelPass;
        }

        return { ...action.payload };
      });
    });

    builder.addCase(deleteHotelPass.pending, (state) => {
      onPending(state);
    });
    builder.addCase(deleteHotelPass.fulfilled, (state, action: PayloadAction<string>) => {
      onFulfilled(state);
      state.hotelPasses = state.hotelPasses.filter((hotelPass) => hotelPass._id !== action.payload);
    });

    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const hotelPassesActions = hotelPasses.actions;
export default hotelPasses.reducer;
