(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n(8),i=n.n(a),l=n(6),r=n(2),o=n(3),d=n(5),h=n(4),u=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleDelete=function(){e.props.handleDelete(e.props.index)},e.handleClick=function(){e.props.handleClick(e.props.index)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:["item",this.props.checked?"checked":"unchecked"].join(" "),children:[Object(s.jsx)("input",{type:"checkbox",className:"input",onClick:this.handleClick,checked:this.props.checked,readOnly:!0}),Object(s.jsx)("div",{onClick:this.handleClick,className:"task",children:this.props.item}),Object(s.jsx)("div",{onClick:this.handleDelete,className:"deleteBtn",children:Object(s.jsx)("svg",{className:"icon",children:Object(s.jsx)("use",{xlinkHref:"#icon-shanchu"})})})]})}}]),n}(c.Component),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"border",children:[Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("h2",{children:this.props.title}),Object(s.jsx)("div",{className:"number",children:this.props.taskList.length})]}),Object(s.jsx)("div",{children:this.props.taskList.map((function(t,n){return Object(s.jsx)(u,{item:t,index:n,checked:e.props.checked,handleDelete:e.props.handleDelete,handleClick:e.props.handleClick},n)}))})]})}}]),n}(c.Component),j=(n(14),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;Object(r.a)(this,n),(s=t.call(this,e)).keyDown=function(e){13===e.keyCode&&s.addTask()},s.handleInput=function(e){s.setState((function(){return{inputValue:e.target.value}}))},s.addTask=function(){""!==s.state.inputValue&&s.setState((function(e){return{taskList:[].concat(Object(l.a)(e.taskList),[s.state.inputValue]),inputValue:""}}))},s.handleClick=function(e){var t=s.handleDelete(e);s.setState((function(e){return{completedList:[].concat(Object(l.a)(e.completedList),[t])}}))},s.handleItemClick=function(e){var t=s.handleItemDelete(e);s.setState((function(e){return{taskList:[].concat(Object(l.a)(e.taskList),[t])}}))},s.handleDelete=function(e){return s.setState((function(t){var n=Object(l.a)(t.taskList);return n.splice(e,1),{taskList:n}})),s.state.taskList[e]},s.handleItemDelete=function(e){return s.setState((function(t){var n=Object(l.a)(t.completedList);return n.splice(e,1),{completedList:n}})),s.state.completedList[e]},s.listener=function(e){localStorage.setItem("taskList",JSON.stringify(s.state.taskList)),localStorage.setItem("completedList",JSON.stringify(s.state.completedList))};var c=localStorage.getItem("taskList"),a=localStorage.getItem("completedList");return s.state={inputValue:"",taskList:c?JSON.parse(c):[],completedList:a?JSON.parse(a):[]},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.listener)}},{key:"render",value:function(){return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("div",{className:"nav",children:"ToDoList"}),Object(s.jsx)("input",{className:"input",placeholder:"\u6dfb\u52a0todo",value:this.state.inputValue,onChange:this.handleInput,onKeyDown:this.keyDown,maxLength:"25"}),Object(s.jsx)("button",{className:"button",onClick:this.addTask,children:"\u6dfb\u52a0"})]})}),Object(s.jsxs)("div",{className:"context",children:[Object(s.jsxs)("div",{className:"taskList",children:[Object(s.jsx)(p,{title:"\u6b63\u5728\u8fdb\u884c",taskList:this.state.taskList,handleDelete:this.handleDelete,handleClick:this.handleClick,checked:""}),Object(s.jsx)(p,{title:"\u5df2\u7ecf\u5b8c\u6210",taskList:this.state.completedList,handleDelete:this.handleItemDelete,handleClick:this.handleItemClick,checked:"checked"})]}),Object(s.jsxs)("div",{className:"copyright",children:["Created by WXC",Object(s.jsx)("br",{}),"Copyright \xa9 2021"]})]})]})}}]),n}(c.Component));i.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.52d2e13d.chunk.js.map