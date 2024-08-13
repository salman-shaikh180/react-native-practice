import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabRecipeIcon from '../components/tabBarIcons/TabRecipeIcon';
import TabHomeIcon from '../components/tabBarIcons/TabHomeIcon';
import {Home} from '../screens/Home';
import Recipes from '../screens/Recipe';
import Feed from '../screens/Feed';
import TabMyDiet from '../components/tabBarIcons/TabMyDiet';
import Header from '../components/Header/Header';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator

    screenOptions={{
      tabBarStyle: {
        height: 98,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarItemStyle: {
        justifyContent: 'center',
        paddingVertical: 19,
        alignItems: 'center',
        height: 'auto',
      },
      tabBarLabelPosition: 'below-icon',
      headerTitleStyle: {
        color: '#303030',
        fontSize: 20,
        fontWeight: 800,
        lineHeight: 28,
      },
      tabBarHideOnKeyboard: true,
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#76BC3F',
          tabBarIcon: ({focused}) => <TabHomeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          header: () => <Header title="Recipe" />,
          tabBarActiveTintColor: '#76BC3F',
          tabBarIcon: ({focused}) => <TabRecipeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="My Diet"
        component={Feed}
        options={{
          header: () => <Header title="Feeds" />,
          tabBarActiveTintColor: '#76BC3F',
          tabBarIcon: ({focused}) => <TabMyDiet focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}
