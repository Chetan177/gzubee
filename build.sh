#!/bin/bash

cd restService
npm install
npm ci
npm run build --if-present
#npm test
