---
title: Security.News@202302
date: 2023-02-05 16:23:41
category:
  - 安全通讯 Newsletter
tag:
  - 安全事件
star: true
order: 9995
---

## 安全事件
### GoDaddy 披露了存在多年的安全漏洞，导致客户和员工登录凭证泄漏、服务器被安装恶意软件、并有源代码被盗窃

2023年2月16日，网络托管巨头 GoDaddy 表示其遭受了黑客攻击，在多年的攻击中，cPanel被拿下，导致客户和员工登录凭证泄漏、服务器被安装恶意软件、并有源代码被盗窃；GoDaddy早在2022年12月就被客户告知他们的网站会重定向到随机域名，在调查中发现，攻击者在2019年到2022年中有四次被发现，但一直没有失去访问权限。
“根据我们的调查，我们认为这些事件是一个复杂的威胁行为者组织多年活动的一部分，该组织除其他外，在我们的系统上安装了恶意软件并获取了与 GoDaddy 内某些服务相关的代码片段，”托管公司在提交给美国证券交易委员会的[文件](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001609711/e4736ddb-b4c7-485b-a8fc-1827691692c9.pdf)中说。
Twitter上有人爆料说是内鬼导致的：

![Twitter传闻](https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-02/SiNKd9.png)

![Twitter传闻](https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-02/Vobcnx.png)

而攻击者的目的，可能是**利用Godaddy作为跳板，以进行网络钓鱼活动、恶意软件分发和其他恶意活动。**

#### 附：Godaddy安全事件时间线

- 2020年3月，攻击者获得了登录凭据并访问了数量有限的员工账户和属于大约 28000 名客户的托管账户。
- 2020年4月，GoDaddy 的一名员工被黑客控制，导致Escrow.com被入侵。
- 2020年1月，GoDaddy 的员工被黑客诱骗修改了至少两个加密货币网站的 DNS 设置。

- 2021年9月，攻击者获得了 120 万个当前不活跃的托管 WordPress 用户的 WordPress 管理员帐户、电子邮件地址和 FTP 帐户的登录凭据。 GoDaddy 于 2021 年 11 月正式披露了该漏洞。
- 2021年11月，攻击者获得了可以访问 GoDaddy 的托管 WordPress 服务源代码。
- 2022年12月，攻击者获得了 cPanel 托管服务器的权限。

#### 一些感悟
> 攻击者有一定的反侦查能力，比如：有客户反馈GoDaddy的网站会重定向到随机域名，但Godaddy自己能难复现该问题
> 2020年就发现了系统被入侵，直到2023年还未解决（攻击者一直有权限），是APT的手法高级/隐蔽，还是Godaddy的安全能力不足呢？

#### 参考资料
- https://www.computing.co.uk/news/4074669/godaddy-realised-security-breach
- https://www.hackread.com/hackers-godaddy-source-code-data-breach/
- https://aboutus.godaddy.net/newsroom/company-news/news-details/2023/Statement-on-recent-website-redirect-issues/default.aspx