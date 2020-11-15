@echo off

:: "aftc-node-tools": "^0.1.1",
:: "gulp": "^4.0.2",
:: "gulp-concat": "^2.6.1",
:: "gulp-inject-string": "^1.1.2",
:: "gulp-terser": "^1.2.0"
:: "async": "^3.1.1",
:: "line-reader": "^0.4.0"

del "package-lock.json"
rmdir /S /Q "node_modules"

CALL npm i -d aftc-node-tools
CALL npm i -d gulp
CALL npm i -d gulp-concat
CALL npm i -d gulp-inject-string
CALL npm i -d gulp-terser
CALL npm i -d async
CALL npm i -d line-reader