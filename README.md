# rn-module-scrollview
> React native module for scrollView.

## initial:
```bash
react-native init --version="0.44.0" RnScrollView
```

## pull to refresh with webview:
```js
<ScrollView refreshControl={<RefreshControl .../>}>
  <WebView bounce={false} ... />
</ScrollView>
```