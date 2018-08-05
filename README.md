# firebase-vue-tutorial

## Project setup

```
$ yarn install
$ cp .env.skeleton .env
```

### Compiles and hot-reloads for development

```
$ yarn run serve
```

### Compiles and minifies for production

```
$ yarn run build
```

### Lints and fixes files

```
$ yarn run lint
```

### Deploy

#### Requirements

* Create Firebase project
* Enable Hosting
* Enable Authentication with Google Login
* Enable Realtime Database and setting rules of below

    ```
    {
      "rules": {
        "memos": {
          "$uid": {
              ".read": "$uid === auth.uid",
              ".write": "$uid === auth.uid"
          }
        }
      }
    }
    ```

* Login to Firebase in CLI

    ```
    $ yarn run firebase login
    ```

#### How to deploy

```
$ yarn deploy
```
