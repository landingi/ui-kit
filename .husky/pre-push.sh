#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run jest-runner
npm run pretty-quick --staged
