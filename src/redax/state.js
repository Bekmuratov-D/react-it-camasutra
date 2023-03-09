let rerenderEntireTree = () => {
    
}

let state = {

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
}

export const addPost = () => {
    let newPost = {
        id: 6,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}


export default state;