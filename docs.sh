#!/bin/bash

rm -rf docs/

typedoc --out docs/ --name tscs --module commonjs --target ES5 ts/ --theme default

#find docs/ -type f | xargs sed -i 's/\/_([^"]+)\.html/new.html/ig'
#find docs/ -type f | xargs sed -i 's/module/new/g'
#find docs/ -type f | xargs sed -i -E 's/\/_(\w+).html/\/\1.html/g'
#rename 's/\/_(\w+).html/\/$1.html/' docs/**/*.html