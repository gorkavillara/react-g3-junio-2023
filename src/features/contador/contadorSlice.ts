import { createSlice } from "@reduxjs/toolkit"

const contadorSlice = createSlice({
    name: "contador",
    initialState: {
        valor: 12,
    },
    reducers: {
        incrementa: (state) => ({ ...state, valor: state.valor + 1 }),
        incrementaX: (state, action) => ({
            ...state,
            valor: state.valor + action.payload,
        }),
    },
})

export const { incrementa, incrementaX } = contadorSlice.actions

export default contadorSlice.reducer
