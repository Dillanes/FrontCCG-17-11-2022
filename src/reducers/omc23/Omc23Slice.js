import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data:[{
        id:1,
        name:'Juan',
        age:22
    },
]
}
export const Omc23Slice = createSlice({
    name:'Omc23Reducer',
    initialState:initialState,
    reducers:{
        setOmc23: (state,action)=>{
            console.log('Nombre',action)
            state.data = [...state.data,action.payload] 
        },

        putOmc23: (state,action)=>{
            state.data = state.data.map(reg => reg.id === action.payload.id?action.payload:reg)
        },

        deleteOmc23: (state,action)=>{
            state.data = state.data.filter(reg => reg.id !== action.payload)

        }
    }
})

export const {setOmc23,putOmc23,deleteOmc23} = Omc23Slice.actions; 

export default Omc23Slice.reducer;

