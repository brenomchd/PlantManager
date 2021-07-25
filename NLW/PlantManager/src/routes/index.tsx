import React from "react";
import {NavigationContainer} from '@react-navigation/native';  // Container de navegação do app

import StackRoutes from './stack.routes';

const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;  