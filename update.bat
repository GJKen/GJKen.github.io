@echo off
echo 更新GJKen.github.io代码
set /p info="输入更新的信息(例如:update 2022/*/* *:*):"
pause
git init
git add .
git commit -m "%info%"
git push
pause