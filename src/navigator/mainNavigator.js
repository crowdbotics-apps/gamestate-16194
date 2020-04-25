import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList32997Navigator from '../features/ArticleList32997/navigator';
import UserProfile32501Navigator from '../features/UserProfile32501/navigator';
import Tutorial32500Navigator from '../features/Tutorial32500/navigator';
import EmailAuth32473Navigator from '../features/EmailAuth32473/navigator';
import ArticleList32471Navigator from '../features/ArticleList32471/navigator';
import EmailAuth32467Navigator from '../features/EmailAuth32467/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList32997: { screen: ArticleList32997Navigator },
UserProfile32501: { screen: UserProfile32501Navigator },
Tutorial32500: { screen: Tutorial32500Navigator },
EmailAuth32473: { screen: EmailAuth32473Navigator },
ArticleList32471: { screen: ArticleList32471Navigator },
EmailAuth32467: { screen: EmailAuth32467Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
