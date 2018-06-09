import * as redux from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';;

// - Import reducers
import { imageGalleryReducer } from 'imageGalleryReducer';
import { postReducer } from 'postReducer';
import { commentReducer } from 'commentReducer';
import { voteReducer } from 'voteReducer';
import { authorizeReducer } from 'authorizeReducer';
import { globalReducer } from 'globalReducer';
import { userReducer } from 'userReducer';
import { circleReducer } from 'circleReducer';
import { notifyReducer } from 'notifyReducer';
import { friendListReducer } from 'friendListReducer';
import { receivedFriendRequestsReducer } from 'receivedFriendRequestsReducer';
import { sentFriendRequestsReducer } from 'sentFriendRequestsReducer';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// - Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const logger = createLogger();

// - Reducers
let reducer = redux.combineReducers({
    imageGallery: imageGalleryReducer,
    post: postReducer,
    circle: circleReducer,
    comment: commentReducer,
    vote: voteReducer,
    authorize: authorizeReducer,
    router: routerReducer,
    user: userReducer,
    notify: notifyReducer,
    global: globalReducer,
    friendList: friendListReducer,
    receivedFriendRequests: receivedFriendRequestsReducer,
    sentFriendRequests: sentFriendRequestsReducer
});

// - initial state
let initialState = {}

// - Config and create store of redux
let store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(logger, thunk, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store