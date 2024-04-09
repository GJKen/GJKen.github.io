function ReplaceCmds(type, setu) {
	if (type == 1) {
		cmds.innerHTML = ('\
			<h3 style="text-align:center;">当前模式为绝境模式</h3>\
			<p class="title2">本服Q群:735468034, 以及Steam组: <a href="http://steamcommunity.com/groups/jkchan" title="JKChan Server" target="_blank">http://steamcommunity.com/groups/jkchan</a></p>\
			<p>有问题可到<code>Telegram</code>联系我 <a href="http://t.me/GJK_en" title="@GJK_en" target="_blank">http://t.me/GJK_en</a></p><br>\
			<p class="title">为保持好的游玩环境,请路人玩家不要无理由投票踢出其他玩家<br>恶意黑枪和开挂等等不文明行为皆可游戏内使用!vk投票踢人</text><br><br>\
			<p class="title">想要匹配更多人,就设置steam下载地区为上海,加装<code>8 slots lobbies fixed</code>(8人大厅mod)可以匹配8人,不加装则4人匹配</text><br><br>\
			<p class="title">进服闪退,音效卡顿掉帧的解决方法:</p>\
			<ul>\
				<li>检查服务器当前地图是否为三方图,检查本地是否能正常进入三方图,如果本地三方图能正常进入,进不来服务器可能是别的原因</li>\
				<li>在选项→视频→高级设置中将"可用的页池内存"改为低可解决闪退问题<br></li>\
				<li>在游戏启动项添加<code>-heapsize 1500000 -num_edicts 4096 -processheap -highpriority</code>可解决音效卡顿掉帧问题</li>\
			</ul>\
	')}
	else if (type == 2) {
		cmds.innerHTML = ('\
		<h3>介绍下此模式的特性:</h3>\
		<p id="btn6">刷特时间调整↴</p>\
		<table>\
			<tbody>\
				<tr>\
					<td>所有特感刷特时间20s</td>\
					<td>玩家离开安全区30s后刷特</td>\
					<td>Tank存在不刷特</td>\
				</tr>\
			</tbody>\
		</table>\
		<p id="btn6">武器调整↴</p>\
		<table>\
			<tbody>\
				<tr>\
					<td>M60打空弹夹不会掉落</td>\
				</tr>\
				<tr>\
					<td>awp 2.2倍伤害(253)</td>\
					<td>scout 2.5倍伤害(262.5)</td>\
				</tr>\
				<tr>\
					<td>sg552 1.2倍伤害(38)</td>\
					<td>mp5 1.2倍伤害(28)</td>\
				</tr>\
			</tbody>\
		</table>\
		<p>特感主动出击?可能</p>\
	')}
	else if (type == 3) {
		cmds.innerHTML = ('\
		<table style="width:100%">\
			<thead>\
				<tr>\
					<th>指令/按键</th>\
					<th>功能</th>\
				</tr>\
			</thead>\
			<tbody>\
				<tr>\
					<td>!match</td>\
					<td>投票更改游戏模式</td>\
				</tr>\
				<tr>\
					<td>!v !votes</td>\
					<td>多功能投票,不同游戏模式不同的投票内容</td>\
				</tr>\
				<tr>\
					<td>!maps</td>\
					<td>投票换地图 可更换三方图 自选地图章节</td>\
				</tr>\
				<tr>\
					<td>!nxmaps</td>\
					<td>下一张地图投票(需在救援关才能投票)</td>\
				</tr>\
				<tr>\
					<td>!afk</td>\
					<td>闲置</td>\
				</tr>\
				<tr>\
					<td>!away !s</td>\
					<td>加入旁观者</td>\
				</tr>\
				<tr>\
					<td>!join !jg</td>\
					<td>加入生还者</td>\
				</tr>\
				<tr>\
					<td>!teams</td>\
					<td>查看团队信息</td>\
				</tr>\
				<tr>\
					<td>!b !buy !rpg</td>\
					<td>简易商店</td>\
				</tr>\
				<tr>\
					<td>!zs</td>\
					<td>快速清空血条,转生异世界</td>\
				</tr>\
				<tr>\
					<td>!g</td>\
					<td>丢物品</td>\
				</tr>\
				<tr>\
					<td>z(订购键)</td>\
					<td>订购键的"<spawn style="color:#da4b3a">看</spawn>"可标记物品 / 路线</td>\
				</tr>\
			</tbody>\
		</table>\
	')}
	else if (type == 4) {
		bgimg.style.zIndex = "9"
	}
	else if (setu == 1) {
		randomSetu();
	}
}