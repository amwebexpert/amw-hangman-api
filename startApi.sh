echo ---------------------------------------------------------------------
echo FIREBASE environment variables:
printenv | grep FIREBASE
echo ---------------------------------------------------------------------

echo ---------------------------------------------------------------------
echo Starting localhost in debug mode, watching files
echo ---------------------------------------------------------------------
npm run start:debug
