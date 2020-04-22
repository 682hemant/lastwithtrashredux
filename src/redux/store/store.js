
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import signUpReducer from '../reducers/signupReducer'
import {reducer as formReducer} from 'redux-form'
import ArticleReducer from '../reducers/StoreArticle'
 
 
 import logger from 'redux-logger';

 const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
      sgn:signUpReducer,
         artr:ArticleReducer,
      form: formReducer,
      
     
     
});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger)));
export default store;
