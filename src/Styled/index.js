import React from 'react';
import Hook from './Hook'
import HigherOrderComponent from './HigherOrderComponent'
import NestedStylesHook from './NestedStylesHook'
import MyComponent from './MyComponent'
import AdaptingHook from './MyButton'
import StressTest from './StressTest'

function index(props) {
    return (
        <div>
            <Hook />
            <HigherOrderComponent />
            <NestedStylesHook />
            <MyComponent />
            <AdaptingHook />
            <StressTest />
        </div>
    );
}

export default index;