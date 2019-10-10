# JS Crash Mapping Tool

This is lightweight tool to extract JS Crash, it can be consolidated by Firebase/Fabric Crashlytics. All you need to do is capture/record all `crash` events on JS thread and send it.

## Usage
```
npm run start data="<STRING>"

example:

npm run start data="D/CrashlyticsCore index.android.bundle:715:745 forEach@[native code] tWithComponent@index.android.bundle:715:671 value@index.android.bundle:1514:2131 Cr@index.android.bundle:88:49183 Ji@index.android.bundle:88:70549 Ki@index.android.bundle:88:71041 Ua@index.android.bundle:88:77455 Na@index.android.bundle:88:76778 Ie@index.android.bundle:88:84181 Me@index.android.bundle:88:13520 notify@index.android.bundle:463:871 notifyNestedSubs@index.android.bundle:463:443 notifySubscribers@index.android.bundle:458:1112 [native code] handleChangeWrapper@index.android.bundle:463:518 [native code] j@index.android.bundle:372:4370 index.android.bundle:419:2031 index.android.bundle:377:9704 handleAppStateChange@index.android.bundle:1120:2688 [native code] index.android.bundle:342:835 value@index.android.bundle:45:1247 value@index.android.bundle:28:3301 index.android.bundle:28:812 value@index.android.bundle:28:2555 value@index.android.bundle:28:784 value@[native code]"

```

### results
```
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/src/locale/i18n.js',
  line: 21,
  column: 34,
  name: 'split' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-prod.js',
  line: 5920,
  column: 4,
  name: 'workInProgress' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-prod.js',
  line: 6500,
  column: 21,
  name: 'root' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-prod.js',
  line: 6441,
  column: 22,
  name: 'nextFlushedRoot' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/src/components/Friends/inviteListItem.js',
  line: 139,
  column: 12,
  name: null }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-prod.js',
  line: 5961,
  column: 45,
  name: 'nextUnitOfWork' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-prod.js',
  line: 7004,
  column: 18,
  name: null }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-prod.js',
  line: 3976,
  column: 21,
  name: 'render' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-prod.js',
  line: 1013,
  column: 31,
  name: 'fn' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-redux/lib/utils/Subscription.js',
  line: 29,
  column: 12,
  name: null }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-redux/lib/utils/Subscription.js',
  line: 71,
  column: 19,
  name: 'notify' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-redux/lib/components/Provider.js',
  line: 73,
  column: 28,
  name: 'notifyNestedSubs' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/redux/lib/redux.js',
  line: 219,
  column: 31,
  name: 'i' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-redux/lib/utils/Subscription.js',
  line: 76,
  column: 11,
  name: 'onStateChange' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/@redux-saga/core/dist/redux-saga-core.prod.cjs.js',
  line: 1319,
  column: 26,
  name: 'action' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/vendor/emitter/EventEmitter.js',
  line: 182,
  column: 12,
  name: 'subscription' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native-offline/src/redux/createNetworkMiddleware.js',
  line: 133,
  column: 16,
  name: 'action' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/AppState/AppState.js',
  line: 89,
  column: 18,
  name: 'appStateData' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-navigation/src/react-navigation.js',
  line: 145,
  column: 6,
  name: null }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js',
  line: 106,
  column: 26,
  name: 'module' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/src/locale/i18n.js',
  line: 19,
  column: 18,
  name: null }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js',
  line: 366,
  column: 47,
  name: 'moduleMethods' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js',
  line: 314,
  column: 8,
  name: 'fn' }
{ source: '/Users/mechazod/Documents/mechazod/<PROJ>/node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js',
  line: 105,
  column: 17,
  name: null }
```

