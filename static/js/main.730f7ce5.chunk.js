(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,r,c){e.exports=c(273)},143:function(e,r,c){},270:function(e,r,c){},271:function(e,r,c){},273:function(e,r,c){"use strict";c.r(r);var o=c(0),t=c.n(o),n=c(7),a=c.n(n),s=c(50),i=c(46),h=(c(143),c(21));var l={array:function(){for(var e={},r=1;r<=12;r++){e[r]={};for(var c=1;c<=12;c++)e[r][c]={},r<=2||r>=11||c<=2||c>=11?e[r][c].checkerType="noneChecker":(r+c)%2===0?e[r][c].color="white":(e[r][c].checkerType=r<=5?"blackType":r>=8?"whiteType":"none",e[r][c].color="black",e[r][c].click=" ",e[r][c].onDiagonals=[])}return e}(),diagonals:{a1h8:[[10,3],[9,4],[8,5],[7,6],[6,7],[5,8],[4,9],[3,10]],c1h6:[[10,5],[9,6],[8,7],[7,8],[6,9],[5,10]],c1a3:[[10,5],[9,4],[8,3]],e1h4:[[10,7],[9,8],[8,9],[7,10]],e1a5:[[10,7],[9,6],[8,5],[7,4],[6,3]],g1h2:[[10,9],[9,10]],g1a2:[[10,9],[9,8],[8,7],[7,6],[6,5],[5,4],[4,3]],a3f8:[[8,3],[7,4],[6,5],[5,6],[4,7],[3,8]],a5d8:[[6,3],[5,4],[4,5],[3,6]],a7b8:[[4,3],[3,4]],h2b8:[[9,10],[8,9],[7,8],[6,7],[5,6],[4,5],[3,4]],h4d8:[[7,10],[6,9],[5,8],[4,7],[3,6]],h6f8:[[5,10],[4,9],[3,8]]},colorReproduced:"white",pressToMove:{cutOut:[],insert:[]},infoChekersForBattle:[],onlyClickThisCheckers:[],battleIs:!1,onlyClickFirstCheckersInThis:[],historyArray:[]};var p=Object(i.b)({grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1?arguments[1]:void 0;return"CHANGE_ARRAY_GRID"===r.type?Object(h.a)({},e,{array:r.array}):"CHANGE_HISTORY_ARRAY"===r.type?Object(h.a)({},e,{historyArray:r.array}):"CHANGE_ONLY_CLICK_FIRST"===r.type?Object(h.a)({},e,{onlyClickFirstCheckersInThis:r.array}):"CHANGE_BATTLE_IS"===r.type?Object(h.a)({},e,{battleIs:r.value}):"CHANGE_INFO_CHECKERS_FOR_BATTLE"===r.type?Object(h.a)({},e,{infoChekersForBattle:r.infoChekersForBattle}):"CHANGE_CLICK_CHECKERS"===r.type?Object(h.a)({},e,{onlyClickThisCheckers:r.objectCheckers}):"CHANGE_COLOR_REPRODUCED"===r.type?Object(h.a)({},e,{colorReproduced:r.colorReproduced}):"CHANGE_RENDER_GRID"===r.type?Object(h.a)({},e,{renderGrid:r.array}):"CHANGE_SELECTED_CHECKERS"===r.type?Object(h.a)({},e,{selectCheckers:r.value}):"CHANGE_PRESS_TO_MOVE"===r.type?Object(h.a)({},e,{pressToMove:r.pressToMove}):e}}),k=c(29),u=c(30),y=c(33),f=c(31),C=c(34),T=c(132),d=c(35),m=(c(56),c(276)),v=c(274),g=c(275),b=c(14),E=c(73),O=function(e){function r(){var e,c;Object(k.a)(this,r);for(var o=arguments.length,t=new Array(o),n=0;n<o;n++)t[n]=arguments[n];return(c=Object(y.a)(this,(e=Object(f.a)(r)).call.apply(e,[this].concat(t)))).handleSubmit=function(e){e.preventDefault(),c.props.form.validateFields(function(e,r){if(!e){var o=JSON.parse(localStorage.getItem("registraion"));if(o){o.some(function(e,c){return e.email===r.username&&(e.password===r.password?(o[c].isOnline=!0,!0):(m.a.error("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0432\u0435\u0440\u043d\u044b\u0439!"),!1))})?(localStorage.setItem("registraion",JSON.stringify(o)),c.props.history.push("/checkers")):m.a.error("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")}else m.a.error("\u0411\u0430\u0437\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u0443\u0441\u0442\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c!")}})},c.handeRegistration=function(){c.props.history.push("/registration")},c}return Object(C.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return t.a.createElement("div",{className:"content"},t.a.createElement("div",{className:"d1"},"Welcome"),t.a.createElement(v.a,{onSubmit:this.handleSubmit,className:"login-form",fun:this.props},t.a.createElement(v.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(t.a.createElement(g.a,{prefix:t.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),t.a.createElement(v.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(t.a.createElement(g.a,{prefix:t.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),t.a.createElement(v.a.Item,null,t.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:this.handeClick},"Log in"),"Or",t.a.createElement(E.a,{type:"link",onClick:this.handeRegistration},"register now!"))))}}]),r}(t.a.Component),w=v.a.create({name:"normal_login"})(O),I=(c(270),function(e){function r(){var e,c;Object(k.a)(this,r);for(var o=arguments.length,t=new Array(o),n=0;n<o;n++)t[n]=arguments[n];return(c=Object(y.a)(this,(e=Object(f.a)(r)).call.apply(e,[this].concat(t)))).handleSubmit=function(e){e.preventDefault(),c.props.form.validateFieldsAndScroll(function(e,r){if(!e){var o=JSON.parse(localStorage.getItem("registraion"));if(o){o.some(function(e){return e.email===r.email})?m.a.error("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"):(r.isOnline=!1,delete r.confirm,o.push(r),localStorage.setItem("registraion",JSON.stringify(o)),m.a.success("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d"),c.props.history.push("/login"))}else{var t=[];r.isOnline=!1,delete r.confirm,t.push(r),localStorage.setItem("registraion",JSON.stringify(t)),m.a.success("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d"),c.props.history.push("/login")}}})},c.handleConfirmBlur=function(e){var r=e.target.value;c.props.onChangeConfirmDirty(c.props.confirmDirty||!!r)},c.compareToFirstPassword=function(e,r,o){var t=c.props.form;r&&r!==t.getFieldValue("password")?o("Two passwords that you enter is inconsistent!"):o()},c.validateToNextPassword=function(e,r,o){var t=c.props.form;r&&c.props.confirmDirty&&t.validateFields(["confirm"],{force:!0}),o()},c.handleBack=function(){c.props.history.goBack()},c}return Object(C.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return t.a.createElement("div",{className:"content"},t.a.createElement("div",{className:"d1"},"Register"),t.a.createElement(v.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),t.a.createElement(v.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(t.a.createElement(g.a,null))),t.a.createElement(v.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(t.a.createElement(g.a.Password,null))),t.a.createElement(v.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(t.a.createElement(g.a.Password,{onBlur:this.handleConfirmBlur}))),t.a.createElement(v.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},t.a.createElement("div",{className:"button_align"},t.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Register"),t.a.createElement(E.a,{type:"danger",onClick:this.handleBack},t.a.createElement(b.a,{type:"left"}),"Go back")))))}}]),r}(t.a.Component)),N=v.a.create({name:"register"})(I),_=Object(s.b)(function(e){return{confirmDirty:e.confirmDirty}},function(e){return{onChangeConfirmDirty:function(r){e({type:"CHANGE_CONFIRM_DIRTY",payload:r})}}})(N),M=c(104),R=(c(271),function(e){function r(){var e,c;Object(k.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(c=Object(y.a)(this,(e=Object(f.a)(r)).call.apply(e,[this].concat(n)))).transferMove=function(e){var r=c.checkAllCheckers([e[0],e[1]]);0!==r[0].length?(c.props.onChangeOnlyClickFirst(r),c.props.onChangeBattleIs(!0)):!1===r[1]&&m.a.success("\u041a\u043e\u043d\u0435\u0446 \u0438\u0433\u0440\u044b, "+e[1]+" \u0438\u0433\u0440\u043e\u043a \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b!")},c.handleClick=function(e,r){var o=JSON.parse(JSON.stringify(c.props.array)),t=o[e][r].checkerType,n=c.props.colorReproduced,a=("whiteType"===t||"whiteQeen"===t)&&"white"===n||("blackType"===t||"blackQeen"===t)&&"black"===n;if(void 0!==o[e][r].checkerType){var s=c.calculationMovesChecker([o,e,r]);if(0===c.props.pressToMove.cutOut.length){if(a)if(c.props.battleIs)0!==s.tempForBattle.length?(s.tempForBattle.forEach(function(c){c.whoBattle[0]===+e&&c.whoBattle[1]===+r&&("number"===typeof c.checkersMoveInThis[0]?o[c.checkersMoveInThis[0]][c.checkersMoveInThis[1]].click="checkerClick":c.checkersMoveInThis.forEach(function(e){console.log("\u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0431\u043e\u0435",c.checkersMoveInThis,e),o[e[0]][e[1]].click="checkerClick"}))}),o[e][r].click="checkerClick",c.props.onChangeSelectedCheckers([+e,+r]),c.props.onChangeClickCheckers(c.filterObject(o)),c.saveChanges(o),c.props.onChangePressToMove({cutOut:[e,r],insert:[]})):m.a.error("\u0411\u043e\u0439 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d");else c.calculationPossibleMoves([o,e,r]),c.props.onChangePressToMove({cutOut:[e,r],insert:[]});else m.a.error("\u0412\u044b\u0431\u0438\u0440\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0448\u0430\u0448\u043a\u0443 \u0441\u0432\u043e\u0435\u0433\u043e \u0446\u0432\u0435\u0442\u0430")}else{var i="checkerClick"===o[e][r].click;if(!i&&a)if(c.props.battleIs&&0!==s.tempForBattle.length){for(var h in o)for(var l in o[h])"white"!==o[h][l].color&&(o[h][l].click="");s.tempForBattle.forEach(function(c){c.whoBattle[0]===+e&&c.whoBattle[1]===+r&&("number"===typeof c.checkersMoveInThis[0]?o[c.checkersMoveInThis[0]][c.checkersMoveInThis[1]].click="checkerClick":c.checkersMoveInThis.forEach(function(e){o[e[0]][e[1]].click="checkerClick"}))}),o[e][r].click="checkerClick",c.props.onChangeSelectedCheckers([+e,+r]),c.props.onChangeClickCheckers(c.filterObject(o)),c.saveChanges(o),c.props.onChangePressToMove({cutOut:[e,r],insert:[]})}else c.props.battleIs||(c.calculationPossibleMoves([o,e,r]),c.props.onChangePressToMove({cutOut:[e,r],insert:[]}));else if(i){var p=c.calculationMovesChecker([o,c.props.pressToMove.cutOut[0],c.props.pressToMove.cutOut[1]]);c.props.pressToMove.cutOut[0]!==e&&c.props.pressToMove.cutOut[1]!==r&&c.moveCheckers({cutOut:c.props.pressToMove.cutOut,insert:[e,r],infoBattle:p.tempForBattle})}else i||m.a.error("\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 \u043d\u0435 \u0442\u0443\u0434\u0430")}}},c.saveChanges=function(e){c.props.onChangeGridArray(e),c.renderGrid(e)},c.setDiagonals=function(e){var r=JSON.parse(JSON.stringify(e)),o=c.props.diagonals,t=function(e){var c=function(c){if("noneChecker"!==r[e][c].checkerType&&"none"!==r[e][c].checkerType){r[e][c].onDiagonals=[];var t=function(t){o[t].forEach(function(o){o[0]===+e&&o[1]===+c&&r[e][c].onDiagonals.push(t)})};for(var n in o)t(n)}};for(var t in r[e])c(t)};for(var n in r)t(n);c.saveChanges(r)},c.moveCheckers=function(e){var r=JSON.parse(JSON.stringify(c.props.array)),o=+e.cutOut[0],t=+e.insert[0],n=+e.cutOut[1],a=+e.insert[1],s=!1,i=e.infoBattle;console.log("battle in this",i);var h=function(e){console.log(typeof i[e].checkersMoveInThis[0]),"number"===typeof i[e].checkersMoveInThis[0]?i[e].checkersMoveInThis[0]===t&&i[e].checkersMoveInThis[1]===a&&(r[i[e].checkersLose[0]][i[e].checkersLose[1]].checkerType="none",s=!0):i[e].checkersMoveInThis.forEach(function(c){c[0]===t&&c[1]===a&&(r[i[e].checkersLose[0]][i[e].checkersLose[1]].checkerType="none",s=!0)}),i[e].checkersMoveInThis.forEach(function(c){c[0]===t&&c[1]===a&&(r[i[e].checkersLose[0]][i[e].checkersLose[1]].checkerType="none",s=!0)})};for(var l in i)h(l);for(var l in r)for(var p in r[l])"white"!==r[l][p].color&&(r[l][p].click="");("whiteType"===r[o][n].checkerType&&3===t?r[t][a].checkerType="whiteQeen":"blackType"===r[o][n].checkerType&&10===t?r[t][a].checkerType="blackQeen":r[t][a].checkerType=r[o][n].checkerType,r[o][n].checkerType="none",s)?0===c.calculationMovesChecker([r,t,a]).tempForBattle.length?(c.props.onChangeColorReproduced("white"===c.props.colorReproduced?"black":"white"),c.props.onChangeInfoCheckersForBattle([]),c.props.onChangeHistoryArray([].concat(Object(M.a)(c.props.historyArray),[r])),c.props.onChangePressToMove({cutOut:[],insert:[]}),c.props.onChangeBattleIs(!1),c.transferMove([r,"white"===c.props.colorReproduced?"black":"white"])):(c.props.onChangePressToMove({cutOut:[t,a],insert:[]}),c.props.onChangeSelectedCheckers([t,a])):(c.props.onChangeColorReproduced("white"===c.props.colorReproduced?"black":"white"),c.props.onChangeInfoCheckersForBattle([]),c.props.onChangeHistoryArray([].concat(Object(M.a)(c.props.historyArray),[r])),c.props.onChangePressToMove({cutOut:[],insert:[]}),c.props.onChangeBattleIs(!1),c.transferMove([r,"white"===c.props.colorReproduced?"black":"white"]));c.saveChanges(r),c.setDiagonals(r)},c.filterObject=function(e){var r,c,o=[];for(r in e)for(c in e[r])"checkerClick"===e[r][c].click&&o.push([r,c]);return o},c.calculationMovesChecker=function(e){var r=JSON.parse(JSON.stringify(e[0])),o=+e[1],t=+e[2],n=[],a=[],s=o,i=t,h=r[o][t].checkerType,l="blackQeen"===h||"blackType"===h?["whiteType","whiteQeen"]:["blackType","blackQeen"];for(var p in r)for(var k in r[p])"white"!==r[p][k].color&&(r[p][k].click="");if("blackQeen"===h||"whiteQeen"===h)for(var u=1;u<=4;u++){var y=[];switch(u){case 1:for(s-=1,i+=1;"noneChecker"!==r[s][i].checkerType;){if("none"===r[s][i].checkerType)y.push([s,i]);else{if(r[s][i].checkerType!==l[0]&&r[s][i].checkerType!==l[1])break;if("none"!==r[s-1][i+1].checkerType)break;for(var f=s-2,C=i+2,T=[[s-1,i+1]];"noneChecker"!==r[f][C].checkerType&&"none"===r[f][C].checkerType;)T.push([f,C]),f-=1,C+=1;a.push({whoBattle:[o,t],checkersLose:[s,i],checkersMoveInThis:T})}s-=1,i+=1}break;case 2:for(s-=1,i-=1;"noneChecker"!==r[s][i].checkerType;){if("none"===r[s][i].checkerType)y.push([s,i]);else{if(r[s][i].checkerType!==l[0]&&r[s][i].checkerType!==l[1])break;if("none"!==r[s-1][i-1].checkerType)break;for(var d=s-2,m=i-2,v=[[s-1,i-1]];"noneChecker"!==r[d][m].checkerType&&"none"===r[d][m].checkerType;)v.push([d,m]),d-=1,m-=1;a.push({whoBattle:[o,t],checkersLose:[s,i],checkersMoveInThis:v})}s-=1,i-=1}break;case 3:for(s+=1,i+=1;"noneChecker"!==r[s][i].checkerType;){if("none"===r[s][i].checkerType)y.push([s,i]);else{if(r[s][i].checkerType!==l[0]&&r[s][i].checkerType!==l[1])break;if("none"!==r[s+1][i+1].checkerType)break;for(var g=s+2,b=i+2,E=[[s+1,i+1]];"noneChecker"!==r[g][b].checkerType&&"none"===r[g][b].checkerType;)E.push([g,b]),g+=1,b+=1;a.push({whoBattle:[o,t],checkersLose:[s,i],checkersMoveInThis:E})}s+=1,i+=1}break;case 4:for(s+=1,i-=1;"noneChecker"!==r[s][i].checkerType;){if("none"===r[s][i].checkerType)y.push([s,i]);else{if(r[s][i].checkerType!==l[0]&&r[s][i].checkerType!==l[1])break;if("none"!==r[s+1][i-1].checkerType)break;for(var O=s+2,w=i-2,I=[[s+1,i-1]];"noneChecker"!==r[O][w].checkerType&&"none"===r[O][w].checkerType;)I.push([O,w]),O+=1,w-=1;a.push({whoBattle:[o,t],checkersLose:[s,i],checkersMoveInThis:I})}s+=1,i-=1}break;default:continue}!1,s=o,i=t,y.forEach(function(e){n.push(e)})}else r[o][t].onDiagonals.forEach(function(e){var s=[];"blackType"!==h&&"whiteType"!==h||(s=(s=(s=c.props.diagonals[e].filter(function(e){return Math.abs(e[0]-o)<=2&&Math.abs(e[1]-t)<=2})).filter(function(e){return"none"===r[e[0]][e[1]].checkerType})).filter(function(e){var c=e[0],n=e[1];return(c!==o||n!==t)&&(c===o-1&&n===t-1?"whiteType"===h&&("blackType"!==r[c][n].checkerType&&"blackQeen"!==r[c][n].checkerType||"none"!==r[c-1][n-1].checkerType):c===o-1&&n===t+1?"whiteType"===h&&("blackType"!==r[c][n].checkerType&&"blackQeen"!==r[c][n].checkerType||"none"!==r[c-1][n+1].checkerType):c===o+1&&n===t+1?"blackType"===h&&("whiteType"!==r[c][n].checkerType&&"whiteQeen"!==r[c][n].checkerType||"none"!==r[c+1][n+1].checkerType):c===o+1&&n===t-1?"blackType"===h&&("whiteType"!==r[c][n].checkerType&&"whiteQeen"!==r[c][n].checkerType||"none"!==r[c+1][n-1].checkerType):c===o-2&&n===t-2?"none"===r[c][n].checkerType&&(r[c+1][n+1].checkerType===l[0]||r[c+1][n+1].checkerType===l[1])&&(a.push({whoBattle:[o,t],checkersLose:[c+1,n+1],checkersMoveInThis:[c,n]}),!0):c===o-2&&n===t+2?"none"===r[c][n].checkerType&&(r[c+1][n-1].checkerType===l[0]||r[c+1][n-1].checkerType===l[1])&&(a.push({whoBattle:[o,t],checkersLose:[c+1,n-1],checkersMoveInThis:[c,n]}),!0):c===o+2&&n===t+2?"none"===r[c][n].checkerType&&(r[c-1][n-1].checkerType===l[0]||r[c-1][n-1].checkerType===l[1])&&(a.push({whoBattle:[o,t],checkersLose:[c-1,n-1],checkersMoveInThis:[c,n]}),!0):c===o+2&&n===t-2&&("none"===r[c][n].checkerType&&(r[c-1][n+1].checkerType===l[0]||r[c-1][n+1].checkerType===l[1])&&(a.push({whoBattle:[o,t],checkersLose:[c-1,n+1],checkersMoveInThis:[c,n]}),!0)))})),s.forEach(function(e){n.push(e)})});return{temp:n,tempForBattle:a,tempGrid:r}},c.checkAllCheckers=function(e){var r=[],o=!1,t=e[0],n="white"===e[1]?["whiteType","whiteQeen"]:["blackType","blackQeen"];for(var a in t)for(var s in t[a])if(t[a][s].checkerType===n[0]||t[a][s].checkerType===n[1]){var i=c.calculationMovesChecker([t,a,s]);0!==i.temp.length&&(o=!0),i.tempForBattle.forEach(function(e){r.push(e)})}return[r,o]},c.calculationPossibleMoves=function(e){var r=c.calculationMovesChecker([e[0],e[1],e[2]]),o=JSON.parse(JSON.stringify(r.tempGrid)),t=e[1],n=e[2];return r.temp.forEach(function(e){o[e[0]][e[1]].click="checkerClick"}),c.props.onChangeSelectedCheckers([+t,+n]),c.props.onChangeClickCheckers(c.filterObject(o)),c.saveChanges(o),r},c.renderGrid=function(e){var r=[],o=JSON.parse(JSON.stringify(e));for(var n in o)for(var a in o[n])"noneChecker"!==o[n][a].checkerType&&function(){var e=n,s=a;r.push(t.a.createElement("div",{className:o[n][a].color+" "+o[n][a].checkerType+" "+o[n][a].click,key:n+" "+a,onClick:function(){c.handleClick(e,s)}}))}();c.props.onChangeRenderArray(r)},c.goToHitory=function(e){c.saveChanges(e)},c}return Object(C.a)(r,e),Object(u.a)(r,[{key:"componentWillMount",value:function(){this.setDiagonals(this.props.array),this.renderGrid(this.props.array)}},{key:"render",value:function(){var e=this;return t.a.createElement("div",{className:"gridCheckers"},t.a.createElement("div",{className:"someText"},"Checkers",t.a.createElement("br",null),"\u0425\u043e\u0434 : ",this.props.colorReproduced),t.a.createElement("div",{className:"mainBody"},t.a.createElement("div",{className:"centerAlign"},this.props.renderGrid),t.a.createElement("div",{className:"historyAlign"},this.props.historyArray.map(function(r,c){return t.a.createElement("div",{key:c,className:"historyItem",onClick:function(){return e.goToHitory(r)}},"#",c)}))),t.a.createElement("div",{className:"someText"},"Developed by Adm1ral_den"))}}]),r}(t.a.Component)),A=Object(s.b)(function(e){return{array:e.grid.array,renderGrid:e.grid.renderGrid,selectedCheckers:e.grid.selectCheckers,colorReproduced:e.grid.colorReproduced,pressToMove:e.grid.pressToMove,onlyClickThisCheckers:e.grid.onlyClickThisCheckers,diagonals:e.grid.diagonals,infoChekersForBattle:e.grid.infoChekersForBattle,battleIs:e.grid.battleIs,onlyClickFirstCheckersInThis:e.grid.onlyClickFirstCheckersInThis,historyArray:e.grid.historyArray}},function(e){return{onChangeHistoryArray:function(r){e({type:"CHANGE_HISTORY_ARRAY",array:r})},onChangeOnlyClickFirst:function(r){e({type:"CHANGE_ONLY_CLICK_FIRST",array:r})},onChangeBattleIs:function(r){e({type:"CHANGE_BATTLE_IS",value:r})},onChangeGridArray:function(r){e({type:"CHANGE_ARRAY_GRID",array:r})},onChangeRenderArray:function(r){e({type:"CHANGE_RENDER_GRID",array:r})},onChangeSelectedCheckers:function(r){e({type:"CHANGE_SELECTED_CHECKERS",value:r})},onChangePressToMove:function(r){e({type:"CHANGE_PRESS_TO_MOVE",pressToMove:r})},onChangeColorReproduced:function(r){e({type:"CHANGE_COLOR_REPRODUCED",colorReproduced:r})},onChangeClickCheckers:function(r){e({type:"CHANGE_CLICK_CHECKERS",objectCheckers:r})},onChangeInfoCheckersForBattle:function(r){e({type:"CHANGE_INFO_CHECKERS_FOR_BATTLE",infoChekersForBattle:r})}}})(R),S=function(e){function r(){return Object(k.a)(this,r),Object(y.a)(this,Object(f.a)(r).apply(this,arguments))}return Object(C.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){return t.a.createElement(T.a,null,t.a.createElement(d.a,{path:"/login",exact:!0,component:w}),t.a.createElement(d.a,{path:"/checkers",exact:!0,component:A}),t.a.createElement(d.a,{path:"/",exact:!0,component:w}),t.a.createElement(d.a,{path:"/registration",exact:!0,component:_}))}}]),r}(t.a.Component),B=Object(i.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(t.a.createElement(s.a,{store:B},t.a.createElement(S,null)),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.730f7ce5.chunk.js.map