(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"526f":function(e,r,t){"use strict";var o;t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return o}));var a=function(){var e=this,r=e.$createElement;e._self._c},n=[]},"800c":function(e,r,t){"use strict";(function(e){t("9872");o(t("66fd"));var r=o(t("9e01"));function o(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},"9e01":function(e,r,t){"use strict";t.r(r);var o=t("526f"),a=t("e323");for(var n in a)"default"!==n&&function(e){t.d(r,e,(function(){return a[e]}))}(n);t("b6b4");var s,d=t("f0c5"),u=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);r["default"]=u.exports},b341:function(e,r,t){},b6b4:function(e,r,t){"use strict";var o=t("b341"),a=t.n(o);a.a},d4c6:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,o,a,n,s){try{var d=e[n](s),u=d.value}catch(i){return void t(i)}d.done?r(u):Promise.resolve(u).then(o,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(o,a){var s=e.apply(r,t);function d(e){n(s,o,a,d,u,"next",e)}function u(e){n(s,o,a,d,u,"throw",e)}d(void 0)}))}}var d={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(r){var t=this;return s(o.default.mark((function a(){var n;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.type=r.type,t.seat=r.seat,t.orderGoods=e.getStorageSync("orderGoods"),1!=t.seat)for(n=0;n<t.orderGoods.length;n++)0==t.total?t.total=parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber:t.total=parseFloat(t.total)+parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber;else t.total=parseFloat(t.orderGoods[0].total),t.address=t.orderGoods[0].address;t.total=t.total.toFixed(2);case 5:case"end":return o.stop()}}),a)})))()},onShow:function(){var r=this;return s(o.default.mark((function t(){var a,n,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,r.$api.session(a);case 3:if(n=t.sent,r.user=n.data,1==r.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||r.user.id!=r.address.userid){t.next=11;break}r.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,r.$api.defaultAddress(r.user.id);case 13:n=t.sent,r.address=n.data;case 15:case"end":return t.stop()}}),t)})))()},methods:{onSubmitTap:function(){var r=this;return s(o.default.mark((function t(){var a,n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=r,n=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var r=s(o.default.mark((function r(t){var s,d,u,i,c,l;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.confirm){r.next=60;break}if(s=a.type,d=!0,1!=s){r.next=10;break}if(!(a.user.money-a.total<0)){r.next=8;break}return a.$utils.msg("余额不足，请先充值"),d=!1,r.abrupt("return");case 8:r.next=15;break;case 10:if(2!=s){r.next=15;break}if(!(a.user.jifen-a.total<0)){r.next=15;break}return a.$utils.msg("积分不足，兑换商品失败"),d=!1,r.abrupt("return");case 15:u=0;case 16:if(!(u<a.orderGoods.length)){r.next=46;break}if("shangpinxinxi"!=a.orderGoods[u].tablename){r.next=35;break}return r.next=20,a.$api.info("shangpinxinxi",a.orderGoods[u].goodid);case 20:if(i=r.sent,!(i.data.onelimittimes>0)){r.next=26;break}if(!(a.orderGoods[u].buynumber>i.data.onelimittimes)){r.next=26;break}return a.$utils.msg("".concat(a.orderGoods[u].goodname,"超过可购买数量")),d=!1,r.abrupt("break",46);case 26:if(!(i.data.alllimittimes<a.orderGoods[u].buynumber)){r.next=32;break}return a.$utils.msg("".concat(a.orderGoods[u].goodname,"已售罄")),d=!1,r.abrupt("break",46);case 32:return 1!=a.seat?i.data.alllimittimes=i.data.alllimittimes-a.orderGoods[u].buynumber:i.data.selected=i.data.selected+","+a.orderGoods[u].activeSeat,r.next=35,a.$api.update("shangpinxinxi",i.data);case 35:return c={orderid:a.$utils.genTradeNo(),tablename:a.orderGoods[u].tablename,userid:a.user.id,goodid:a.orderGoods[u].goodid,goodname:a.orderGoods[u].goodname,picture:a.orderGoods[u].picture,buynumber:a.orderGoods[u].buynumber,discountprice:a.orderGoods[u].price,price:a.orderGoods[u].price,total:a.orderGoods[u].price*a.orderGoods[u].buynumber,discounttotal:a.orderGoods[u].price*a.orderGoods[u].buynumber,type:s,address:a.address.address,status:"已支付"},1==a.seat&&(c["address"]=a.address,l=a.address.split(",").length,c["buynumber"]=l,c["total"]=a.orderGoods[u].price*l,c["discounttotal"]=a.orderGoods[u].price*l),r.next=39,a.$api.add("orders",c);case 39:if(!a.orderGoods[u].id){r.next=43;break}return r.next=42,a.$api.del("cart",JSON.stringify([a.orderGoods[u].id]));case 42:e.removeStorageSync("cart".concat(a.orderGoods[u].goodid).concat(a.user.id));case 43:u++,r.next=16;break;case 46:if(!d){r.next=60;break}if(1!=s){r.next=55;break}return a.$utils.msgBack("支付成功"),a.user.money=a.user.money-a.total,(a.user.jifen||0==a.user.jifen)&&(a.user.jifen=parseFloat(a.user.jifen)+parseFloat(a.total)),r.next=53,a.$api.update(n,a.user);case 53:r.next=60;break;case 55:if(2!=s){r.next=60;break}return a.$utils.msgBack("兑换成功"),a.user.jifen=a.user.jifen-a.total,r.next=60,a.$api.update(n,a.user);case 60:case"end":return r.stop()}}),r)})));function t(e){return r.apply(this,arguments)}return t}()});case 3:case"end":return t.stop()}}),t)})))()},onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};r.default=d}).call(this,t("543d")["default"])},e323:function(e,r,t){"use strict";t.r(r);var o=t("d4c6"),a=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);r["default"]=a.a}},[["800c","common/runtime","common/vendor"]]]);