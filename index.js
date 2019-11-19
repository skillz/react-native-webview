// Changing the path of WebView from lib to src because when adding
// react-native-webview directly from `yarn add react-native-webview@5.12.1`,
// the native source files are stored in a `lib` directory whereas they
// remain in the `src` directory when pointing the git hash to the skillz.
// branch. Likely the library is modified or something when uploaded to NPM
// causing differences when adding it through `yarn add`.
// https://github.com/react-native-community/react-native-webview/issues/490
// import WebView from './lib/WebView';
import WebView from './src/WebView';

export { WebView };
export default WebView;
