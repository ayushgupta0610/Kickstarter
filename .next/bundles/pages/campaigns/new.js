
          window.__NEXT_REGISTER_PAGE('/campaigns/new', function() {
            var comp = module.exports=webpackJsonp([9],{459:function(e,t,a){e.exports=a(460)},460:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(38),u=n(r),o=a(41),l=n(o),i=a(19),s=n(i),c=a(4),f=n(c),d=a(5),m=n(d),p=a(6),h=n(p),g=a(7),b=n(g),v=a(0),C=n(v),M=a(51),E=a(107),_=n(E),S=a(216),x=n(S),y=a(74),k=n(y),w=a(73),F=function(e){function t(){var e,a,n,r,o=this;(0,f.default)(this,t);for(var i=arguments.length,c=Array(i),d=0;d<i;d++)c[d]=arguments[d];return a=n=(0,h.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(c))),n.state={minimumContribution:"",errorMessage:"",loading:!1},n.onSubmit=function(){var e=(0,l.default)(u.default.mark(function e(t){var a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({loading:!0,errorMessage:""}),e.prev=2,e.next=5,k.default.eth.getAccounts();case 5:return a=e.sent,e.next=8,x.default.methods.createCampaign(n.state.minimumContribution).send({from:a[0]});case 8:w.Router.pushRoute("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),n.setState({errorMessage:e.t0.message});case 14:n.setState({loading:!1});case 15:case"end":return e.stop()}},e,o,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),r=a,(0,h.default)(n,r)}return(0,b.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this;return C.default.createElement(_.default,null,C.default.createElement("h3",null," Create a Campaign "),C.default.createElement(M.Form,{onSubmit:this.onSubmit,error:!!this.state.errorMessage},C.default.createElement(M.Form.Field,null,C.default.createElement("label",null," Minimum Contribution "),C.default.createElement(M.Input,{label:"wei",labelPosition:"right",value:this.state.minimumContribution,onChange:function(t){return e.setState({minimumContribution:t.target.value})}})),C.default.createElement(M.Message,{error:!0,header:"Oops!",content:this.state.errorMessage}),C.default.createElement(M.Button,{loading:this.state.loading,primary:!0},"Create!")))}}]),t}(v.Component);t.default=F}},[459]);
            return { page: comp.default }
          })
        