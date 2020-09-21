#!/bin/bash

cd restService
npm install
npm i nexe -g
cat index.js | nexe
