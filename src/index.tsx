import ReactDOM from 'react-dom/client';
import App from './App';
import { ServerApi } from './apis/ServerApi';

export const serverApi = new ServerApi();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
