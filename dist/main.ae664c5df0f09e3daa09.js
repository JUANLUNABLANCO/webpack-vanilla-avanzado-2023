!function(){var n,r={6937:function(n,r,e){"use strict";e(1539),e(8674);var s=e(381),o=e.n(s),t=e(3379),i=e.n(t),a=e(7795),c=e.n(a),l=e(569),u=e.n(l),d=e(3565),j=e.n(d),A=e(9216),b=e.n(A),f=e(4589),m=e.n(f),p=e(7895),h={};h.styleTagTransform=m(),h.setAttributes=j(),h.insert=u().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=b(),i()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,console.log("hello"),console.log(13),new Promise((function(n,r){setTimeout((function(){var r=o()().format("HH:mm:ss");n("Hello World, desde la promesa, wei!!",r),console.log(r)}),2e3)})).then((function(n){return console.log(n)}))},7895:function(n,r,e){"use strict";var s=e(7537),o=e.n(s),t=e(3645),i=e.n(t),a=e(4225),c=e(3831),l=e(1667),u=e.n(l),d=new URL(e(3210),e.b),j=i()(o());j.i(a.Z),j.i(c.Z);var A=u()(d);j.push([n.id,"p{font-family:'Courier New', Courier, monospace}p.scss{font-size:2rem;color:green}.image-bg{background-image:url("+A+");background-color:#cccccc;border:1px solid red;min-width:450px;height:600px}\n","",{version:3,sources:["webpack://./public/css/styles/app-scss.scss","webpack://./public/css/styles/img-urls.scss"],names:[],mappings:"AAAA,EACI,6CAA8C,CADlD,OAGQ,cAAe,CACf,WAAY,CACf,UCJD,wDAAmE,CACnE,wBAAyB,CACzB,oBAAqB,CACrB,eAAgB,CAChB,YAAa",sourcesContent:["p {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    &.scss {\r\n        font-size: 2rem;\r\n        color: green;\r\n    }\r\n}",".image-bg {\r\n    background-image: url('../assets/images/imagen-desde-scss-url.jpg');\r\n    background-color: #cccccc;\r\n    border: 1px solid red;\r\n    min-width: 450px;\r\n    height: 600px;\r\n}"],sourceRoot:""}]),r.Z=j},3831:function(n,r,e){"use strict";var s=e(7537),o=e.n(s),t=e(3645),i=e.n(t)()(o());i.push([n.id,"p.css {\r\n    font-size: 1.5rem;\r\n    color: red;\r\n}","",{version:3,sources:["webpack://./public/css/styles/app-css.css"],names:[],mappings:"AAAA;IACI,iBAAiB;IACjB,UAAU;AACd",sourcesContent:["p.css {\r\n    font-size: 1.5rem;\r\n    color: red;\r\n}"],sourceRoot:""}]),r.Z=i},4225:function(n,r,e){"use strict";var s=e(7537),o=e.n(s),t=e(3645),i=e.n(t)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n\r\n/* HTML5 display-role reset for older browsers */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}","",{version:3,sources:["webpack://./public/css/styles/reset.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;;AAGA,gDAAgD;;AAEhD;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n\r\n/* HTML5 display-role reset for older browsers */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}"],sourceRoot:""}]),r.Z=i},6700:function(n,r,e){var s={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":7930,"./se.js":7930,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function o(n){var r=t(n);return e(r)}function t(n){if(!e.o(s,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return s[n]}o.keys=function(){return Object.keys(s)},o.resolve=t,n.exports=o,o.id=6700},3210:function(n,r,e){"use strict";n.exports=e.p+"0c1bc39234cb98b138cf.jpg"}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var t=e[n]={id:n,loaded:!1,exports:{}};return r[n].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=r,n=[],s.O=function(r,e,o,t){if(!e){var i=1/0;for(u=0;u<n.length;u++){e=n[u][0],o=n[u][1],t=n[u][2];for(var a=!0,c=0;c<e.length;c++)(!1&t||i>=t)&&Object.keys(s.O).every((function(n){return s.O[n](e[c])}))?e.splice(c--,1):(a=!1,t<i&&(i=t));if(a){n.splice(u--,1);var l=o();void 0!==l&&(r=l)}}return r}t=t||0;for(var u=n.length;u>0&&n[u-1][2]>t;u--)n[u]=n[u-1];n[u]=[e,o,t]},s.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(r,{a:r}),r},s.d=function(n,r){for(var e in r)s.o(r,e)&&!s.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),s.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},s.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},s.p="",function(){s.b=document.baseURI||self.location.href;var n={179:0};s.O.j=function(r){return 0===n[r]};var r=function(r,e){var o,t,i=e[0],a=e[1],c=e[2],l=0;if(i.some((function(r){return 0!==n[r]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(c)var u=c(s)}for(r&&r(e);l<i.length;l++)t=i[l],s.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return s.O(u)},e=self.webpackChunk_02_curso_de_webpack_platzi=self.webpackChunk_02_curso_de_webpack_platzi||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}(),s.nc=void 0;var o=s.O(void 0,[797],(function(){return s(6937)}));o=s.O(o)}();
//# sourceMappingURL=main.ae664c5df0f09e3daa09.js.map