# libtest utils

This library is used as handy tool to run integration tests for core.ai services.

## Code Guardian

[![<app> build verification](https://github.com/aicore/template-nodejs/actions/workflows/build_verify.yml/badge.svg)](https://github.com/aicore/template-nodejs/actions/workflows/build_verify.yml)

<a href="https://sonarcloud.io/summary/new_code?id=aicore_template-nodejs-ts">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=alert_status" alt="Sonar code quality check" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=security_rating" alt="Security rating" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=vulnerabilities" alt="vulnerabilities" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=coverage" alt="Code Coverage" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=bugs" alt="Code Bugs" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=reliability_rating" alt="Reliability Rating" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=sqale_rating" alt="Maintainability Rating" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=ncloc" alt="Lines of Code" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=aicore_template-nodejs-ts&metric=sqale_index" alt="Technical debt" />
</a>

# How to USE

``` js
// Add test dependency in package.json
import {installMysql,  uninstallMysql} from libtestutils;
try{
await installMysql();
await uninstallMysql();
} catch (e){
console.log(e)
}
```

# TODOs after template use

1. Update package.json with your app defaults
2. Check Build actions on pull requests.
3. create a home page in wiki by going to wiki link https://github.com/<your_org>/<your_repo>/wiki
4. Goto github `repository` > `settings`> and uncheck `Allow merge commits`
5. In sonar cloud, enable Automatic analysis from `Administration
   Analysis Method` for the first time before a pull request is
   raised: ![image](https://user-images.githubusercontent.com/5336369/148695840-65585d04-5e59-450b-8794-54ca3c62b9fe.png)
6. Check codacy runs on pull requests, set codacy defaults. You may remove codacy if sonar cloud is only needed.
7. Update the above Code Guardian badges; change all `id=aicore_template-nodejs-ts` to the sonar id of your project
   fields. see this PR: https://github.com/aicore/libcache/pull/13

# Commands available

## Building

Since this is a pure JS template project, build command just runs test with coverage.

```shell
> npm install   // do this only once.
> npm run build
```

## Linting

To lint the files in the project, run the following command:

```shell
> npm run lint
```

To Automatically fix lint errors:

```shell
> npm run lint:fix
```

## Testing

To run all tests:

```shell
> npm run test
```

Additionally, to run unit/integration tests only, use the commands:

```shell
> npm run test:unit
> npm run test:integ
```

## Coverage Reports

To run all tests with coverage:

```shell
> npm run cover
 
After running coverage, detailed reports can be found in the coverage folder listed in the output of coverage command.
Open the file in browser to view detailed reports.

To run unit/integration tests only with coverage
```shell
> npm run cover:unit
> npm run cover:integ
```
