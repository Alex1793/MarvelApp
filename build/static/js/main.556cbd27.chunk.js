(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(10),c=a.n(r),s=a(2),i=a(3),l=a(5),o=a(4),j=(a(15),a(0)),d=function(){return Object(j.jsxs)("header",{className:"app__header",children:[Object(j.jsx)("h1",{className:"app__title",children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(j.jsx)("nav",{className:"app__menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=a(6),u=a.n(h),m=a(7),b=function e(){var t=this;Object(s.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=94542c4e409fb632749d9feb479de4d3",this._baseOffset=210,this.getResours=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharecters=Object(m.a)(u.a.mark((function e(){var a,n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:t._baseOffset,e.next=3,t.getResours("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharecter=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResours("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{name:e.name,description:e.description,thumbnale:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.url,wiki:e.urls[1].url,id:e.id,comics:e.comics.items.slice(0,10)}}},f=function(){return Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(j.jsx)("g",{transform:"translate(80,50)",children:Object(j.jsx)("g",{transform:"rotate(0)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(45)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(j.jsx)("g",{transform:"translate(50,80)",children:Object(j.jsx)("g",{transform:"rotate(90)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(135)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(j.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(j.jsx)("g",{transform:"rotate(180)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(j.jsx)("g",{transform:"rotate(225)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(j.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(j.jsx)("g",{transform:"rotate(270)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(j.jsx)("g",{transform:"rotate(315)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},O=a.p+"static/media/error.42292aa1.gif",p=function(){return Object(j.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:O,alt:"Error"})},x=(a(18),a.p+"static/media/mjolnir.61f31e18.png"),v=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:{},loading:!0,error:!1},e.marvelService=new b,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.setState({loading:!0,error:!1}),e.marvelService.getCharecter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=n?Object(j.jsx)(p,{}):null,c=a?Object(j.jsx)(f,{}):null,s=a||n?null:Object(j.jsx)(g,{char:t});return Object(j.jsxs)("div",{className:"randomchar",children:[r,c,s,Object(j.jsxs)("div",{className:"randomchar__static",children:[Object(j.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(j.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(j.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(j.jsx)("button",{className:"button button__main",onClick:this.updateChar,children:Object(j.jsx)("div",{className:"inner",children:"try it"})}),Object(j.jsx)("img",{src:x,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component),g=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnale,c=t.homepage,s=t.wiki,i=""===n?"There is no description for this character":n;if(void 0===i)return"";var l=i.length>210?i.slice(0,210)+"...":i,o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:{objectFit:"cover"};return Object(j.jsxs)("div",{className:"randomchar__block",children:[Object(j.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:o}),Object(j.jsxs)("div",{className:"randomchar__info",children:[Object(j.jsx)("p",{className:"randomchar__name",children:a}),Object(j.jsx)("p",{className:"randomchar__descr",children:l}),Object(j.jsxs)("div",{className:"randomchar__btns",children:[Object(j.jsx)("a",{href:c,tabIndex:0,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},_=v,y=a(9),N=(a(19),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={chars:[],loading:!0,newItemLoading:!1,offset:210,charEnded:!1},e.marvelService=new b,e.updateListChars=function(){e.marvelService.getAllCharecters().then((function(t){e.setState({chars:t,loading:!1})}))},e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharecters(t).then((function(t){var a;t.length<9&&(a=!0),e.setState((function(e){var n=e.chars,r=e.offset;return{chars:[].concat(Object(y.a)(n),Object(y.a)(t)),loading:!1,newItemLoading:!1,offset:r+9,charEnded:a}}))}))},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"render",value:function(){var e=this,t=this.state,a=t.chars,n=t.loading,r=t.newItemLoading,c=t.offset,s=t.charEnded,i=a.map((function(t,a){var n;return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnale&&(n={objectFit:"contain"}),Object(j.jsxs)("li",{className:"char__item",tabIndex:0,onClick:function(){e.props.onCharSelected(t.id),e.focusOnItem(a)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.props.onCharSelected(t.id),e.focusOnItem(a))},ref:e.setRef,children:[Object(j.jsx)("img",{src:t.thumbnale,alt:"abyss",style:n}),Object(j.jsx)("div",{className:"char__name",children:t.name})]},t.id)})),l=!0===n?Object(j.jsx)(f,{}):null;return Object(j.jsxs)("div",{className:"char__list",children:[l,Object(j.jsx)("ul",{className:"char__grid",children:i}),Object(j.jsx)("button",{className:"button button__main button__long",disabled:r,style:{display:s?"none":"block"},onClick:function(){return e.onRequest(c)},children:Object(j.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(n.Component)),C=(a(20),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(j.jsxs)("div",{className:"skeleton",children:[Object(j.jsxs)("div",{className:"pulse skeleton__header",children:[Object(j.jsx)("div",{className:"pulse skeleton__circle"}),Object(j.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"})]})]})}),k=(a(21),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:null,loading:!1,error:!1},e.marvelService=new b,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=e.props.charId;t&&(e.marvelService.getCharecter(t).then(e.onCharLoaded).catch(e.onError),e.onCharLoading())},e.onCharLoading=function(){e.setState({loading:!0})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=t||a||n?null:Object(j.jsx)(C,{}),c=n?Object(j.jsx)(p,{}):null,s=a?Object(j.jsx)(f,{}):null,i=a||n||!t?null:Object(j.jsx)(w,{char:t});return Object(j.jsxs)("div",{className:"char__info",children:[r,c,s,i]})}}]),a}(n.Component)),w=function(e){var t,a,n=e.char,r=n.name,c=n.description,s=n.thumbnale,i=n.homepage,l=n.wiki,o=n.comics;return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(t={objectFit:"contain"}),a=0===o.length?"There is no comics for this character":o.map((function(e,t){return Object(j.jsx)("li",{className:"char__comics-item",children:e.name},t)})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"char__basics",children:[Object(j.jsx)("img",{src:s,alt:"abyss",style:t}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"char__info-name",children:r}),Object(j.jsxs)("div",{className:"char__btns",children:[Object(j.jsx)("a",{href:i,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:l,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(j.jsx)("div",{className:"char__descr",children:c}),Object(j.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(j.jsx)("ul",{className:"char__comics-list",children:a})]})},T=k,S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return!0===this.state.error?Object(j.jsx)(p,{}):this.props.children}}]),a}(n.Component),L=a.p+"static/media/vision.067d4ae1.png",R=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(S,{children:Object(j.jsx)(_,{})}),Object(j.jsxs)("div",{className:"char__content",children:[Object(j.jsx)(S,{children:Object(j.jsx)(N,{onCharSelected:this.onCharSelected})}),Object(j.jsx)(S,{children:Object(j.jsx)(T,{charId:this.state.selectedChar})})]}),Object(j.jsx)("img",{className:"bg-decoration",src:L,alt:"vision"})]})]})}}]),a}(n.Component);a(22);c.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.556cbd27.chunk.js.map