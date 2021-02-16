// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'aw9Uz9Aaifme5mDa14UksXf6MtfQjQW6',
  domain:'dev-e8sf6q9b.us.auth0.com',
  audience: 'https://dev-e8sf6q9b.us.auth0.com/api/v2/',
  scope: 'openid profile email',
  redirect: 'https://localhost:4200/public/callback'
  },
  awsURL: 'https://h8mrdt1uc6.execute-api.us-east-2.amazonaws.com',
  baseURL: 'https://h8mrdt1uc6.execute-api.us-east-2.amazonaws.com/dev/walks/',
  baseGalleryURL: 'https://h8mrdt1uc6.execute-api.us-east-2.amazonaws.com/dev/images/'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
