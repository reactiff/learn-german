@echo off
set /p msg="Enter git commit message: "
@echo on

git add .
git commit -m "%msg%"
git push

yarn deploy

@echo off
set /p ext="Press ENTER to close the window"
@echo on

