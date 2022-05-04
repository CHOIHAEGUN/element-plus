import{_ as l,a as d}from"./chunks/custom.405fb576.js";import{_ as r}from"./chunks/contributors.3de338ac.js";import{c as i,a,w as n,u as c,b as t,d as e,e as u,r as E,o as C}from"./app.02079f52.js";const h=t("h1",{id:"backtop",tabindex:"-1"},[e("Backtop "),t("a",{class:"header-anchor",href:"#backtop","aria-hidden":"true"},"#")],-1),b=t("p",null,"Un bot\xF3n para volver a la parte superior.",-1),k=t("h2",{id:"uso-basico",tabindex:"-1"},[e("Uso b\xE1sico "),t("a",{class:"header-anchor",href:"#uso-basico","aria-hidden":"true"},"#")],-1),D=t("p",null,"Despl\xE1cese hacia abajo para ver el bot\xF3n en el lado inferior derecho.",-1),F=t("p",null,"backtop/basic",-1),A=t("h2",{id:"personalizaciones",tabindex:"-1"},[e("Personalizaciones "),t("a",{class:"header-anchor",href:"#personalizaciones","aria-hidden":"true"},"#")],-1),m=t("p",null,"\xC1rea de visualizaci\xF3n de 40px * 40px.",-1),_=t("p",null,"backtop/custom",-1),g=u('<h2 id="api-de-backtop" tabindex="-1">API de Backtop <a class="header-anchor" href="#api-de-backtop" aria-hidden="true">#</a></h2><h3 id="atributos-de-backtop" tabindex="-1">Atributos de Backtop <a class="header-anchor" href="#atributos-de-backtop" aria-hidden="true">#</a></h3><table><thead><tr><th>Nombre</th><th>Descripci\xF3n</th><th>Tipo</th><th>Por defecto</th></tr></thead><tbody><tr><td><code>target</code></td><td>el objetivo para activar el desplazamiento.</td><td><code>string</code></td><td>\u2014</td></tr><tr><td><code>visibility-height</code></td><td>el bot\xF3n no se mostrar\xE1 hasta que la altura del desplazamiento alcance este valor.</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>right</code></td><td>separaci\xF3n desde la derecha.</td><td><code>number</code></td><td><code>40</code></td></tr><tr><td><code>bottom</code></td><td>separaci\xF3n desde abajo.</td><td><code>number</code></td><td><code>40</code></td></tr></tbody></table><h2 id="eventos-de-backtop" tabindex="-1">Eventos de Backtop <a class="header-anchor" href="#eventos-de-backtop" aria-hidden="true">#</a></h2><table><thead><tr><th>Nombre</th><th>Descripci\xF3n</th><th>Par\xE1metros</th></tr></thead><tbody><tr><td><code>click</code></td><td>se dispara al hacer click.</td><td><code>(evt: MouseEvent) =&gt; void</code></td></tr></tbody></table><h2 id="slots-del-backtop" tabindex="-1">Slots del Backtop <a class="header-anchor" href="#slots-del-backtop" aria-hidden="true">#</a></h2><table><thead><tr><th>Nombre</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td><code>default</code></td><td>personaliza el contenido por defecto.</td></tr></tbody></table><h2 id="fuente" tabindex="-1">Fuente <a class="header-anchor" href="#fuente" aria-hidden="true">#</a></h2><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/components/backtop" target="_blank" rel="noopener noreferrer">Componentes</a> \u2022 <a href="https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/backtop.md" target="_blank" rel="noopener noreferrer">Documentaci\xF3n</a></p><h2 id="contribuidores" tabindex="-1">Contribuidores <a class="header-anchor" href="#contribuidores" aria-hidden="true">#</a></h2>',10),P='{"title":"Backtop","description":"","frontmatter":{"title":"Backtop","lang":"es-ES"},"headers":[{"level":2,"title":"Uso b\xE1sico","slug":"uso-basico"},{"level":2,"title":"Personalizaciones","slug":"personalizaciones"},{"level":2,"title":"API de Backtop","slug":"api-de-backtop"},{"level":3,"title":"Atributos de Backtop","slug":"atributos-de-backtop"},{"level":2,"title":"Eventos de Backtop","slug":"eventos-de-backtop"},{"level":2,"title":"Slots del Backtop","slug":"slots-del-backtop"},{"level":2,"title":"Fuente","slug":"fuente"},{"level":2,"title":"Contribuidores","slug":"contribuidores"}],"relativePath":"es-ES/component/backtop.md","lastUpdated":null}',v={},z=Object.assign(v,{setup(B){const s={"../../examples/backtop/basic.vue":l,"../../examples/backtop/custom.vue":d};return(f,x)=>{const o=E("Demo"),p=r;return C(),i("div",null,[h,b,k,D,a(o,{demos:c(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-backtop%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aright%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E100%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Abottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E100%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"backtop/basic","raw-source":"%3Ctemplate%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cel-backtop%20%3Aright%3D%22100%22%20%3Abottom%3D%22100%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:n(()=>[F]),_:1},8,["demos"]),A,m,a(o,{demos:c(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-backtop%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Abottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E100%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20var(--el-bg-color-overlay)%3B%0A%20%20%20%20%20%20%20%20box-shadow%3A%20var(--el-box-shadow-lighter)%3B%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20color%3A%20%231989fa%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20UP%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-backtop%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"backtop/custom","raw-source":"%3Ctemplate%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cel-backtop%20%3Abottom%3D%22100%22%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20style%3D%22%0A%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20var(--el-bg-color-overlay)%3B%0A%20%20%20%20%20%20%20%20box-shadow%3A%20var(--el-box-shadow-lighter)%3B%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20color%3A%20%231989fa%3B%0A%20%20%20%20%20%20%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20UP%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fel-backtop%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:n(()=>[_]),_:1},8,["demos"]),g,a(p,{id:"backtop"})])}}});export{P as __pageData,z as default};
