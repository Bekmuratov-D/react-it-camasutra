
let store = {
    _state : {
        profilePage: {
            postData: [
                {id: 1, post: 'hi, how are you?', liksCount: 10},
                {id: 2, post: 'How are you?', liksCount: 123},
                {id: 3, post: 'Its my first post', liksCount: 231},
                {id: 4, post: 'Its my second post', liksCount: 10},
                {id: 5, post: 'Its my next post', liksCount: 0},
            ],
            newPostText: 'it-kamasutra',
        },
    
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello it\'s me'},
            ],
            newMessageText: 'your message',
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Egor'},
                {id: 3, name: 'Anton'},
                {id: 4, name: 'Lisa'},
                {id: 5, name: 'Antosha'},
            ]
        } ,   
    },
    _callSubscriber ()  {},

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },

    addPost () {
        let newPost = {
            id: 6,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscribe(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscribe(this._state)
    },
    updateNewMessage(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage
        this._callSubscribe(this._state)
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscribe(this._state)
    },

    dispatch(action) {
        if(action.type === 'ADD_POST'){
            let newPost = {
                id: 6,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscribe(this._state)
        } else if(action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.text
            this._callSubscribe(this._state)
        } else if(action.type === 'ADD_MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscribe(this._state)
        }else if(action.type === 'UPDATE_NEW_MESSAGE') {
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscribe(this._state)
        }
    }
}


export default store;
window.store = store;