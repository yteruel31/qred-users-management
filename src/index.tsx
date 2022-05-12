import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ThemeProvider} from "styled-components";
import App from './App';
import {ModalProvider} from "./components/common/Modal/ModalProvider";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



const theme = {
    fontFamily: "Poppins, sans-serif",
    colors: {
        primary: "#30D679",
        secondary: "#969696"
    }
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <ModalProvider>
                        <App/>
                    </ModalProvider>
                </Provider>
                <ToastContainer theme="colored" hideProgressBar />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
