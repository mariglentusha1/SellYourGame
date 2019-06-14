// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAQ4rT1S_iGxh4QYqDaWbL4bd0W60FzoDQ',
    authDomain: 'sellyourgame-e9b90.firebaseapp.com',
    databaseURL: 'https://sellyourgame-e9b90.firebaseio.com',
    projectId: 'sellyourgame-e9b90',
    storageBucket: 'sellyourgame-e9b90.appspot.com',
    messagingSenderId: '353473290780',
    appId: '1:353473290780:web:fd32d5b3bc97097f'
  },
    algolia: {
      appId: 'WFAMNGS1G1',
      apiKey: 'c826e1f0ff679ea02b0d216cb8e7595d',
      indexName: 'gameIndex',
      urlSync: false
    }
}
;


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
