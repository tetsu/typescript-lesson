# Typescript Lesson

### Install typescript

```
npm install -g typescript node-ts
```

### Install Parcel Bundler for frontend

```
npm install -g parcel-bundler
```

### Install JSON server to store and fetch JSON.

1. Install JSON Server
   ```
   npm install -g json-server
   ```
1. Go to "web" directory
   ```
   cd web
   ```
1. Create db.json file with following data
   ```
   {"users":[]}
   ```
1. Run Json-server
   ```
   json-server -w db.json
   ```

### Run web on Typescript with Parcel

1. Go to 'web' directory
   ```
   cd web
   ```
1. Run parcel
   ```
   parcel index.html
   ```

## npm install react-redux error

Following command might fix this issue.

```
npm config set unsafe-perm true
```
