import * as reactRouterDom from 'react-router-dom';
import { MainView, View404 } from '../views/';

function Routes() {
    const { Routes, Route, Navigate} = reactRouterDom;
    return (
        <Routes>
            <Route path='/' element={ <MainView /> } />

            <Route path='404' element={ <View404 />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default Routes;