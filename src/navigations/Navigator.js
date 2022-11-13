import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import homeView from '../screens/homeView';
import Detail from '../screens/Detail';

const stackNavigatorOption = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:homeView},
    Detail:{screen:Detail}
},
    {defaultNavigationOptions:stackNavigatorOption}
);
export default createAppContainer(AppNavigator);
