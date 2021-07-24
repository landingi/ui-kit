#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run --prefix ./src jest-runner:local
npm run pretty-quick --staged
