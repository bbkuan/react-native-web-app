import { AppRegistry } from 'react-native';
import App from './App';

// 注册应用
AppRegistry.registerComponent('App', () => App);

// 在Web上运行
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
