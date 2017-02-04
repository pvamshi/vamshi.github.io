#!/bin/sh
harp compile
cd www
git checkout gh-pages
git commit -m "build" -a 
git push origin gh-pages
cd ..
