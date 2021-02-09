const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
  users: [
    /* {
      id: 1,
      avaUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
      followed: true,
      fullName: 'Nik',
      status: 'im',
      location: { sity: 'Minsk', country: 'Belarus' },
    },
    {
      id: 2,
      avaUrl:
        'https://meragor.com/files/styles//ava_800_800_wm/avatar-v-ochkah-025.jpg',
      followed: true,
      fullName: 'Sony',
      status: 'im 2',
      location: { sity: 'Brest', country: 'Belarus' },
    },
    {
      id: 3,
      avaUrl:
        "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
      followed: false,
      fullName: "Ant",
      status: "im 3",
      location: { sity: "Baranovichi", country: "Belarus" },
    },
    {
      id: 4,
      avaUrl:
        "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg",
      followed: true,
      fullName: "Pasha",
      status: "im 23",
      location: { sity: "Kiev", country: "Ukreine" },
    } */
  ],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: 
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    } 
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsers) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsers,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

export default usersPageReducer;
