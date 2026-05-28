(function(){function I(t,e){if(document.getElementById(t))return;const n=document.createElement("style");n.id=t,n.innerHTML=e,document.head.appendChild(n)}function C(t,e="warning"){typeof FSToastr=="function"?new FSToastr({message:t,type:e},!0):console.warn(`[${e.toUpperCase()}]: ${t}`)}var O=`[id^="grid-controls-"] {
    margin: 16px;
}
[id^="grid-controls-"] h4 {
    margin-bottom: 10px;
}
[id^="grid-controls-"] .controls-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
}
[id^="grid-popup-overlay-"] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: none;
    z-index: 1050;
    align-items: center;
    justify-content: center;
}
[id^="grid-popup-overlay-"] .popup {
    position: relative;
    background: white;
    border-radius: 10px;
    padding: 25px;
    width: 95%;
    max-width: 1400px;
    max-height: 90vh;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
}
[id^="grid-popup-overlay-"] .popup-header {
    font-size: 1.5em;
    font-weight: 600;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
}
[id^="grid-popup-overlay-"] .popup-body {
    overflow-y: auto;
    padding-right: 10px;
    height: 300px;
}
[id^="grid-popup-overlay-"] .popup-footer {
    padding-top: 15px;
    border-top: 1px solid #eee;
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
[id^="grid-popup-overlay-"] .dynamic-table {
    width: 100%;
    border-collapse: collapse;
}
[id^="grid-popup-overlay-"] .dynamic-table th, 
[id^="grid-popup-overlay-"] .dynamic-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 14px;
    vertical-align: middle;
}
[id^="grid-popup-overlay-"] .dynamic-table th {
    background-color: #f8f9fa;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.5px;
}
[id^="grid-popup-overlay-"] .dynamic-table .invalid-cell {
    border: 3px solid red !important;
}
.grid-action-button {
    background-color: #000e40;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-family: inherit;
    font-weight: 500;
    transition: background-color 0.2s;
}
.grid-action-button:hover {
    background-color: #00072d;
}
.grid-action-button.remove {
    background-color: #dc3545;
}
.grid-action-button.remove:hover {
    background-color: #bb2d3b;
}
.grid-main-button {
    font-size: 14px;
}
[id^="grid-popup-overlay-"] .dynamic-table .choices__inner,
[id^="grid-popup-overlay-"] .dynamic-table input.grid-input {
    font-size: 14px;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    min-height: 40px;
    line-height: 1.5;
    min-width: 100px;
}
[id^="grid-popup-overlay-"] .dynamic-table .choices {
    min-width: 250px;
}
.choices[data-type*="select-one"]::after {
    right: 12.5px;
    border-color: #333 transparent transparent;
}
`;function $(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function F(t){if(!t)return null;let e=t;typeof t=="object"&&t.tagName&&(e=t.id||t.name||"");const n=e.match(/(cf_\w+)/);return n?n[1]:e}function D(t){const e=t.placeholder||"";if(!e)return null;const n=e.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");try{return new Function("return ("+n+")")()}catch{return null}}function z(t,e){if(!t||!window.IMask)return;let n;switch(e){case"numero":n={mask:Number,scale:"any",thousandsSeparator:".",radix:","};break;case"data":n={mask:"00/00/0000"};break;case"hora":n={mask:"00:00:00"};break;case"monetario":n={mask:"R$ num",blocks:{num:{mask:Number,scale:2,thousandsSeparator:".",padFractionalZeros:!0,radix:","}}};break;default:return}window.IMask(t,n)}var M={popular_article:"/support/v2/solutions/articles/popular",agents_and_requesters:"/search/autocomplete/agents_and_requesters",tickets:"/support/search/tickets",archived_tickets:"/support/search/archived_tickets",solutions:"/support/search/solutions",journey_requests:"/support/search/journeys/requests",catalog_items:"/support/search/catalog_items",changes:"/support/search/changes",ext_lookup:"/requested_for_choices",requester_search:"/ext_lookup_search/index?include_agents=true&query="};function P(t,e){const n=M[t];if(!n)return"";const o=e||"";return t==="requester_search"?`${n}${encodeURIComponent(o)}`:`${n}${n.includes("?")?"&":"?"}query=${encodeURIComponent(o)}`}function B(t,e){if(!t)return[];let n=[];if(Array.isArray(t))n=t;else if(t&&typeof t=="object"){const o=Object.keys(t).find(a=>Array.isArray(t[a]));o?n=t[o]:n=[t]}return n.map(o=>{if(!o||typeof o!="object"){const u=String(o||"");return{value:u,label:u}}const a=["id","value","key","id_str","id_number"],i=["name","label","text","title","display_name","subject"],l=Object.keys(o).find(u=>a.includes(u.toLowerCase())),r=Object.keys(o).find(u=>i.includes(u.toLowerCase()));let c=l?o[l]:null,s=r?o[r]:null;if(c==null){const u=Object.keys(o)[0];c=u?o[u]:""}if(s==null){const u=Object.keys(o)[1]||Object.keys(o)[0];s=u?o[u]:""}return{value:String(c),label:String(s||c)}})}async function H(t,e,n,o,a=null){let i;a?i=P(a,e):i=`${t}?q=${encodeURIComponent(e||"")}&${n}`,console.log(`[GRID API] Fetching URL: ${i} (standardSource: ${a})`);let l=i,r=[];for(;l;){const c=await fetch(l,{signal:o});if(!c.ok)throw new Error(`HTTP error! status: ${c.status}`);const s=await c.json();if(a){const u=B(s,a);r=r.concat(u),s.next_page_link&&e!==""&&e.length>3?l=s.next_page_link:l=null}else s&&Array.isArray(s.results)&&(r=r.concat(s.results)),s.next_page_link&&e!==""&&e.length>3?l=`${i}&next_page_link=${encodeURIComponent(s.next_page_link)}`:l=null}return r}var E=new Set,S={},A={},U="/lookup_choices";function G(t,e,n,o){if(!window.Choices)return;e.multiselect&&t.setAttribute("multiple",""),t.setAttribute("id",e.name);const a=document.createElement("option");a.value="",a.textContent="Selecione...",a.setAttribute("placeholder",""),a.selected=!e.multiselect,t.appendChild(a);const i=new window.Choices(t,{placeholder:!0,placeholderValue:"Selecione...",searchPlaceholderValue:"Filtrar resultados...",itemSelectText:"",removeItemButton:e.multiselect,searchEnabled:!0,shouldSort:!1,searchChoices:!1,searchResultLimit:100,renderChoiceLimit:100});t.choicesInstance=i;let l=null;const r=()=>(e.search_term||"").replace(/#(.*?)#/g,(s,u)=>{const p=u.trim(),b=o.headers.findIndex(m=>m.name.replace("*","").trim()===p);if(b===-1)return"";const f=n.cells[b].querySelector("input, select");if(!f)return"";if(f.choicesInstance){const m=f.choicesInstance.getValue(!0);return Array.isArray(m)?m.join(","):m||""}return f.value||""}),c=async s=>{console.log(`[GRID performFetch] Buscando dropdown para '${e.name}' com termo: "${s}"`),l&&l.abort(),l=new AbortController;const u=l.signal;try{i.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"loading_placeholder",label:"Buscando...",disabled:!0}],"value","label",!0);const p=await H(U,s,e.dropdown_query,u,e.standard_source);console.log(`[GRID performFetch] Sucesso: ${p.length} resultados retornados.`);const b=[{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect}];p.forEach(f=>{b.push({value:f.value,label:f.label||f.value,selected:!1})}),i.clearChoices(),p.length>0?i.setChoices(b,"value","label",!0):i.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"no_results_placeholder",label:"Nenhum resultado",disabled:!0}],"value","label",!0)}catch(p){if(p.name==="AbortError")return;console.error("[GRID API ERROR]",p),i.clearChoices(),i.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"error_placeholder",label:"Erro ao carregar",disabled:!0}],"value","label",!0)}};if((e.dropdown_query||e.standard_source)&&!e.search_term&&t.addEventListener("search",s=>{c(s.detail.value)}),e.search_term&&(e.dropdown_query||e.standard_source)){const s=()=>{const p=r();p&&p.trim()!==""?(i.removeActiveItems(),c(p)):(i.clearChoices(),i.removeActiveItems(),i.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"waiting_placeholder",label:"Aguardando preenchimento...",disabled:!0}],"value","label",!0))},u=e.search_term.match(/#(.*?)#/g);u&&u.forEach(p=>{const b=p.replace(/#/g,"").trim(),f=o.headers.findIndex(m=>m.name.replace("*","").trim()===b);f!==-1&&n.cells[f].addEventListener("change",s)}),s()}else if(e.standard_source)i.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"hint_placeholder",label:"Digite para pesquisar...",disabled:!0}],"value","label",!0);else if(e.dropdown_query)c("");else if(e.dropdown){const s=document.querySelector(`div[data-field-section*="${e.dropdown}"]`);if(s){const u=[];u.push({value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect}),s.querySelectorAll("option").forEach(p=>{p.value&&p.value.trim()!==""&&u.push({value:p.textContent,label:p.textContent,selected:!1})}),i.clearChoices(),i.setChoices(u,"value","label",!0)}}}function v(){E.forEach(t=>{const e=S[t];if(!e||!e.textarea)return;const n=[],o=document.querySelectorAll(`#dynamic-table-${t} tbody tr`);let a=`<h4>${$(e.tableName)}</h4><table style="width:100%; border-collapse:collapse; border:1px solid #ddd;"><thead><tr style="background-color:#f2f2f2;">`;e.headers.forEach(r=>{a+=`<th style="border:1px solid #ddd; padding:8px;">${$(r.name)}</th>`}),a+="</tr></thead><tbody>",o.forEach(r=>{const c={};a+="<tr>",r.querySelectorAll("td").forEach((s,u)=>{const p=e.headers[u];if(!p)return;let b="";const f=s.querySelector("input, select");if(f)if(f.choicesInstance){const d=f.choicesInstance.getValue(!0);b=Array.isArray(d)?d.join(", "):d||""}else f.tagName==="SELECT"?b=Array.from(f.selectedOptions).map(d=>d.value).join(", "):b=f.value;else b=s.textContent;const m=p.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9 ]/g,"").trim().toLowerCase().replace(/\s+/g,"_");c[m]=b,a+=`<td style="border:1px solid #ddd; padding:8px;">${$(b||"")}</td>`}),a+="</tr>",n.push({dados_linha:JSON.stringify(c)})}),a+="</tbody></table>";const i=(e.textarea.closest(".custom_rich_text.custom-field")||e.textarea.parentElement).querySelector(".fr-view");if(i&&(i.innerHTML=a),e.textarea.value=a,e.textarea.dispatchEvent(new Event("change",{bubbles:!0})),e.json_field){const r=document.querySelector(`[data-field-label*="${e.json_field}"] textarea, [data-field-label*="${e.json_field}"] input, [data-field-section*="${e.json_field}"] textarea, [data-field-section*="${e.json_field}"] input, #${e.json_field}`);r&&(r.value=JSON.stringify(n,null,2),r.dispatchEvent(new Event("change",{bubbles:!0})))}const l=document.getElementById(`item-count-${t}`);l&&(l.textContent=`Itens adicionados: ${n.length}`)})}function _(t,e){let n=!0;const o=document.querySelector(`#dynamic-table-${t}`);return o?(o.querySelectorAll("tbody tr").forEach(a=>{a.querySelectorAll("td").forEach((i,l)=>{const r=e.headers[l],c=i.querySelector("input, select");if(!(!r||!c)){if(i.style.pointerEvents==="none"||i.style.opacity==="0.5"){i.classList.remove("invalid-cell");return}if(r.mandatory){let s=!1;if(c.tagName==="SELECT"&&c.choicesInstance){const u=c.choicesInstance.getValue(!0);s=Array.isArray(u)?u.length===0:!u}else s=c.value.trim()==="";s?(document.activeElement!==c&&i.classList.add("invalid-cell"),n=!1):i.classList.remove("invalid-cell")}}})}),n):!0}function V(t,e){const n=e.headers.findIndex(a=>a.tipo==="sequencia");if(n===-1)return;let o=1;document.querySelectorAll(`#dynamic-table-${t} tbody tr`).forEach(a=>{a.querySelectorAll("td")[n].textContent=o++}),A[t]=o}function N(t,e,n){S[n]=t,A[n]=1;const o=document.createElement("div");o.id=`grid-controls-${n}`,o.className="grid-controls-wrapper",o.innerHTML=`<h4>${t.tableName||"Itens"}</h4><div class="controls-wrapper"><input type="button" id="add-items-${n}" class="grid-main-button grid-action-button" value="Adicionar / Editar Itens" /><span id="item-count-${n}">Itens adicionados: 0</span></div>`;const a=e.querySelector(".fr-box"),i=e.querySelector(".control-element"),l=e.closest("[data-field-section]")||a||i;l?(l.before(o),l.setAttribute("data-grid-hidden-by-script","true"),l.style.display="none"):(e.after(o),e.setAttribute("data-grid-hidden-by-script","true"),e.style.display="none");const r=document.createElement("div");r.className="popup-overlay",r.id=`grid-popup-overlay-${n}`,r.style.display="none",r.innerHTML=`<div class="popup"><div class="popup-header">${t.tableName||"Itens"}</div><div class="popup-body"><table class="dynamic-table" id="dynamic-table-${n}"><thead><tr>${t.headers.map(d=>`<th>${d.name}${d.mandatory?"*":""}</th>`).join("")}<th>Ações</th></tr></thead><tbody></tbody></table></div><div class="popup-footer"><input type="button" class="grid-action-button" id="add-row-${n}" value="Adicionar Linha" /><input type="button" class="grid-action-button" id="ok-button-${n}" value="Salvar e Fechar" /></div></div></div>`,document.body.appendChild(r);const c=r.querySelector("tbody"),s=()=>{const d=c.insertRow();t.headers.forEach(g=>{const x=d.insertCell();if(x.style.minWidth=g.minWidth||"auto",g.tipo==="sequencia")x.textContent=A[n]++;else if(g.tipo==="dropdown"||g.dropdown){const h=document.createElement("select");x.appendChild(h),G(h,g,d,t)}else if(g.editable){const h=document.createElement("input");h.type="text",h.className="grid-input",x.appendChild(h),z(h,g.tipo)}});const y=d.insertCell();y.innerHTML='<input type="button" class="grid-action-button remove" value="Remover" />',v()},u=t.minRows||0,p=t.maxRows||1;for(let d=0;d<u;d++)s();v(),_(n,t);let b;const f=()=>{r.style.display==="flex"&&_(n,t),b=requestAnimationFrame(f)};b=requestAnimationFrame(f);const m=new MutationObserver(()=>{document.body.contains(r)||(cancelAnimationFrame(b),m.disconnect())});m.observe(document.body,{childList:!0}),document.getElementById(`add-items-${n}`).addEventListener("click",()=>{r.style.display="flex"}),c.addEventListener("input",d=>{d.target.classList.contains("grid-input")&&v()}),c.addEventListener("change",d=>{d.target.tagName==="SELECT"&&v()}),r.addEventListener("click",d=>{if(d.target.id===`ok-button-${n}`){if(!_(n,t)){C("Por favor, preencha todos os campos obrigatórios (*)."),r.style.display="none";return}v(),r.style.display="none"}if(d.target.id===`add-row-${n}`){if(!_(n,t)){C("Preencha os campos obrigatórios da linha atual antes de adicionar uma nova.");return}if(c.rows.length===p){C("Limite de linhas atingido.");return}s()}d.target.classList.contains("remove")&&(c.rows.length>u?(d.target.closest("tr").remove(),V(n,t),v()):C(`O número mínimo de linhas é ${u}.`))})}function R(){document.querySelectorAll(".custom_rich_text.custom-field").forEach(t=>{if(!t.querySelector('[data-field-label*="cf_grid_"]'))return;const e=t.querySelector("textarea.rich_text");if(!e)return;const n=F(e);if(n&&!E.has(n)){const o=D(e);o&&(o.textarea=e,E.add(n),N(o,t,n))}}),E.forEach(t=>{const e=S[t];if(e&&e.textarea){const n=e.textarea,o=n.closest(".custom_rich_text.custom-field")||n.parentElement,a=document.getElementById(`grid-controls-${t}`),i=document.getElementById(`grid-popup-overlay-${t}`);if(!document.body.contains(n)){a?.remove(),i?.remove(),E.delete(t),delete S[t],v();return}if(o){const l=o.querySelector(".fr-box"),r=o.querySelector(".control-element"),c=o.closest("[data-field-section]"),s=c||l||r||o;o.classList.contains("hide")||o.classList.contains("hidden")||o.style.display==="none"&&!o.hasAttribute("data-grid-hidden-by-script")||c&&(c.classList.contains("hide")||c.classList.contains("hidden")||c.style.display==="none"&&!c.hasAttribute("data-grid-hidden-by-script"))?a&&(a.style.display="none"):(s.style.display!=="none"&&(s.setAttribute("data-grid-hidden-by-script","true"),s.style.display="none"),a&&(a.style.display=""))}}})}function W(){I("dynamic-grid-styles",O),document.addEventListener("click",function(t){if(t.target&&t.target.matches(".place-request-btn")&&document.querySelectorAll(".invalid-cell").length>0)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),C("Preencha os campos obrigatórios das tabelas!"),!1},!0),new MutationObserver(R).observe(document.body,{childList:!0,subtree:!0}),R()}var K=`.on-call-popup-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.2);
    z-index: 99998;
    display: none;
}

.on-call-popup {
    position: fixed;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    padding: 15px;
    z-index: 99999;
    display: none;
    width: 220px;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform: translateY(10px);
    font-family: inherit;
}

.on-call-popup.show {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

.on-call-popup h4 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 14px;
    color: #1A4265;
    text-align: center;
    font-weight: 600;
}

.on-call-popup-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.on-call-popup-btn {
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 13px;
    transition: all 0.2s;
}

.on-call-btn-normal {
    background: #f1f5f9;
    color: #475569;
}

.on-call-btn-normal:hover {
    background: #e2e8f0;
    color: #1e293b;
}

.on-call-btn-urgent {
    background: #ef4444;
    color: #ffffff;
}

.on-call-btn-urgent:hover {
    background: #dc2626;
    box-shadow: 0 4px 6px rgba(239, 68, 68, 0.2);
}
`;function J(t={}){I("on-call-popup-styles",K);let e=document.getElementById("on-call-template");e||(e=document.createElement("template"),e.id="on-call-template",e.innerHTML=`
            <div class="on-call-popup-overlay"></div>
            <div class="on-call-popup">
                <h4>Chamado Fora do Horário</h4>
                <div class="on-call-popup-actions">
                    <button class="on-call-popup-btn on-call-btn-urgent" type="button">Sim, é Urgente</button>
                    <button class="on-call-popup-btn on-call-btn-normal" type="button">Não, Normal</button>
                </div>
            </div>
        `,document.body.appendChild(e)),document.querySelector(".on-call-popup-overlay")||document.body.appendChild(e.content.cloneNode(!0));const[n,o]=(t.onCallTime||"17:59").split(":"),a=Number(n)||17,i=Number(o)||59,l=document.querySelector(".on-call-popup-overlay"),r=document.querySelector(".on-call-popup"),c=document.querySelector(".on-call-btn-urgent"),s=document.querySelector(".on-call-btn-normal");if(!l||!r||!c||!s){console.error("[On Call Script] Elementos do popup não foram encontrados.");return}function u(){const d=new Date,y=d.getHours(),g=d.getMinutes();return y>a||y===a&&g>=i}let p=null;function b(){if(!p)return;const d=p.getBoundingClientRect();r.style.display="block";const y=r.offsetWidth,g=r.offsetHeight;let x=0,h=0,w=r.parentElement;for(;w&&w!==document.documentElement&&w!==document.body;){const k=window.getComputedStyle(w);if(k.transform!=="none"||k.perspective!=="none"||k.filter!=="none"||k.willChange==="transform"){const j=w.getBoundingClientRect();x=j.left,h=j.top;break}w=w.parentElement}let q=d.top-h-g-10,L=d.right-x-y;q<10&&(q=d.bottom-h+10),L<10&&(L=10),r.style.top=`${q}px`,r.style.left=`${L}px`}let f=!1;function m(){r.classList.remove("show"),p=null,setTimeout(()=>{l.style.display="none",r.style.display="none"},200)}l.addEventListener("click",m),c.addEventListener("click",function(){const d=p;m(),d&&(f=!0,d.click(),f=!1)}),s.addEventListener("click",function(){const d=p;m(),d&&(f=!0,d.click(),f=!1)}),document.addEventListener("click",function(d){if(f)return;const y=d.target.closest(".place-request-footer .place-request-btn");if(y){if(!/\/catalog\/items\/\d+/.test(window.location.pathname))return;u()&&(d.preventDefault(),d.stopPropagation(),p=y,b(),l.style.display="block",r.offsetWidth,r.classList.add("show"))}},!0),window.addEventListener("resize",b)}function Y(){let t=document.currentScript;if(t&&!t.hasAttribute("data-enable-grid")&&!t.hasAttribute("data-enable-on-call")&&(t=null),!t){const i=Array.from(document.querySelectorAll('script[data-enable-grid], script[data-enable-on-call], script[src*="freshservice-target-cdn"], script[src*="bundle.js"]'));t=i.find(l=>l.hasAttribute("data-enable-grid")||l.hasAttribute("data-enable-on-call"))||i[0]}const e="[Custom Freshservice Scripts @ Target.it]";t?Object.keys(t.dataset).length>0||console.warn(`${e} [DEBUG] Tag <script> localizada (src="${t.src}"), porém não possui atributos "data-*" configurados.`):console.warn(`${e} [DEBUG] Nenhuma tag <script> correspondente foi localizada no DOM.`);const{enableGrid:n,enableOnCall:o,onCallTime:a="17:59"}=t?.dataset??{};return{isGridEnabled:n==="true",isOnCallEnabled:o==="true",onCallTime:a}}function T(){const e="[Custom Freshservice Scripts @ Target.it]";console.log(`${e} Versão: v28`);const n=Y(),o=[{key:"grid",name:"Grid System",init:W,enabled:n.isGridEnabled,config:{}},{key:"on-call",name:"On-Call Intercept Popup",init:J,enabled:n.isOnCallEnabled,config:{onCallTime:n.onCallTime}}],a=o.filter(l=>l.enabled),i=o.filter(l=>!l.enabled);if(a.length===0&&console.warn(`${e} Nenhum script foi ativado.`),i.length>0){console.log(`${e} Scripts disponíveis mas inativos (para ativar, adicione os atributos correspondentes na tag <script> do CDN):`);const l=i.map(r=>({Script:r.name,"Chave do Atributo":`data-enable-${r.key}="true"`,"Configurações Disponíveis":Object.keys(r.config||{}).map(c=>`data-${c}="..."`).join(", ")||"Nenhuma"}));console.table(l)}a.length!==0&&a.forEach(l=>{try{l.init(l.config),console.log(`${e} ${l.name} inicializado com sucesso.`)}catch(r){console.error(`${e} Erro ao inicializar ${l.name}:`,r)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T()})();
