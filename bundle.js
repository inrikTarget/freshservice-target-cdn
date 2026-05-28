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
`;function A(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function P(t){if(!t)return null;let e=t;typeof t=="object"&&t.tagName&&(e=t.id||t.name||"");const n=e.match(/(cf_\w+)/);return n?n[1]:e}function F(t){const e=t.placeholder||"";if(!e)return null;const n=e.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");try{return new Function("return ("+n+")")()}catch{return null}}function N(t,e){if(!t||!window.IMask)return;let n;switch(e){case"numero":n={mask:Number,scale:"any",thousandsSeparator:".",radix:","};break;case"data":n={mask:"00/00/0000"};break;case"hora":n={mask:"00:00:00"};break;case"monetario":n={mask:"R$ num",blocks:{num:{mask:Number,scale:2,thousandsSeparator:".",padFractionalZeros:!0,radix:","}}};break;default:return}window.IMask(t,n)}var D={popular_article:"/support/v2/solutions/articles/popular",agents_and_requesters:"/search/autocomplete/agents_and_requesters",tickets:"/support/search/tickets",archived_tickets:"/support/search/archived_tickets",solutions:"/support/search/solutions",journey_requests:"/support/search/journeys/requests",catalog_items:"/support/search/catalog_items",changes:"/support/search/changes",ext_lookup:"/requested_for_choices",requester_search:"/ext_lookup_search/index?include_agents=true&query="};function z(t,e){const n=D[t];if(!n)return"";const r=e||"";return t==="requester_search"?`${n}${encodeURIComponent(r)}`:`${n}${n.includes("?")?"&":"?"}query=${encodeURIComponent(r)}`}function B(t,e){if(!t)return[];let n=[];if(Array.isArray(t))n=t;else if(t&&typeof t=="object"){const r=Object.keys(t).find(l=>Array.isArray(t[l]));r?n=t[r]:n=[t]}return n.map(r=>{if(!r||typeof r!="object"){const c=String(r||"");return{value:c,label:c}}const l=["id","value","key","id_str","id_number"],d=["name","label","text","title","display_name","subject"],a=Object.keys(r).find(c=>l.includes(c.toLowerCase())),o=Object.keys(r).find(c=>d.includes(c.toLowerCase()));let s=a?r[a]:null,i=o?r[o]:null;if(s==null){const c=Object.keys(r)[0];s=c?r[c]:""}if(i==null){const c=Object.keys(r)[1]||Object.keys(r)[0];i=c?r[c]:""}return{value:String(s),label:String(i||s)}})}async function H(t,e,n,r,l=null){let d;l?d=z(l,e):d=`${t}?q=${encodeURIComponent(e||"")}&${n}`;const a=typeof window.performServerCall=="function";console.log(`[GRID API] Fetching: ${d} | método: ${a?"performServerCall":"fetch nativo"}`);let o=d,s=[];for(;o;){let i;if(a)i=await window.performServerCall({url:o,method:"GET",getPageData:!0});else{const c=await fetch(o,{signal:r});if(!c.ok)throw new Error(`HTTP error! status: ${c.status}`);i=await c.json()}if(l){const c=B(i,l);s=s.concat(c),i.next_page_link&&e!==""&&e.length>3?o=i.next_page_link:o=null}else i&&Array.isArray(i.results)&&(s=s.concat(i.results)),i.next_page_link&&e!==""&&e.length>3?o=`${d}&next_page_link=${encodeURIComponent(i.next_page_link)}`:o=null}return s}var k=new Set,C={},L={},U="/lookup_choices";function V(t,e,n,r){if(!window.Choices)return;e.multiselect&&t.setAttribute("multiple",""),t.setAttribute("id",e.name);const l=document.createElement("option");l.value="",l.textContent="Selecione...",l.setAttribute("placeholder",""),l.selected=!e.multiselect,t.appendChild(l);const d=new window.Choices(t,{placeholder:!0,placeholderValue:"Selecione...",searchPlaceholderValue:"Filtrar resultados...",itemSelectText:"",removeItemButton:e.multiselect,searchEnabled:!0,shouldSort:!1,searchChoices:!1,searchResultLimit:100,renderChoiceLimit:100});t.choicesInstance=d;let a=null;const o=()=>(e.search_term||"").replace(/#(.*?)#/g,(i,c)=>{const p=c.trim(),m=r.headers.findIndex(b=>b.name.replace("*","").trim()===p);if(m===-1)return"";const f=n.cells[m].querySelector("input, select");if(!f)return"";if(f.choicesInstance){const b=f.choicesInstance.getValue(!0);return Array.isArray(b)?b.join(","):b||""}return f.value||""}),s=async i=>{console.log(`[GRID performFetch] Buscando dropdown para '${e.name}' com termo: "${i}"`),a&&a.abort(),a=new AbortController;const c=a.signal;try{d.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"loading_placeholder",label:"Buscando...",disabled:!0}],"value","label",!0);const p=await H(U,i,e.dropdown_query,c,e.standard_source);console.log(`[GRID performFetch] Sucesso: ${p.length} resultados retornados.`);const m=[{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect}];p.forEach(f=>{m.push({value:f.value,label:f.label||f.value,selected:!1})}),d.clearChoices(),p.length>0?d.setChoices(m,"value","label",!0):d.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"no_results_placeholder",label:"Nenhum resultado",disabled:!0}],"value","label",!0)}catch(p){if(p.name==="AbortError")return;console.error("[GRID API ERROR]",p),d.clearChoices(),d.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"error_placeholder",label:"Erro ao carregar",disabled:!0}],"value","label",!0)}};if((e.dropdown_query||e.standard_source)&&!e.search_term&&t.addEventListener("search",i=>{s(i.detail.value)}),e.search_term&&(e.dropdown_query||e.standard_source)){const i=()=>{const p=o();p&&p.trim()!==""?(d.removeActiveItems(),s(p)):(d.clearChoices(),d.removeActiveItems(),d.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"waiting_placeholder",label:"Aguardando preenchimento...",disabled:!0}],"value","label",!0))},c=e.search_term.match(/#(.*?)#/g);c&&c.forEach(p=>{const m=p.replace(/#/g,"").trim(),f=r.headers.findIndex(b=>b.name.replace("*","").trim()===m);f!==-1&&n.cells[f].addEventListener("change",i)}),i()}else if(e.standard_source)d.setChoices([{value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect},{value:"hint_placeholder",label:"Digite para pesquisar...",disabled:!0}],"value","label",!0);else if(e.dropdown_query)s("");else if(e.dropdown){const i=document.querySelector(`div[data-field-section*="${e.dropdown}"]`);if(i){const c=[];c.push({value:"",label:"Selecione...",placeholder:!0,selected:!e.multiselect}),i.querySelectorAll("option").forEach(p=>{p.value&&p.value.trim()!==""&&c.push({value:p.textContent,label:p.textContent,selected:!1})}),d.clearChoices(),d.setChoices(c,"value","label",!0)}}}function v(){k.forEach(t=>{const e=C[t];if(!e||!e.textarea)return;const n=[],r=document.querySelectorAll(`#dynamic-table-${t} tbody tr`);let l=`<h4>${A(e.tableName)}</h4><table style="width:100%; border-collapse:collapse; border:1px solid #ddd;"><thead><tr style="background-color:#f2f2f2;">`;e.headers.forEach(o=>{l+=`<th style="border:1px solid #ddd; padding:8px;">${A(o.name)}</th>`}),l+="</tr></thead><tbody>",r.forEach(o=>{const s={};l+="<tr>",o.querySelectorAll("td").forEach((i,c)=>{const p=e.headers[c];if(!p)return;let m="";const f=i.querySelector("input, select");if(f)if(f.choicesInstance){const u=f.choicesInstance.getValue(!0);m=Array.isArray(u)?u.join(", "):u||""}else f.tagName==="SELECT"?m=Array.from(f.selectedOptions).map(u=>u.value).join(", "):m=f.value;else m=i.textContent;const b=p.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9 ]/g,"").trim().toLowerCase().replace(/\s+/g,"_");s[b]=m,l+=`<td style="border:1px solid #ddd; padding:8px;">${A(m||"")}</td>`}),l+="</tr>",n.push({dados_linha:JSON.stringify(s)})}),l+="</tbody></table>";const d=(e.textarea.closest(".custom_rich_text.custom-field")||e.textarea.parentElement).querySelector(".fr-view");if(d&&(d.innerHTML=l),e.textarea.value=l,e.textarea.dispatchEvent(new Event("change",{bubbles:!0})),e.json_field){const o=document.querySelector(`[data-field-label*="${e.json_field}"] textarea, [data-field-label*="${e.json_field}"] input, [data-field-section*="${e.json_field}"] textarea, [data-field-section*="${e.json_field}"] input, #${e.json_field}`);o&&(o.value=JSON.stringify(n,null,2),o.dispatchEvent(new Event("change",{bubbles:!0})))}const a=document.getElementById(`item-count-${t}`);a&&(a.textContent=`Itens adicionados: ${n.length}`)})}function S(t,e){let n=!0;const r=document.querySelector(`#dynamic-table-${t}`);return r?(r.querySelectorAll("tbody tr").forEach(l=>{l.querySelectorAll("td").forEach((d,a)=>{const o=e.headers[a],s=d.querySelector("input, select");if(!(!o||!s)){if(d.style.pointerEvents==="none"||d.style.opacity==="0.5"){d.classList.remove("invalid-cell");return}if(o.mandatory){let i=!1;if(s.tagName==="SELECT"&&s.choicesInstance){const c=s.choicesInstance.getValue(!0);i=Array.isArray(c)?c.length===0:!c}else i=s.value.trim()==="";i?(document.activeElement!==s&&d.classList.add("invalid-cell"),n=!1):d.classList.remove("invalid-cell")}}})}),n):!0}function G(t,e){const n=e.headers.findIndex(l=>l.tipo==="sequencia");if(n===-1)return;let r=1;document.querySelectorAll(`#dynamic-table-${t} tbody tr`).forEach(l=>{l.querySelectorAll("td")[n].textContent=r++}),L[t]=r}function W(t,e,n){C[n]=t,L[n]=1;const r=document.createElement("div");r.id=`grid-controls-${n}`,r.className="grid-controls-wrapper",r.innerHTML=`<h4>${t.tableName||"Itens"}</h4><div class="controls-wrapper"><input type="button" id="add-items-${n}" class="grid-main-button grid-action-button" value="Adicionar / Editar Itens" /><span id="item-count-${n}">Itens adicionados: 0</span></div>`;const l=e.querySelector(".fr-box"),d=e.querySelector(".control-element"),a=e.closest("[data-field-section]")||l||d;a?(a.before(r),a.setAttribute("data-grid-hidden-by-script","true"),a.style.display="none"):(e.after(r),e.setAttribute("data-grid-hidden-by-script","true"),e.style.display="none");const o=document.createElement("div");o.className="popup-overlay",o.id=`grid-popup-overlay-${n}`,o.style.display="none",o.innerHTML=`<div class="popup"><div class="popup-header">${t.tableName||"Itens"}</div><div class="popup-body"><table class="dynamic-table" id="dynamic-table-${n}"><thead><tr>${t.headers.map(u=>`<th>${u.name}${u.mandatory?"*":""}</th>`).join("")}<th>Ações</th></tr></thead><tbody></tbody></table></div><div class="popup-footer"><input type="button" class="grid-action-button" id="add-row-${n}" value="Adicionar Linha" /><input type="button" class="grid-action-button" id="ok-button-${n}" value="Salvar e Fechar" /></div></div></div>`,document.body.appendChild(o);const s=o.querySelector("tbody"),i=()=>{const u=s.insertRow();t.headers.forEach(h=>{const x=u.insertCell();if(x.style.minWidth=h.minWidth||"auto",h.tipo==="sequencia")x.textContent=L[n]++;else if(h.tipo==="dropdown"||h.dropdown){const g=document.createElement("select");x.appendChild(g),V(g,h,u,t)}else if(h.editable){const g=document.createElement("input");g.type="text",g.className="grid-input",x.appendChild(g),N(g,h.tipo)}});const y=u.insertCell();y.innerHTML='<input type="button" class="grid-action-button remove" value="Remover" />',v()},c=t.minRows||0,p=t.maxRows||1;for(let u=0;u<c;u++)i();v(),S(n,t);let m;const f=()=>{o.style.display==="flex"&&S(n,t),m=requestAnimationFrame(f)};m=requestAnimationFrame(f);const b=new MutationObserver(()=>{document.body.contains(o)||(cancelAnimationFrame(m),b.disconnect())});b.observe(document.body,{childList:!0}),document.getElementById(`add-items-${n}`).addEventListener("click",()=>{o.style.display="flex"}),s.addEventListener("input",u=>{u.target.classList.contains("grid-input")&&v()}),s.addEventListener("change",u=>{u.target.tagName==="SELECT"&&v()}),o.addEventListener("click",u=>{if(u.target.id===`ok-button-${n}`){if(!S(n,t)){E("Por favor, preencha todos os campos obrigatórios (*)."),o.style.display="none";return}v(),o.style.display="none"}if(u.target.id===`add-row-${n}`){if(!S(n,t)){E("Preencha os campos obrigatórios da linha atual antes de adicionar uma nova.");return}if(s.rows.length===p){E("Limite de linhas atingido.");return}i()}u.target.classList.contains("remove")&&(s.rows.length>c?(u.target.closest("tr").remove(),G(n,t),v()):E(`O número mínimo de linhas é ${c}.`))})}function j(){document.querySelectorAll(".custom_rich_text.custom-field").forEach(t=>{if(!t.querySelector('[data-field-label*="cf_grid_"]'))return;const e=t.querySelector("textarea.rich_text");if(!e)return;const n=P(e);if(n&&!k.has(n)){const r=F(e);r&&(r.textarea=e,k.add(n),W(r,t,n))}}),k.forEach(t=>{const e=C[t];if(e&&e.textarea){const n=e.textarea,r=n.closest(".custom_rich_text.custom-field")||n.parentElement,l=document.getElementById(`grid-controls-${t}`),d=document.getElementById(`grid-popup-overlay-${t}`);if(!document.body.contains(n)){l?.remove(),d?.remove(),k.delete(t),delete C[t],v();return}if(r){const a=r.querySelector(".fr-box"),o=r.querySelector(".control-element"),s=r.closest("[data-field-section]"),i=s||a||o||r;r.classList.contains("hide")||r.classList.contains("hidden")||r.style.display==="none"&&!r.hasAttribute("data-grid-hidden-by-script")||s&&(s.classList.contains("hide")||s.classList.contains("hidden")||s.style.display==="none"&&!s.hasAttribute("data-grid-hidden-by-script"))?l&&(l.style.display="none"):(i.style.display!=="none"&&(i.setAttribute("data-grid-hidden-by-script","true"),i.style.display="none"),l&&(l.style.display=""))}}})}function K(){I("dynamic-grid-styles",O),document.addEventListener("click",function(t){if(t.target&&t.target.matches(".place-request-btn")&&document.querySelectorAll(".invalid-cell").length>0)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),E("Preencha os campos obrigatórios das tabelas!"),!1},!0),new MutationObserver(j).observe(document.body,{childList:!0,subtree:!0}),j()}var J=`.on-call-popup-overlay {
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
        `,document.body.appendChild(e)),document.querySelector(".on-call-popup-overlay")||document.body.appendChild(e.content.cloneNode(!0));const[n,r]=(t.onCallTime||"17:59").split(":"),l=Number(n)||17,d=Number(r)||59,a=document.querySelector(".on-call-popup-overlay"),o=document.querySelector(".on-call-popup"),s=document.querySelector(".on-call-btn-urgent"),i=document.querySelector(".on-call-btn-normal");if(!a||!o||!s||!i){console.error("[On Call Script] Elementos do popup não foram encontrados.");return}function c(){const u=new Date,y=u.getHours(),h=u.getMinutes();return y>l||y===l&&h>=d}let p=null;function m(){if(!p)return;const u=p.getBoundingClientRect();o.style.display="block";const y=o.offsetWidth,h=o.offsetHeight;let x=0,g=0,w=o.parentElement;for(;w&&w!==document.documentElement&&w!==document.body;){const $=window.getComputedStyle(w);if($.transform!=="none"||$.perspective!=="none"||$.filter!=="none"||$.willChange==="transform"){const R=w.getBoundingClientRect();x=R.left,g=R.top;break}w=w.parentElement}let q=u.top-g-h-10,T=u.right-x-y;q<10&&(q=u.bottom-g+10),T<10&&(T=10),o.style.top=`${q}px`,o.style.left=`${T}px`}let f=!1;function b(){o.classList.remove("show"),p=null,setTimeout(()=>{a.style.display="none",o.style.display="none"},200)}a.addEventListener("click",b),s.addEventListener("click",function(){const u=p;b(),u&&(f=!0,u.click(),f=!1)}),i.addEventListener("click",function(){const u=p;b(),u&&(f=!0,u.click(),f=!1)}),document.addEventListener("click",function(u){if(f)return;const y=u.target.closest(".place-request-footer .place-request-btn");if(y){if(!/\/catalog\/items\/\d+/.test(window.location.pathname))return;c()&&(u.preventDefault(),u.stopPropagation(),p=y,m(),a.style.display="block",o.offsetWidth,o.classList.add("show"))}},!0),window.addEventListener("resize",m)}function Z(t){const e=t.replace(/\D/g,"").slice(0,14);let n="";return e.length>0&&(n+=e.slice(0,2)),e.length>2&&(n+="."+e.slice(2,5)),e.length>5&&(n+="."+e.slice(5,8)),e.length>8&&(n+="/"+e.slice(8,12)),e.length>12&&(n+="-"+e.slice(12,14)),n}function X(t){let e=t.replace(/\D/g,"");(e.length===12||e.length===13)&&e.startsWith("55")&&(e=e.slice(2)),e=e.slice(0,11);let n="";return e.length>0&&(n+="("+e.slice(0,2)),e.length>2&&(n+=") "+e.slice(2,6)),e.length>6&&(e.length===11?n="("+e.slice(0,2)+") "+e.slice(2,7)+"-"+e.slice(7,11):n+="-"+e.slice(6,10)),n}function Q(t){const e=t.replace(/\D/g,"").slice(0,8);let n="";return e.length>0&&(n+=e.slice(0,5)),e.length>5&&(n+="-"+e.slice(5,8)),n}function ee(t){return t.toLowerCase().replace(/\s+/g,"").replace(/[^a-z0-9@._\-+]/g,"")}function te(t){if(t=t.trim(),!t)return"";const e=t.match(/^([a-zA-Z_:-]+)([*^$~|]?=)(.+)$/);if(e){const n=e[1],r=e[2];let l=e[3];return(l.startsWith('"')&&l.endsWith('"')||l.startsWith("'")&&l.endsWith("'"))&&(l=l.substring(1,l.length-1)),`[${n}${r}"${l}"]`}return t}function _(t,e,n=!0){if(t._isApplyingMask)return;const r=t.value||"",l=e(r);if(r!==l){t._isApplyingMask=!0;try{const d=t.selectionStart;if(t.value=l,document.activeElement===t){let a=0;if(n){const o=r.slice(0,d).replace(/\D/g,"").length;let s=0;for(let i=0;i<l.length&&s!==o;i++)/\d/.test(l[i])&&s++,a=i+1}else a=e(r.slice(0,d)).length;t.setSelectionRange(a,a)}t.dispatchEvent(new Event("input",{bubbles:!0}))}finally{t._isApplyingMask=!1}}}function ne(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"?[t]:Array.from(t.querySelectorAll("input, textarea"))}function oe(t){if(t.tagName==="TEXTAREA")return!0;if(t.tagName==="INPUT"){const e=t.type?t.type.toLowerCase():"text";return["text","tel","email","search","url"].includes(e)}return!1}function re(t={}){const e="[Custom Masking Script]";console.log(`${e} Inicializando...`);const n={cnpj:{formatFn:Z,isNumeric:!0,selectors:[]},phone:{formatFn:X,isNumeric:!0,selectors:[]},email:{formatFn:ee,isNumeric:!1,selectors:[]},cep:{formatFn:Q,isNumeric:!0,selectors:[]}};Object.keys(n).forEach(a=>{const o=t[a];if(o){const s=o.split(",").map(i=>i.trim()).filter(Boolean);n[a].selectors=s.map(te)}});const r=Object.entries(n).filter(([a,o])=>o.selectors.length>0);if(r.length===0){console.warn(`${e} Nenhuma máscara ativa (verifique os atributos data-mask-* na tag script).`);return}console.log(`${e} Máscaras ativas:`,r.map(([a,o])=>`${a} => ${o.selectors.join(", ")}`));function l(a,o){if(a.dataset.maskBound==="true"){_(a,o.formatFn,o.isNumeric);return}a.dataset.maskBound="true",_(a,o.formatFn,o.isNumeric);const s=()=>_(a,o.formatFn,o.isNumeric);a.addEventListener("input",s),a.addEventListener("blur",s);try{const i=a instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(i,"value");c&&c.set&&Object.defineProperty(a,"value",{get(){return c.get.call(this)},set(p){c.set.call(this,p),_(this,o.formatFn,o.isNumeric)},configurable:!0})}catch(i){console.warn(`${e} Falha ao interceptar setter do value:`,i)}}function d(){r.forEach(([a,o])=>{o.selectors.forEach(s=>{try{document.querySelectorAll(s).forEach(i=>{ne(i).forEach(c=>{oe(c)&&l(c,o)})})}catch(i){console.error(`${e} Erro ao buscar elementos para o seletor "${s}":`,i)}})})}d(),new MutationObserver(a=>{let o=!1;for(const s of a){if(s.addedNodes.length>0){for(const i of s.addedNodes)if(i.nodeType===Node.ELEMENT_NODE){o=!0;break}}if(o)break}o&&d()}).observe(document.body,{childList:!0,subtree:!0})}function ae(){let t=document.currentScript;if(t&&!t.hasAttribute("data-enable-grid")&&!t.hasAttribute("data-enable-on-call")&&!t.hasAttribute("data-enable-mask")&&(t=null),!t){const c=Array.from(document.querySelectorAll('script[data-enable-grid], script[data-enable-on-call], script[data-enable-mask], script[src*="freshservice-target-cdn"], script[src*="bundle.js"]'));t=c.find(p=>p.hasAttribute("data-enable-grid")||p.hasAttribute("data-enable-on-call")||p.hasAttribute("data-enable-mask"))||c[0]}const e="[Custom Freshservice Scripts @ Target.it]";t?Object.keys(t.dataset).length>0||console.warn(`${e} [DEBUG] Tag <script> localizada (src="${t.src}"), porém não possui atributos "data-*" configurados.`):console.warn(`${e} [DEBUG] Nenhuma tag <script> correspondente foi localizada no DOM.`);const{enableGrid:n,enableOnCall:r,onCallTime:l="17:59",enableMask:d,maskCnpj:a,maskPhone:o,maskEmail:s,maskCep:i}=t?.dataset??{};return{isGridEnabled:n==="true",isOnCallEnabled:r==="true",onCallTime:l,isMaskEnabled:d==="true",maskCnpj:a,maskPhone:o,maskEmail:s,maskCep:i}}function M(){const e="[Custom Freshservice Scripts @ Target.it]";console.log(`${e} Versão: v30`);const n=ae(),r=[{key:"grid",name:"Grid System",init:K,enabled:n.isGridEnabled,config:{}},{key:"on-call",name:"On-Call Intercept Popup",init:Y,enabled:n.isOnCallEnabled,config:{onCallTime:n.onCallTime}},{key:"mask",name:"Text/Number Masking",init:a=>re({cnpj:a["mask-cnpj"],phone:a["mask-phone"],email:a["mask-email"],cep:a["mask-cep"]}),enabled:n.isMaskEnabled,config:{"mask-cnpj":n.maskCnpj,"mask-phone":n.maskPhone,"mask-email":n.maskEmail,"mask-cep":n.maskCep}}],l=r.filter(a=>a.enabled),d=r.filter(a=>!a.enabled);if(l.length===0&&console.warn(`${e} Nenhum script foi ativado.`),d.length>0){console.log(`${e} Scripts disponíveis mas inativos (para ativar, adicione os atributos correspondentes na tag <script> do CDN):`);const a=d.map(o=>({Script:o.name,"Chave do Atributo":`data-enable-${o.key}="true"`,"Configurações Disponíveis":Object.keys(o.config||{}).map(s=>`data-${s}="..."`).join(", ")||"Nenhuma"}));console.table(a)}l.length!==0&&l.forEach(a=>{try{a.init(a.config),console.log(`${e} ${a.name} inicializado com sucesso.`)}catch(o){console.error(`${e} Erro ao inicializar ${a.name}:`,o)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M()})();
