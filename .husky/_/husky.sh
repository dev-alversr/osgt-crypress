#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug() {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $*"
  }
  husky_skip_init=1
  [ -f ~/.huskyrc ] && . ~/.huskyrc
  export readonly husky_skip_init
  sh -e "$0" "$@"
  exit $?
fi
