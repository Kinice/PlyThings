webpackJsonp([4],{1029:function(e,a,o){e.exports=o(1030)},1030:function(e,a,o){"use strict";function t(){return"connected"===(L.a.midiIn?L.a.midiIn.state:null)||(I.a.alert("此功能需连接The ONE智能乐器使用"),!1)}function n(e,a){"page-category"!==a?("page-main"===a&&Object(C.a)(M.getScores+sessionStorage.currentCatId).then(function(e){!function(e){w()("#list-container").empty().append('<div id="slick-main"></div>');for(var a=[],o=0;o<e.length;o++){var t=[],n={};if(e[o].arrays.length>0){n=e[o].arrays[0];for(var r=1;r<e[o].arrays.length;r++){var s='<li>\n                          <span class="i i-medal-'+(r+1)+'"></span>\n                          <span class="name">'+e[o].arrays[r].user_name+'</span>\n                          <span class="score">'+e[o].arrays[r].final.toFixed(1)+'</span>\n                          <button type="button" class="btn btn-view" data-user_score_id="'+e[o].arrays[r].user_score_id+'" data-score_id="'+e[o].score_id+'">查看</button>\n                        </li>';t.push(s)}}else n="";var i=t.join(""),l=""!=n?'<div class="name">'+n.user_name+'</div>\n                                     <div class="score">'+n.final.toFixed(1)+'分</div>\n                                     <button type="button" class="btn btn-view" data-user_score_id="'+n.user_score_id+'" data-score_id="'+e[o].score_id+'">查看</button>':'<div class="name">暂无</div>',c='<div class="card">\n                      <h2>'+e[o].name+'</h2>\n                      <div class="poster-img">\n                        '+l+'\n                        <button type="button" class="btn-pk" data-score_id="'+e[o].score_id+'"></button>\n                      </div>\n                      <ul class="ranking-list">\n                        '+i+"\n                      </ul>\n                    </div>";a.push(c)}w()("#list-total").html(a.length);for(var d=0;d<a.length;d++)w()("#slick-main").append(a[d]);w()("#slick-main").slick({infinite:!0,centerMode:!0,centerPadding:"0",slidesToShow:3,arrows:!0,mobileFirst:!0,prevArrow:w()(".i-arrow-left"),nextArrow:w()(".i-arrow-right")}),w()("#slick-main").slick("slickGoTo",window.CURRENTSLIDE,!0),w()("#list-container").on("beforeChange",function(e,a,o,t){window.CURRENTSLIDE=t,w()("#list-current").html(t+1)})}(e.data),e.data.length<=3&&(w()("#list-container").addClass("smallList"),w()(".list-number").hide()),I.a.hideLoading()}),"page-playing"===a||"page-playback"===a?(w()(".device-status").removeClass("hide"),w()("#play-start").removeClass("hide"),w()("#play-stop").addClass("hide"),w()("#play-play").removeClass("hide"),w()("#play-pause").addClass("hide"),w()("#playback-play").removeClass("hide"),w()("#playback-stop").addClass("hide")):w()(".device-status").addClass("hide"),"page-playback"===a&&(sessionStorage.playBackFormal=e),w()("#play-start .alert").show(),w()("."+e).removeClass("on"),w()("."+a).addClass("on")):window.location.reload()}function r(e,a){var o=a/e.find("object").length*e[0].clientHeight,t=e.parent().scrollTop();e.parent().animate({scrollTop:t+o},200)}function s(e,a){e.animate({scrollTop:a},200)}function i(e){var a=w()("."+e+" object"),o=a[0].clientWidth/595,t=void 0;window.scaleRate=o,w()("."+e+" .code-board").removeAttr("style").css({overflowY:"scroll"});for(var n=0;n<a.length;n++){try{t=a[n].contentDocument}catch(e){try{t=a[n].getSVGDocument()}catch(e){return}}w()(t.children[0]).css({position:"absolute",top:"0",left:"0",webkitTransformOrigin:"0 0",transformOrigin:"0 0",webkitTransform:"scale("+o+")",transform:"scale("+o+")"})}}function l(e,a){console.log("goPkPageHandler id = "+a),I.a.showLoading(),y.loadScore(a).then(function(){i("page-playing"),I.a.hideLoading()}).catch(function(e){console.error(e),I.a.hideLoading()}),n(e,"page-playing")}function c(e,a,o){console.log("replayViewHandler "+e+", "+a),e=e||1,a=a||1,I.a.showLoading(),n(o,"page-playback"),b.loadResult(a,e).then(function(e){u(e),i("page-playback"),I.a.hideLoading()}).catch(function(e){console.error(e),I.a.hideLoading()})}function d(){console.log("indexBackHandler"),y.clearScore(),b.clearScore(),window.location.href="xyz:exit"}function p(){console.log("pauseScoreHandler"),w()("#play-pause").addClass("hide"),w()("#play-play").removeClass("hide"),y.stopListenScore()}function h(e,a,o){if(e){var t=a.map(function(e){return Math.min(e,100)});if(0!==e.length){o||(o={}),void 0===o.backgroundColor&&(o.backgroundColor="rgba(255, 99, 132, 0.3)"),void 0===o.borderColor&&(o.borderColor="rgba(255,99,132,1)"),void 0===o.fontColor&&(o.fontColor="rgb(133, 66, 173)"),void 0===o.fontSize&&(o.fontSize=13);var n={title:{display:!1},legend:{display:!1},showScale:!1,tooltips:{enabled:!1},scale:{ticks:{display:!1,beginAtZero:!0,max:100,stepSize:100},pointLabels:{fontSize:o.fontSize,fontColor:o.fontColor}},layout:{padding:5}};n.scale.angleLines=void 0===o.angleLines?{}:o.angleLines,n.scale.gridLines=void 0===o.gridLines?{}:o.gridLines;var r=e,s={labels:["基本功 "+a[0],"音准 "+a[1],"节奏 "+a[2],"完整性 "+a[3],"表现力 "+a[4],"难度 "+a[5]],datasets:[{backgroundColor:[o.backgroundColor],borderColor:[o.borderColor],data:t}]},i=new Chart(r,{type:"radar",data:s,options:n});return console.log(Chart.defaults.radar),i}}}function u(e){console.log("evaluateResult",e);var a=e.score;w()("#text-num").text(a.rank),w()("#score-num").text(a.final.toFixed(1));var o=[Math.round(a.technique),Math.round(a.pitch),Math.round(a.rhythm_speed),Math.round(a.complete),Math.round(a.expressive),Math.round(a.difficulty)];window.playbackRadiaChart&&window.playbackRadiaChart.destroy(),window.playbackRadiaChart=h(w()("#result-board-radar-chart"),o,{backgroundColor:"rgba(255,255,255, 0.3)",borderColor:"rgba(255,255,255, 0.3)",fontColor:"rgba(255, 255, 255, .8)",angleLines:{display:!0,color:"rgba(255, 255, 255, .2)",lineWidth:2},gridLines:{display:!0,color:"rgba(255, 255, 255, .2)",lineWidth:2}})}function g(e){e?(w()(".device-status .linked").removeClass("hide"),w()(".device-status .notlinked").addClass("hide")):(w()(".device-status .linked").addClass("hide"),w()(".device-status .notlinked").removeClass("hide"))}Object.defineProperty(a,"__esModule",{value:!0});var y,b,f,m,v,k=o(115),w=o.n(k),C=o(129),S=o(266),_=o(30),L=(o.n(_),o(127)),T=o(136),x=(o.n(T),o(79)),I=(o.n(x),o(157)),R=o(1031);o.n(R);window.CURRENTSLIDE=0;var M={token:"/ppea/api/user/token",rankApi:"/ppea/api/score/rank",getCategory:"/ppea/api/category",getScores:"/ppea/api/category/score/",recordApi:"/ppea/api/user/score/record"};w()(function(){w()("body").click(function(e){var a=w()(".page.on").data("page");if(w()(e.target).hasClass("page-switch")){var o=w()(e.target).data("page");if(a===o);else{switch(y.clearScore(),b.clearScore(),console.info(".page-"+a),o){case"page-playing":case"page-playback":break;case"page-record":I.a.showLoading(),Object(C.a)(M.recordApi).then(function(e){200===e.meta.code&&function(e){var a=[];if(e.length>0)for(var o=0;o<e.length;o++){var t="<tr>\n                        <td>"+e[o].name+"</td>\n                        <td>"+e[o].final.toFixed(1)+'</td>\n                        <td>\n                          <button class="btn btn-view" data-user_score_id="'+e[o].user_score_id+'" data-score_id="'+e[o].score_id+'">查看</button>\n                        </td>\n                      </tr>';a.push(t)}else a.push('<tr>\n                      <td colspan="3" width="100%" style="text-align: center;">\n                        无弹奏数据\n                      </td>\n                    </tr>');w()(".page-record .record-table table tbody").append(a.join())}(e.data),I.a.hideLoading()})}n(a,o)}}})}),w()(function(){w()(".page-category .i-goback").click(function(){d()})}),w()(function(){w()(".page-main").on("click",".btn-pk",function(){f=this.dataset.score_id,sessionStorage.lastPlayingId=f,l("page-main",f)}),w()(".page-main").on("click",".btn-view",function(){f=this.dataset.score_id,m=this.dataset.user_score_id,c(f,m,"page-main")}),w()(".page-main .i-goback").click(function(){d()})}),w()(function(){w()(".page-playing .btngroup").click(function(){"play-start"===this.id&&(console.log("startPlayHandler"),t()&&(w()("#play-start").addClass("hide"),w()("#play-stop").removeClass("hide"),w()(".alert").hasClass("hide")||w()(".alert").addClass("hide"),p(),y.startRecord())),"play-stop"===this.id&&(console.log("stopPlayHandler"),w()("#play-start").removeClass("hide"),w()("#play-stop").addClass("hide"),I.a.showLoading(),y.stopAndSubmitRecord().then(function(e){if(console.log(e),e){m=e.id;var a=e.score;Object(C.b)("/ppea/api/user/score/save",{user_score_id:m}).then(function(){w()(".page-playing .popup").removeClass("hide"),w()(".page-playing .inner-result-box").removeClass("hide"),w()(".page-playing .inner-result-box .num").text(a.rank),w()(".page-playing .inner-result-box .user_score").text(a.final.toFixed(1)),w()("#btn-set-username").data("user_score_id",m),window.pkRadiaChart&&window.pkRadiaChart.destroy(),window.pkRadiaChart=h(w()("#playing-result-chart"),[Math.round(a.technique),Math.round(a.pitch),Math.round(a.rhythm_speed),Math.round(a.complete),Math.round(a.expressive),Math.round(a.difficulty)],[]),I.a.hideLoading()})}else I.a.hideLoading()}).catch(function(e){console.error(e),I.a.hideLoading()})),"play-play"===this.id&&t()&&(console.log("startScoreHandler"),w()("#play-play").addClass("hide"),w()("#play-pause").removeClass("hide"),w()("#play-start .alert").hide(),y.startListenScore()),"play-pause"===this.id&&p()}),w()(".page-playing .btn-confirm").click(function(){console.log("popupClickHandler"),w()(".page-playing .popup").addClass("hide"),I.a.showLoading(),Object(C.b)("/ppea/api/user/score/save",{user_score_id:m}).then(function(){n("page-playing","page-playback"),b.loadResult(m).then(function(e){u(e),i("page-playback"),I.a.hideLoading()}).catch(function(e){console.error(e),I.a.hideLoading()})})})}),w()(function(){w()("#result-board-close").click(function(){var e=w()(".result-board")[0].clientWidth-4;w()(".result-board").animate({left:-e},400,function(){w()("#result-board-open").removeClass("hide")})}),w()("#result-board-open").click(function(){w()("#result-board-open").addClass("hide"),w()(".result-board").animate({left:0},400)}),w()("#track-board-close").click(function(){var e=w()("#result-detail")[0].clientHeight-3;w()("#result-detail").animate({bottom:-e},400,function(){w()("#track-board-open").removeClass("hide"),w()("#track-board-close").addClass("hide")})}),w()("#track-board-open").click(function(){w()("#track-board-close").removeClass("hide"),w()("#track-board-open").addClass("hide"),w()("#result-detail").animate({bottom:0},400)}),w()(".page-playback .btngroup").click(function(){"playback-play"===this.id&&t()&&(console.log("startPlaybackHandler"),w()("#playback-play").addClass("hide"),w()("#playback-stop").removeClass("hide"),b.startListenResult()),"playback-stop"===this.id&&(console.log("stopPlaybackHandler"),w()("#playback-stop").addClass("hide"),w()("#playback-play").removeClass("hide"),b.stopListenResult())}),w()(".page-playback .i-goback").click(function(){y.clearScore(),b.clearScore(),""!==sessionStorage.playBackFormal&&sessionStorage.playBackFormal?"page-playing"===sessionStorage.playBackFormal?l("page-playback",sessionStorage.lastPlayingId):n("page-playback",sessionStorage.playBackFormal):n("page-playback","page-main"),w()(".result-board").css("left","0"),w()("#result-board-open").addClass("hide"),w()("#result-detail").css("bottom","0"),w()("#track-board-close").removeClass("hide"),w()("#track-board-open").addClass("hide"),sessionStorage.playBackFormal=""})}),w()(function(){w()(".page-record").on("click",".btn-view",function(){f=this.dataset.score_id,m=this.dataset.user_score_id,c(f,m,"page-record")})}),w()(function(){navigator.userAgent.indexOf("Android")>=0&&w()(".result-board").remove(),"showed"!==sessionStorage.isShowKnown&&(I.a.alert('&nbsp;&nbsp;&nbsp;&nbsp;"The ONE人工智能钢琴教育平台”是将“人工智能”科技引入钢琴教育领域的一次尝试，采用自主研发的“智能评测”系统智能纠错，帮助演奏者指出演奏中的问题，有效提高练琴效率。<br/>&nbsp;&nbsp;&nbsp;&nbsp;实验室功能尚处于体验阶段，可能会存在一些稳定性问题，还请您谅解，有问题欢迎前往“我的”-“问题反馈”中进行反馈，或者加QQ群524869949联系我们哦，感谢您的支持！',function(){},"实验室须知"),sessionStorage.isShowKnown="showed");var e=localStorage.getItem("userToken");Object(C.a)(M.getCategory,{token:e}).then(function(e){200===e.meta.code?function(e){for(var a=[],o=0;o<e.length;o++){var t='<div class="category-item item-'+e[o].id+'" data-id="'+e[o].id+'" style="background-image:url('+e[o].image+')"></div>';a.push(t)}for(var r=0;r<a.length;r++)w()(".category-list").append(a[r]);w()(".page-category").on("click",".category-item",function(){I.a.showLoading(),sessionStorage.currentCatId=this.dataset.id,n("page-category","page-main")})}(e.data):I.a.alert(e.meta.message)}).then(function(){window.location.href="xyz:disable_loading",I.a.hideLoading()});var a={pageClassName:"code-container playback-score",rollSelector:"#result-d3"};y=new S.a(document.querySelector("#score-sheets"),a),b=new S.a(document.querySelector("#playback-sheets"),a),y.on("scorePlayer.end",function(){w()("#play-pause").addClass("hide"),w()("#play-play").removeClass("hide")}),b.on("userPlayer.end",function(){w()("#playback-stop").addClass("hide"),w()("#playback-play").removeClass("hide")}),y.on("scroll",function(e){var a=e.pos*scaleRate+e.element.offsetTop-80*scaleRate;s(w()(".on .code-board"),a)}),b.on("scroll",function(e){var a=e.pos*scaleRate+e.element.offsetTop-80*scaleRate;s(w()(".on .code-board"),a)}),b.on("showNoteError",function(e){!function(e){function a(){clearTimeout(v),w()("#alert-error-note").addClass("hide"),w()("#alert-error-note .pitch").removeClass("show","last"),w()("#alert-error-note .rhythm").removeClass("show","last"),w()("#alert-error-note .velocity").removeClass("show","last"),w()("#alert-error-note .pitch i")[0].className="i",w()("#alert-error-note .rhythm i")[0].className="i",w()("#alert-error-note .velocity i")[0].className="i"}console.log(e),a();var o=void 0,t=void 0,n=void 0,r=void 0,s=void 0,i=void 0;"right"===e.pitch?t=!1:(t=!0,o="i-error-err"),"accurate"===e.rhythm?r=!1:"early"===e.rhythm?(r=!0,n="i-error-fast"):"late"===e.rhythm&&(r=!0,n="i-error-slow"),"heavty"===e.velocity?(i=!0,s="i-error-high"):"light"===e.velocity?(i=!0,s="i-error-low"):"accurate"===e.velocity&&(i=!1),(t||r||i)&&(w()("#alert-error-note .pitch").addClass(t?"show":""),w()("#alert-error-note .rhythm").addClass(r?"show":""),w()("#alert-error-note .velocity").addClass(i?"show":""),w()("#alert-error-note .pitch i").addClass(o),w()("#alert-error-note .rhythm i").addClass(n),w()("#alert-error-note .velocity i").addClass(s),w()("#alert-error-note").removeClass("hide"),v=setTimeout(a,3e3),w()("#alert-error-note").css({left:window.mousePos.x-w()("#alert-error-note")[0].clientWidth/2+"px",top:window.mousePos.y-w()("#alert-error-note")[0].clientHeight-14+"px"}))}(e)}),w()(".score-slide .page-up").click(function(e){r(w()(".on .code-board .code-page"),-.2)}),w()(".score-slide .page-down").click(function(e){r(w()(".on .code-board .code-page"),.2)})}),w()(function(){var e=new _.MIDIInputPin(this);L.a.output.connect(e),L.a.ready().then(function(){L.a.theone.onConnected=function(){g(!0)},L.a.theone.onDisconnected=function(){g(!1)},L.a.midiIn&&"connected"===L.a.midiIn.state&&L.a.theone.onConnected(),L.a.theone.on("device-info-changed",function(){var e=L.a.theone.deviceInfo.deviceClass;33===e||36===e?console.log("TOP/TON"):34===e?("shown"!==sessionStorage.TOKMsgShown&&(I.a.alert("您所连接的的设备是 61 键 The ONE 智能电子琴，可能无法完整覆盖某些曲谱的音域。"),sessionStorage.TOKMsgShown="shown"),console.log("deviceIsTOK")):35===e||37===e?("shown"!==sessionStorage.TAPMsgShown&&(I.a.alert("您所连接的设备不支持录音回放。"),sessionStorage.TAPMsgShown="shown"),console.log("deviceIsTAP")):console.log("deviceUnknown")});var a=0,o=0;e.onMIDIEvent=function(e){e.type===_.MIDIEvent.EVENT_MIDI&&e.subtype===_.MIDIEvent.EVENT_MIDI_CONTROLLER&&0===e.channel&&(66===e.param1&&e.param2>0&&window.performance.now()-a>10&&(r(w()(".on .code-board .code-page"),-.2),a=window.performance.now()),67===e.param1&&e.param2>0&&window.performance.now()-o>10&&(r(w()(".on .code-board .code-page"),.2),o=window.performance.now()))}})})},1031:function(e,a){},136:function(e,a){},48:function(e,a){e.exports=dll}},[1029]);