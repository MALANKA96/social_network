/*! For license information please see 5.4b2875ac.chunk.js.LICENSE.txt */
(this.webpackJsonpmy_app_reackt=this.webpackJsonpmy_app_reackt||[]).push([[5],{232:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(3),o=t(2),s=t(34),i=t(35),u=t(37),a=t(36),c=t(0),l=t(7),f=t(28),p=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var n=function(n){Object(u.a)(c,n);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(e,Object(r.a)({},this.props)):Object(o.jsx)(l.a,{to:"/login"})}}]),c}(c.Component);return Object(f.b)(p)(n)}},233:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},240:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(60);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,s=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(a){o=!0,s=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw s}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},294:function(e,n,t){e.exports={currentPage:"Paginator_currentPage__2K5sP",paginator:"Paginator_paginator__3fA_Z",pageNumber:"Paginator_pageNumber__1OvU6",selectedPage:"Paginator_selectedPage__30dkF"}},295:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===s)for(var u in r)t.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},296:function(e,n,t){e.exports={avaUrl:"Users_avaUrl__3idcK",currentPage:"Users_currentPage__1CTNw"}},302:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(34),s=t(35),i=t(37),u=t(36),a=t(0),c=t(233),l=t(66),f=t(240),p=t(294),g=t.n(p),h=t(295),d=t.n(h),j=function(e){for(var n=e.totalItemsCount,t=e.pageSize,o=e.currentPage,s=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,c=Math.ceil(n/t),p=[],h=1;h<=c;h++)p.push(h);var j=Math.ceil(c/u),b=Object(a.useState)(1),v=Object(f.a)(b,2),O=v[0],P=v[1],y=(O-1)*u+1,w=O*u;return Object(r.jsxs)("div",{className:g.a.paginator,children:[O>1&&Object(r.jsxs)("button",{onClick:function(){P(O-1)},children:[" ","prev"," "]}),p.filter((function(e){return e>=y&&e<=w})).map((function(e){return Object(r.jsx)("span",{className:d()(Object(l.a)({},g.a.selectedPage,o===e),g.a.pageNumber),onClick:function(n){return s(e)},children:e},e)})),j>O&&Object(r.jsxs)("button",{onClick:function(){P(O+1)},children:[" ","next"," "]})]})},b=t(296),v=t.n(b),O=t.p+"static/media/user.a6143582.png",P=t(13),y=function(e){var n=e.user,t=e.followingInProgress,o=e.unfollow,s=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(P.b,{to:"/profile/"+n.id,children:Object(r.jsx)("img",{src:null!=n.photos.small?n.photos.small:O,alt:"a",className:v.a.avaUrl})})}),Object(r.jsx)("div",{children:n.followed?Object(r.jsx)("button",{disabled:t.some((function(e){return e==n.id})),onClick:function(){o(n.id)},children:"unfollow"}):Object(r.jsx)("button",{disabled:t.some((function(e){return e==n.id})),onClick:function(){s(n.id)},children:"follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:n.name}),Object(r.jsx)("div",{children:n.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.sity"})]})]})]})},w=function(e){var n=e.currentPage,t=e.totalUsersCount,o=e.pageSize,s=e.onPageChanged,i=e.users,u=e.followingInProgress,a=e.unfollow,l=e.follow;Object(c.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users","followingInProgress","unfollow","follow"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{currentPage:n,pageSize:o,onPageChanged:s,totalItemsCount:t}),Object(r.jsx)("div",{children:i.map((function(e){return Object(r.jsx)(y,{user:e,followingInProgress:u,unfollow:a,follow:l},e.id)}))})]})},x=t(28),m=t(82),C=t(65),_=(t(232),t(20));function S(e,n){return e===n}function U(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var I=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=0,i=r.pop(),u=k(r),a=e.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(t)),c=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return a.apply(null,e)}));return c.resultFunc=i,c.dependencies=u,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,t=null,r=null;return function(){return U(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var A=I((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),z=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},N=function(e){return e.usersPage.currentPage},E=function(e){return e.usersPage.isFetching},M=function(e){return e.usersPage.toggleFollowingProgress},J=function(e){return e.usersPage.followingInProgress},K=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).onPageChanged=function(e){var n=r.props.pageSize;r.props.getUsers(e,n)},r}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.getUsers(n,t)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(C.a,{}):null,Object(r.jsx)(w,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),t}(a.Component);n.default=Object(_.d)(Object(x.b)((function(e){return{users:A(e),pageSize:z(e),totalUsersCount:F(e),currentPage:N(e),isFetching:E(e),toggleFollowingProgress:M(e),followingInProgress:J(e)}}),{unfollow:m.f,follow:m.b,setCurrentPage:m.d,toggleFollowingProgress:m.e,getUsers:m.c}))(K)}}]);
//# sourceMappingURL=5.4b2875ac.chunk.js.map