import{ad as o,H as n,I as s,F as e,U as t,O as r,ae as i,X as l}from"./framework-0d2eacdd.js";const c={},h=i('<h2 id="行业动态" tabindex="-1"><a class="header-anchor" href="#行业动态" aria-hidden="true">#</a> 行业动态</h2><h3 id="cncert发布《勒索软件防范指南》" tabindex="-1"><a class="header-anchor" href="#cncert发布《勒索软件防范指南》" aria-hidden="true">#</a> CNCERT发布《<strong>勒索软件防范指南</strong>》</h3><p>感概CNCERT终于不土了，做出来这么互联网范儿的指南</p><figure><img src="https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-02/o6MFMh.jpg" alt="勒索软件防范指南" tabindex="0" loading="lazy"><figcaption>勒索软件防范指南</figcaption></figure><h4 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h4>',5),d={href:"http://www.cac.gov.cn/2021-08/30/c_1631913461840082.htm",target:"_blank",rel:"noopener noreferrer"},p=i('<h3 id="新工具检查移动应用的浏览器是否存在隐私风险-instagram-facebook等app中招" tabindex="-1"><a class="header-anchor" href="#新工具检查移动应用的浏览器是否存在隐私风险-instagram-facebook等app中招" aria-hidden="true">#</a> 新工具检查移动应用的浏览器是否存在隐私风险，Instagram/facebook等app中招</h3><p>8月19日报道，一个名为“InAppBrowser”的新在线工具可让您分析嵌入在移动应用程序中的应用内浏览器的行为，并确定它们是否将威胁隐私的JavaScript注入您访问的网站。</p><p>该工具由开发人员Felix Krause创建，他在本月早些时候警告过这种潜在的风险行为，并解释了应用内浏览器通过在用户访问的每个网页上注入JavaScript跟踪器来跟踪用户在线看到和做的任何事情是多么容易。</p><figure><img src="https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-02/8bHtpb.jpg" alt="相关twitter" tabindex="0" loading="lazy"><figcaption>相关twitter</figcaption></figure><p>以Instagram为例，可以看到插入的js做了哪些事情：</p><figure><img src="https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-02/aOe2oK.jpg" alt="aOe2oK" tabindex="0" loading="lazy"><figcaption>aOe2oK</figcaption></figure><h2 id="ttps动态" tabindex="-1"><a class="header-anchor" href="#ttps动态" aria-hidden="true">#</a> TTPs动态</h2><h3 id="微软观察到现在越来越多的threat-actor-国家级-开始使用sliver-弃用cs" tabindex="-1"><a class="header-anchor" href="#微软观察到现在越来越多的threat-actor-国家级-开始使用sliver-弃用cs" aria-hidden="true">#</a> 微软观察到现在越来越多的threat actor（国家级）开始使用Sliver，弃用cs</h3><p>微软分了Sliver的一些原理和功能模版，以及应对的检测方案；Sliver确实比CS更加灵活好用，两者的对比可以参考下面的文章</p>',9),u={href:"https://voiptuts.com/sliver-emerges-as-cobalt-strike-different-for-malicious-c2/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.microsoft.com/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/",target:"_blank",rel:"noopener noreferrer"},g=i('<h3 id="利用-php-fpm-做内存马的方法" tabindex="-1"><a class="header-anchor" href="#利用-php-fpm-做内存马的方法" aria-hidden="true">#</a> 利用 PHP-FPM 做内存马的方法</h3><p>属于旧壶装旧酒，最近看到很多人在讨论，就在这里也列一下</p><p>核心原理是：</p><ol><li>php-fpm可通过某种方式（绑定外网、SSRF）直接访问</li><li>Web 服务器中间件会将用户请求设置成环境变量（Fastcgi→php-fpm）,强大的 PHP 中有两个有趣的配置项： <ol><li><code>auto_prepend_file</code>：告诉PHP，在执行目标文件之前，先包含 <code>auto_prepend_file</code> 中指定的文件。</li><li><code>auto_append_file</code>：告诉PHP，在执行完成目标文件后，再包含 <code>auto_append_file</code> 指向的文件。</li></ol></li><li>在一次 fastcgi 请求中，任何通过 PHP_VALUE/PHP_ADMIN_VALUE 修改过的PHP配置值，在此 FPM 进程的生命周期内，都是会保留下来的。</li></ol><h4 id="参考资料-1" tabindex="-1"><a class="header-anchor" href="#参考资料-1" aria-hidden="true">#</a> 参考资料</h4>',5),_={href:"https://mp.weixin.qq.com/s/VrtFWM3Iufk0xkK_MRCCKA",target:"_blank",rel:"noopener noreferrer"},m={href:"https://xz.aliyun.com/t/9544",target:"_blank",rel:"noopener noreferrer"},b=i('<h2 id="安全事件" tabindex="-1"><a class="header-anchor" href="#安全事件" aria-hidden="true">#</a> 安全事件</h2><h3 id="cisco-被lapsus-入侵" tabindex="-1"><a class="header-anchor" href="#cisco-被lapsus-入侵" aria-hidden="true">#</a> Cisco 被Lapsus$入侵</h3><p>Cisco在2022年8月3日承认，该公司在2022年5月24日遭到入侵，并由思科安全事件应急响应小组（CSIRT）与旗下资安公司Cisco Talos携手补救，起因是一名员工的个人Google帐号遭到骇客入侵。虽然思科并未发现系统被部署勒索木马，但勒索软体集团Yanluowang宣称已取得2.8GB的思科资料。</p><p>用户通过Google Chrome启用了密码同步，并将其Cisco凭据存储在浏览器中，使该信息能够同步到其Google帐户。在获取用户的凭据后，攻击者试图使用各种技术绕过多因素身份验证（MFA），包括语音网络钓鱼（也称为“vishing”）和MFA疲劳，即向目标的移动设备发送大量推送请求的过程，直到用户意外或只是试图使他们正在接收的重复推送通知静音。网络钓鱼是一种越来越常见的社交工程技术，攻击者试图诱骗员工通过电话泄露敏感信息。在这种情况下，一名员工报告说，他们在几天内接到了多个电话，其中呼叫者 - 他们用各种国际口音和方言的英语交谈 - 据称与用户信任的支持组织相关联。</p><h4 id="参考资料-2" tabindex="-1"><a class="header-anchor" href="#参考资料-2" aria-hidden="true">#</a> 参考资料</h4>',5),w={href:"https://blog.talosintelligence.com/2022/08/recent-cyber-attack.html",target:"_blank",rel:"noopener noreferrer"},k=i('<h3 id="twilio-钓鱼入侵事件" tabindex="-1"><a class="header-anchor" href="#twilio-钓鱼入侵事件" aria-hidden="true">#</a> Twilio 钓鱼入侵事件</h3><p>云端通讯平台Twilio在8月7日坦承遭到黑客入侵，黑客通过钓鱼短信取得了Twilio员工的登陆凭证，并窃取了客户数据，而采用Twilio服务进行电话号码认证的Signal则表示，约有1900名用户受到Twilio黑客事件的波及。</p><figure><img src="https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-02/6I57MD.jpg" alt="网传的钓鱼短信" tabindex="0" loading="lazy"><figcaption>网传的钓鱼短信</figcaption></figure><h4 id="参考资料-3" tabindex="-1"><a class="header-anchor" href="#参考资料-3" aria-hidden="true">#</a> 参考资料</h4>',4),x={href:"https://support.signal.org/hc/en-us/articles/4850133017242-Twilio-Incident-What-Signal-Users-Need-to-Know-",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"奇安信被黑帽seo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#奇安信被黑帽seo","aria-hidden":"true"},"#"),t(" 奇安信被黑帽SEO")],-1),P=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/MarsAuthority/sec_pic@master/uPic/2023-02/nRdJRR.jpg",alt:"nRdJRR",tabindex:"0",loading:"lazy"}),e("figcaption",null,"nRdJRR")],-1),v={href:"https://www.qianxin.com/support/productDetails?pid=423&product_name=aaa",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"lastpass入侵事件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lastpass入侵事件","aria-hidden":"true"},"#"),t(" LastPass入侵事件")],-1),M=e("p",null,"据 LastPass 方面表示，黑客透过盗取一个开发者帐户，取得了 LastPass 开发环境的部分权限，有部分源代码和一些专有技术资料因此遭到泄漏，不过客户的资料包括密码则未受影响。",-1),S=e("p",null,"很值得学习的一点如下，设计之初在架构上就考虑了隐私&安全",-1),T=e("h4",{id:"一些感悟",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一些感悟","aria-hidden":"true"},"#"),t(" 一些感悟")],-1),R={href:"https://www.lastpass.com/security/zero-knowledge-security",target:"_blank",rel:"noopener noreferrer"},A=e("h4",{id:"参考资料-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料-4","aria-hidden":"true"},"#"),t(" 参考资料")],-1),I={href:"https://blog.lastpass.com/2022/08/notice-of-recent-security-incident/",target:"_blank",rel:"noopener noreferrer"},F=e("h3",{id:"cloudflare遭遇批量短信钓鱼攻击及他们的应对方案",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cloudflare遭遇批量短信钓鱼攻击及他们的应对方案","aria-hidden":"true"},"#"),t(" Cloudflare遭遇批量短信钓鱼攻击及他们的应对方案")],-1),j={href:"https://www.twilio.com/blog/august-2022-social-engineering-attack",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.cloudflare.com/cloudflare-one/",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"Cloudflare使用硬件密钥作为MFA，所以即使有3人被钓鱼也没受影响；Google 2018年就使用这种方案了",-1),K=e("h4",{id:"参考资料-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料-5","aria-hidden":"true"},"#"),t(" 参考资料")],-1),H={href:"https://krebsonsecurity.com/2018/07/google-security-keys-neutralized-employee-phishing/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://blog.cloudflare.com/2022-07-sms-phishing-attacks/",target:"_blank",rel:"noopener noreferrer"};function E(V,q){const a=l("ExternalLinkIcon");return n(),s("div",null,[h,e("ul",null,[e("li",null,[e("a",d,[t("http://www.cac.gov.cn/2021-08/30/c_1631913461840082.htm"),r(a)])])]),p,e("ul",null,[e("li",null,[e("a",u,[t("https://voiptuts.com/sliver-emerges-as-cobalt-strike-different-for-malicious-c2/"),r(a)])]),e("li",null,[e("a",f,[t("https://www.microsoft.com/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/"),r(a)])])]),g,e("ul",null,[e("li",null,[e("a",_,[t("https://mp.weixin.qq.com/s/VrtFWM3Iufk0xkK_MRCCKA"),r(a)])]),e("li",null,[e("a",m,[t("https://xz.aliyun.com/t/9544"),r(a)])])]),b,e("ul",null,[e("li",null,[e("a",w,[t("https://blog.talosintelligence.com/2022/08/recent-cyber-attack.html"),r(a)])])]),k,e("ul",null,[e("li",null,[e("a",x,[t("https://support.signal.org/hc/en-us/articles/4850133017242-Twilio-Incident-What-Signal-Users-Need-to-Know-"),r(a)])])]),y,P,e("p",null,[t("官网已经火速加了一个pid参数来代替原来可控的product_name "),e("a",v,[t("https://www.qianxin.com/support/productDetails?pid=423&product_name=aaa"),r(a)])]),C,M,S,T,e("blockquote",null,[e("p",null,[t("我们从不存储或了解您的主密码。我们利用行业标准的零知识架构， 确保 LastPass 永远无法知道或访问我们客户的主密码.您可以在此处阅读有关零知识的技术实现"),e("a",R,[t("的信息"),r(a)])])]),A,e("ul",null,[e("li",null,[e("a",I,[t("https://blog.lastpass.com/2022/08/notice-of-recent-security-incident/"),r(a)])])]),F,e("p",null,[t("昨天，2022年8月8日，Twilio分享说，他们"),e("a",j,[t("受到了有针对性的网络钓鱼攻击的破坏"),r(a)]),t("。大约在Twirio受到攻击的同时，Cloudflare看到一个具有非常相似特征的攻击也针对Cloudflare的员工。虽然个别员工确实因网络钓鱼消息而堕落，但我们能够通过自己使用"),e("a",N,[t("Cloudflare One产品"),r(a)]),t("以及向访问我们所有应用程序所需的每位员工发放物理安全密钥来阻止攻击。")]),z,K,e("ul",null,[e("li",null,[e("a",H,[t("https://krebsonsecurity.com/2018/07/google-security-keys-neutralized-employee-phishing/"),r(a)])]),e("li",null,[e("a",L,[t("https://blog.cloudflare.com/2022-07-sms-phishing-attacks/"),r(a)])])])])}const B=o(c,[["render",E],["__file","Security.News@202208.html.vue"]]);export{B as default};