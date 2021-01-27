const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
  users: [
    {id: 1, 
      avaUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
      followed: true, fullName: 'Nik', status: 'im' , location: {sity: 'Minsk', country: 'Belarus'} },
    {id: 2,
      avaUrl: 'https://meragor.com/files/styles//ava_800_800_wm/avatar-v-ochkah-025.jpg',
      followed: true, fullName: 'Sony', status: 'im 2' , location: {sity: 'Brest', country: 'Belarus'} },
    {id: 3, 
      avaUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
      followed: false, fullName: 'Ant', status: 'im 3' , location: {sity: 'Baranovichi', country: 'Belarus'} },
    {id: 4,
      avaUrl: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg',
      followed: true, fullName: 'Pasha', status: 'im 23' , location: {sity: 'Kiev', country: 'Ukreine'} },
  ]
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
     return {
       ...state,
        users: state.users.map(u => {
          if (u.id === action.usersId) {
               return {...u, followed: true}
          }
          return u;
        })
     }
    case UNFOLLOW:
      return {
        ...state,
         users: state.users.map(u => {
           if (u.id === action.usersId) {
                return {...u, followed: false}
           }
           return u;
         })
      }
    case SET_USERS: 
    return {
      ...state, users: [...state.users, ...action.users]
    }
      
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersPageReducer;
