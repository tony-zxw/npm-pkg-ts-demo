# npm-pkg-ts-demo
```
npm init --scope=@tony_zhang
npm install -D typescript @types/node
tsc --init
tslint --init
npm install -D jest ts-jest @types/jest

npm login
Username: tony_zhang
Password:
Email: (this IS public) email@email.com
Logged in as tony_zhang on https://registry.npm.taobao.org/.

npm config set registry=https://registry.npm.taobao.org

npm publish

npm publish --access public

// need change registry
npm config get registry
npm config set registry=https://registry.npmjs.org

npm unpublish  --force
```