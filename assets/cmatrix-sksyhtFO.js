import{S as l,a as E,r as u,b as w,c as x,A as s}from"./index-DZbrj86T.js";import{C as d}from"./command-Clc1HLU6.js";const A=1.25,i=75,f=20,g="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.*\\/()#@&$!?%°:<>[]",a={framesBetweenSpawn:30,fallSpeed:1,minSize:5,maxSize:25};let c=[];function h(o){if(o%a.framesBetweenSpawn){const e={position:new E(u(0,i),f).round(),size:Math.round(u(a.minSize,a.maxSize))};c.push(e)}const t=[];for(let e=0;e<f;e++){const n=[];for(let r=0;r<i;r++)n.push(" ");t.push(n)}return c.forEach(e=>{if(e.position.y-=a.fallSpeed,e.position.y+e.size<=0||e.position.x>=i)return w(e,c);for(let n=0;n<e.size;n++){const r=x(g.split(""));let S=n==0?s.fg.white:s.fg.green;n>e.size/2&&(S=s.fg.green+s.decoration.dim);const p=e.position.x,m=e.position.y+n;p<i&&m<f&&m>0&&(t[m][p]=S+r+s.reset)}}),t.map(e=>e.join("")).reverse().join(`
`)}const C=new d().setManual({purpose:"Show a scrolling 'Matrix' like screen",usage:"cmatrix"}).setExecute(function(){const o=new l;c=[];let t=0;const e=setInterval(()=>{const n=h(t);o.send(n),t++},100/A);return o.on(l.EVENT_NAMES.stop,()=>{clearInterval(e)}),o.start(),o});export{C as cmatrix};
