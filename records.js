let records = `
current_date:2024-10-03
hum:2,64/1,1/2,6/1,1/2,5/1,1/2,19/1,1/2,3/1,1/2,17/1,1/2,5/1,1/2,3/1,3/2,7/1,1/2,1/0,1/2,4/1,3/2,3/1,4/2,2/0,1/2,2/1,1/2,1/0,1/1,1/2,1/0,2/1,1/2,3/1,2/2,2/1,3/0,1/1,1/2,1/0,1/2,1/1,2/0,4
tsreaper:2,190
lengli:2,158/1,1/2,25/1,1/2,5
sugar:1,1/0,189
lyxxys:1,1/0,50/2,3/1,1/2,9/1,2/2,1/1,2/2,1/1,1/2,11/1,1/2,5/1,1/2,1/1,1/2,25/1,1/2,32/1,1/2,5/1,2/2,4/1,1/2,5/1,1/2,1/0,1/2,3/1,1/2,3/1,1/2,1/1,1/2,5/1,2/2,3
mikeac:2,27/0,3/2,7/0,5/2,1/0,5/2,3/0,2/2,1/0,6/2,4/0,126
ncf:1,15/0,3/1,48/2,1/1,6/2,1/1,5/2,1/1,6/2,1/1,28/2,1/1,4/2,2/1,5/2,1/0,1/1,3/2,1/1,4/0,1/1,10/0,42
yawn_sean:2,190
grobycn:1,3/2,2/1,1/2,45/1,1/2,1/1,1/2,4/1,1/2,1/1,2/2,1/1,6/2,1/1,1/0,1/2,2/1,2/2,3/1,3/2,1/1,1/2,1/0,1/2,1/0,1/2,5/1,1/2,4/0,1/2,1/0,1/1,1/2,1/1,1/2,2/1,3/2,1/1,1/2,1/1,9/2,1/1,1/2,1/1,2/2,1/1,2/0,2/1,1/2,2/1,2/2,1/1,2/0,1/1,1/0,11/1,9/0,1/2,2/1,1/2,1/0,2/1,3/0,1/1,1/0,1/1,1/2,4/1,2/0,1/1,1/0,4/2,3
tauros:2,54/0,136
leoncn:1,1/2,1/1,1/2,2/1,1/2,3/1,4/2,1/1,1/2,11/1,4/2,3/1,2/2,2/1,2/2,1/1,2/2,4/1,2/2,7/1,1/2,2/1,1/2,4/1,5/2,1/1,1/2,1/1,7/2,5/1,1/2,3/1,3/2,3/1,1/2,11/1,1/2,1/1,1/2,2/1,10/2,4/1,1/2,5/1,21/2,1/1,19/2,8/1,1/2,5/1,1/2,1/1,3
md:1,2/0,2/1,2/0,3/1,6/2,8/1,1/2,3/1,3/2,20/1,1/2,1/1,2/2,4/1,1/2,5/1,1/2,6/1,1/2,3/1,1/2,1/1,1/2,3/1,3/2,5/1,1/2,5/1,1/2,1/1,5/2,1/1,1/2,1/1,3/2,1/1,1/2,1/1,1/2,4/1,4/2,4/1,20/0,1/1,2/0,1/1,27/0,1/1,8/0,1/1,4/0,1
retyrn:1,1/2,3/1,3/2,1/1,2/2,1/1,1/2,2/1,1/2,3/1,1/2,3/1,2/2,3/1,1/2,1/1,1/2,3/1,2/2,3/1,1/2,1/1,2/2,5/1,1/2,5/1,1/2,4/1,1/2,5/1,1/2,6/1,1/2,5/1,1/2,23/1,1/2,5/1,1/2,22/1,1/2,1/0,1/2,33/1,1/2,18/1,1/2,4
k423:2,1/0,1/2,1/0,3/2,4/0,1/2,63/0,115
linxiaotian:2,3/0,6/1,1/0,2/2,1/1,1/2,2/0,4/2,1/1,2/2,2/0,2/1,1/0,3/2,1/0,157
cc4414:1,1/2,3/1,1/0,44/1,1/0,11/1,1/0,2/1,1/2,2/0,3/1,1/0,4/1,1/0,8/2,1/1,1/0,1/1,2/2,1/1,4/2,1/0,8/2,1/0,85
jinyumantang:1,2/0,62/2,2/0,19/1,1/0,38/1,2/0,19/1,1/0,42
leander:1,1/0,1/1,2/2,1/0,14/2,1/0,168
dinghc:1,4/2,3/1,3/2,1/1,2/2,1/1,3/2,1/1,3/2,1/0,1/2,2/1,3/2,2/1,1/2,1/1,2/2,3/1,4/2,2/1,1/2,2/1,1/2,1/0,1/1,4/0,2/1,3/0,1/1,5/0,5/1,1/0,3/1,3/0,4/1,2/0,2/1,2/0,4/1,1/0,1/1,4/0,1/1,3/0,5/1,1/0,2/2,1/1,2/2,1/0,1/1,1/2,1/1,3/0,2/1,4/0,5/1,1/0,2/1,1/0,1/1,2/0,1/1,1/0,1/1,3/0,2/1,2/2,2/0,1/1,4/0,5/1,3/0,2/1,4/0,3/1,2/0,1/1,2/0,1/1,3/0,2/1,5/0,2
arrogant_sword:1,4/2,1/1,1/2,1/1,2/2,1/1,3/0,1/1,1/2,1/1,2/2,1/1,6/0,21/2,4/1,3/2,3/1,1/2,1/1,1/2,1/1,3/0,1/2,1/0,1/2,1/0,2/1,1/2,1/1,1/2,1/0,8/1,1/2,1/1,1/2,9/1,1/2,7/1,1/2,1/1,1/0,2/2,3/0,5/2,2/0,2/2,1/0,69
aging1986:1,1/0,62/2,2/0,122
hongrock:2,1/0,5/2,5/1,1/2,13/0,162
test:1,1/0,186
cpchenpi:1,1/0,185
jie_chen:1,1/0,183
retyn:1,1/0,183
rememorio:1,2/0,180
jokemaker:1,1/0,1/1,3/0,9/1,1/0,167
yefei162:1,1/0,10/2,1/1,2/0,1/1,1/2,2/1,17/2,1/1,4/2,1/1,4/0,1/1,3/2,1/1,1/2,1/1,6/2,1/1,1/2,1/1,1/2,1/1,5/2,1/1,8/2,2/1,2/2,1/1,6/2,2/1,4/2,1/1,7/0,2/1,5/2,2/1,6/0,1/1,2/0,8/1,1/0,2/1,1/0,50
yangsisi:1,1/0,53/1,1/0,127
fatalerror:1,1/0,20/2,4/1,2/2,4/1,1/0,1/2,3/0,3/2,2/0,1/2,2/1,1/2,6/0,6/2,4/0,2/2,1/0,16/2,2/0,11/2,2/0,9/2,1/0,9/2,1/0,4/2,1/0,2/2,1/0,3/2,1/0,14/2,1/0,6/2,3/0,30
ynotbbetter:2,15/0,165
gh123:1,2/0,2/1,1/0,5/1,1/0,1/1,1/0,2/1,2/0,2/1,1/0,2/1,2/0,1/1,3/0,3/1,1/0,2/1,1/0,1/1,1/0,2/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/0,4/1,5/0,1/1,1/0,1/1,1/0,2/1,1/0,1/1,1/0,6/1,1/0,1/1,5/0,1/1,1/0,2/1,1/0,3/1,4/0,2/1,1/0,2/1,1/0,3/1,1/0,10/1,1/0,1/1,2/0,2/1,1/0,1/1,2/0,2/1,4/0,2/1,1/0,2/1,1/0,8/1,1/0,1/1,2/0,2/1,4/0,2/1,4/0,3/1,1/0,4/1,1/0,1/1,2/0,2/1,2
sheepstick:2,54/0,15/2,9/0,100
nreyog:1,1/0,7/1,1/0,12/1,1/0,156
iron_buster:1,1/0,13/1,2/0,24/1,1/0,24/1,1/0,22/1,1/0,12/1,1/0,65/1,1/0,10
ggl:1,1/0,8/1,1/0,16/1,2/0,54/1,1/0,45/1,1/0,49
ku:1,2/0,1/1,9/0,1/1,3/0,3/1,3/0,1/1,1/0,1/1,2/0,10/1,1/0,5/1,1/0,1/1,2/0,7/1,2/0,12/1,2/0,10/1,1/0,4/1,1/0,1/1,3/0,1/2,1/1,2/0,4/1,1/0,1/1,1/0,5/1,1/0,1/1,1/2,1/0,1/1,2/0,5/1,1/0,3/1,1/0,28/1,4/0,5/1,1/0,11/1,1/0,5
harmonly:1,2/0,1/1,1/0,1/2,2/1,1/0,1/1,1/0,14/1,1/0,2/1,1/0,13/1,1/0,5/1,1/0,130
windly:1,4/2,2/1,11/2,1/1,5/0,154
djl777:2,1/0,4/2,1/0,83/2,1/0,5/2,1/0,35/2,2/0,4/2,1/0,5/2,1/0,33
toc:1,1/0,1/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/2,1/1,2/0,3/1,19/0,1/1,5/0,1/1,2/0,1/1,1/0,3/1,10/0,1/1,1/0,1/1,14/0,1/1,11/0,82
inhng:1,2/2,1/0,1/1,73/2,1/1,16/2,1/1,29/0,52
yss:1,1/0,175
deckedge:1,1/0,11/1,1/0,2/2,2/0,2/1,1/0,1/1,4/0,2/1,1/2,1/1,2/2,1/0,1/1,3/2,1/1,1/0,1/1,1/2,1/1,1/2,2/1,1/2,4/1,2/2,5/1,3/2,1/1,3/2,3/1,1/0,10/2,3/0,2/1,1/2,1/1,2/0,1/1,1/0,1/1,2/0,2/1,1/0,1/2,1/1,2/0,5/1,1/0,3/1,2/0,3/1,1/0,2/1,1/0,2/1,2/0,1/1,1/0,4/1,1/0,4/1,3/0,1/1,2/0,2/1,1/0,27/1,2/0,6
sprite:1,1/0,4/2,1/1,2/0,1/2,1/0,1/1,3/0,1/2,1/1,5/2,2/1,3/0,1/1,5/0,1/1,2/0,1/1,1/0,138
ldh:2,10/0,3/2,2/0,72/2,6/0,80
wink:1,4/2,1/0,2/1,8/0,4/1,4/0,8/1,1/0,1/1,1/0,1/1,2/0,51/2,1/0,84
octal2024:2,1/0,1/1,2/0,168
dwq:1,2/0,1/1,4/0,1/1,2/0,2/1,5/0,1/1,4/0,2/1,4/0,1/1,9/0,4/1,3/0,127
pdocw:2,1/1,36/0,17/1,4/0,44/1,2/0,16/1,6/0,46
wanderovo:2,4/1,2/2,1/1,5/2,1/1,4/2,4/1,5/2,1/1,3/2,4/1,1/2,1/1,1/2,3/1,1/2,1/1,2/2,2/1,2/2,5/1,3/2,1/1,1/2,1/1,1/2,3/1,2/2,8/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,3/1,1/2,2/1,1/2,2/1,1/2,5/1,1/2,1/1,1/2,1/1,3/2,1/1,12/2,1/1,2/2,5/1,1/2,1/1,2/2,1/1,4/2,1/1,4/0,1/1,4/0,1/1,11/2,1/1,2/2,2/1,3/2,3/1,3/2,2/1,1/2,1
override:1,52/2,1/1,18/2,1/1,26/0,2/1,1/0,71
hang:1,115/0,1/1,23/0,1/1,32
wangggong:1,1/0,3/2,1/0,5/2,2/1,1/0,1/1,2/2,1/1,1/0,1/1,1/0,2/1,1/0,3/1,1/0,4/1,3/0,1/1,2/0,12/1,4/0,3/2,1/0,1/1,1/0,3/1,2/0,2/1,4/0,23/1,1/0,76
goodluck_ccq:1,2/0,1/2,1/0,165
yskm-an:1,1/0,1/1,10/2,1/1,3/0,151
ranzhi:1,1/0,4/1,2/0,1/1,1/0,1/1,1/0,13/1,3/0,1/1,1/2,1/1,5/2,1/1,1/0,3/1,2/0,1/1,5/0,2/1,1/0,37/1,3/0,3/1,8/0,64
hopeworse:2,8/1,2/2,11/1,1/2,5/1,2/2,1/0,135
dwq_n:1,1/0,164
550n:1,4/0,1/1,1/0,121/2,2/1,2/0,34
subcrip:2,1/0,159
anonymous:1,1/0,3/1,1/0,154
lu_xz:1,1/2,2/1,1/2,3/1,1/0,1/1,1/0,4/1,1/0,3/2,9/1,1/2,1/1,1/0,4/2,5/0,1/2,9/0,6/2,1/0,2/2,3/0,1/2,8/0,18/2,1/0,69
yakultgo:1,1/2,29/0,1/2,5/0,1/2,3/0,1/2,6/0,2/2,4/0,1/2,6/0,1/2,3/0,1/2,1/0,1/2,11/0,2/2,9/0,2/2,1/0,1/2,3/0,1/2,2/0,1/2,2/0,9/2,1/0,6/2,1/0,32/2,2/0,1/2,1
windj0y:2,1/0,5/2,10/1,2/2,4/1,1/2,4/1,3/2,1/1,3/2,1/1,4/0,1/1,1/0,3/1,1/0,109
shawnqiang:1,2/0,37/1,1/0,3/1,1/0,109
zhangk33:1,1/2,1/0,151
mymsx:1,1/0,5/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,1/1,2/0,135
mrsuns:2,3/1,1/2,3/1,1/2,7/1,1/2,1/1,1/2,1/0,3/1,1/2,2/1,1/0,2/1,1/2,4/0,3/2,1/0,5/2,2/0,3/1,1/0,30/1,2/0,20/2,1/0,1/2,1/0,1/2,2/0,6/2,2/1,1/0,37
liketheflower:2,7/1,6/2,1/1,6/0,132
buxiang-qichuang:1,1/0,17/1,2/0,2/1,3/0,125
buxiang_qichuang:1,1/0,149
jy_xiaoying:2,2/1,2/0,11/1,28/0,1/1,1/0,1/1,7/0,2/1,1/0,12/1,2/0,1/1,1/0,10/1,1/0,1/1,2/0,8/1,1/0,2/1,1/0,1/1,1/0,3/1,1/0,1/1,1/0,4/1,1/0,1/1,2/0,31/1,1/0,2
lang:1,1/0,146
absndon2:1,1/0,146
anandon2:1,1/0,42/1,1/0,103
xylu:2,2/1,1/0,1/2,2/1,6/2,1/1,1/2,1/1,1/2,5/1,1/2,11/1,1/2,7/1,3/2,4/1,1/0,3/2,1/1,1/2,4/0,88
qiuuuuut:1,1/0,145
abandon2:2,13/1,1/0,1/2,7/1,1/2,4/0,1/2,5/0,1/1,1/2,3/1,1/0,1/2,2/1,1/2,2/0,1/2,1/1,1/2,1/1,1/2,1/0,1/1,2/2,2/0,4/2,2/1,1/2,8/0,11/2,4/1,2/2,1/0,57
qiuuuuuut:1,1/0,39/2,1/1,1/2,1/0,1/2,2/1,1/2,2/0,2/2,1/1,1/0,91
1zhao:2,1/1,1/2,1/1,1/2,2/0,37/1,1/0,35/1,1/2,2/1,4/0,4/1,1/0,13/2,1/0,2/1,2/0,35
yoonsica:2,6/0,63/2,2/0,1/2,2/1,1/0,3/2,4/1,1/0,1/2,1/0,57
smallboatc:2,1/1,1/0,2/1,2/0,87/1,1/0,48
amani:1,1/0,2/1,3/2,1/0,1/1,4/0,1/1,1/0,2/1,3/0,1/1,1/0,1/1,2/0,2/1,1/0,1/1,2/2,1/1,5/0,2/1,4/0,1/2,1/1,4/0,17/1,1/0,76
equinox:1,4/2,3/0,4/2,5/0,14/2,2/1,1/2,1/0,2/2,12/1,3/2,1/1,2/0,7/2,2/0,1/2,1/0,1/2,12/1,1/2,3/1,1/0,1/2,12/0,1/2,1/0,1/2,1/0,3/2,10/0,1/2,1/0,1/2,1/0,1/1,1/2,3/0,1/2,3/0,1/2,2/0,1/2,2/0,6/2,1/0,3
sjw712:2,2/0,101/2,10/1,1/2,17/0,1/2,8/0,1/2,1
cat丶:1,3/0,138
zongjy:2,3/1,2/2,1/1,1/2,1/0,1/1,1/2,4/0,3/2,1/1,1/2,1/0,121
empty_dust:2,3/0,11/2,1/1,1/0,1/2,1/0,1/1,1/0,120
octal:1,1/0,35/2,1/1,2/0,101
baozii:1,4/0,21/2,1/0,3/1,4/2,1/1,2/2,5/1,1/2,1/1,2/0,31/1,1/0,62
kokomi:2,1/1,1/2,2/1,1/2,1/0,2/2,4/1,1/0,1/2,1/0,35/2,1/1,2/0,85
baile:1,3/0,7/1,1/0,2/1,2/0,1/1,1/0,2/1,1/0,4/1,2/0,112
lu1no:2,1/0,35/1,1/2,1/0,44/2,2/1,4/0,50
little_j:1,1/0,137
minsongkang1:1,1/0,136
luchy0120:2,11/1,2/2,9/1,1/2,1/1,1/0,112
rui_er:2,12/0,124
lyxxyx:1,1/0,135
pandaomeng:1,1/0,1/1,1/2,1/1,1/0,1/1,4/0,13/1,1/0,112
djzzwx:1,1/2,1/0,4/2,4/1,2/2,3/1,1/2,1/0,1/2,3/0,3/2,3/0,3/2,1/0,1/2,3/0,2/2,1/0,4/2,1/1,1/2,1/0,91
if:1,16/2,1/1,31/0,72/1,1/2,1/1,5/0,2/1,2/0,5
lxcxz:1,1/0,25/1,1/0,109
37:1,1/0,8/1,1/0,21/1,1/0,103
zone:2,1/0,1/1,1/0,2/2,4/1,2/2,1/1,1/2,3/1,1/2,1/1,3/2,1/1,1/2,4/1,2/0,2/2,1/1,2/2,1/1,3/0,4/2,4/1,1/0,5/1,1/0,4/1,1/0,25/2,1/0,21/2,1/0,1/2,2/0,1/2,1/0,4/2,2/0,1/2,4/0,3/2,1/1,1/2,3/0,1/2,4
y_hc:1,3/0,3/1,1/0,48/1,1/0,64/1,1/0,14
slashteen:1,5/0,67/1,1/0,62
brusgry:2,1/0,133
banfenhaochi:1,2/0,34/1,1/0,5/1,1/0,5/1,1/0,5/1,2/0,76
rainmemery:1,1/0,130
pandoameng:1,1/0,130
xyz_herry:1,2/0,2/1,3/0,14/1,1/0,109
dawnmagnet:2,1/0,6/2,2/0,46/2,1/0,9/2,1/0,10/2,1/0,53
lazysheep:1,11/0,37/1,1/0,5/1,1/0,23/2,1/0,1/1,2/0,20/1,2/0,26
buer:1,1/2,1/1,1/2,1/1,1/0,1/2,3/1,1/2,1/1,1/0,1/2,3/0,9/2,3/0,1/1,3/0,5/2,1/1,3/0,66/1,1/0,22
kangminsong0:1,1/0,1/1,1/0,126
limerence:1,1/2,2/1,1/2,2/0,1/1,1/0,2/1,1/0,1/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,4/1,1/0,100
cming:2,2/0,22/1,1/0,99
pangyou3s:1,1/0,122
jerry66:2,1/0,11/2,1/0,4/2,2/0,4/2,1/0,10/2,1/0,16/1,1/0,70
lengnian7:1,1/0,5/1,1/2,2/0,109
openmi:1,6/0,1/1,9/0,17/1,4/2,2/1,4/0,6/1,15/2,1/1,6/0,15/1,1/0,31
kurtis:2,3/1,9/2,1/1,1/0,2/1,1/2,2/0,2/1,2/2,2/1,12/2,5/1,6/0,70
echo:1,2/0,1/1,2/0,16/1,1/0,95
rocky:2,2/0,115
cxhscst2:2,3/0,1/2,3/1,1/2,1/1,3/2,1/1,6/0,34/1,1/0,62
dijs_sdd:1,4/0,6/1,1/0,1/1,1/0,2/1,1/0,4/1,1/0,2/1,1/0,24/1,1/0,64
sigma-yyf:2,1/1,1/0,2/1,1/0,8/1,2/0,3/2,2/1,1/0,1/1,1/0,2/1,1/0,86
yrlpiao:2,1/1,2/2,8/1,1/2,2/1,1/0,1/2,1/0,2/2,1/0,1/1,1/0,2/1,1/0,1/1,1/0,7/1,1/0,4/1,1/0,5/1,1/0,5/2,2/1,1/0,9/2,4/0,45
lengnian:1,1/0,12/2,11/0,3/2,1/0,9/2,2/0,1/2,4/1,1/2,1/0,1/2,2/1,1/2,3/1,2/2,1/1,2/2,6/1,1/2,3/1,2/2,1/1,2/2,1/0,1/2,5/1,1/2,1/0,2/2,1/1,1/2,2/1,2/2,1/1,1/2,4/0,16
eunoiay:2,3/1,2/0,10/1,1/0,7/2,1/0,81
ran_zhi:1,1/0,1/1,4/2,1/1,1/0,3/1,1/0,1/1,2/0,89
xuwuze:1,2/0,99
tiger2005:2,70/0,30
zazhiii:1,2/0,53/1,2/0,39
lettera:1,2/2,1/1,3/0,15/1,1/2,1/1,3/2,2/0,3/1,1/0,2/1,1/0,1/1,6/0,2/1,1/2,1/1,1/2,2/0,2/1,4/0,2/2,1/1,1/2,1/1,1/0,1/1,3/2,1/0,1/1,1/0,3/1,1/0,1/1,1/0,2/2,2/1,1/0,1/2,1/0,1/2,2/1,1/0,1/2,4/0,1/1,1/2,2/1,1/2,1
metal_frog:1,1/0,30/2,9/1,1/2,23/0,1/2,1/1,1/2,7/1,4/0,8/2,3/1,1/2,1/0,4
zyc:1,1/0,92
alwaysce:1,1/2,1/1,3/2,1/1,2/2,1/1,2/2,3/1,1/2,5/1,1/2,1/1,1/2,5/1,1/2,1/0,5/2,4/1,2/2,11/1,1/2,11/1,1/2,4/1,1/2,23
sjohn:2,3/0,90
meikisisui:1,4/0,2/1,1/0,1/1,1/0,3/1,1/0,3/1,1/0,2/1,2/0,2/1,2/0,5/1,1/0,1/1,1/0,2/2,1/1,3/0,2/1,3/2,1/0,1/1,1/2,1/1,4/2,2/1,7/2,2/1,1/2,4/1,4/2,3/1,1/2,1/0,5/1,1/0,1/2,1/1,7
deemo_ml:1,7/0,85
dbwglx:1,1/0,91
kamtuo:2,30/1,1/2,16/0,1/1,1/2,4/0,1/2,5/0,1/2,5/0,1/1,1/0,1/2,4/1,1/2,4/1,1/2,5/1,1/2,1/0,3
kod:1,2/0,2/1,1/0,3/1,1/0,3/1,1/0,15/1,1/0,1/1,2/0,23/2,1/0,30
lyongwolf:1,1/0,1/1,1/2,4/1,10/0,5/1,1/0,2/1,1/0,59
liryc:1,16/2,2/1,6/2,1/1,6/2,1/1,1/2,1/1,26/2,1/1,5/0,1/1,2/2,1/1,3/2,1/1,11
arrogant_sword,cpp:1,1/0,84
kita_ikuyo:2,1/0,1/1,2/0,38/2,1/1,1/2,1/0,37
sbjohn:2,1/0,1/2,1/0,10/2,2/0,4/2,1/0,1/2,1/0,1/1,1/0,56
yefei:1,1/0,79
bond_james:1,1/2,3/0,10/1,2/0,3/1,1/0,2/1,1/0,1/1,1/0,4/1,1/0,47
crzhou:1,1/0,1/2,1/0,3/2,9/0,3/1,1/0,1/2,4/0,7/1,1/2,1/1,1/0,2/2,2/0,3/1,1/0,20/2,3/1,2/0,2/2,1/0,6
fancyalad:1,4/0,2/1,1/0,1/1,2/0,5/1,1/0,52
xzx:1,4/0,1/1,1/0,59
catchfree1225:2,5/1,1/2,2/1,1/2,1/1,1/0,2/2,4/1,1/2,2/1,4/2,2/1,4/2,2/1,10/2,1/0,1/1,5/0,15
mono_4:1,1/0,1/1,1/0,8/1,1/0,52
kamito:1,8/0,56
lengian:1,1/0,14/1,1/0,47
jun:2,1/0,61
innerworldexplorer:2,1/0,1/1,10/2,2/1,19/2,1/1,4/2,2/1,3/2,1/1,7/0,1/1,6
legnian:1,1/0,55
zrnstnsr:2,12/1,1/2,1/0,1/2,10/1,2/2,6/0,2/1,1/2,1/1,1/0,17
yunc:1,1/0,53
xiaoretaw:2,6/0,1/2,1/0,2/1,1/0,41
boulimhh:1,23/0,1/1,13/0,1/1,12/0,1
humn:1,1/0,48
sdjasj:1,3/0,7/2,1/1,1/0,37
zrnstnr:1,1/0,42
crzhou,py:1,1/0,42
stcnpc:1,3/0,2/1,1/0,6/1,1/0,30
kmiao:1,2/2,1/0,2/2,1/0,1/1,1/0,8/1,1/0,25
wanerovo:1,1/0,34
jackeyhua:1,2/2,1/1,5/0,27
yuexihuachen:1,1/0,5/1,2/0,25
bonelight:1,1/2,8/1,1/2,17/1,1/2,4
metal_grog:1,1/0,30
_boulimhh:1,1/0,27
javaminus:1,2/2,1/1,2/2,1/1,1/2,2/1,7/0,11
artoor:1,1/0,26
lettear:1,1/0,23
gaoeight:2,1/1,1/0,1/2,1/1,4/0,1/1,1/0,12
juyou:1,1/0,20
yui:1,5/0,1/1,1/0,1/1,2/0,1/1,5
helltractor:2,3/1,1/2,2/0,1/2,1/1,3/0,3
yuxue_r:1,8/0,2
syrus:1,1/0,9
liuxb:1,1/0,7
metal_forg:1,1/0,5
euphoriababy:2,1/0,3
sjw712cpp:1,1/0,1
lianxuhanshu:2,1
skipped_dates:y2024,m3,0310172431,m4,07142128,m5,05121926,m6,0209162330,m7,07142128,m8,04111825,m9,0108152229
`;
