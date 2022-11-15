////npm i react-navigation      npm i react-navigation-drawer

import React from 'react'
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {SafeAreaView } from 'react-native'
import Elepricenow from './Elepricenow'
import Elediagram from './Elediagram'
import Eleproduce from './Eleproduce'
/* 
const RootStack = createDrawerNavigator(
    {
         'Hinta nyt': Elepricenow,
         'Sähkön hintakehitys': Elediagram ,
         'Sähkön hinta nyt': Eleproduce,
     } ,
     { contentComponent: props => < CustomDrawerComponent{...props} />
    })
     */
    export default function Burger() {
      return (
        <View />
      )
    }
    



