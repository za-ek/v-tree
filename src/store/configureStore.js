import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import mySaga from '../sagas/saga';
import { createStore, applyMiddleware, compose } from 'redux';

// const sagaMiddleware = createSagaMiddleware();
	console.log("process.env.NODE_ENV", process.env.NODE_ENV);
let finalStore;
if (process.env.NODE_ENV === 'production') {
	finalStore = createStore(rootReducer, applyMiddleware(thunk));
} else {
	const compMware = compose(applyMiddleware(thunk), /*applyMiddleware(sagaMiddleware),*/ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	finalStore = createStore(rootReducer, compMware);
}
export default finalStore;

// sagaMiddleware.run(mySaga);
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducer, 
// 	window.__REDUX_DEVTOOLS_EXTENSION__ 
// 	&& window.__REDUX_DEVTOOLS_EXTENSION__());