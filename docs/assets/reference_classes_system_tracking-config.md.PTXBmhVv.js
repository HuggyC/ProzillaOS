import{_ as e,c as a,o as t,a2 as s}from"./chunks/framework.DDEYgRcT.js";const m=JSON.parse('{"title":"Class TrackingConfig","description":"","frontmatter":{"outline":"deep","package":"@prozilla-os/core","head":[["meta",{"name":"og:title","content":"Class TrackingConfig | ProzillaOS Docs"}],["meta",{"name":"twitter:title","content":"Class TrackingConfig | ProzillaOS Docs"}],["meta",{"name":"og:description","content":"Documentation for ProzillaOS and its packages."}],["meta",{"name":"twitter:description","content":"Documentation for ProzillaOS and its packages."}],["link",{"rel":"canonical","href":"https://os.prozilla.dev/docs/reference/classes/system/tracking-config"}],["meta",{"name":"og:url","content":"https://os.prozilla.dev/docs/reference/classes/system/tracking-config"}],["meta",{"name":"twitter:url","content":"https://os.prozilla.dev/docs/reference/classes/system/tracking-config"}],["meta",{"name":"og:locale","content":"en_US"}],["meta",{"name":"og:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"twitter:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"reference/classes/system/tracking-config.md","filePath":"reference/classes/system/tracking-config.md"}'),i={name:"reference/classes/system/tracking-config.md"},n=s(`<h1 id="class-trackingconfig" tabindex="-1">Class <a href="https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/system/configs/trackingConfig.ts" target="_blank" rel="noreferrer"><code>TrackingConfig</code></a> <a class="header-anchor" href="#class-trackingconfig" aria-label="Permalink to &quot;Class [\`TrackingConfig\`](https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/system/configs/trackingConfig.ts)&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><blockquote><p><code>new TrackingConfig(options)</code></p></blockquote><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><br><h4 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h4><ul><li><strong>Optional</strong></li><li><strong>Type:</strong> <code>TrackingConfigOptions</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TrackingConfigOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	enabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	GAMeasurementId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="enabled" tabindex="-1">enabled <a class="header-anchor" href="#enabled" aria-label="Permalink to &quot;enabled&quot;">​</a></h3><p>Determines whether tracking is enabled</p><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>true</code></li></ul><h3 id="gameasurementid" tabindex="-1">GAMeasurementId <a class="header-anchor" href="#gameasurementid" aria-label="Permalink to &quot;GAMeasurementId&quot;">​</a></h3><p>Google Analytics measurement ID</p><ul><li><strong>Type:</strong> <code>string</code></li></ul><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>This option is required if you want to enable tracking. The tracking feature currently only supports tracking via Google Analytics.</p></div>`,16),o=[n];function r(l,c,p,g,h,d){return t(),a("div",null,o)}const u=e(i,[["render",r]]);export{m as __pageData,u as default};
