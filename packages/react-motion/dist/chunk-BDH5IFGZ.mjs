import*as e from"react";import{animate as r}from"motion";var a=(i,n,o)=>{try{r(i,n,o)}catch(t){console.error(t)}},c=({children:i,animate:n,transition:o})=>{let t=e.useRef(null);return e.useEffect(()=>{t.current!==null&&a(t.current,n,o)},[]),e.createElement("div",{ref:t},i||e.createElement(e.Fragment,null))};export{a,c as b};
//# sourceMappingURL=chunk-BDH5IFGZ.mjs.map