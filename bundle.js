(function(){function I(t,e){if(document.getElementById(t))return;const n=document.createElement("style");n.id=t,n.innerHTML=e,document.head.appendChild(n)}function E(t,e="warning"){typeof FSToastr=="function"?new FSToastr({message:t,type:e},!0):console.warn(`[${e.toUpperCase()}]: ${t}`)}var z=`[id^="grid-controls-"] {
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
`;function $(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function F(t){if(!t)return null;let e=t;typeof t=="object"&&t.tagName&&(e=t.id||t.name||"");const n=e.match(/(cf_\w+)/);return n?n[1]:e}function M(t){const e=t.placeholder||"";if(!e)return null;const n=e.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");try{return new Function("return ("+n+")")()}catch{return null}}function H(t,e){if(!t||!window.IMask)return;let n;switch(e){case"numero":n={mask:Number,scale:"any",thousandsSeparator:".",radix:","};break;case"data":n={mask:"00/00/0000"};break;case"hora":n={mask:"00:00:00"};break;case"monetario":n={mask:"R$ num",blocks:{num:{mask:Number,scale:2,thousandsSeparator:".",padFractionalZeros:!0,radix:","}}};break;default:return}window.IMask(t,n)}var D={popular_article:"/support/v2/solutions/articles/popular",agents_and_requesters:"/search/autocomplete/agents_and_requesters",tickets:"/support/search/tickets",archived_tickets:"/support/search/archived_tickets",solutions:"/support/search/solutions",journey_requests:"/support/search/journeys/requests",catalog_items:"/support/search/catalog_items",changes:"/support/search/changes",ext_lookup:"/requested_for_choices",requester_search:"/ext_lookup_search/index?include_agents=true&query="};function P(t,e){const n=D[t];if(!n)return"";const r=e||"";return t==="requester_search"?`${n}${encodeURIComponent(r)}`:`${n}${n.includes("?")?"&":"?"}query=${encodeURIComponent(r)}`}function B(t,e){if(!t)return[];let n=[];if(Array.isArray(t))n=t;else if(t&&typeof t=="object"){const r=Object.keys(t).find(o=>Array.isArray(t[o]));r?n=t[r]:n=[t]}return n.map(r=>{if(!r||typeof r!="object"){const s=String(r||"");return{value:s,label:s}}const o=["id","value","key","id_str","id_number"],d=["name","label","text","title","display_name","subject"],u=Object.keys(r).find(s=>o.includes(s.toLowerCase())),i=Object.keys(r).find(s=>d.includes(s.toLowerCase()));let a=u?r[u]:null,l=i?r[i]:null;if(a==null){const s=Object.keys(r)[0];a=s?r[s]:""}if(l==null){const s=Object.keys(r)[1]||Object.keys(r)[0];l=s?r[s]:""}return{value:String(a),label:String(l||a)}})}async function U(t,e,n,r,o=null){let d;o?d=P(o,e):d=`${t}?q=${encodeURIComponent(e||"")}&${n}`;let u=d,i=[];for(;u;){const a=await fetch(u,{signal:r});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const l=await a.json();if(o){const s=B(l,o);i=i.concat(s),l.next_page_link&&e!==""&&e.length>3?u=l.next_page_link:u=null}else l&&Array.isArray(l.results)&&(i=i.concat(l.results)),l.next_page_link&&e!==""&&e.length>3?u=`${d}&next_page_link=${encodeURIComponent(l.next_page_link)}`:u=null}return i}var _=new Set,C={},q={},V="/lookup_choices";function N(t,e,n,r){if(!window.Choices)return;e.multiselect&&t.setAttribute("multiple",""),t.setAttribute("id",e.name);const o=new window.Choices(t,{placeholder:!0,placeholderValue:"Selecione...",searchPlaceholderValue:"Filtrar resultados...",itemSelectText:"",removeItemButton:e.multiselect,searchEnabled:!0,shouldSort:!1,searchChoices:!0,searchResultLimit:100,renderChoiceLimit:100});t.choicesInstance=o;let d=null;const u=()=>(e.search_term||"").replace(/#(.*?)#/g,(a,l)=>{const s=l.trim(),b=r.headers.findIndex(p=>p.name.replace("*","").trim()===s);if(b===-1)return"";const f=n.cells[b].querySelector("input, select");if(!f)return"";if(f.choicesInstance){const p=f.choicesInstance.getValue(!0);return Array.isArray(p)?p.join(","):p||""}return f.value||""}),i=async a=>{d&&d.abort(),d=new AbortController;const l=d.signal;try{o.setChoices([{value:"",label:"Buscando...",disabled:!0}],"value","label",!0);const s=(await U(V,a,e.dropdown_query,l,e.standard_source)).map(b=>({value:b.value,label:b.label||b.value,selected:!1}));o.clearChoices(),s.length>0?o.setChoices(s,"value","label",!0):o.setChoices([{value:"",label:"Nenhum resultado",disabled:!0}],"value","label",!0)}catch(s){if(s.name==="AbortError")return;console.error("[GRID API ERROR]",s),o.clearChoices(),o.setChoices([{value:"",label:"Erro ao carregar",disabled:!0}],"value","label",!0)}};if((e.dropdown_query||e.standard_source)&&!e.search_term&&t.addEventListener("search",a=>{i(a.detail.value)}),e.search_term&&(e.dropdown_query||e.standard_source)){const a=()=>{const s=u();s&&s.trim()!==""?(o.removeActiveItems(),i(s)):(o.clearChoices(),o.removeActiveItems(),o.setChoices([{value:"",label:"Aguardando preenchimento...",disabled:!0}],"value","label",!0))},l=e.search_term.match(/#(.*?)#/g);l&&l.forEach(s=>{const b=s.replace(/#/g,"").trim(),f=r.headers.findIndex(p=>p.name.replace("*","").trim()===b);f!==-1&&n.cells[f].addEventListener("change",a)}),a()}else if(e.dropdown_query||e.standard_source)i("");else if(e.dropdown){const a=document.querySelector(`div[data-field-section*="${e.dropdown}"]`);if(a){const l=[];l.push({value:"",label:"Selecione...",placeholder:!0,selected:!1}),a.querySelectorAll("option").forEach(s=>{s.value&&s.value.trim()!==""&&l.push({value:s.textContent,label:s.textContent,selected:!1})}),o.clearChoices(),o.setChoices(l,"value","label",!0)}}}function v(){_.forEach(t=>{const e=C[t];if(!e||!e.textarea)return;const n=[],r=document.querySelectorAll(`#dynamic-table-${t} tbody tr`);let o=`<h4>${$(e.tableName)}</h4><table style="width:100%; border-collapse:collapse; border:1px solid #ddd;"><thead><tr style="background-color:#f2f2f2;">`;e.headers.forEach(i=>{o+=`<th style="border:1px solid #ddd; padding:8px;">${$(i.name)}</th>`}),o+="</tr></thead><tbody>",r.forEach(i=>{const a={};o+="<tr>",i.querySelectorAll("td").forEach((l,s)=>{const b=e.headers[s];if(!b)return;let f="";const p=l.querySelector("input, select");if(p)if(p.choicesInstance){const c=p.choicesInstance.getValue(!0);f=Array.isArray(c)?c.join(", "):c||""}else p.tagName==="SELECT"?f=Array.from(p.selectedOptions).map(c=>c.value).join(", "):f=p.value;else f=l.textContent;const g=b.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9 ]/g,"").trim().toLowerCase().replace(/\s+/g,"_");a[g]=f,o+=`<td style="border:1px solid #ddd; padding:8px;">${$(f||"")}</td>`}),o+="</tr>",n.push({dados_linha:JSON.stringify(a)})}),o+="</tbody></table>";const d=(e.textarea.closest(".custom_rich_text.custom-field")||e.textarea.parentElement).querySelector(".fr-view");if(d&&(d.innerHTML=o),e.textarea.value=o,e.textarea.dispatchEvent(new Event("change",{bubbles:!0})),e.json_field){const i=document.querySelector(`[data-field-label*="${e.json_field}"] textarea, [data-field-label*="${e.json_field}"] input, [data-field-section*="${e.json_field}"] textarea, [data-field-section*="${e.json_field}"] input, #${e.json_field}`);i&&(i.value=JSON.stringify(n,null,2),i.dispatchEvent(new Event("change",{bubbles:!0})))}const u=document.getElementById(`item-count-${t}`);u&&(u.textContent=`Itens adicionados: ${n.length}`)})}function k(t,e){let n=!0;const r=document.querySelector(`#dynamic-table-${t}`);return r?(r.querySelectorAll("tbody tr").forEach(o=>{o.querySelectorAll("td").forEach((d,u)=>{const i=e.headers[u],a=d.querySelector("input, select");if(!(!i||!a)){if(d.style.pointerEvents==="none"||d.style.opacity==="0.5"){d.classList.remove("invalid-cell");return}if(i.mandatory){let l=!1;if(a.tagName==="SELECT"&&a.choicesInstance){const s=a.choicesInstance.getValue(!0);l=Array.isArray(s)?s.length===0:!s}else l=a.value.trim()==="";l?(document.activeElement!==a&&d.classList.add("invalid-cell"),n=!1):d.classList.remove("invalid-cell")}}})}),n):!0}function W(t,e){const n=e.headers.findIndex(o=>o.tipo==="sequencia");if(n===-1)return;let r=1;document.querySelectorAll(`#dynamic-table-${t} tbody tr`).forEach(o=>{o.querySelectorAll("td")[n].textContent=r++}),q[t]=r}function G(t,e,n){C[n]=t,q[n]=1;const r=document.createElement("div");r.id=`grid-controls-${n}`,r.className="grid-controls-wrapper",r.innerHTML=`<h4>${t.tableName||"Itens"}</h4><div class="controls-wrapper"><input type="button" id="add-items-${n}" class="grid-main-button grid-action-button" value="Adicionar / Editar Itens" /><span id="item-count-${n}">Itens adicionados: 0</span></div>`;const o=e.querySelector(".fr-box"),d=e.querySelector(".control-element"),u=e.closest("[data-field-section]")||o||d;u?(u.before(r),u.setAttribute("data-grid-hidden-by-script","true"),u.style.display="none"):(e.after(r),e.setAttribute("data-grid-hidden-by-script","true"),e.style.display="none");const i=document.createElement("div");i.className="popup-overlay",i.id=`grid-popup-overlay-${n}`,i.style.display="none",i.innerHTML=`<div class="popup"><div class="popup-header">${t.tableName||"Itens"}</div><div class="popup-body"><table class="dynamic-table" id="dynamic-table-${n}"><thead><tr>${t.headers.map(c=>`<th>${c.name}${c.mandatory?"*":""}</th>`).join("")}<th>Ações</th></tr></thead><tbody></tbody></table></div><div class="popup-footer"><input type="button" class="grid-action-button" id="add-row-${n}" value="Adicionar Linha" /><input type="button" class="grid-action-button" id="ok-button-${n}" value="Salvar e Fechar" /></div></div></div>`,document.body.appendChild(i);const a=i.querySelector("tbody"),l=()=>{const c=a.insertRow();t.headers.forEach(m=>{const x=c.insertCell();if(x.style.minWidth=m.minWidth||"auto",m.tipo==="sequencia")x.textContent=q[n]++;else if(m.tipo==="dropdown"||m.dropdown){const y=document.createElement("select");x.appendChild(y),N(y,m,c,t)}else if(m.editable){const y=document.createElement("input");y.type="text",y.className="grid-input",x.appendChild(y),H(y,m.tipo)}});const h=c.insertCell();h.innerHTML='<input type="button" class="grid-action-button remove" value="Remover" />',v()},s=t.minRows||0,b=t.maxRows||1;for(let c=0;c<s;c++)l();v(),k(n,t);let f;const p=()=>{i.style.display==="flex"&&k(n,t),f=requestAnimationFrame(p)};f=requestAnimationFrame(p);const g=new MutationObserver(()=>{document.body.contains(i)||(cancelAnimationFrame(f),g.disconnect())});g.observe(document.body,{childList:!0}),document.getElementById(`add-items-${n}`).addEventListener("click",()=>{i.style.display="flex"}),a.addEventListener("input",c=>{c.target.classList.contains("grid-input")&&v()}),a.addEventListener("change",c=>{c.target.tagName==="SELECT"&&v()}),i.addEventListener("click",c=>{if(c.target.id===`ok-button-${n}`){if(!k(n,t)){E("Por favor, preencha todos os campos obrigatórios (*)."),i.style.display="none";return}v(),i.style.display="none"}if(c.target.id===`add-row-${n}`){if(!k(n,t)){E("Preencha os campos obrigatórios da linha atual antes de adicionar uma nova.");return}if(a.rows.length===b){E("Limite de linhas atingido.");return}l()}c.target.classList.contains("remove")&&(a.rows.length>s?(c.target.closest("tr").remove(),W(n,t),v()):E(`O número mínimo de linhas é ${s}.`))})}function R(){document.querySelectorAll(".custom_rich_text.custom-field").forEach(t=>{if(!t.querySelector('[data-field-label*="cf_grid_"]'))return;const e=t.querySelector("textarea.rich_text");if(!e)return;const n=F(e);if(n&&!_.has(n)){const r=M(e);r&&(r.textarea=e,_.add(n),G(r,t,n))}}),_.forEach(t=>{const e=C[t];if(e&&e.textarea){const n=e.textarea,r=n.closest(".custom_rich_text.custom-field")||n.parentElement,o=document.getElementById(`grid-controls-${t}`),d=document.getElementById(`grid-popup-overlay-${t}`);if(!document.body.contains(n)){o?.remove(),d?.remove(),_.delete(t),delete C[t],v();return}if(r){const u=r.querySelector(".fr-box"),i=r.querySelector(".control-element"),a=r.closest("[data-field-section]"),l=a||u||i||r;r.classList.contains("hide")||r.classList.contains("hidden")||r.style.display==="none"&&!r.hasAttribute("data-grid-hidden-by-script")||a&&(a.classList.contains("hide")||a.classList.contains("hidden")||a.style.display==="none"&&!a.hasAttribute("data-grid-hidden-by-script"))?o&&(o.style.display="none"):(l.style.display!=="none"&&(l.setAttribute("data-grid-hidden-by-script","true"),l.style.display="none"),o&&(o.style.display=""))}}})}function K(){I("dynamic-grid-styles",z),document.addEventListener("click",function(t){if(t.target&&t.target.matches(".place-request-btn")&&document.querySelectorAll(".invalid-cell").length>0)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),E("Preencha os campos obrigatórios das tabelas!"),!1},!0),new MutationObserver(R).observe(document.body,{childList:!0,subtree:!0}),R()}var J=`.on-call-popup-overlay {
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
`;function Y(t={}){I("on-call-popup-styles",J);let e=document.getElementById("on-call-template");e||(e=document.createElement("template"),e.id="on-call-template",e.innerHTML=`
            <div class="on-call-popup-overlay"></div>
            <div class="on-call-popup">
                <h4>Chamado Fora do Horário</h4>
                <div class="on-call-popup-actions">
                    <button class="on-call-popup-btn on-call-btn-urgent" type="button">Sim, é Urgente</button>
                    <button class="on-call-popup-btn on-call-btn-normal" type="button">Não, Normal</button>
                </div>
            </div>
        `,document.body.appendChild(e)),document.querySelector(".on-call-popup-overlay")||document.body.appendChild(e.content.cloneNode(!0));const[n,r]=(t.onCallTime||"17:59").split(":"),o=Number(n)||17,d=Number(r)||59,u=document.querySelector(".on-call-popup-overlay"),i=document.querySelector(".on-call-popup"),a=document.querySelector(".on-call-btn-urgent"),l=document.querySelector(".on-call-btn-normal");if(!u||!i||!a||!l){console.error("[On Call Script] Elementos do popup não foram encontrados.");return}function s(){const c=new Date,h=c.getHours(),m=c.getMinutes();return h>o||h===o&&m>=d}let b=null;function f(){if(!b)return;const c=b.getBoundingClientRect();i.style.display="block";const h=i.offsetWidth,m=i.offsetHeight;let x=0,y=0,w=i.parentElement;for(;w&&w!==document.documentElement&&w!==document.body;){const S=window.getComputedStyle(w);if(S.transform!=="none"||S.perspective!=="none"||S.filter!=="none"||S.willChange==="transform"){const O=w.getBoundingClientRect();x=O.left,y=O.top;break}w=w.parentElement}let A=c.top-y-m-10,L=c.right-x-h;A<10&&(A=c.bottom-y+10),L<10&&(L=10),i.style.top=`${A}px`,i.style.left=`${L}px`}let p=!1;function g(){i.classList.remove("show"),b=null,setTimeout(()=>{u.style.display="none",i.style.display="none"},200)}u.addEventListener("click",g),a.addEventListener("click",function(){const c=b;g(),c&&(p=!0,c.click(),p=!1)}),l.addEventListener("click",function(){const c=b;g(),c&&(p=!0,c.click(),p=!1)}),document.addEventListener("click",function(c){if(p)return;const h=c.target.closest(".place-request-footer .place-request-btn");if(h){if(!/\/catalog\/items\/\d+/.test(window.location.pathname))return;s()&&(c.preventDefault(),c.stopPropagation(),b=h,f(),u.style.display="block",i.offsetWidth,i.classList.add("show"))}},!0),window.addEventListener("resize",f)}var{enableGrid:Z,enableOnCall:Q,onCallTime:X="17:59"}=document.querySelector('script[src*="freshservice-target-cdn"]')?.dataset??{},T=[{key:"grid",name:"Grid System",init:K,enabled:Z==="true",config:{}},{key:"on-call",name:"On-Call Intercept Popup",init:Y,enabled:Q==="true",config:{onCallTime:X}}];function j(){const e="[Custom Freshservice Scripts @ Target.it]";console.log(`${e} Versão: v19`);const n=T.filter(o=>o.enabled),r=T.filter(o=>!o.enabled);if(n.length===0&&console.warn(`${e} Nenhum script foi ativado.`),r.length>0){console.log(`${e} Scripts disponíveis mas inativos (para ativar, adicione os atributos correspondentes na tag <script> do CDN):`);const o=r.map(d=>({Script:d.name,"Chave do Atributo":`data-enable-${d.key}="true"`,"Configurações Disponíveis":Object.keys(d.config||{}).map(u=>`data-${u}="..."`).join(", ")||"Nenhuma"}));console.table(o)}n.length!==0&&n.forEach(o=>{try{o.init(o.config),console.log(`${e} ${o.name} inicializado com sucesso.`)}catch(d){console.error(`${e} Erro ao inicializar ${o.name}:`,d)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",j):j()})();
