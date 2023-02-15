const e=JSON.parse('{"key":"v-808d1ea6","path":"/cybersecurity/Joomla%203.4.7%20%E4%BF%AE%E5%A4%8D%E7%9A%84%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8ESQL%E6%B3%A8%E5%85%A5.html","title":"Joomla 3.4.7 修复的反序列化与SQL注入","lang":"zh-CN","frontmatter":{"title":"Joomla 3.4.7 修复的反序列化与SQL注入","date":"2015-10-20T08:08:11.000Z","category":["网络安全"],"tag":["web安全","SQL注入","反序列化"],"order":0,"description":"反序列化漏洞修复分析 前一阵子 Joomla 的对象注入很火，而官方3.4.6的修复仅仅是严格过滤了X_FORWARDED_FOR、注释了USER_AGENT存入SESSION那一句，见： https://github.com/joomla/joomla-cms/commit/995db72ff4eaa544e38b4da3630b7a1ac0146264#diff-aba80b5850bf0435954b29dece250cbfL1021 这样只是指哪补哪，治标不治本。看来官方上次的修复只是临时解决方案，这次的更新(3.4.7)算是彻底解决了此问题。","head":[["meta",{"property":"og:url","content":"https://mars.run/cybersecurity/Joomla%203.4.7%20%E4%BF%AE%E5%A4%8D%E7%9A%84%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8ESQL%E6%B3%A8%E5%85%A5.html"}],["meta",{"property":"og:site_name","content":"Mars’ Blog | 记录·分享·回顾"}],["meta",{"property":"og:title","content":"Joomla 3.4.7 修复的反序列化与SQL注入"}],["meta",{"property":"og:description","content":"反序列化漏洞修复分析 前一阵子 Joomla 的对象注入很火，而官方3.4.6的修复仅仅是严格过滤了X_FORWARDED_FOR、注释了USER_AGENT存入SESSION那一句，见： https://github.com/joomla/joomla-cms/commit/995db72ff4eaa544e38b4da3630b7a1ac0146264#diff-aba80b5850bf0435954b29dece250cbfL1021 这样只是指哪补哪，治标不治本。看来官方上次的修复只是临时解决方案，这次的更新(3.4.7)算是彻底解决了此问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-15T14:41:21.000Z"}],["meta",{"property":"article:tag","content":"web安全"}],["meta",{"property":"article:tag","content":"SQL注入"}],["meta",{"property":"article:tag","content":"反序列化"}],["meta",{"property":"article:published_time","content":"2015-10-20T08:08:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-15T14:41:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Joomla 3.4.7 修复的反序列化与SQL注入\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-10-20T08:08:11.000Z\\",\\"dateModified\\":\\"2023-02-15T14:41:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"反序列化漏洞修复分析","slug":"反序列化漏洞修复分析","link":"#反序列化漏洞修复分析","children":[]},{"level":2,"title":"SQL注入漏洞分析","slug":"sql注入漏洞分析","link":"#sql注入漏洞分析","children":[{"level":3,"title":"漏洞分析","slug":"漏洞分析","link":"#漏洞分析","children":[]},{"level":3,"title":"修复方案","slug":"修复方案","link":"#修复方案","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1676471475000,"updatedTime":1676472081000,"contributors":[{"name":"MarsAuthority","email":"chinamarsmail@gmail.com","commits":4}]},"readingTime":{"minutes":5.15,"words":1545},"filePathRelative":"cybersecurity/Joomla 3.4.7 修复的反序列化与SQL注入.md","localizedDate":"2015年10月20日","excerpt":"<h2> 反序列化漏洞修复分析</h2>\\n<p>前一阵子 Joomla 的对象注入很火，而官方3.4.6的修复仅仅是严格过滤了X_FORWARDED_FOR、注释了USER_AGENT存入SESSION那一句，见：\\n<a href=\\"https://github.com/joomla/joomla-cms/commit/995db72ff4eaa544e38b4da3630b7a1ac0146264#diff-aba80b5850bf0435954b29dece250cbfL1021\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/joomla/joomla-cms/commit/995db72ff4eaa544e38b4da3630b7a1ac0146264#diff-aba80b5850bf0435954b29dece250cbfL1021</a>\\n这样只是指哪补哪，治标不治本。看来官方上次的修复只是临时解决方案，这次的更新(3.4.7)算是彻底解决了此问题。</p>","autoDesc":true}');export{e as data};
