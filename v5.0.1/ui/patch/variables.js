var variables={
  "name": "@ch-post/cen-mc-rc-stream-api-v2",
  "version": "5.0.1",
  "description": "cen-mc-rc Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "herzamk",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "apikana": "^0.9.25",
    "apikana-defaults": "0.0.77",
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "herzamk",
    "namespace": "app.techsys.cen.mc.rc.v2",
    "shortName": "cen-mc-rc-v2",
    "projectName": "cen-mc-rc-stream-api-v2",
    "npmPackage": "@ch-post/cen-mc-rc-stream-api-v2",
    "title": "cen-mc-rc v2 Stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.PL.Api.CenMcRc.V2",
    "dotnetPackageId": "Ch.Post.PL.Api.CenMcRc.V2.StreamApi",
    "mqs": "MQTT"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}