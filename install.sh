if ! type "gitbook" > /dev/null; then
  npm uninstall gitbook -g
  npm install gitbook-cli -g
fi
if ! type "harp" > /dev/null; then
  npm install harp -g
fi
