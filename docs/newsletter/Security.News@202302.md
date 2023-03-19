---
title: Security.News@202302
date: 2023-02-05 16:23:41
category:
  - 安全通讯 Newsletter
tag:
  - 安全事件
  - 安全可视化
  - netscout
  - Coinbase遭受钓鱼攻击，但被成功阻止
  - Godaddy
  - Lastpass
star: true
order: 9995
---

## 安全可视化
### netscout的DDoS攻击向量可视化挺有意思
使用类似元素周期表的形式来做可视化，看起来还是比较清晰和舒服的，不过在中文环境可能有些水土不服，见：
![3TLCtg](https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-03/3TLCtg.jpg)

微软的威胁报告中也曾使用过类似的形式：
![Zyznvr](https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-03/Zyznvr.jpg)

#### 参考资料
- https://www.netscout.com/threatreport/ddos-attack-vectors/
- https://twitter.com/fr0gger_/status/1627203918412537857



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
> 
> 2020年就发现了系统被入侵，直到2023年还未解决（攻击者一直有权限），是APT的手法高级/隐蔽，还是Godaddy的安全能力不足呢？

#### 参考资料
- https://www.computing.co.uk/news/4074669/godaddy-realised-security-breach
- https://www.hackread.com/hackers-godaddy-source-code-data-breach/
- https://aboutus.godaddy.net/newsroom/company-news/news-details/2023/Statement-on-recent-website-redirect-issues/default.aspx

### LastPass用户数据遭窃：关键运维员工遭定向攻击，内部安全控制失效
2023年2月28日，LastPass日前公布了去年遭受“二次协同攻击”事件的更多信息，发现恶意黑客潜伏在其内网长达两个月的时间内，持续访问并窃取了亚马逊AWS云存储中的数据。

LastPass在去年12月透露，恶意黑客窃取到部分加密的密码保险库数据和客户信息。现在，该公司进一步解释了恶意黑客的攻击实施方法，称对方使用到了去年8月首次入侵时窃取的信息，还利用一个远程代码执行漏洞，在一名高级DevOps工程师的计算机上安装了键盘记录器。

LastPass表示，二次协同攻击利用到了首轮违规中外泄的数据，并访问了该公司经过加密的Amazon S3存储桶。

LastPass公司只有4位DevOps工程师有权访问这些解密密钥，因此恶意黑客将矛头指向了其中一名工程师。最终，黑客利用第三方媒体软件包中的远程代码执行漏洞，在该员工的设备上成功安装了键盘记录器。

 “恶意黑客成功获取了员工在完成多因素身份验证（MFA）后输入的主密码（master password），借此获得了该DevOps工程师对LastPass企业密码保险库的访问权。”LastPass日前发布的最新安全警告称。

“恶意黑客随后导出了共享文件夹中的本地企业密码保险库条目和内容，其中包括能够访问LastPass AWS S3生产备份、其他云存储资源以及部分相关重要数据库备份的安全注释和加密密钥。”

由于恶意黑客窃取并使用了有效的访问凭证，LastPass的调查人员很难检测到对方活动，导致其顺利从LastPass的云存储服务器处访问并窃取到大量数据。恶意黑客甚至持续驻留达两个月以上，从2022年8月12日一直到2022年10月26日。

直到恶意黑客尝试用云身份和访问管理（IAM）角色执行未授权操作时，LastPass才最终通过AWS GuardDuty警报检测到这些异常行为。

该公司表示，他们已经更新了安全机制，包括对敏感凭证及身份验证密钥/令牌进行轮换、撤销证书、添加其他记录与警报，以及执行更严格的安全策略等。

#### 大量数据已被访问

作为此次披露的一部分，LastPass还发布了关于攻击中哪些客户信息遭到窃取的具体说明。

根据特定客户的不同，失窃数据的范围很广且内容多样，包括多因素身份验证（MFA）种子值、MFA API集成secreet，以及为联合企业客户提供的Split Knowledge组件（K2）密钥。

以下是被盗数据内容的基本概括，更详细的失窃信息说明请参阅LastPass支持页面（https://support.lastpass.com/help/what-data-was-accessed）。

#### 事件1中被访问的数据汇总
- 云端按需开发和源代码仓库——包括全部200个软件代码仓库中的14个。
- 来自各代码仓库的内部脚本——其中包含LastPass secrets和证书。
- 内部文档——描述开发环境运作方式的技术信息。

#### 事件2中被访问的数据汇总
DevOps secrets——用于访问我们云端备份存储的受保护secrets。

