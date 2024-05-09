import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Notfound from "./components/Notfound";

function App() {
    return ( <
        >
        <
        Header / >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = "/movies"
        element = { < Home / > }
        /> <
        Route path = "/movies/:movieId"
        element = { < Detail / > }
        /> <
        Route path = "*"
        element = { < Notfound / > }
        /> <
        /
        Routes > < / >
    );
}

export default App;