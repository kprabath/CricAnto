import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
import HomeScreen from '../screens/home.screen';
import NotificationsScreen from '../screens/notifications.screen';
import UploadScreen from '../screens/upload.screen';
import TournamentsScreen from '../screens/tournaments.screen';
import EventsScreen from '../screens/events.screen';
import TournamentDetailScreen from '../screens/tournamentDetail.screen';
import VideoBufferScreen from '../screens/VideoBuffer.screen';
import EventDetailScreen from '../screens/eventDetail.screen';
import OTPScreen from '../screens/otp.screen';

import {
  EVENTS_SCREEN,
  ORDER_SUCCESS_SCREEN,
  USER_ACCOUNT_SCREEN,
  SIGN_UP_SCREEN,
  USER_MANAGEMENT_SCREEN,
  LOGIN_SCREEN,
  WELCOME_SCREEN,
  CONTRIBUTION_SUCCESS_SCREEN,
  AUTH_ROUTES,
  TAB_ROUTES,
  MANAGE_SCREEN,
  CONTRIBUTION_SCREEN,
  PROFILE_SCREEN,
  TICKETS_SCREEN,
  MEMBERSHIP_SCREEN,
  OTP_SCREEN,
  SHOP_SCREEN,
  CART_SCREEN,
  HOME_SCREEN,
  USER_PROFILE_ROUTES,
  MATCH_STATUS_SCREEN,
  NOTIFICATION_SCREEN,
  EVENT_DETAIL_SCREEN,
  UPLOAD_SCREEN,
  TOURNAMENTS_SCREEN,
  TOURNAMENTS_DETAIL_SCREEN,
  VIDEO_STREAM_SCREEN,
} from '../common/constants';
import CustomeSideMenu from './customeSideMenu';

import TabIcon1 from '../res/images/TabIcon1.svg';
import TabIcon2 from '../res/images/TabIcon2.svg';
import TabIcon3 from '../res/images/TabIcon3.svg';
import TabIcon4 from '../res/images/TabIcon4.svg';
import TabIcon5 from '../res/images/TabIcon5.svg';
import {useSelector} from 'react-redux';
import {Reducers} from '../types';

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

const HomeRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={HOME_SCREEN}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={NOTIFICATION_SCREEN}
        component={NotificationsScreen}
      />

      <Stack.Screen name={UPLOAD_SCREEN} component={UploadScreen} />
    </Stack.Navigator>
  );
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

const EventRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={EVENTS_SCREEN}>
      <Stack.Screen name={EVENTS_SCREEN} component={EventsScreen} />
      <Stack.Screen name={EVENT_DETAIL_SCREEN} component={EventDetailScreen} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      screenOptions={{
        headerStyle: {backgroundColor: Colors.white},
        headerShown: false,
      }}
      drawerContent={props => <CustomeSideMenu {...props} />}>
      <Drawer.Screen name={TAB_ROUTES} component={TabNavigator} />
      <Drawer.Screen
        name={CONTRIBUTION_SCREEN}
        component={ContributionScreen}
      />
      <Drawer.Screen
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
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <TabIcon2 fill={'#0B2C83'} /> : <TabIcon2 />;
          },
        }}
        name={HOME_SCREEN}
        component={HomeRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <TabIcon5 fill={'#0B2C83'} /> : <TabIcon5 />;
          },
        }}
        name={EVENTS_SCREEN}
        component={EventRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <TabIcon3 />,
        }}
        name={TOURNAMENTS_SCREEN}
        component={TournamentsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <TabIcon4 fill={'#0B2C83'} /> : <TabIcon4 />;
          },
        }}
        name={SHOP_SCREEN}
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <TabIcon1 fill={'#0B2C83'} /> : <TabIcon1 />;
          },
        }}
        name={USER_PROFILE_ROUTES}
        component={UserProfileRoutes}
      />
    </Tab.Navigator>
  );
};

const AuthRoutes = (
  <>
    <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />

    <Stack.Screen
      options={{headerShown: false}}
      name={SIGN_UP_SCREEN}
      component={SignUpScreen}
    />

    <Stack.Screen
      options={{headerShown: false}}
      name={OTP_SCREEN}
      component={OTPScreen}
    />
  </>
);

const MainRoutes = (
  <>
    <Stack.Screen name={AUTH_ROUTES} component={DrawerNavigator} />
    <Stack.Screen
      name={TOURNAMENTS_DETAIL_SCREEN}
      component={TournamentDetailScreen}
    />
    <Stack.Screen name={VIDEO_STREAM_SCREEN} component={VideoBufferScreen} />
  </>
);

const AppRoutes = () => {
  // variable scope
  const isAuthenticated = useSelector(
    (state: Reducers) => state.auth.isAuthenticated,
  );
  const isFirstTime = useSelector((state: Reducers) => state.auth.isFirstTime);
  const token = useSelector((state: Reducers) => state.auth.token);

  console.log('token', token);

  return (
    <NavigationContainer theme={CricantoTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isAuthenticated && AuthRoutes}
        {isAuthenticated && isFirstTime && (
          <Stack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
        )}
        {isAuthenticated && !isFirstTime && MainRoutes}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
