# LOL WEB项目

## 项目背景
作为参加工作一年半的网页开发者，需要做个项目来对工作以来的知识做一份梳理。<br>
碰巧2018年英雄联盟中国赛区取得了辉煌的成绩，身为LOL的老玩家，自然也有兴趣把游戏和专业结合到一起。<br>
op.gg是当下最火的查询战绩网站，网站以仿照op.gg入手构建<br>

## 环境与框架
**web前端**<br>
webpack+react+redux+antd<br><br>
**web后台**<br>
flask<br><br>
**数据库**<br>
redis<br><br>
**web服务器**<br>
uWSGI和nginx<br><br>
**编译和运行系统**<br>
ubuntu 16.04

## 项目结构
* 3rdparty：存放项目使用的第三方软件包<br>
* CI：用于持续集成，编写的shell脚本用于编译第三方软件和打包项目产品包<br>
* lib：存放编译的中间件，目前只有CI打的软件包。软件包不必每次都打，仅当第三方软件修改新增时需要打。<br>
* src：存放源码文件
    * bin：存放nginx和uWSGI启动停止重启脚本，redis启动停止重启脚本
    * nginx：存放nginx配置文件
    * redis：存放redis配置文件
    * webclient：web前端代码
    * webserver：web后台代码

## 项目历程和进展
1. 要想拿到LOL数据的api，首先得注册一个外服账号，我使用欧服账号登录拳头官网，申请了一个开发项目，拿到api密钥，拿到这个密钥才能获取api，查询各个服务器（除了国服，腾讯不公开数据）玩家选手的数据。
2. 拳头对api的使用频率有所限制，当然开发和生产不同，开发阶段1秒最多访问20次，同时2分钟最多访问100次。查阅资料发现当前做api限流比较好的算法是Token 
Bucket，并且使用Redis和lua能发挥这个算法的最大威力，保证这个操作的原子性。所以我也在后台实现了下。链接：https://zhuanlan.zhihu.com/p/20872901
3. 项目目前部署在阿里云服务器 47.96.0.154。入口界面目前就个导航条和查询窗口。输入faker的游戏名称“Hide on bush”可以查询战绩（因为api速度较慢，可能导致查询耗时长）。页面总体使用bootstrap和ant 
design构建基本框架，样式借鉴op
.gg的css。页面数据目前只有部分写活，例如头像，等级，召唤师名，段位信息，部分比赛信息，见谅。
4. CI目录下的shell脚本实现持续集成，上库了代码后，只需在本地虚拟机先更新代码下，执行编译打包任务，打出安装包后，放到云机安装即可

### PS
出于安全考虑，存放api的密钥文件private_const.py没有上库，如对项目有兴趣的同学也可以去拳头官网 https://developer.riotgames.com/ 
弄个api密钥来做开发（生成和刷新api密钥需翻墙）。<br>
对项目有疑问的可以在issue中提给我。

