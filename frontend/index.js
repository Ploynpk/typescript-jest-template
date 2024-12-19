"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
// import './index.css'
const App_1 = __importDefault(require("./App"));
const root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(<App_1.default />);
