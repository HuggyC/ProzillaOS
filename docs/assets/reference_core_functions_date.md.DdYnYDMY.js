import{_ as o,c as a,j as e,t as n,a as l,a2 as i,o as r}from"./chunks/framework.DDEYgRcT.js";const x=JSON.parse('{"title":"Date functions","description":"Functions related to dates and time","frontmatter":{"outline":"deep","description":"Functions related to dates and time","package":"@prozilla-os/core","head":[["meta",{"name":"og:title","content":"Date functions | ProzillaOS Docs"}],["meta",{"name":"twitter:title","content":"Date functions | ProzillaOS Docs"}],["meta",{"name":"og:description","content":"Functions related to dates and time"}],["meta",{"name":"twitter:description","content":"Functions related to dates and time"}],["link",{"rel":"canonical","href":"https://os.prozilla.dev/docs/reference/core/functions/date"}],["meta",{"name":"og:url","content":"https://os.prozilla.dev/docs/reference/core/functions/date"}],["meta",{"name":"twitter:url","content":"https://os.prozilla.dev/docs/reference/core/functions/date"}],["meta",{"name":"og:locale","content":"en_US"}],["meta",{"name":"og:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"twitter:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"reference/core/functions/date.md","filePath":"reference/core/functions/date.md"}'),s={name:"reference/core/functions/date.md"},c=e("h1",{id:"date-functions",tabindex:"-1"},[l("Date functions "),e("a",{class:"header-anchor",href:"#date-functions","aria-label":'Permalink to "Date functions"'},"​")],-1),m=i('<ul><li><strong>Source:</strong> <a href="https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/_utils/date.utils.ts" target="_blank" rel="noreferrer"><code>date.utils.ts</code></a></li></ul><h2 id="formattime-time-maxlength-allowaffixes" tabindex="-1">formatTime(time, maxLength, allowAffixes) <a class="header-anchor" href="#formattime-time-maxlength-allowaffixes" aria-label="Permalink to &quot;formatTime(time, maxLength, allowAffixes)&quot;">​</a></h2><p>Format a time</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Parameters</strong><ul><li><strong>time</strong> - Time in milliseconds (negative number represents time in the past) <ul><li><strong>Type:</strong> <code>number</code></li></ul></li><li><strong>maxLength</strong> - The maximum amount of units, e.g.: 3 =&gt; years, months, days <ul><li><strong>Type:</strong> <code>number | undefined</code></li><li><strong>Default:</strong> <code>3</code></li></ul></li><li><strong>allowAffixes</strong> - Allow &quot;... ago&quot; or &quot;in ...&quot; <ul><li><strong>Type:</strong> <code>boolean</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>string</code></li></ul></li></ul></details><h2 id="formatrelativetime-date-maxlength-allowaffixes" tabindex="-1">formatRelativeTime(date, maxLength, allowAffixes) <a class="header-anchor" href="#formatrelativetime-date-maxlength-allowaffixes" aria-label="Permalink to &quot;formatRelativeTime(date, maxLength, allowAffixes)&quot;">​</a></h2><p>Format a time relative to now</p><details class="details custom-block"><summary>Details</summary><ul><li><strong>Parameters</strong><ul><li><strong>date</strong><ul><li><strong>Type:</strong> <code>Date</code></li></ul></li><li><strong>maxLength</strong> - The maximum amount of units, e.g.: 3 =&gt; years, months, days <ul><li><strong>Type:</strong> <code>number | undefined</code></li><li><strong>Default:</strong> <code>3</code></li></ul></li><li><strong>allowAffixes</strong> - Allow &quot;... ago&quot; or &quot;in ...&quot; <ul><li><strong>Type:</strong> <code>boolean</code></li></ul></li></ul></li><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>string</code></li></ul></li></ul></details>',7);function d(t,u,g,f,p,h){return r(),a("div",null,[c,e("p",null,n(t.$frontmatter.description),1),m])}const T=o(s,[["render",d]]);export{x as __pageData,T as default};
