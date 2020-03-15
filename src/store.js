import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//redux dev tools debugger

const middlewares = [];
middlewares.push(thunk);
middlewares.push(promise);
if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`);
    const logger = createLogger({});
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default createStore(
    reducers,
    composeEnhancer(middleware)
);