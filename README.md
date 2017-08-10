# rn-module-scrollview
> React native module for scrollView.

## initial:
```bash
react-native init --version="0.44.0" RnScrollView
```

## pull to refresh with webview:
```js
// https://github.com/facebook/react-native/issues/7870
<ScrollView refreshControl={<RefreshControl .../>}>
  <WebView bounce={false} ... />
</ScrollView>
```