// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleClientID: "635575324382-ffheao7bctbshqub8g6e25g6k5arv3bd.apps.googleusercontent.com",
  serverEndPoint: "http://localhost:3000",
  googleOAuthRedirectUrl: "http://localhost:3000/api/sessions/oauth/google",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
