var u=Object.defineProperty;var a=(r,t,e)=>t in r?u(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>a(r,typeof t!="symbol"?t+"":t,e);class o{constructor(){i(this,"name","command");i(this,"options",[]);i(this,"manual");i(this,"requireArgs");i(this,"requireOptions");i(this,"execute",()=>{})}setName(t){var e;return this.name=t,(e=this.manual)!=null&&e.usage||(this.manual||(this.manual={}),this.manual.usage=t),this}setExecute(t){return this.execute=t,this}setRequireArgs(t){return this.requireArgs=t,this}setRequireOptions(t){return this.requireOptions=t,this}setManual({purpose:t,usage:e,description:s,options:n}){return this.manual={purpose:t,usage:e,description:s,options:n},this}addOption({short:t,long:e,isInput:s}){return this.options.push({short:t,long:e,isInput:s}),this}getOption(t){let e=null;return this.options.forEach(s=>{(s.short===t||s.long===t)&&(e=s)}),e}}export{o as C};
