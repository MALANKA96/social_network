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
