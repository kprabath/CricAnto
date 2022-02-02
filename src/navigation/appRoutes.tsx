import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Colors from '../res/colors';
import SignUpScreen from '../screens/signUp.screen';
import LoginScreen from '../screens/login.screen';
import WelcomeScreen from '../screens/welcome.screen';
import ProfleScreen from '../screens/profile.screen';
import TicketsScreen from '../screens/tickets.screen';
import ContributionScreen from '../screens/contributuon.screen';
import MembershipScreen from '../screens/membership.screen';
import ManageScreen from '../screens/manage.screen';
import ShopScreen from '../screens/shop.screen';

import {
  SIGN_UP_SCREEN,
  LOGIN_SCREEN,
  WELCOME_SCREEN,
  AUTH_ROUTES,
  MANAGE_SCREEN,
  CONTRIBUTION_SCREEN,
  PROFILE_SCREEN,
  TICKETS_SCREEN,
  MEMBERSHIP_SCREEN,
  SHOP_SCREEN,
} from '../common/constants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomeSideMenu from './customeSideMenu';

import TabIcon1 from '../res/images/TabIcon1.svg';
import TabIcon2 from '../res/images/TabIcon2.svg';
import TabIcon3 from '../res/images/TabIcon3.svg';
import TabIcon4 from '../res/images/TabIcon4.svg';
import TabIcon5 from '../res/images/TabIcon5.svg';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const CricantoTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const UserTabRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // screenListeners={{
      //   state: (e) => {
      //     // Do something with the state
      //     console.log('state changed', e.data);
      //   },
      // }}
    >
      <Stack.Screen
        options={{headerTitle: 'Profile'}}
        name={PROFILE_SCREEN}
        component={ProfleScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'Your Tickets'}}
        name={TICKETS_SCREEN}
        component={TicketsScreen}
      />
    </Stack.Navigator>
  );
};

const ManageRoutes = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Pending" component={ManageScreen} />
      <TopTab.Screen name="Active" component={ManageScreen} />
      <TopTab.Screen name="Deleted" component={ManageScreen} />
    </TopTab.Navigator>
  );
};
const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.white},
        // headerTitle: 'Profile',
        headerShown: false,
      }}
      drawerContent={props => <CustomeSideMenu {...props} />}>
      <Drawer.Screen
        // options={{
        //   headerTitle: 'Profile',
        // }}
        name={AUTH_ROUTES}
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{
          headerTitle: 'Contribution',
        }}
        name={CONTRIBUTION_SCREEN}
        component={ContributionScreen}
      />
      <Drawer.Screen
        options={{
          headerTitle: 'Membership',
        }}
        name={MEMBERSHIP_SCREEN}
        component={MembershipScreen}
      />
      <Drawer.Screen
        options={{
          headerTitle: 'Manage',
        }}
        name={MANAGE_SCREEN}
        component={ManageRoutes}
      />
    </Drawer.Navigator>
  );
};
const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon2 />,
        }}
        name="TestTab1"
        component={UserTabRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon5 />,
        }}
        name="TestTab2"
        component={UserTabRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon3 />,
        }}
        name="TesTab3"
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon4 />,
          headerTitle: 'hh',
        }}
        name="TestTab4"
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon1 />,
        }}
        name={AUTH_ROUTES}
        component={UserTabRoutes}
      />
    </Tab.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <NavigationContainer theme={CricantoTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name={SIGN_UP_SCREEN}
          component={SignUpScreen}
        />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
        <Stack.Screen name={AUTH_ROUTES} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
