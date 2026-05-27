(function(){function I(t,e){if(document.getElementById(t))return;const n=document.createElement("style");n.id=t,n.innerHTML=e,document.head.appendChild(n)}function E(t,e="warning"){typeof FSToastr=="function"?new FSToastr({message:t,type:e},!0):console.warn(`[${e.toUpperCase()}]: ${t}`)}var O=`[id^="grid-controls-"] {
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
`;function $(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function z(t){if(!t)return null;let e=t;typeof t=="object"&&t.tagName&&(e=t.id||t.name||"");const n=e.match(/(cf_\w+)/);return n?n[1]:e}function F(t){const e=t.placeholder||"";if(!e)return null;const n=e.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");try{return new Function("return ("+n+")")()}catch{return null}}function D(t,e){if(!t||!window.IMask)return;let n;switch(e){case"numero":n={mask:Number,scale:"any",thousandsSeparator:".",radix:","};break;case"data":n={mask:"00/00/0000"};break;case"hora":n={mask:"00:00:00"};break;case"monetario":n={mask:"R$ num",blocks:{num:{mask:Number,scale:2,thousandsSeparator:".",padFractionalZeros:!0,radix:","}}};break;default:return}window.IMask(t,n)}var M={popular_article:"/support/v2/solutions/articles/popular",agents_and_requesters:"/search/autocomplete/agents_and_requesters",tickets:"/support/search/tickets",archived_tickets:"/support/search/archived_tickets",solutions:"/support/search/solutions",journey_requests:"/support/search/journeys/requests",catalog_items:"/support/search/catalog_items",changes:"/support/search/changes",ext_lookup:"/requested_for_choices",requester_search:"/ext_lookup_search/index?include_agents=true&query="};function H(t,e){const n=M[t];if(!n)return"";const o=e||"";return t==="requester_search"?`${n}${encodeURIComponent(o)}`:`${n}${n.includes("?")?"&":"?"}query=${encodeURIComponent(o)}`}function P(t,e){if(!t)return[];let n=[];if(Array.isArray(t))n=t;else if(t&&typeof t=="object"){const o=Object.keys(t).find(i=>Array.isArray(t[i]));o?n=t[o]:n=[t]}return n.map(o=>{if(!o||typeof o!="object"){const s=String(o||"");return{value:s,label:s}}const i=["id","value","key","id_str","id_number"],u=["name","label","text","title","display_name","subject"],d=Object.keys(o).find(s=>i.includes(s.toLowerCase())),r=Object.keys(o).find(s=>u.includes(s.toLowerCase()));let a=d?o[d]:null,l=r?o[r]:null;if(a==null){const s=Object.keys(o)[0];a=s?o[s]:""}if(l==null){const s=Object.keys(o)[1]||Object.keys(o)[0];l=s?o[s]:""}return{value:String(a),label:String(l||a)}})}async function B(t,e,n,o,i=null){let u;i?u=H(i,e):u=`${t}?q=${encodeURIComponent(e||"")}&${n}`;let d=u,r=[];for(;d;){const a=await fetch(d,{signal:o});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const l=await a.json();if(i){const s=P(l,i);r=r.concat(s),l.next_page_link&&e!==""&&e.length>3?d=l.next_page_link:d=null}else l&&Array.isArray(l.results)&&(r=r.concat(l.results)),l.next_page_link&&e!==""&&e.length>3?d=`${u}&next_page_link=${encodeURIComponent(l.next_page_link)}`:d=null}return r}var C=new Set,_={},q={},U="/lookup_choices";function V(t,e,n,o){if(!window.Choices)return;e.multiselect&&t.setAttribute("multiple",""),t.setAttribute("id",e.name);const i=new window.Choices(t,{placeholder:!0,placeholderValue:"Selecione...",searchPlaceholderValue:"Filtrar resultados...",itemSelectText:"",removeItemButton:e.multiselect,searchEnabled:!0,shouldSort:!1,searchChoices:!0,searchResultLimit:100,renderChoiceLimit:100});t.choicesInstance=i;let u=null;const d=()=>(e.search_term||"").replace(/#(.*?)#/g,(a,l)=>{const s=l.trim(),b=o.headers.findIndex(p=>p.name.replace("*","").trim()===s);if(b===-1)return"";const f=n.cells[b].querySelector("input, select");if(!f)return"";if(f.choicesInstance){const p=f.choicesInstance.getValue(!0);return Array.isArray(p)?p.join(","):p||""}return f.value||""}),r=async a=>{u&&u.abort(),u=new AbortController;const l=u.signal;try{i.setChoices([{value:"",label:"Buscando...",disabled:!0}],"value","label",!0);const s=(await B(U,a,e.dropdown_query,l,e.standard_source)).map(b=>({value:b.value,label:b.label||b.value,selected:!1}));i.clearChoices(),s.length>0?i.setChoices(s,"value","label",!0):i.setChoices([{value:"",label:"Nenhum resultado",disabled:!0}],"value","label",!0)}catch(s){if(s.name==="AbortError")return;console.error("[GRID API ERROR]",s),i.clearChoices(),i.setChoices([{value:"",label:"Erro ao carregar",disabled:!0}],"value","label",!0)}};if((e.dropdown_query||e.standard_source)&&!e.search_term&&t.addEventListener("search",a=>{r(a.detail.value)}),e.search_term&&(e.dropdown_query||e.standard_source)){const a=()=>{const s=d();s&&s.trim()!==""?(i.removeActiveItems(),r(s)):(i.clearChoices(),i.removeActiveItems(),i.setChoices([{value:"",label:"Aguardando preenchimento...",disabled:!0}],"value","label",!0))},l=e.search_term.match(/#(.*?)#/g);l&&l.forEach(s=>{const b=s.replace(/#/g,"").trim(),f=o.headers.findIndex(p=>p.name.replace("*","").trim()===b);f!==-1&&n.cells[f].addEventListener("change",a)}),a()}else if(e.dropdown_query||e.standard_source)r("");else if(e.dropdown){const a=document.querySelector(`div[data-field-section*="${e.dropdown}"]`);if(a){const l=[];l.push({value:"",label:"Selecione...",placeholder:!0,selected:!1}),a.querySelectorAll("option").forEach(s=>{s.value&&s.value.trim()!==""&&l.push({value:s.textContent,label:s.textContent,selected:!1})}),i.clearChoices(),i.setChoices(l,"value","label",!0)}}}function v(){C.forEach(t=>{const e=_[t];if(!e||!e.textarea)return;const n=[],o=document.querySelectorAll(`#dynamic-table-${t} tbody tr`);let i=`<h4>${$(e.tableName)}</h4><table style="width:100%; border-collapse:collapse; border:1px solid #ddd;"><thead><tr style="background-color:#f2f2f2;">`;e.headers.forEach(r=>{i+=`<th style="border:1px solid #ddd; padding:8px;">${$(r.name)}</th>`}),i+="</tr></thead><tbody>",o.forEach(r=>{const a={};i+="<tr>",r.querySelectorAll("td").forEach((l,s)=>{const b=e.headers[s];if(!b)return;let f="";const p=l.querySelector("input, select");if(p)if(p.choicesInstance){const c=p.choicesInstance.getValue(!0);f=Array.isArray(c)?c.join(", "):c||""}else p.tagName==="SELECT"?f=Array.from(p.selectedOptions).map(c=>c.value).join(", "):f=p.value;else f=l.textContent;const h=b.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9 ]/g,"").trim().toLowerCase().replace(/\s+/g,"_");a[h]=f,i+=`<td style="border:1px solid #ddd; padding:8px;">${$(f||"")}</td>`}),i+="</tr>",n.push({dados_linha:JSON.stringify(a)})}),i+="</tbody></table>";const u=(e.textarea.closest(".custom_rich_text.custom-field")||e.textarea.parentElement).querySelector(".fr-view");if(u&&(u.innerHTML=i),e.textarea.value=i,e.textarea.dispatchEvent(new Event("change",{bubbles:!0})),e.json_field){const r=document.querySelector(`[data-field-label*="${e.json_field}"] textarea, [data-field-label*="${e.json_field}"] input, [data-field-section*="${e.json_field}"] textarea, [data-field-section*="${e.json_field}"] input, #${e.json_field}`);r&&(r.value=JSON.stringify(n,null,2),r.dispatchEvent(new Event("change",{bubbles:!0})))}const d=document.getElementById(`item-count-${t}`);d&&(d.textContent=`Itens adicionados: ${n.length}`)})}function k(t,e){let n=!0;const o=document.querySelector(`#dynamic-table-${t}`);return o?(o.querySelectorAll("tbody tr").forEach(i=>{i.querySelectorAll("td").forEach((u,d)=>{const r=e.headers[d],a=u.querySelector("input, select");if(!(!r||!a)){if(u.style.pointerEvents==="none"||u.style.opacity==="0.5"){u.classList.remove("invalid-cell");return}if(r.mandatory){let l=!1;if(a.tagName==="SELECT"&&a.choicesInstance){const s=a.choicesInstance.getValue(!0);l=Array.isArray(s)?s.length===0:!s}else l=a.value.trim()==="";l?(document.activeElement!==a&&u.classList.add("invalid-cell"),n=!1):u.classList.remove("invalid-cell")}}})}),n):!0}function N(t,e){const n=e.headers.findIndex(i=>i.tipo==="sequencia");if(n===-1)return;let o=1;document.querySelectorAll(`#dynamic-table-${t} tbody tr`).forEach(i=>{i.querySelectorAll("td")[n].textContent=o++}),q[t]=o}function G(t,e,n){_[n]=t,q[n]=1;const o=document.createElement("div");o.id=`grid-controls-${n}`,o.className="grid-controls-wrapper",o.innerHTML=`<h4>${t.tableName||"Itens"}</h4><div class="controls-wrapper"><input type="button" id="add-items-${n}" class="grid-main-button grid-action-button" value="Adicionar / Editar Itens" /><span id="item-count-${n}">Itens adicionados: 0</span></div>`;const i=e.querySelector(".fr-box"),u=e.querySelector(".control-element"),d=e.closest("[data-field-section]")||i||u;d?(d.before(o),d.setAttribute("data-grid-hidden-by-script","true"),d.style.display="none"):(e.after(o),e.setAttribute("data-grid-hidden-by-script","true"),e.style.display="none");const r=document.createElement("div");r.className="popup-overlay",r.id=`grid-popup-overlay-${n}`,r.style.display="none",r.innerHTML=`<div class="popup"><div class="popup-header">${t.tableName||"Itens"}</div><div class="popup-body"><table class="dynamic-table" id="dynamic-table-${n}"><thead><tr>${t.headers.map(c=>`<th>${c.name}${c.mandatory?"*":""}</th>`).join("")}<th>Ações</th></tr></thead><tbody></tbody></table></div><div class="popup-footer"><input type="button" class="grid-action-button" id="add-row-${n}" value="Adicionar Linha" /><input type="button" class="grid-action-button" id="ok-button-${n}" value="Salvar e Fechar" /></div></div></div>`,document.body.appendChild(r);const a=r.querySelector("tbody"),l=()=>{const c=a.insertRow();t.headers.forEach(m=>{const x=c.insertCell();if(x.style.minWidth=m.minWidth||"auto",m.tipo==="sequencia")x.textContent=q[n]++;else if(m.tipo==="dropdown"||m.dropdown){const g=document.createElement("select");x.appendChild(g),V(g,m,c,t)}else if(m.editable){const g=document.createElement("input");g.type="text",g.className="grid-input",x.appendChild(g),D(g,m.tipo)}});const y=c.insertCell();y.innerHTML='<input type="button" class="grid-action-button remove" value="Remover" />',v()},s=t.minRows||0,b=t.maxRows||1;for(let c=0;c<s;c++)l();v(),k(n,t);let f;const p=()=>{r.style.display==="flex"&&k(n,t),f=requestAnimationFrame(p)};f=requestAnimationFrame(p);const h=new MutationObserver(()=>{document.body.contains(r)||(cancelAnimationFrame(f),h.disconnect())});h.observe(document.body,{childList:!0}),document.getElementById(`add-items-${n}`).addEventListener("click",()=>{r.style.display="flex"}),a.addEventListener("input",c=>{c.target.classList.contains("grid-input")&&v()}),a.addEventListener("change",c=>{c.target.tagName==="SELECT"&&v()}),r.addEventListener("click",c=>{if(c.target.id===`ok-button-${n}`){if(!k(n,t)){E("Por favor, preencha todos os campos obrigatórios (*)."),r.style.display="none";return}v(),r.style.display="none"}if(c.target.id===`add-row-${n}`){if(!k(n,t)){E("Preencha os campos obrigatórios da linha atual antes de adicionar uma nova.");return}if(a.rows.length===b){E("Limite de linhas atingido.");return}l()}c.target.classList.contains("remove")&&(a.rows.length>s?(c.target.closest("tr").remove(),N(n,t),v()):E(`O número mínimo de linhas é ${s}.`))})}function T(){document.querySelectorAll(".custom_rich_text.custom-field").forEach(t=>{if(!t.querySelector('[data-field-label*="cf_grid_"]'))return;const e=t.querySelector("textarea.rich_text");if(!e)return;const n=z(e);if(n&&!C.has(n)){const o=F(e);o&&(o.textarea=e,C.add(n),G(o,t,n))}}),C.forEach(t=>{const e=_[t];if(e&&e.textarea){const n=e.textarea,o=n.closest(".custom_rich_text.custom-field")||n.parentElement,i=document.getElementById(`grid-controls-${t}`),u=document.getElementById(`grid-popup-overlay-${t}`);if(!document.body.contains(n)){i?.remove(),u?.remove(),C.delete(t),delete _[t],v();return}if(o){const d=o.querySelector(".fr-box"),r=o.querySelector(".control-element"),a=o.closest("[data-field-section]"),l=a||d||r||o;o.classList.contains("hide")||o.classList.contains("hidden")||o.style.display==="none"&&!o.hasAttribute("data-grid-hidden-by-script")||a&&(a.classList.contains("hide")||a.classList.contains("hidden")||a.style.display==="none"&&!a.hasAttribute("data-grid-hidden-by-script"))?i&&(i.style.display="none"):(l.style.display!=="none"&&(l.setAttribute("data-grid-hidden-by-script","true"),l.style.display="none"),i&&(i.style.display=""))}}})}function W(){I("dynamic-grid-styles",O),document.addEventListener("click",function(t){if(t.target&&t.target.matches(".place-request-btn")&&document.querySelectorAll(".invalid-cell").length>0)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),E("Preencha os campos obrigatórios das tabelas!"),!1},!0),new MutationObserver(T).observe(document.body,{childList:!0,subtree:!0}),T()}var K=`.on-call-popup-overlay {
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
        `,document.body.appendChild(e)),document.querySelector(".on-call-popup-overlay")||document.body.appendChild(e.content.cloneNode(!0));const[n,o]=(t.onCallTime||"17:59").split(":"),i=Number(n)||17,u=Number(o)||59,d=document.querySelector(".on-call-popup-overlay"),r=document.querySelector(".on-call-popup"),a=document.querySelector(".on-call-btn-urgent"),l=document.querySelector(".on-call-btn-normal");if(!d||!r||!a||!l){console.error("[On Call Script] Elementos do popup não foram encontrados.");return}function s(){const c=new Date,y=c.getHours(),m=c.getMinutes();return y>i||y===i&&m>=u}let b=null;function f(){if(!b)return;const c=b.getBoundingClientRect();r.style.display="block";const y=r.offsetWidth,m=r.offsetHeight;let x=0,g=0,w=r.parentElement;for(;w&&w!==document.documentElement&&w!==document.body;){const S=window.getComputedStyle(w);if(S.transform!=="none"||S.perspective!=="none"||S.filter!=="none"||S.willChange==="transform"){const j=w.getBoundingClientRect();x=j.left,g=j.top;break}w=w.parentElement}let A=c.top-g-m-10,L=c.right-x-y;A<10&&(A=c.bottom-g+10),L<10&&(L=10),r.style.top=`${A}px`,r.style.left=`${L}px`}let p=!1;function h(){r.classList.remove("show"),b=null,setTimeout(()=>{d.style.display="none",r.style.display="none"},200)}d.addEventListener("click",h),a.addEventListener("click",function(){const c=b;h(),c&&(p=!0,c.click(),p=!1)}),l.addEventListener("click",function(){const c=b;h(),c&&(p=!0,c.click(),p=!1)}),document.addEventListener("click",function(c){if(p)return;const y=c.target.closest(".place-request-footer .place-request-btn");if(y){if(!/\/catalog\/items\/\d+/.test(window.location.pathname))return;s()&&(c.preventDefault(),c.stopPropagation(),b=y,f(),d.style.display="block",r.offsetWidth,r.classList.add("show"))}},!0),window.addEventListener("resize",f)}function Y(){let t=document.currentScript;t||(t=document.querySelector('script[data-enable-grid], script[data-enable-on-call], script[src*="freshservice-target-cdn"], script[src*="bundle.js"]'));const e="[Custom Freshservice Scripts @ Target.it]";t?Object.keys(t.dataset).length>0||console.warn(`${e} [DEBUG] Tag <script> localizada (src="${t.src}"), porém não possui atributos "data-*" configurados.`):console.warn(`${e} [DEBUG] Nenhuma tag <script> correspondente foi localizada no DOM.`);const{enableGrid:n,enableOnCall:o,onCallTime:i="17:59"}=t?.dataset??{};return{isGridEnabled:n==="true",isOnCallEnabled:o==="true",onCallTime:i}}function R(){const e="[Custom Freshservice Scripts @ Target.it]";console.log(`${e} Versão: v23`);const n=Y(),o=[{key:"grid",name:"Grid System",init:W,enabled:n.isGridEnabled,config:{}},{key:"on-call",name:"On-Call Intercept Popup",init:J,enabled:n.isOnCallEnabled,config:{onCallTime:n.onCallTime}}],i=o.filter(d=>d.enabled),u=o.filter(d=>!d.enabled);if(i.length===0&&console.warn(`${e} Nenhum script foi ativado.`),u.length>0){console.log(`${e} Scripts disponíveis mas inativos (para ativar, adicione os atributos correspondentes na tag <script> do CDN):`);const d=u.map(r=>({Script:r.name,"Chave do Atributo":`data-enable-${r.key}="true"`,"Configurações Disponíveis":Object.keys(r.config||{}).map(a=>`data-${a}="..."`).join(", ")||"Nenhuma"}));console.table(d)}i.length!==0&&i.forEach(d=>{try{d.init(d.config),console.log(`${e} ${d.name} inicializado com sucesso.`)}catch(r){console.error(`${e} Erro ao inicializar ${d.name}:`,r)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R()})();
