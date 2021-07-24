#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run jest-runner:local
npm run pretty-quick --staged
