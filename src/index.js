import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Routes } from './routes/Routes';
import { Provider } from 'react-redux';
import initStore from './redux/store';

// CR: format into multi lines
ReactDOM.render(<Provider store={initStore()}><Routes /></Provider>, document.getElementById('root'));

/*
CR: Generat notes:

- consistency - some of the code uses single quotes and some double quotes in code (E.g. import statements)
- containers: you can use the shorthand for mapDispatchToProps - simply pass an object with the action creators as keys, for example:
import {decrement, increment} from '../actions';
export default connect(mapStateToProps, { increment, decrement })(Counter);
- long lines - think about using line breaks and proper indentation when appropriate, e.g.:
<Track track={track} onClick={() => handlerOpen(track.track_id)} deleteTrack={()=> deleteTrack(track.track_id)} />
- formatting - fix indentations and format it
- prop types - you didn't define prop types for all components. it is still alright, but I would at least add a comment in README.md that it is by choice simply to save time but it is recommended to write for all components that require props.

-------------

CR: Consider relating to the following in README.md -

- folder structure - by type - a logical choice for this type of app
- perf - mention that was not extra effort into perf related optimizations (pure/memo/shouldComponentUpdate/useMemo/useCallback/etc.)

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
