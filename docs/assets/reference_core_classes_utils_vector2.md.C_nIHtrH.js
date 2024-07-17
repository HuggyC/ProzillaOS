import{_ as a,c as o,j as e,t as r,a as t,a2 as l,o as i}from"./chunks/framework.DDEYgRcT.js";const v=JSON.parse('{"title":"Class Vector2","description":"A 2-dimensional vector, set of coordinates or dimensions","frontmatter":{"outline":"deep","description":"A 2-dimensional vector, set of coordinates or dimensions","package":"@prozilla-os/core","head":[["meta",{"name":"og:title","content":"Class Vector2 | ProzillaOS Docs"}],["meta",{"name":"twitter:title","content":"Class Vector2 | ProzillaOS Docs"}],["meta",{"name":"og:description","content":"A 2-dimensional vector, set of coordinates or dimensions"}],["meta",{"name":"twitter:description","content":"A 2-dimensional vector, set of coordinates or dimensions"}],["link",{"rel":"canonical","href":"https://os.prozilla.dev/docs/reference/core/classes/utils/vector2"}],["meta",{"name":"og:url","content":"https://os.prozilla.dev/docs/reference/core/classes/utils/vector2"}],["meta",{"name":"twitter:url","content":"https://os.prozilla.dev/docs/reference/core/classes/utils/vector2"}],["meta",{"name":"og:locale","content":"en_US"}],["meta",{"name":"og:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"twitter:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"reference/core/classes/utils/vector2.md","filePath":"reference/core/classes/utils/vector2.md"}'),n={name:"reference/core/classes/utils/vector2.md"},c=e("h1",{id:"class-vector2",tabindex:"-1"},[t("Class "),e("a",{href:"https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/math/vector2.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"Vector2")]),t(),e("a",{class:"header-anchor",href:"#class-vector2","aria-label":'Permalink to "Class [`Vector2`](https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/math/vector2.ts)"'},"​")],-1),d=l(`<h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><blockquote><p><code>new Vector2(x, y)</code></p></blockquote><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><br><h4 id="x" tabindex="-1">x <a class="header-anchor" href="#x" aria-label="Permalink to &quot;x&quot;">​</a></h4><ul><li><strong>Type:</strong> <code>number</code></li></ul><h4 id="y" tabindex="-1">y <a class="header-anchor" href="#y" aria-label="Permalink to &quot;y&quot;">​</a></h4><ul><li><strong>Optional</strong></li><li><strong>Type:</strong> <code>number</code></li></ul><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Result: Vector2(2, 4)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Result: Vector2(3, 3)</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="x-1" tabindex="-1">x <a class="header-anchor" href="#x-1" aria-label="Permalink to &quot;x&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><h3 id="y-1" tabindex="-1">y <a class="header-anchor" href="#y-1" aria-label="Permalink to &quot;y&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><h3 id="zero" tabindex="-1">ZERO <a class="header-anchor" href="#zero" aria-label="Permalink to &quot;ZERO&quot;">​</a></h3><p>Returns a vector with each value set to zero</p><ul><li><p><strong>Static</strong></p></li><li><p><strong>Type:</strong> <code>Vector2</code></p></li><li><p><strong>Example</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vector2.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ZERO</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Result: Vector2(0, 0)</span></span></code></pre></div></li></ul><h3 id="clone" tabindex="-1">clone <a class="header-anchor" href="#clone" aria-label="Permalink to &quot;clone&quot;">​</a></h3><p>Returns a clone of this vector</p><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="round" tabindex="-1">round() <a class="header-anchor" href="#round" aria-label="Permalink to &quot;round()&quot;">​</a></h3><p>Round the values of this vector to whole numbers</p><details class="details custom-block"><summary>Details</summary><ul><li><p><strong>Returns</strong></p><ul><li><strong>Type:</strong> <code>this</code></li></ul></li><li><p><strong>Example</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Result: Vector2(4, 1)</span></span></code></pre></div></li></ul></details><h3 id="getdistance-x-y" tabindex="-1">getDistance(x, y) <a class="header-anchor" href="#getdistance-x-y" aria-label="Permalink to &quot;getDistance(x, y)&quot;">​</a></h3><p>Get the distance between this vector and another</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Parameters</strong><ul><li><strong>x</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li><li><strong>y</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li></ul></details><h3 id="getdistance-vector2" tabindex="-1">getDistance(vector2) <a class="header-anchor" href="#getdistance-vector2" aria-label="Permalink to &quot;getDistance(vector2)&quot;">​</a></h3><p>Get the distance between this vector and another</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Parameters</strong><ul><li><strong>vector2</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li></ul></details><h3 id="add-vector2a-vector2b" tabindex="-1">add(vector2A, vector2B) <a class="header-anchor" href="#add-vector2a-vector2b" aria-label="Permalink to &quot;add(vector2A, vector2B)&quot;">​</a></h3><p>Add two vectors together</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Static</strong></li><li><strong>Parameters</strong><ul><li><strong>vector2A</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li><li><strong>vector2B</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></details><h3 id="subtract-vector2a-vector2b" tabindex="-1">subtract(vector2A, vector2B) <a class="header-anchor" href="#subtract-vector2a-vector2b" aria-label="Permalink to &quot;subtract(vector2A, vector2B)&quot;">​</a></h3><p>Subtract two vectors</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Static</strong></li><li><strong>Parameters</strong><ul><li><strong>vector2A</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li><li><strong>vector2B</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></details><h3 id="scale-vector2-scalar" tabindex="-1">scale(vector2, scalar) <a class="header-anchor" href="#scale-vector2-scalar" aria-label="Permalink to &quot;scale(vector2, scalar)&quot;">​</a></h3><p>Scale a vector</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Static</strong></li><li><strong>Parameters</strong><ul><li><strong>vector2</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li><li><strong>scalar</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></details><h3 id="magnitude-vector2" tabindex="-1">magnitude(vector2) <a class="header-anchor" href="#magnitude-vector2" aria-label="Permalink to &quot;magnitude(vector2)&quot;">​</a></h3><p>Get the magnitude of a vector</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Static</strong></li><li><strong>Parameters</strong><ul><li><strong>vector2</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li></ul></details><h3 id="normalize-vector2" tabindex="-1">normalize(vector2) <a class="header-anchor" href="#normalize-vector2" aria-label="Permalink to &quot;normalize(vector2)&quot;">​</a></h3><p>Normalize a vector</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Static</strong></li><li><strong>Parameters</strong><ul><li><strong>vector2</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></details><h3 id="sqrdistance-vector2a-vector2b" tabindex="-1">sqrDistance (vector2A, vector2B) <a class="header-anchor" href="#sqrdistance-vector2a-vector2b" aria-label="Permalink to &quot;sqrDistance (vector2A, vector2B)&quot;">​</a></h3><p>Get the square distance between two vectors</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Static</strong></li><li><strong>Parameters</strong><ul><li><strong>vector2A</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li><li><strong>vector2B</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li></ul></details><h3 id="lerp-vector2a-vector2b-t" tabindex="-1">lerp(vector2A, vector2B, t) <a class="header-anchor" href="#lerp-vector2a-vector2b-t" aria-label="Permalink to &quot;lerp(vector2A, vector2B, t)&quot;">​</a></h3><p>Lerp between two vectors</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Static</strong></li><li><strong>Parameters</strong><ul><li><strong>vector2A</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li><li><strong>vector2B</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li><li><strong>t</strong><ul><li><strong>Type:</strong> <code>number</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>Vector2</code></li></ul></li></ul></details>`,52);function u(s,h,g,p,m,k){return i(),o("div",null,[c,e("p",null,r(s.$frontmatter.description),1),d])}const y=a(n,[["render",u]]);export{v as __pageData,y as default};
