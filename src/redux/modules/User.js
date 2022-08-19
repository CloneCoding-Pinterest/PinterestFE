// 유저 페이지

// import { createSlice } from "@reduxjs/toolkit";
// import { setCookie, getCookie, deleteCookie } from '../../cookie';

// const initialState = {
//     login: false,
//     info: {
//         userId: 999,
//         nickname: "기본 닉네임",
//         profilePicture: "img/defaultProfile.png"
//     }
// }

// export const userSlice = createSlice({
//     name: "userInfo",
//     initialState,
//     reducers: {
//         checkUser: (state, action) => {
//             if(getCookie('token') !== undefined){
//                 state.login=true;
//             } else {
//                 state.login=false;
//             }
//         },
//         signInUser: (state, action) => {
//             const token = action.payload.token;
//             setCookie("token", token)
            
//             state.info = action.payload.info;
//             state.login = true;
//         },
//         signOutUser: (state, action) => {
//             deleteCookie('token');
//             state.login = false;
//         },
//         updateUserImage: (state, action) => {
//             console.log(action.payload);

//             state.info.profilePicture = action.payload;
//         },
//         updateUserInfo: (state, action) => {

//             state.info = {...state.info, ...action.payload};
//         }
//     }
// });

// export const { signInUser, signOutUser, checkUser, updateUserImage, updateUserInfo } = userSlice.actions;
// export default userSlice.reducer;