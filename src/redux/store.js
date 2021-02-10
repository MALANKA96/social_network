import postPageReducer from './postPage-reducer';
import dialogPageReducer from './dialogPage-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    postPage: {
      postData: [
        {
          id: 1,
          message: 'Hello, this my first post in the social network ',
          likesCount: '99',
        },
        { id: 2, message: '222 ', likesCount: '1' },
        { id: 3, message: 'mb ya sportboy ', likesCount: '98' },
      ],
      newPost: '',
    },
    dialogPage: {
      dialogData: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Pasha' },
        { id: 3, name: 'Nadya' },
        { id: 4, name: 'Vlad' },
        { id: 5, name: 'Julia' },
        { id: 6, name: 'Jeka' },
      ],

      textData: [
        { id: 1, text: 'Hi' },
        { id: 1, text: 'Hello react' },
        { id: 1, text: 'ya tebya viuchu' },
        { id: 1, text: '100pro' },
      ],

      newMessage: '',
    },
    sidebar: {},
  },

  _rerender() {
    console.log('z');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerender = observer;
  },

  dispatch(action) {
    // {type: 'ADD\POST'}

    this._state.postPage = postPageReducer(this._state.postPage, action);
    this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._rerender(this._state);
  },
};

export default store;

window.store = store;


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
