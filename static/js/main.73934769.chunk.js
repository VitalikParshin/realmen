(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},72:function(t,e,a){t.exports=a(92)},77:function(t,e,a){},79:function(t,e,a){},92:function(t,e,a){"use strict";a.r(e);var o=a(1),n=a.n(o),r=a(16),i=a.n(r),l=(a(77),a(20)),s=a(17),c=a(22),u=a(21),h=a(23),d=a(56),f=a.n(d),m=(a(79),function(t){for(var e=t.length,a=t[0].length,o=[],n=0;n<e;++n){o.push([]);for(var r=0;r<a;++r)o[n][r]=t[r][a-n-1]}return o}),p=function t(e,a,o){this.value=e||0,this.row=a||-1,this.column=o||-1,this.oldRow=-1,this.oldColumn=-1,this.markForDeletion=!1,this.mergedInto=null,this.id=t.id++};p.id=0,p.prototype.moveTo=function(t,e){this.oldRow=this.row,this.oldColumn=this.column,this.row=t,this.column=e},p.prototype.isNew=function(){return-1===this.oldRow&&!this.mergedInto},p.prototype.hasMoved=function(){return-1!==this.fromRow()&&(this.fromRow()!==this.toRow()||this.fromColumn()!==this.toColumn())||this.mergedInto},p.prototype.fromRow=function(){return this.mergedInto?this.row:this.oldRow},p.prototype.fromColumn=function(){return this.mergedInto?this.column:this.oldColumn},p.prototype.toRow=function(){return this.mergedInto?this.mergedInto.row:this.row},p.prototype.toColumn=function(){return this.mergedInto?this.mergedInto.column:this.column};var b=function t(){this.tiles=[],this.cells=[];for(var e=0;e<t.size;++e)this.cells[e]=[this.addTile(),this.addTile(),this.addTile(),this.addTile()];this.addRandomTile(),this.setPositions(),this.won=!1};b.prototype.addTile=function(){for(var t=new p,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return p.apply(t,a),this.tiles.push(t),t},b.size=4,b.prototype.moveLeft=function(){for(var t=!1,e=0;e<b.size;++e){for(var a=this.cells[e].filter(function(t){return 0!==t.value}),o=[],n=0;n<b.size;++n){var r=a.length?a.shift():this.addTile();if(a.length>0&&a[0].value===r.value){var i=r;r=this.addTile(r.value),i.mergedInto=r;var l=a.shift();l.mergedInto=r,r.value+=l.value}o[n]=r,this.won=this.won||2048===r.value,t=t||r.value!==this.cells[e][n].value}this.cells[e]=o}return t},b.prototype.setPositions=function(){this.cells.forEach(function(t,e){t.forEach(function(t,a){t.oldRow=t.row,t.oldColumn=t.column,t.row=e,t.column=a,t.markForDeletion=!1})})},b.fourProbability=.1,b.prototype.addRandomTile=function(){for(var t=[],e=0;e<b.size;++e)for(var a=0;a<b.size;++a)0===this.cells[e][a].value&&t.push({r:e,c:a});var o=t[Math.floor(Math.random()*t.length)],n=Math.random()<b.fourProbability?4:2;this.cells[o.r][o.c]=this.addTile(n)},b.prototype.move=function(t){this.clearOldTiles();for(var e=0;e<t;++e)this.cells=m(this.cells);for(var a=this.moveLeft(),o=t;o<4;++o)this.cells=m(this.cells);return a&&this.addRandomTile(),this.setPositions(),this},b.prototype.clearOldTiles=function(){this.tiles=this.tiles.filter(function(t){return!1===t.markForDeletion}),this.tiles.forEach(function(t){t.markForDeletion=!0})},b.prototype.hasWon=function(){return this.won},b.deltaX=[-1,0,1,0],b.deltaY=[0,-1,0,1],b.prototype.hasLost=function(){for(var t=!1,e=0;e<b.size;++e)for(var a=0;a<b.size;++a){t=t||0===this.cells[e][a].value;for(var o=0;o<4;++o){var n=e+b.deltaX[o],r=a+b.deltaY[o];n<0||n>=b.size||r<0||r>=b.size||(t=t||this.cells[e][a].value===this.cells[n][r].value)}}return!t};var v=b,g=a(12),y=a(100),w=a(91),E=a(101),C=a(5),O=a(102),k=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement(g.a,{style:I.cell})}}]),e}(n.a.Component),j=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement(g.a,{style:I.board},n.a.createElement(g.a,{style:I.row},n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null)),n.a.createElement(g.a,{style:I.row},n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null)),n.a.createElement(g.a,{style:I.row},n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null)),n.a.createElement(g.a,{style:I.row},n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null),n.a.createElement(k,null)),this.props.children)}}]),e}(n.a.Component),R=function(t){function e(t){var a;Object(l.a)(this,e);var o=(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).props.tile;return a.state={opacity:new y.a.Value(0),top:new y.a.Value(e._getPosition(o.toRow())),left:new y.a.Value(e._getPosition(o.toColumn()))},a}return Object(h.a)(e,t),Object(s.a)(e,null,[{key:"_getPosition",value:function(t){return 68*t+4+3}}]),Object(s.a)(e,[{key:"calculateOffset",value:function(){var t=this.props.tile,a={top:this.state.top,left:this.state.left,opacity:this.state.opacity};return t.isNew()?y.a.timing(this.state.opacity,{duration:100,toValue:1}).start():y.a.parallel([y.a.timing(a.top,{duration:100,toValue:e._getPosition(t.toRow())}),y.a.timing(a.left,{duration:100,toValue:e._getPosition(t.toColumn())})]).start(),a}},{key:"render",value:function(){var t=this.props.tile,e=[I.tile,I["tile"+t.value],this.calculateOffset()],a=[I.value,t.value>4&&I.whiteText,t.value>100&&I.threeDigits,t.value>1e3&&I.fourDigits];return n.a.createElement(y.a.View,{style:e},n.a.createElement(w.a,{style:a},t.value))}}]),e}(n.a.Component),T=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.board;if(!t.hasWon()&&!t.hasLost())return n.a.createElement(g.a,null);var e=t.hasWon()?"Good Job!":"Game Over";return n.a.createElement(g.a,{style:I.overlay},n.a.createElement(w.a,{style:I.overlayMessage},e),n.a.createElement(E.a,{onPress:this.props.onRestart,style:I.tryAgain},n.a.createElement(w.a,{style:I.tryAgainText},"Try Again?")))}}]),e}(n.a.Component),z=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t)))._handleRestart=function(){a.setState({board:new v})},a._handleStart=function(t){a.state.board.hasWon()||(a.startX=t.nativeEvent.pageX,a.startY=t.nativeEvent.pageY)},a._handleEnd=function(t){if(!a.state.board.hasWon()){var e=t.nativeEvent.pageX-a.startX,o=t.nativeEvent.pageY-a.startY,n=-1;Math.abs(e)>3*Math.abs(o)&&Math.abs(e)>30?n=e>0?2:0:Math.abs(o)>3*Math.abs(e)&&Math.abs(o)>30&&(n=o>0?3:1),-1!==n&&a.setState({board:a.state.board.move(n)})}},a.state={board:new v},a.startX=0,a.startY=0,a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state.board.tiles.filter(function(t){return t.value}).map(function(t){return n.a.createElement(R,{key:t.id,ref:t.id,tile:t})});return n.a.createElement(g.a,{onMouseDown:this._handleStart,onMouseUp:this._handleEnd,onTouchEnd:this._handleEnd,onTouchStart:this._handleStart,style:I.container},n.a.createElement(j,null,t),n.a.createElement(T,{board:this.state.board,onRestart:this._handleRestart}))}}]),e}(n.a.Component),I=C.a.create({container:{flex:1,justifyContent:"center",alignItems:"center"},board:{padding:3,backgroundColor:"#bbaaaa",borderRadius:5},overlay:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(221, 221, 221, 0.5)",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},overlayMessage:{fontSize:40,marginBottom:20},tryAgain:{backgroundColor:"#887761",padding:20,borderRadius:5},tryAgainText:{color:"#ffffff",fontSize:20,fontWeight:"500"},cell:{width:60,height:60,borderRadius:5,backgroundColor:"#ddccbb",margin:4},row:{flexDirection:"row"},tile:{position:"absolute",width:60,height:60,backgroundColor:"#ddccbb",borderRadius:5,flex:1,justifyContent:"center",alignItems:"center"},value:{fontSize:24,color:"#776666",fontFamily:"Verdana",fontWeight:"500"},tile2:{backgroundColor:"#eeeeee"},tile4:{backgroundColor:"#eeeecc"},tile8:{backgroundColor:"#ffbb87"},tile16:{backgroundColor:"#ff9966"},tile32:{backgroundColor:"#ff7755"},tile64:{backgroundColor:"#ff5533"},tile128:{backgroundColor:"#eecc77"},tile256:{backgroundColor:"#eecc66"},tile512:{backgroundColor:"#eecc55"},tile1024:{backgroundColor:"#eecc33"},tile2048:{backgroundColor:"#eecc22"},whiteText:{color:"#ffffff"},threeDigits:{fontSize:20},fourDigits:{fontSize:18}});O.a.registerComponent("Game2048",function(){return z});var M=z,S=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("p",{style:_.prodName},"\xa9 Copyright by Vitalii Parshin"),n.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),n.a.createElement(M,null),n.a.createElement("p",{style:_.title},"Game 2048 for Real-men")))}}]),e}(o.Component),_={title:{fontFamily:"Chalkduster",fontSize:39,marginBottom:20},prodName:{fontFamily:"Chalkduster",fontSize:14,marginBottom:20}},P=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[72,2,1]]]);
//# sourceMappingURL=main.73934769.chunk.js.map