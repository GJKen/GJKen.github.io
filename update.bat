@echo off
echo ����GJKen.github.io����
set /p info="������µ���Ϣ(����:update 2022/*/* *:*):"
pause
git init
git add .
git commit -m "%info%"
git push
set /p qr=�Ƿ��git��ҳ��飿(Y or N):
SET qr=%qr%
if /I "%qr%"=="Y" (start https://github.com/GJKen/GJKen.github.io) else(goto exit)