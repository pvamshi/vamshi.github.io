#!/bin/sh
git config --global -l #<= totally unnecessary, but "fixes" problem?
git config --global user.email circleci@circleci
git config --global user.name CircleCI
harp compile
cd www && git checkout gh-pages
cd www && git commit -m "build" -a 
cd www && git push origin gh-pages
