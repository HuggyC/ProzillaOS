import{_ as s,c as i,o as a,a2 as l}from"./chunks/framework.DDEYgRcT.js";const E=JSON.parse('{"title":"@prozilla-os/logic-sim","description":"","frontmatter":{"outline":"deep","head":[["meta",{"name":"og:title","content":"@prozilla-os/logic-sim | ProzillaOS Docs"}],["meta",{"name":"twitter:title","content":"@prozilla-os/logic-sim | ProzillaOS Docs"}],["meta",{"name":"og:description","content":"Documentation for ProzillaOS and its packages."}],["meta",{"name":"twitter:description","content":"Documentation for ProzillaOS and its packages."}],["link",{"rel":"canonical","href":"https://os.prozilla.dev/docs/reference/apps/logic-sim/"}],["meta",{"name":"og:url","content":"https://os.prozilla.dev/docs/reference/apps/logic-sim/"}],["meta",{"name":"twitter:url","content":"https://os.prozilla.dev/docs/reference/apps/logic-sim/"}],["meta",{"name":"og:locale","content":"en_US"}],["meta",{"name":"og:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"twitter:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"reference/apps/logic-sim/index.md","filePath":"reference/apps/logic-sim/index.md"}'),n={name:"reference/apps/logic-sim/index.md"},t=l(`<h1 id="prozilla-os-logic-sim" tabindex="-1">@prozilla-os/logic-sim <a class="header-anchor" href="#prozilla-os-logic-sim" aria-label="Permalink to &quot;@prozilla-os/logic-sim&quot;">​</a></h1><h2 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-label="Permalink to &quot;About&quot;">​</a></h2><p><code>@prozilla-os/logic-sim</code> is a ProzillaOS application for simulating digital logic. Inspired by <a href="https://sebastian.itch.io/digital-logic-sim" target="_blank" rel="noreferrer">Digital Logic Sim</a> by Sebastian Lague.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p><code>@prozilla-os/core</code> is required to run this application.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prozilla-os/core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prozilla-os/logic-sim</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prozilla-os/core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prozilla-os/logic-sim</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prozilla-os/core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prozilla-os/logic-sim</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="basic-setup" tabindex="-1">Basic setup <a class="header-anchor" href="#basic-setup" aria-label="Permalink to &quot;Basic setup&quot;">​</a></h3><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Desktop, ModalsView, ProzillaOS, Taskbar, WindowsView, AppsConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@prozilla-os/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { logicSim } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@prozilla-os/logic-sim&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ProzillaOS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      systemName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Example&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      tagLine</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Powered by ProzillaOS&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        apps: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AppsConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          apps: [ logicSim ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Taskbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WindowsView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ModalsView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Desktop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ProzillaOS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="https://os.prozilla.dev/logic-sim" target="_blank" rel="noreferrer">Demo</a></li><li><a href="https://os.prozilla.dev/docs/reference/apps/logic-sim" target="_blank" rel="noreferrer">Docs</a></li><li><a href="https://github.com/prozilla-os/ProzillaOS/tree/main/packages/apps/logic-sim" target="_blank" rel="noreferrer">GitHub</a></li><li><a href="https://www.npmjs.com/package/@prozilla-os/logic-sim" target="_blank" rel="noreferrer">npm</a></li><li><a href="https://discord.gg/JwbyQP4tdz" target="_blank" rel="noreferrer">Discord</a></li><li><a href="https://ko-fi.com/prozilla" target="_blank" rel="noreferrer">Ko-fi</a></li></ul>`,11),e=[t];function p(h,r,o,k,c,d){return a(),i("div",null,e)}const m=s(n,[["render",p]]);export{E as __pageData,m as default};