云备份存储——包含配置数据API secrets、第三方集成secrets客户元数据，以及所有客户保险库数据的备份。除URL、用于安装LastPass Windows/macOS版软件以及涉及邮件地址的特定用例之外，全部敏感客户保险库数据均通过“零知识架构”进行加密，且只能通过各用户主密码提供的唯一加密密钥实现解密。请注意，LastPass永远不会获取最终用户的主密码，也不会存储或持有主密码——因此，泄露数据中不涉及任何主密码。

LastPass MFA/联邦数据库备份——包含LastPass Authenticator的种子值副本，作为MFA备份选项（如果启用）的电话号码，以及供LastPass联邦数据库（如果启用）使用的Split Knowledge组件（即K2「密钥」）。该数据库经过加密，但在第二次违规事件中，恶意黑客窃取了单独存储的解密密钥。

本次发布的支持公告还相当“隐蔽”，由于LastPass公司在公告页面的HTML标签添加了`<meta name="robots" content="noindex">`，因此该页面无法通过搜索引擎直接检索。

LastPass还发布一份题为“安全事件更新与建议操作”的PDF文档，其中包含关于违规和失窃数据的更多信息。
![RhY2wU](https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-03/RhY2wU.png)

该公司也整理了支持文件，面向免费、付费和家庭客户以及LastPass Business管理员提供应对建议。

通过公告中的建议操作，应可进一步保障您的LastPass账户与相关集成。

#### 参考资料
- https://mp.weixin.qq.com/s/zvrwVei6Jy-zEDTkks7Ptg
- https://arstechnica.com/information-technology/2023/02/lastpass-hackers-infected-employees-home-computer-and-stole-corporate-vault/
- https://blog.lastpass.com/2023/03/security-incident-update-recommended-actions/


### Coinbase遭受钓鱼攻击，但被成功阻止

我们的故事开始于 2023 年 2 月 5 日星期日的深夜。几位员工的手机开始提醒短信，表明他们需要通过提供的链接紧急登录以接收重要消息。虽然大多数人会忽略这条自发的消息 - 一名员工认为这是一条重要且合法的消息，点击链接并输入他们的用户名和密码。 “登录”后，系统会提示员工忽略该消息并感谢遵守。

接下来发生的事情是，攻击者配备了合法的 Coinbase 员工用户名和密码，反复尝试远程访问 Coinbase。幸运的是，我们的网络控制已经准备就绪。攻击者无法提供所需的多因素身份验证 (MFA) 凭据，因此无法获得访问权限。在许多情况下，这将是故事的结局。但这不仅仅是任何攻击者。我们认为此人与自去年以来一直以数十家公司为目标的高度持久和复杂的攻击活动有关。

大约 20 分钟后，我们员工的手机响了。攻击者自称来自 Coinbase 公司信息技术 (IT)，他们需要该员工的帮助。该员工认为他们正在与合法的 Coinbase IT 员工交谈，因此登录到他们的工作站并开始按照攻击者的指示进行操作。这开始了攻击者和一名越来越可疑的员工之间的来回。随着谈话的进行，这些要求变得越来越可疑。幸运的是，没有资金被盗用，也没有客户信息被访问或查看，但我们员工的一些有限联系信息被盗用，特别是员工姓名、电子邮件地址和一些电话号码。

幸运的是，我们的计算机安全事件响应小组 (CSIRT) 在攻击发生后的前 10 分钟内就解决了这个问题。我们的 CSIRT 收到安全事件和事件管理 (SIEM) 系统的异常活动警报。此后不久，我们的一名事件响应人员通过我们的内部 Coinbase 消息系统联系了受害者，询问与他们的账户相关的一些异常行为和使用模式。意识到事情严重错误后，该员工终止了与攻击者的所有通信。

我们的 CSIRT 团队立即暂停受害员工的所有访问权限并展开全面调查。由于我们的分层控制环境，没有资金损失，也没有客户信息被泄露。清理工作相对较快，但仍然——这里有很多教训要吸取。

#### 披露的一些TTPs

**钓鱼站点域名：**
- sso-*.com
- *-sso.com
- login.*-sso.com
- dashboard-*.com
- *-dashboard.com

**来自以下厂商的来电/短信：**
- Google Voice
- Skype
- Vonage/Nexmo
- Bandwidth.com

**使用了以下浏览器扩展：**
- [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en)

**从第三方 VPN 提供商（特别是 Mullvad VPN）访问您的组织的任何尝试。**

**使用第三方服务riseup[.]net来复制粘贴数据（可用于数据外传）**

**以下远程桌面工具：**
- AnyDesk (anydesk.com)
- ISL 在线 (islonline.com)

#### 参考资料
- https://www.coinbase.com/blog/social-engineering-a-coinbase-case-study