(this["webpackJsonpweather-test-app"]=this["webpackJsonpweather-test-app"]||[]).push([[0],{174:function(e,t,a){e.exports=a(304)},179:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},282:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),o=a.n(c),l=(a(179),a(47)),u=a(53),i=a(23),f=a(163),s=function(e){return fetch(e).then((function(e){return e.json()}))},m="https://api.openweathermap.org/data/2.5/",d="&units=metric&lang=ru&mode=json&appid=",p="HANDLE_SUCCESS",h="HANDLE_ERROR",E="ADD_CITY",y=function(){return function(e,t){var a=function(e){return e.cityName}(t());Promise.all([s("".concat(m,"weather?q=").concat(a+d+"c792484ade42380886f51003cfcaf04d")),s("".concat(m,"forecast?q=").concat(a+d+"c792484ade42380886f51003cfcaf04d"))]).then((function(t){var a=Object(f.a)(t,2),r=a[0],n=a[1].list.filter((function(e){return e.dt_txt.includes("06:00:00")}));e(function(e,t){return{type:p,weather:e,forecast:t}}(r,n))})).catch((function(){return e({type:h,payload:"Loading failed"})}))}};function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={hasError:null,weather:null,forecast:[],cityName:"kharkiv"},v=a(146),g=(a(184),a(319)),j=a(313),N=a(305),D=a(314),C=a(318),P=(a(185),function(e){var t=e.day,a=1e3*t.dt,r=new Date(a).toLocaleDateString("ru",{weekday:"long",day:"numeric",month:"long"}),c="owf owf-"+t.weather[0].id+" owf-5x";return n.a.createElement(C.a,{className:"claim_card"},n.a.createElement(C.a.Content,null,n.a.createElement(C.a.Header,null,r),n.a.createElement("i",{className:c}),n.a.createElement(C.a.Meta,null,Math.round(t.main.temp)," \xb0C"),n.a.createElement(C.a.Description,null,t.weather[0].description)))}),k=(a(282),Object(l.b)((function(e){return{weather:e.weather,error:e.hasError,forecast:e.forecast}}),(function(e){return{load:function(t){return e(y())}}}))((function(e){var t=e.weather,a=e.forecast,c=e.error,o=e.load;if(Object(r.useEffect)((function(){o()}),[o]),c)return n.a.createElement(g.a,{negative:!0},n.a.createElement(g.a.Header,null,c),n.a.createElement(j.a,null),n.a.createElement(N.a,{onClick:o},"Try again"));if(t&&a){return n.a.createElement("div",null,n.a.createElement("h1",null,"Weather in ",t.name),n.a.createElement("div",{className:"weather"},n.a.createElement(P,{day:t})),n.a.createElement("div",{className:"forecast"},a.map((function(e,t){return n.a.createElement(P,{day:e,key:t})}))))}return n.a.createElement(D.a,{className:"claim_loader",active:!0,inline:"centered"})}))),S=a(316),_=a(315),x=Object(l.b)(null,(function(e){return{load:function(){return e(y())},addCity:function(t){return e(function(e){return{type:E,city:e}}(t))}}}))((function(e){var t=e.load,a=e.addCity;return n.a.createElement(S.a,{className:"search_bar",onSubmit:t},n.a.createElement(_.a,{type:"text",onChange:function(e){return a(e.target.value)}}),n.a.createElement(_.a,{type:"submit",value:"Get weather"}))})),H=Object(u.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return b({},e,{hasError:t.payload});case p:return b({},e,{weather:t.weather,forecast:t.forecast,hasError:null});case E:return b({},e,{cityName:t.city});default:return e}}),Object(u.a)(v.a));var L=function(){return n.a.createElement(l.a,{store:H},n.a.createElement("div",{className:"wrapper"},n.a.createElement(x,null),n.a.createElement(k,null)))};o.a.render(n.a.createElement(L,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.c052e6ff.chunk.js.map