import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';

import App from './App';
import data from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={data}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
);
