import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../res/colors';
import SignUpScreen from '../screens/signUp.screen';
import LoginScreen from '../screens/login.screen';
import WelcomeScreen from '../screens/welcome.screen';
import ProfleScreen from '../screens/profile.screen';
import TicketsScreen from '../screens/tickets.screen';
import ContributionScreen from '../screens/contribution.screen';
import MembershipScreen from '../screens/membership.screen';
import ManageScreen from '../screens/manage.screen';
import ShopScreen from '../screens/shop.screen';
import CartScreen from '../screens/cart.screen';
import MatchStatusScreen from '../screens/matchStatus.screen';
import ContributionSuccessScreen from '../screens/contributionSuccess.screen';
import OrderSuccessScreen from '../screens/orderSuccess.screen';
import UserManagementScreen from '../screens/userManagement.screen';
import UserAccountScreen from '../screens/userAccount.screen';

import {
  ORDER_SUCCESS_SCREEN,
  USER_ACCOUNT_SCREEN,
  SIGN_UP_SCREEN,
  USER_MANAGEMENT_SCREEN,
  LOGIN_SCREEN,
  WELCOME_SCREEN,
  CONTRIBUTION_SUCCESS_SCREEN,
  AUTH_ROUTES,
  MANAGE_SCREEN,
  CONTRIBUTION_SCREEN,
  PROFILE_SCREEN,
  TICKETS_SCREEN,
  MEMBERSHIP_SCREEN,
  SHOP_SCREEN,
  CART_SCREEN,
  USER_PROFILE_ROUTES,
  MATCH_STATUS_SCREEN,
} from '../common/constants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomeSideMenu from './customeSideMenu';

import TabIcon1 from '../res/images/TabIcon1.svg';
import TabIcon2 from '../res/images/TabIcon2.svg';
import TabIcon3 from '../res/images/TabIcon3.svg';
import TabIcon4 from '../res/images/TabIcon4.svg';
import TabIcon5 from '../res/images/TabIcon5.svg';
import UserAccount from '../screens/userAccount.screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CricantoTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const UserProfileRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{headerTitle: 'Profile'}}
        name={PROFILE_SCREEN}
        component={ProfleScreen}
      />

      <Stack.Screen name={MATCH_STATUS_SCREEN} component={MatchStatusScreen} />
      <Stack.Screen name={TICKETS_SCREEN} component={TicketsScreen} />
    </Stack.Navigator>
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
      <Drawer.Screen name={AUTH_ROUTES} component={TabNavigator} />
      <Drawer.Screen
        name={CONTRIBUTION_SCREEN}
        component={ContributionScreen}
      />
      <Stack.Screen
        name={CONTRIBUTION_SUCCESS_SCREEN}
        component={ContributionSuccessScreen}
      />
      <Drawer.Screen
        name={USER_MANAGEMENT_SCREEN}
        component={UserManagementScreen}
      />
      <Drawer.Screen name={USER_ACCOUNT_SCREEN} component={UserAccountScreen} />
      <Drawer.Screen name={MEMBERSHIP_SCREEN} component={MembershipScreen} />
      <Drawer.Screen name={MANAGE_SCREEN} component={ManageScreen} />
      <Drawer.Screen name={CART_SCREEN} component={CartScreen} />
      <Drawer.Screen
        name={ORDER_SUCCESS_SCREEN}
        component={OrderSuccessScreen}
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
        component={UserProfileRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon5 />,
        }}
        name="TestTab2"
        component={UserProfileRoutes}
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
        name={SHOP_SCREEN}
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon1 />,
        }}
        name={USER_PROFILE_ROUTES}
        component={UserProfileRoutes}
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
