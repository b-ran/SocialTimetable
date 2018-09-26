import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from "./App";
import {YellowBox} from 'react-native';
//Fix to Bad Warning Message Credit: https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Setting a timer']);
YellowBox.ignoreWarnings(['Warning: Each child in an array or iterator should have']);
AppRegistry.registerComponent(appName, () => App);
