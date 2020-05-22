![3](https://user-images.githubusercontent.com/62444938/82684977-76d8e080-9c21-11ea-9f46-2009e5785ea2.png)


##Documentation

This web helps find gitgub projects.The webpage has a convenient search tool which navigates to all  projects in GitHub and allows to view readme file as well.

![1](https://user-images.githubusercontent.com/62444938/82685315-ff578100-9c21-11ea-8ee1-24efa09d3c66.png)

**login page**

![2](https://user-images.githubusercontent.com/62444938/82685450-375ec400-9c22-11ea-958c-6f583477e193.png)

 Repository List
 
 
## start

1. To install dependencies and clean the git repo run:

  ```shell
  $ yarn install
  ```

  *We recommend using `yarn` for installing packages, but you can use `npm` instead*:

  ```shell
  $ npm install
  ```
2. Create first build

  ```shell
  $ yarn run build:prod
  ```
3. Copy .env.example file to .env and make the necessary changes there
  
4. Run project in Dev mode

  ```shell
  $ yarn run dev
  ```

## Command Line Commands

#### Installation

```Shell
yarn install
```
Installs the dependencies.

#### Development

```Shell
yarn run dev
```

Starts the development server running on `http://localhost:3000` using the webpack.development.config.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

```Shell
yarn run dev:server
```

Starts the development server and makes your application accessible at http://localhost:3000.

```Shell
yarn run clean
```
Removes a directory "dist" from a project

#### Building

```Shell
yarn build:prod
```

Prepares your app for deployment to production environment (using the webpack.production.frontend.config.js) (does not run tests). Optimizes and minifies all files, piping them to the `dist` folder.


#### Testing

```Shell
yarn run test
```

Tests your application modern JavaScript Testing Framework - Jest with the unit tests specified in the `**/__tests__/*.spec.js` files
throughout the application.

```Shell
yarn run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

```Shell
yarn run coverage
```

Generates test coverage.