(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{20:function(e,t,n){e.exports={API_ENDPOINT:"https://sleepy-harbor-21485.herokuapp.com/api"}},23:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(24);var a=n(6),o=n(0),c=n.n(o),l=n(15),r=n.n(l),u=n(16),i=n(17),s=n(21),m=n(18),p=n(22);function f(){return c.a.createElement("div",{className:"home"},c.a.createElement("h1",null,"Welcome To Petful"),c.a.createElement("p",null,"We are an animal shelter for cats and dogs. Adoption is on a first come first serve basis. If you are lucky, you may be first in line! If not, you will be put in a queue before you can take your new pet home."),c.a.createElement(a.b,{to:{pathname:"/adoption"}},c.a.createElement("button",null,"Start Your Search Now!")))}function h(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Pick your fury friend!"),c.a.createElement(a.b,{to:{pathname:"/dog"}},c.a.createElement("button",null,"Dogs")),c.a.createElement(a.b,{to:{pathname:"/cat"}},c.a.createElement("button",null,"Cats")))}var E=c.a.createContext({});function d(){return c.a.createElement(E.Consumer,null,(function(e){console.log(e.cats),console.log(e.cats[0]);var t=e.cats[0];return console.log(t),c.a.createElement("div",null,c.a.createElement("h1",null,"Cats"),c.a.createElement("h2",null,t.name),c.a.createElement("img",{src:t.imageURL,alt:"cat picture"}),c.a.createElement("h3",null,"Descriptions:"),c.a.createElement("button",null,"Adopt Me"),c.a.createElement("button",null,"Next"))}))}function b(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Dogs"))}var g=n(1),v=n(20),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={dogs:[],cats:[],people:[],getCats:function(){fetch("".concat(v.API_ENDPOINT,"/cat")).then((function(e){return e.json()})).then((function(e){n.setState({cats:e})})).catch((function(e){console.log(e)}))},getDogs:function(){},getPeople:function(){},name:"Evi"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.state.getCats()}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(E.Provider,{value:this.state},c.a.createElement(g.a,{exact:!0,path:"/",component:f}),c.a.createElement(g.a,{path:"/adoption",component:h}),c.a.createElement(g.a,{path:"/dog",component:b}),c.a.createElement(g.a,{path:"/cat",component:d})))}}]),t}(o.Component);r.a.render(c.a.createElement(a.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9f2af7a5.chunk.js.map