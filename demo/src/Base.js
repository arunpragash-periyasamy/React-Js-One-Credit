import React from 'react';
import {Test} from './test';
import Home from './home';
import Todo from './todoLists';
import {Two} from './test';
import Hello from './hello';
import ClassTest from './ClassTest';
import {Functional} from './functional';
import PropsValue from './propsvalue';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
const Base = () => {
    return (
        
    <BrowserRouter>
        <Routes>
            {/* to register particular components to a path */}
            <Route path={'/'} element={<Home />} />
            <Route path={'/todoList'} element={<Todo />} />
            <Route path={'/test'} element={<Test />} />
            <Route path={'/Two'} element={<Two />} />
            <Route path={'/Hello'} element={<Hello />} />
            <Route path={'/ClassTest'} element={<ClassTest />} />
            <Route path={'/propsvalue'} element={<PropsValue />} />
            <Route path={'/Functional'} element={<Functional />} />
        </Routes>

        </BrowserRouter>
    );
}

export default Base;