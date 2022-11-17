import {configureStore} from '@reduxjs/toolkit'
import Omc23Reducer from '../reducers/omc23/Omc23Slice'

export default configureStore({
    reducer:{
       omc23: Omc23Reducer
    }
})