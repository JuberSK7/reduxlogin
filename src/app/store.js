import {configureStore} from '@reduxjs/toolkit';
import employeReducer from '../features/userSlice';

////////////////// accepts a single configuration object parameter

export default configureStore({
    reducer: {
        employe: employeReducer,
    },
});