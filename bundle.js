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
`;function $(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function D(t){if(!t)return null;let e=t;typeof t=="object"&&t.tagName&&(e=t.id||t.name||"");const n=e.match(/(cf_\w+)/);return n?n[1]:e}function F(t){const e=t.placeholder||"";if(!e)return null;const n=e.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");try{return new Function("return ("+n+")")()}catch{return null}}function z(t,e){if(!t||!window.IMask)return;let n;switch(e){case"numero":n={mask:Number,scale:"any",thousandsSeparator:".",radix:","};break;case"data":n={mask:"00/00/0000"};break;case"hora":n={mask:"00:00:00"};break;case"monetario":n={mask:"R$ num",blocks:{num:{mask:Number,scale:2,thousandsSeparator:".",padFractionalZeros:!0,radix:","}}};break;default:return}window.IMask(t,n)}var P={popular_article:"/support/v2/solutions/articles/popular",agents_and_requesters:"/search/autocomplete/agents_and_requesters",tickets:"/support/search/tickets",archived_tickets:"/support/search/archived_tickets",solutions:"/support/search/solutions",journey_requests:"/support/search/journeys/requests",catalog_items:"/support/search/catalog_items",changes:"/support/search/changes",ext_lookup:"/requested_for_choices",requester_search:"/ext_lookup_search/index?include_agents=true&query="};function M(t,e){const n=P[t];if(!n)return"";const o=e||"";return t==="requester_search"?`${n}${encodeURIComponent(o)}`:`${n}${n.includes("?")?"&":"?"}query=${encodeURIComponent(o)}`}function B(t,e){if(!t)return[];let n=[];if(Array.isArray(t))n=t;else if(t&&typeof t=="object"){const o=Object.keys(t).find(a=>Array.isArray(t[a]));o?n=t[o]:n=[t]}return n.map(o=>{if(!o||typeof o!="object"){const d=String(o||"");return{value:d,label:d}}const a=["id","value","key","id_str","id_number"],l=["name","label","text","title","display_name","subject"],c=Object.keys(o).find(d=>a.includes(d.toLowerCase())),r=Object.keys(o).find(d=>l.includes(d.toLowerCase()));let s=c?o[c]:null,i=r?o[r]:null;if(s==null){const d=Object.keys(o)[0];s=d?o[d]:""}if(i==null){const d=Object.keys(o)[1]||Object.keys(o)[0];i=d?o[d]:""}return{value:String(s),label:String(i||s)}})}async function H(t,e,n,o,a=null){let l;a?l=M(a,e):l=`${t}?q=${encodeURIComponent(e||"")}&${n}`;const c=typeof window.performServerCall=="function";console.log(`[GRID API] Fetching: ${l} | método: ${c?"performServerCall":"fetch nativo"}`);let r=l,s=[];for(;r;){let i;if(c)i=await window.performServerCall({url:r,method:"GET",getPageData:!0});else{const d=await fetch(r,{signal:o});if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);i=await d.json()}if(a){const d=B(i,a);s=s.concat(d),i.next_page_link&&e!==""&&e.length>3?r=i.next_page_link:r=null}else i&&Array.isArray(i.results)&&(s=s.concat(i.results)),i.next_page_link&&e!==""&&e.length>3?r=`${l}&next_page_link=${encodeURIComponent(i.next_page_link)}`:r=null}return s}var S=new Set,E={},A={},U="/lookup_choices";function G(t,e,n,o){if(!window.Choices)return;e.multiselect&&t.setAttribute("multiple",""),t.setAttribute("id",e.name);const a=document.createElement("option");a.value="",a.textContent="Selecione...",a.setAttribute("placeholder",""),a.selected=!e.multiselect,t.appendChild(a);const l=new window.Choices(t,{placeholder:!0,placeholderValue:"Selecione...",searchPlaceholderValue:"Filtrar resultados...",itemSelectText:"",removeItemButton:e.multiselect,searchEnabled:!0,shouldSort:!1,searchChoices:!1,searchResultLimit:100,renderChoiceLimit:100});t.choicesInstance=l;let c=null;const r=()=>(e.search_term||"").replace(/#(.*?)#/g,(i,d)=>{const p=d.trim(),b=o.headers.findIndex(m=>m.name.replace("*","").trim()===p);if(b===-1)return"";const f=n.cells[b].querySelector("input, select");if(!f)return"";if(f.choicesInstance){const m=f.choicesInstance.getValue(!0);return Array.isArray(m)?m.join(","):m||""}return f.value||""}),s=async i=>{console.log(`[GRID performFetch] Buscando dropdown para '${e.name}' com termo: "${i}"`),c&&c.abort(),c=new AbortController;const d=c.signal;try{l.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"loading_placeholder",label:"Buscando...",disabled:!0}],"value","label",!0);const p=await H(U,i,e.dropdown_query,d,e.standard_source);console.log(`[GRID performFetch] Sucesso: ${p.length} resultados retornados.`);const b=[{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect}];p.forEach(f=>{b.push({value:f.value,label:f.label||f.value,selected:!1})}),l.clearChoices(),p.length>0?l.setChoices(b,"value","label",!0):l.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"no_results_placeholder",label:"Nenhum resultado",disabled:!0}],"value","label",!0)}catch(p){if(p.name==="AbortError")return;console.error("[GRID API ERROR]",p),l.clearChoices(),l.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"error_placeholder",label:"Erro ao carregar",disabled:!0}],"value","label",!0)}};if((e.dropdown_query||e.standard_source)&&!e.search_term&&t.addEventListener("search",i=>{s(i.detail.value)}),e.search_term&&(e.dropdown_query||e.standard_source)){const i=()=>{const p=r();p&&p.trim()!==""?(l.removeActiveItems(),s(p)):(l.clearChoices(),l.removeActiveItems(),l.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"waiting_placeholder",label:"Aguardando preenchimento...",disabled:!0}],"value","label",!0))},d=e.search_term.match(/#(.*?)#/g);d&&d.forEach(p=>{const b=p.replace(/#/g,"").trim(),f=o.headers.findIndex(m=>m.name.replace("*","").trim()===b);f!==-1&&n.cells[f].addEventListener("change",i)}),i()}else if(e.standard_source)l.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"hint_placeholder",label:"Digite para pesquisar...",disabled:!0}],"value","label",!0);else if(e.dropdown_query)s("");else if(e.dropdown){const i=document.querySelector(`div[data-field-section*="${e.dropdown}"]`);if(i){const d=[];d.push({value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect}),i.querySelectorAll("option").forEach(p=>{p.value&&p.value.trim()!==""&&d.push({value:p.textContent,label:p.textContent,selected:!1})}),l.clearChoices(),l.setChoices(d,"value","label",!0)}}}function v(){S.forEach(t=>{const e=E[t];if(!e||!e.textarea)return;const n=[],o=document.querySelectorAll(`#dynamic-table-${t} tbody tr`);let a=`<h4>${$(e.tableName)}</h4><table style="width:100%; border-collapse:collapse; border:1px solid #ddd;"><thead><tr style="background-color:#f2f2f2;">`;e.headers.forEach(r=>{a+=`<th style="border:1px solid #ddd; padding:8px;">${$(r.name)}</th>`}),a+="</tr></thead><tbody>",o.forEach(r=>{const s={};a+="<tr>",r.querySelectorAll("td").forEach((i,d)=>{const p=e.headers[d];if(!p)return;let b="";const f=i.querySelector("input, select");if(f)if(f.choicesInstance){const u=f.choicesInstance.getValue(!0);b=Array.isArray(u)?u.join(", "):u||""}else f.tagName==="SELECT"?b=Array.from(f.selectedOptions).map(u=>u.value).join(", "):b=f.value;else b=i.textContent;const m=p.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9 ]/g,"").trim().toLowerCase().replace(/\s+/g,"_");s[m]=b,a+=`<td style="border:1px solid #ddd; padding:8px;">${$(b||"")}</td>`}),a+="</tr>",n.push({dados_linha:JSON.stringify(s)})}),a+="</tbody></table>";const l=(e.textarea.closest(".custom_rich_text.custom-field")||e.textarea.parentElement).querySelector(".fr-view");if(l&&(l.innerHTML=a),e.textarea.value=a,e.textarea.dispatchEvent(new Event("change",{bubbles:!0})),e.json_field){const r=document.querySelector(`[data-field-label*="${e.json_field}"] textarea, [data-field-label*="${e.json_field}"] input, [data-field-section*="${e.json_field}"] textarea, [data-field-section*="${e.json_field}"] input, #${e.json_field}`);r&&(r.value=JSON.stringify(n,null,2),r.dispatchEvent(new Event("change",{bubbles:!0})))}const c=document.getElementById(`item-count-${t}`);c&&(c.textContent=`Itens adicionados: ${n.length}`)})}function _(t,e){let n=!0;const o=document.querySelector(`#dynamic-table-${t}`);return o?(o.querySelectorAll("tbody tr").forEach(a=>{a.querySelectorAll("td").forEach((l,c)=>{const r=e.headers[c],s=l.querySelector("input, select");if(!(!r||!s)){if(l.style.pointerEvents==="none"||l.style.opacity==="0.5"){l.classList.remove("invalid-cell");return}if(r.mandatory){let i=!1;if(s.tagName==="SELECT"&&s.choicesInstance){const d=s.choicesInstance.getValue(!0);i=Array.isArray(d)?d.length===0:!d}else i=s.value.trim()==="";i?(document.activeElement!==s&&l.classList.add("invalid-cell"),n=!1):l.classList.remove("invalid-cell")}}})}),n):!0}function V(t,e){const n=e.headers.findIndex(a=>a.tipo==="sequencia");if(n===-1)return;let o=1;document.querySelectorAll(`#dynamic-table-${t} tbody tr`).forEach(a=>{a.querySelectorAll("td")[n].textContent=o++}),A[t]=o}function N(t,e,n){E[n]=t,A[n]=1;const o=document.createElement("div");o.id=`grid-controls-${n}`,o.className="grid-controls-wrapper",o.innerHTML=`<h4>${t.tableName||"Itens"}</h4><div class="controls-wrapper"><input type="button" id="add-items-${n}" class="grid-main-button grid-action-button" value="Adicionar / Editar Itens" /><span id="item-count-${n}">Itens adicionados: 0</span></div>`;const a=e.querySelector(".fr-box"),l=e.querySelector(".control-element"),c=e.closest("[data-field-section]")||a||l;c?(c.before(o),c.setAttribute("data-grid-hidden-by-script","true"),c.style.display="none"):(e.after(o),e.setAttribute("data-grid-hidden-by-script","true"),e.style.display="none");const r=document.createElement("div");r.className="popup-overlay",r.id=`grid-popup-overlay-${n}`,r.style.display="none",r.innerHTML=`<div class="popup"><div class="popup-header">${t.tableName||"Itens"}</div><div class="popup-body"><table class="dynamic-table" id="dynamic-table-${n}"><thead><tr>${t.headers.map(u=>`<th>${u.name}${u.mandatory?"*":""}</th>`).join("")}<th>Ações</th></tr></thead><tbody></tbody></table></div><div class="popup-footer"><input type="button" class="grid-action-button" id="add-row-${n}" value="Adicionar Linha" /><input type="button" class="grid-action-button" id="ok-button-${n}" value="Salvar e Fechar" /></div></div></div>`,document.body.appendChild(r);const s=r.querySelector("tbody"),i=()=>{const u=s.insertRow();t.headers.forEach(g=>{const x=u.insertCell();if(x.style.minWidth=g.minWidth||"auto",g.tipo==="sequencia")x.textContent=A[n]++;else if(g.tipo==="dropdown"||g.dropdown){const h=document.createElement("select");x.appendChild(h),G(h,g,u,t)}else if(g.editable){const h=document.createElement("input");h.type="text",h.className="grid-input",x.appendChild(h),z(h,g.tipo)}});const y=u.insertCell();y.innerHTML='<input type="button" class="grid-action-button remove" value="Remover" />',v()},d=t.minRows||0,p=t.maxRows||1;for(let u=0;u<d;u++)i();v(),_(n,t);let b;const f=()=>{r.style.display==="flex"&&_(n,t),b=requestAnimationFrame(f)};b=requestAnimationFrame(f);const m=new MutationObserver(()=>{document.body.contains(r)||(cancelAnimationFrame(b),m.disconnect())});m.observe(document.body,{childList:!0}),document.getElementById(`add-items-${n}`).addEventListener("click",()=>{r.style.display="flex"}),s.addEventListener("input",u=>{u.target.classList.contains("grid-input")&&v()}),s.addEventListener("change",u=>{u.target.tagName==="SELECT"&&v()}),r.addEventListener("click",u=>{if(u.target.id===`ok-button-${n}`){if(!_(n,t)){C("Por favor, preencha todos os campos obrigatórios (*)."),r.style.display="none";return}v(),r.style.display="none"}if(u.target.id===`add-row-${n}`){if(!_(n,t)){C("Preencha os campos obrigatórios da linha atual antes de adicionar uma nova.");return}if(s.rows.length===p){C("Limite de linhas atingido.");return}i()}u.target.classList.contains("remove")&&(s.rows.length>d?(u.target.closest("tr").remove(),V(n,t),v()):C(`O número mínimo de linhas é ${d}.`))})}function T(){document.querySelectorAll(".custom_rich_text.custom-field").forEach(t=>{if(!t.querySelector('[data-field-label*="cf_grid_"]'))return;const e=t.querySelector("textarea.rich_text");if(!e)return;const n=D(e);if(n&&!S.has(n)){const o=F(e);o&&(o.textarea=e,S.add(n),N(o,t,n))}}),S.forEach(t=>{const e=E[t];if(e&&e.textarea){const n=e.textarea,o=n.closest(".custom_rich_text.custom-field")||n.parentElement,a=document.getElementById(`grid-controls-${t}`),l=document.getElementById(`grid-popup-overlay-${t}`);if(!document.body.contains(n)){a?.remove(),l?.remove(),S.delete(t),delete E[t],v();return}if(o){const c=o.querySelector(".fr-box"),r=o.querySelector(".control-element"),s=o.closest("[data-field-section]"),i=s||c||r||o;o.classList.contains("hide")||o.classList.contains("hidden")||o.style.display==="none"&&!o.hasAttribute("data-grid-hidden-by-script")||s&&(s.classList.contains("hide")||s.classList.contains("hidden")||s.style.display==="none"&&!s.hasAttribute("data-grid-hidden-by-script"))?a&&(a.style.display="none"):(i.style.display!=="none"&&(i.setAttribute("data-grid-hidden-by-script","true"),i.style.display="none"),a&&(a.style.display=""))}}})}function W(){I("dynamic-grid-styles",O),document.addEventListener("click",function(t){if(t.target&&t.target.matches(".place-request-btn")&&document.querySelectorAll(".invalid-cell").length>0)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),C("Preencha os campos obrigatórios das tabelas!"),!1},!0),new MutationObserver(T).observe(document.body,{childList:!0,subtree:!0}),T()}var K=`.on-call-popup-overlay {
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
        `,document.body.appendChild(e)),document.querySelector(".on-call-popup-overlay")||document.body.appendChild(e.content.cloneNode(!0));const[n,o]=(t.onCallTime||"17:59").split(":"),a=Number(n)||17,l=Number(o)||59,c=document.querySelector(".on-call-popup-overlay"),r=document.querySelector(".on-call-popup"),s=document.querySelector(".on-call-btn-urgent"),i=document.querySelector(".on-call-btn-normal");if(!c||!r||!s||!i){console.error("[On Call Script] Elementos do popup não foram encontrados.");return}function d(){const u=new Date,y=u.getHours(),g=u.getMinutes();return y>a||y===a&&g>=l}let p=null;function b(){if(!p)return;const u=p.getBoundingClientRect();r.style.display="block";const y=r.offsetWidth,g=r.offsetHeight;let x=0,h=0,w=r.parentElement;for(;w&&w!==document.documentElement&&w!==document.body;){const k=window.getComputedStyle(w);if(k.transform!=="none"||k.perspective!=="none"||k.filter!=="none"||k.willChange==="transform"){const j=w.getBoundingClientRect();x=j.left,h=j.top;break}w=w.parentElement}let q=u.top-h-g-10,L=u.right-x-y;q<10&&(q=u.bottom-h+10),L<10&&(L=10),r.style.top=`${q}px`,r.style.left=`${L}px`}let f=!1;function m(){r.classList.remove("show"),p=null,setTimeout(()=>{c.style.display="none",r.style.display="none"},200)}c.addEventListener("click",m),s.addEventListener("click",function(){const u=p;m(),u&&(f=!0,u.click(),f=!1)}),i.addEventListener("click",function(){const u=p;m(),u&&(f=!0,u.click(),f=!1)}),document.addEventListener("click",function(u){if(f)return;const y=u.target.closest(".place-request-footer .place-request-btn");if(y){if(!/\/catalog\/items\/\d+/.test(window.location.pathname))return;d()&&(u.preventDefault(),u.stopPropagation(),p=y,b(),c.style.display="block",r.offsetWidth,r.classList.add("show"))}},!0),window.addEventListener("resize",b)}function Y(){let t=document.currentScript;if(t&&!t.hasAttribute("data-enable-grid")&&!t.hasAttribute("data-enable-on-call")&&(t=null),!t){const l=Array.from(document.querySelectorAll('script[data-enable-grid], script[data-enable-on-call], script[src*="freshservice-target-cdn"], script[src*="bundle.js"]'));t=l.find(c=>c.hasAttribute("data-enable-grid")||c.hasAttribute("data-enable-on-call"))||l[0]}const e="[Custom Freshservice Scripts @ Target.it]";t?Object.keys(t.dataset).length>0||console.warn(`${e} [DEBUG] Tag <script> localizada (src="${t.src}"), porém não possui atributos "data-*" configurados.`):console.warn(`${e} [DEBUG] Nenhuma tag <script> correspondente foi localizada no DOM.`);const{enableGrid:n,enableOnCall:o,onCallTime:a="17:59"}=t?.dataset??{};return{isGridEnabled:n==="true",isOnCallEnabled:o==="true",onCallTime:a}}function R(){const e="[Custom Freshservice Scripts @ Target.it]";console.log(`${e} Versão: v29`);const n=Y(),o=[{key:"grid",name:"Grid System",init:W,enabled:n.isGridEnabled,config:{}},{key:"on-call",name:"On-Call Intercept Popup",init:J,enabled:n.isOnCallEnabled,config:{onCallTime:n.onCallTime}}],a=o.filter(c=>c.enabled),l=o.filter(c=>!c.enabled);if(a.length===0&&console.warn(`${e} Nenhum script foi ativado.`),l.length>0){console.log(`${e} Scripts disponíveis mas inativos (para ativar, adicione os atributos correspondentes na tag <script> do CDN):`);const c=l.map(r=>({Script:r.name,"Chave do Atributo":`data-enable-${r.key}="true"`,"Configurações Disponíveis":Object.keys(r.config||{}).map(s=>`data-${s}="..."`).join(", ")||"Nenhuma"}));console.table(c)}a.length!==0&&a.forEach(c=>{try{c.init(c.config),console.log(`${e} ${c.name} inicializado com sucesso.`)}catch(r){console.error(`${e} Erro ao inicializar ${c.name}:`,r)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R()})();
