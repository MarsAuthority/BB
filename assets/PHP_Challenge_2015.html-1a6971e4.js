import{ac as p,H as o,I as c,F as s,U as n,O as t,ad as e,X as i}from"./framework-eb50ca18.js";const l={},u=s("h2",{id:"背景",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#背景","aria-hidden":"true"},"#"),n(" 背景")],-1),r={href:"http://zone.wooyun.org/content/22100",target:"_blank",rel:"noopener noreferrer"},d={href:"https://weibo.com/3202054374/CtNpv1ov8?type=comment",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="php-bug" tabindex="-1"><a class="header-anchor" href="#php-bug" aria-hidden="true">#</a> PHP bug</h2><p>先贴出代码吧</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token doc-comment comment">/*******************************************************************
* PHP Challenge 2015
*******************************************************************
* Why leave all the fun to the XSS crowd?
*
* Do you know PHP?
* And are you up to date with all its latest peculiarities?
*
* Are you sure?
*
* If you believe you do then solve this challenge and create an
* input that will make the following code believe you are the ADMIN.
* Becoming any other user is not good enough, but a first step.
*
* Attention this code is installed on a Mac OS X 10.9 system
* that is running PHP 5.4.30 !!!
*
* TIPS: OS X is mentioned because OS X never runs latest PHP
*       Challenge will not work with latest PHP
*       Also challenge will only work on 64bit systems
*       To solve challenge you need to combine what a normal
*       attacker would do when he sees this code with knowledge
*       about latest known PHP quirks
*       And you cannot bruteforce the admin password directly.
*       To give you an idea - first half is:
*          orewgfpeowöfgphewoöfeiuwgöpuerhjwfiuvuger
*
* If you know the answer please submit it to info@sektioneins.de
********************************************************************/</span>

<span class="token variable">$users</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
        <span class="token string double-quoted-string">&quot;0:9b5c3d2b64b8f74e56edec71462bd97a&quot;</span> <span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;1:4eb5fb1501102508a86971773849d266&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;2:facabd94d57fc9f1e655ef9ce891e86e&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;3:ce3924f011fe323df3a6a95222b0c909&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;4:7f6618422e6a7ca2e939bd83abde402c&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;5:06e2b745f3124f7d670f78eabaa94809&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;6:8e39a6e40900bb0824a8e150c0d0d59f&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;7:d035e1a80bbb377ce1edce42728849f2&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;8:0927d64a71a9d0078c274fc5f4f10821&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;9:e2e23d64a642ee82c7a270c6c76df142&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;10:70298593dd7ada576aff61b6750b9118&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$valid_user</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

<span class="token variable">$input</span> <span class="token operator">=</span> <span class="token variable">$_COOKIE</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;user&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$input</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$users</span> <span class="token keyword">as</span> <span class="token variable">$user</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;:&quot;</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;user = &#39;</span><span class="token operator">.</span><span class="token variable">$user</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$input</span> <span class="token operator">===</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$uid</span> <span class="token operator">=</span> <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token variable">$valid_user</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$valid_user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;not a valid user\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$uid</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello Admin How can I serve you today?\\n&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;SECRETS ....\\n&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Welcome back user\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={href:"https://bugs.php.net/bug.php?id=69892",target:"_blank",rel:"noopener noreferrer"},m=e(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Bug <span class="token comment">#69892 	Different arrays compare indentical due to integer key truncation</span>
Description<span class="token punctuation">:</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token punctuation">[</span><span class="token number">0x100000000</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bool(true)</span>
on all versions<span class="token punctuation">:</span> http<span class="token punctuation">:</span><span class="token comment">//3v4l.org/Sjdf8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>integer类型的key截断导致不同的数组比较结果相同。我们去看看PHP源码中的相关片段，在<code>Zend/zend_hash.c</code>：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//php5.2.14</span>
ZEND_API <span class="token keyword">int</span> <span class="token function">zend_hash_compare</span><span class="token punctuation">(</span>HashTable <span class="token operator">*</span>ht1<span class="token punctuation">,</span> HashTable <span class="token operator">*</span>ht2<span class="token punctuation">,</span> <span class="token class-name">compare_func_t</span> compar<span class="token punctuation">,</span> zend_bool ordered TSRMLS_DC<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Bucket <span class="token operator">*</span>p1<span class="token punctuation">,</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> result<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token operator">*</span>pData2<span class="token punctuation">;</span>

	<span class="token function">IS_CONSISTENT</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">IS_CONSISTENT</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">HASH_PROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token function">HASH_PROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 

	result <span class="token operator">=</span> ht1<span class="token operator">-&gt;</span>nNumOfElements <span class="token operator">-</span> ht2<span class="token operator">-&gt;</span>nNumOfElements<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	p1 <span class="token operator">=</span> ht1<span class="token operator">-&gt;</span>pListHead<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ordered<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		p2 <span class="token operator">=</span> ht2<span class="token operator">-&gt;</span>pListHead<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ordered <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
			<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
			<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">/* That&#39;s not supposed to happen */</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ordered<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token operator">-&gt;</span>nKeyLength<span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> p2<span class="token operator">-&gt;</span>nKeyLength<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* numeric indices */</span>
				result <span class="token operator">=</span> p1<span class="token operator">-&gt;</span>h <span class="token operator">-</span> p2<span class="token operator">-&gt;</span>h<span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token keyword">return</span> result<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">/* string indices */</span>
				result <span class="token operator">=</span> p1<span class="token operator">-&gt;</span>nKeyLength <span class="token operator">-</span> p2<span class="token operator">-&gt;</span>nKeyLength<span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token keyword">return</span> result<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				result <span class="token operator">=</span> <span class="token function">memcmp</span><span class="token punctuation">(</span>p1<span class="token operator">-&gt;</span>arKey<span class="token punctuation">,</span> p2<span class="token operator">-&gt;</span>arKey<span class="token punctuation">,</span> p1<span class="token operator">-&gt;</span>nKeyLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token keyword">return</span> result<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			pData2 <span class="token operator">=</span> p2<span class="token operator">-&gt;</span>pData<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token operator">-&gt;</span>nKeyLength<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* numeric index */</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">zend_hash_index_find</span><span class="token punctuation">(</span>ht2<span class="token punctuation">,</span> p1<span class="token operator">-&gt;</span>h<span class="token punctuation">,</span> <span class="token operator">&amp;</span>pData2<span class="token punctuation">)</span><span class="token operator">==</span>FAILURE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">/* string index */</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">zend_hash_quick_find</span><span class="token punctuation">(</span>ht2<span class="token punctuation">,</span> p1<span class="token operator">-&gt;</span>arKey<span class="token punctuation">,</span> p1<span class="token operator">-&gt;</span>nKeyLength<span class="token punctuation">,</span> p1<span class="token operator">-&gt;</span>h<span class="token punctuation">,</span> <span class="token operator">&amp;</span>pData2<span class="token punctuation">)</span><span class="token operator">==</span>FAILURE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
					<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		result <span class="token operator">=</span> <span class="token function">compar</span><span class="token punctuation">(</span>p1<span class="token operator">-&gt;</span>pData<span class="token punctuation">,</span> pData2 TSRMLS_CC<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
			<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
			<span class="token keyword">return</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		p1 <span class="token operator">=</span> p1<span class="token operator">-&gt;</span>pListNext<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ordered<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			p2 <span class="token operator">=</span> p2<span class="token operator">-&gt;</span>pListNext<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键在34行:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token operator">-&gt;</span>nKeyLength<span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> p2<span class="token operator">-&gt;</span>nKeyLength<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* numeric indices */</span>
    result <span class="token operator">=</span> p1<span class="token operator">-&gt;</span>h <span class="token operator">-</span> p2<span class="token operator">-&gt;</span>h<span class="token punctuation">;</span> <span class="token comment">//这里喔</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token function">HASH_UNPROTECT_RECURSION</span><span class="token punctuation">(</span>ht2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当数组的key为integer进到这里，比较他们的key是否相同，p1和p2是PHP的bucket结构体，其中h保存着数组的key。bucket结构如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//location:Zend/zend_hash.h</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">bucket</span> <span class="token punctuation">{</span>
	ulong h<span class="token punctuation">;</span>						<span class="token comment">/* Used for numeric indexing */</span>
	uint nKeyLength<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token operator">*</span>pData<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token operator">*</span>pDataPtr<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">bucket</span> <span class="token operator">*</span>pListNext<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">bucket</span> <span class="token operator">*</span>pListLast<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">bucket</span> <span class="token operator">*</span>pNext<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">bucket</span> <span class="token operator">*</span>pLast<span class="token punctuation">;</span>
	<span class="token keyword">char</span> arKey<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* Must be last element */</span>
<span class="token punctuation">}</span> Bucket<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出h是ulong，ulong是一个unsigned long，如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span> ulong<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看到这里不知道大家有没有看出问题？注意喔，保存p1和p2差值的变量是result，而result是int型变量，这就导致了在64位系统中，unsigned long是64位整型，而int是32位整型，类型的不同出现问题。程序会将<code>p1-&gt;h - p2-&gt;h</code>的结果强制转换为int，我们都知道unsigned long转int会截取低4个字节。所以只需要让unsigned long的低4字节为0，它转换后的int就为0。比如我们将二进制<code>10000000000000000000000000000000000000</code>转换为十进制<code>137438953472</code>，那么<code>137438953472</code>转为int就为0。</p><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>现在再来看看这个php代码吧，前面的那个bug利用前提是数组的value相同，key不同，所以首先需要匹配一个md5出来，我在cmd5试了这10个md5，只有第五个<code>06e2b745f3124f7d670f78eabaa94809</code>能解出，原文是<code>hund</code>。于是首先写入cookie：<code>Cookie: user[0]=5;user[1]=hund;</code> 程序会进入58行，验证通过，$valid_user被改为true，这个时候输出为<code>Welcome back user</code>。到了这一步答案已经很接近了，只需要将$uid改为0即可。现在试试前面提到的漏洞，我们写入cookie：<code>Cookie: user[137438953472]=5;user[1]=hund;</code> 这个时候因为之前提到的漏洞，程序还是会进入58行，因为$input[0]未赋值，所以为NULL，在PHP中<code>0+NULL=0</code>,故成功将$uid改为0。</p>`,12);function b(h,g){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("在乌云上看到"),s("a",r,[n("PHP Challenge 2015"),t(a)]),n("，深感兴趣，但并无思路，直到看了"),s("a",d,[n("@Ryat"),t(a)]),n("大牛的微博才知道答案。")]),k,s("p",null,[n("按照Ryat的提示，找到("),s("a",v,[n("https://bugs.php.net/bug.php?id=69892"),t(a)]),n(")")]),m])}const y=p(l,[["render",b],["__file","PHP_Challenge_2015.html.vue"]]);export{y as default};
