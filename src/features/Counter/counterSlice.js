const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice; // actions, reducer là những cái dc hàm counterSlice tạo sẵn cho mình khi mình khai báo như trên.

export const { increase, decrease } = actions; // name export

export default reducer; // export default
