@echo off
echo ����GJKen.github.io����
set /p info="������µ���Ϣ(����:update 2022/*/* *:*):"
pause
git init
git add .
git commit -m "%info%"
git push
pause