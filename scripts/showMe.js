/*! -- File: showMe.js ( Input 0 ) -- */
function showMe(g){function h(){var b=a.carousel.find(".active img"),c=function(){e.trigger(w.READY,d)};b[0].complete?c():b[0].onload=function(){requestAnimationFrame(function(){requestAnimationFrame(c)})}}function n(b){var a=this.showMe.STRINGS.CONTINUE;if(!D||1==d.getCurrentSection()&&1==d.getCurrentStep())a=this.showMe.STRINGS.PLAY;N(b,r.WITH_CALLBACK,null,a,showMe.STRINGS.ARIA_LABEL_INTRODUCTION)}function p(){var b=d.getCurrentStep(),a=d.getCurrentSection();return q[a-1].numberOfSteps<=b&&q[a-
1].sectionType==O.BRANCH&&q[d.getCurrentSection()-1].steps[d.getCurrentStep()-1].eventType!=k.DECISION||a==q.length&&b==q[a-1].numberOfSteps?!0:!1}function Z(b){D=t=!1;d.pause();E();b?N(b,r.WITH_CALLBACK,function(){ja(!0);y.resetSections()},this.showMe.STRINGS.OK,showMe.STRINGS.ARIA_LABEL_SUMMARY):(d.goToStep(1,1),y.resetSections());a.playHeadButton.parent().removeClass("hidden")}function P(){a.previousButton.prop("disabled",!0)}function u(){a.forwardButton.prop("disabled",!0)}function aa(){a.previousButton.prop("disabled",
!1)}function ka(b,c){if(p())Z(b);else{var f=a.sectionInfo.data("number-of-sections"),A=d.getCurrentSection()+1,x=this.showMe.STRINGS.CONTINUE;A>f&&(x=this.showMe.STRINGS.OK);f=ja;c&&(f=c);N(b,r.WITH_CALLBACK,f,x,showMe.STRINGS.ARIA_LABEL_SUMMARY)}}function ja(b){if((1!=m.playerHead.getY()||1!=m.playerHead.getX())&&!l.isShowing()){var c=a.sectionInfo.data("number-of-sections"),f=d.getCurrentSection()+1;if(c>=f){if(!a.sectionInfo.find("#section-"+(d.getCurrentSection()+1)).data("section-introduction")){a.carousel.carousel("next");
b=d.getCurrentSection();a.sectionInfo.find("#section-"+b);Q();d.toggleActiveStep();ba();v();return}b||d.nextStep()}ba()}}function N(a,c,f,d,x){if(a){x=$("\x3cdiv class\x3d'general-container-text-package' aria-label\x3d'"+x+"'\x3e\x3c/div\x3e");var e=$("\x3cdiv class \x3d 'general-container-text-content'\x3e\x3c/div\x3e");e.html(a);H();a=$("\x3cdiv class\x3d'general-container-primary-action-button-div'\x3e\x3cbutton class\x3d'btn btn-primary'\x3e"+d+" \x3c/button\x3e\x3c/div\x3e");$(a).on("click",
function(){l.closePanel();f&&f()});x.append(e);x.append(a);l.addAndDisplayPanel(x,c)}}function R(b){a.inner.animate({top:0,left:0,scale:1},{duration:b,start:ca,step:da})}function ea(){var b=a.sideContainer.find(".panel"),c=a.sideContainer.find(".active");b.animate({scrollTop:c.position().top-b.position().top+b.scrollTop()});b=a.showMeContainer.find("#nextStep");c=a.showMeContainer.find("#prevStep");a.inner.find(".item:first").hasClass("active")?c.prop("disabled",!0):c.prop("disabled",!1);a.inner.find(".item:last").hasClass("active")?
b.prop("disabled",!0):b.prop("disabled",!1)}function S(){a.sideContainer.find(".panel").css("max-height",a.showMeContainer.height()+"px");var b=a.showMeContainer.find("#toggleZoom");1<=T()?b.hide():b.show()}function ba(){var b=a.sideContainer.find(".active").children(".label");b.data("time-start");b.parent().data("section-count");B=b=y.calculateCurrentTotalPlayTime(m.playerHead);U(b);F()}function U(b,c){c?a.playBar.animate({width:b/I*100+"%"},c,"linear"):a.playBar.css("width",b/I*100+"%");F()}function ya(){U(B,
1E3);F();J&&clearInterval(J);J=setInterval(function(){B+=1E3;U(B,1E3)},1E3)}function V(){a.playBar.stop();clearInterval(J)}function la(a){var c=(new Date(parseInt(a,10))).toISOString();return 36E5>a?c.slice(14,-5):c.slice(11,-5)}function F(){I=y.getTotalActiveSectionsTime();a.showMeContainer.find(".player-time").text(la(B)+" / "+la(I))}function za(a,c){ma?fetch(a).then(function(a){a.blob().then(function(a){var b=new FileReader;b.addEventListener("loadend",function(){na(b.result.toString())});b.readAsDataURL(a)})}):
na(a)}function na(b){a.mouse.hide();if(null!=b){var c={};c.mp3=b;a.jplayer.jPlayer({ready:function(){Aa(c)},supplied:"mp3",solution:"html",size:{height:"0px"}})}}function Aa(b){b&&a.jplayer.jPlayer("setMedia",b);a.playHeadButton.on("click",v);a.playButton.on("click",v);a.carousel.on("click",v);a.playButtonIcon.attr("class","fa fa-fw fa-play fa-2x");a.showMeContainer.find("#mute").click(function(){fa?(fa=!1,a.jplayer.jPlayer("unmute"),$(this).children("i").attr("class","fa fa-2x fa-fw fa-volume-up")):
(fa=!0,a.jplayer.jPlayer("mute"),$(this).children("i").attr("class","fa fa-2x fa-fw fa-volume-off"))});m.introductionPanelShowing||d.goToStep(1,1)}function E(){a.jplayer.jPlayer("pause")}function oa(b){K().eventType==k.DECISION&&(P(),a.playButton.prop("disabled",!0),u(),V(),b=0);var c=a.carousel.find(".active"),c=$(c).data("click-count"),c=parseInt(c);W=1<c?Math.min(800+399*Math.min(c,3),b):Math.min(1200,b);L=setTimeout(function(){L=setTimeout(function(){var a=d.getCurrentSectionInfo(),b=d.getCurrentStep();
if(a.data("section-size")==b&&(a=a.data("section-summary"),b=K(),a&&b.eventType!==k.DECISION)){ka(a);return}d.nextStep()},Math.min(W,b));pa(W)},Math.max(b-W,0))}function K(){return q[d.getCurrentSection()-1].steps[d.getCurrentStep()-1]}function qa(a){return"#"+a.substring(a.indexOf("x")+1)}function Q(){return y.getStepStepDurationFromSectionAndStep(m.playerHead.getX(),m.playerHead.getY())}function ra(b){b?(a.showMeContainer.addClass("capture-fullscreen-height"),e.addClass("capture-fullscreen-overflow")):
(a.showMeContainer.removeClass("capture-fullscreen-height"),e.removeClass("capture-fullscreen-overflow"))}function T(){var b=d.getOverallStep?d.getOverallStep()-1:0;if(C!=captureProjectUtils.getfullscreenMode()){var c=captureProjectUtils.getfullscreenMode();ra(c);C=c}return captureProjectUtils.getScale(a,C,b)}function Ba(){var b=T();a.mouse.css("transform","scale("+b+") translate3d(0, 0, 0)");a.dragOverlay.css("transform","scale("+b+") translate3d("+-a.dragOverlay.width()/2+"px , "+-a.dragOverlay.height()/
2+"px , 0)")}function ga(){this.carouselItem=a.carousel.find(".active");this.index=this.carouselItem.index()+1;this.totalItems=e.find(".item").length;this.currentItem=e.find(".item").get(this.index);this.minX=this.carouselItem.data("hotspotMinx");this.minY=this.carouselItem.data("hotspotMiny");this.width=this.carouselItem.data("hotspotWidth");this.height=this.carouselItem.data("hotspotHeight");this.imageElement=a.carousel.find("img")[this.index-1];this.naturalWidth=this.imageElement.naturalWidth;
this.naturalHeight=this.imageElement.naturalHeight;this.carouselWidth=this.carouselItem.width();this.carouselHeight=this.carouselItem.height();this.currentEvent=a.carousel.find(".active").data("eventType");this.scale=T();this.offset=0;this.activeElement=a.carousel.find(".active");this.clickCountAttr=$(this.activeElement).data("click-count");this.dataClicks=parseInt(this.clickCountAttr)}function Ca(a,c){var f=a-399*Math.min(c.dataClicks,3);c.currentEvent===k.SELECT&&(f=a/6);return f}function pa(b){var c=
new ga;if(c.index<=c.totalItems){var f=function(){if(c.currentEvent===k.SELECT){var d=c.carouselItem.find("select").css("overflow","hidden"),f=d.find("option"),A=f.filter(".correct");d[0].size=f.length;a.mouse.animate({top:e+(A.position().top-c.height)*(1/c.scale)},b/4,function(){A.attr("selected",!0);setTimeout(function(){d[0].size=0;a.mouse.find(".mouse-pointer").show();a.mouse.find(".mouse-pointer-click").hide()},b/4)})}else if(c.currentEvent==k.DRAG_START||c.currentEvent==k.DRAG_FINISH&&X==k.DRAG_START||
!b)c.currentEvent==k.DRAG_START||c.currentEvent==k.DRAG_FINISH&&X==k.DRAG_START||(a.mouse.find(".mouse-pointer").show(),a.mouse.find(".mouse-pointer-click").hide());else if(2==c.dataClicks|!c.dataClicks)for(f=c.dataClicks;0<f;)setTimeout(function(){a.mouse.find(".mouse-pointer").show();a.mouse.find(".mouse-pointer-click").hide()},133),setTimeout(function(){a.mouse.find(".mouse-pointer").hide();a.mouse.find(".mouse-pointer-click").show()},266),setTimeout(function(){a.mouse.find(".mouse-pointer").show();
a.mouse.find(".mouse-pointer-click").hide()},399),f--;else if(2<c.dataClicks|!c.dataClicks)for(f=c.dataClicks-1;0<f;)setTimeout(function(){a.mouse.find(".mouse-pointer").show();a.mouse.find(".mouse-pointer-click").hide()},133*f),setTimeout(function(){a.mouse.find(".mouse-pointer").hide();a.mouse.find(".mouse-pointer-click").show()},266*f),setTimeout(function(){a.mouse.find(".mouse-pointer").show();a.mouse.find(".mouse-pointer-click").hide()},399*f),f--;else setTimeout(function(){a.mouse.find(".mouse-pointer").show();
a.mouse.find(".mouse-pointer-click").hide()},399)};c.carouselWidth>c.naturalWidth&&(c.offset=(c.carouselWidth-c.naturalWidth)/2);var d=(parseInt(c.minX)+parseInt(c.width)/2)*c.scale+c.offset,e=(parseInt(c.minY)+parseInt(c.height)/2)*c.scale;0<c.width&&a.mouse.animate({left:d,top:e},Ca(b,c),function(){a.mouse.find(".mouse-pointer").hide();a.mouse.find(".mouse-pointer-click").show();f();X=c.currentEvent});Ba();M&&(1<=c.scale?a.inner.animate({top:0,left:0,scale:1},{start:ca,step:da,duration:b}):sa());
width=parseInt(c.width);height=parseInt(c.height);c.currentEvent==k.DRAG_START?(a.dragOverlay.width(c.width),a.dragOverlay.height(c.height),a.dragOverlay.css("top",e).css("left",d)):c.currentEvent==k.DRAG_FINISH&&X==k.DRAG_START&&(a.dragOverlay.show(),a.mouse.find(".mouse-pointer").hide(),a.mouse.find(".mouse-pointer-click").show(),a.dragOverlay.animate({left:d,top:e},parseInt(b),function(){a.dragOverlay.hide();a.mouse.find(".mouse-pointer").show();a.mouse.find(".mouse-pointer-click").hide()}))}else R(400)}
function H(){a.playHeadButton.parent().addClass("hidden")}function v(){if(t)ta();else{D||(D=!0,d.goToStep(1,1));if(!Y){a.playButtonIcon.attr("class","fa fa-fw fa-pause fa-2x");H();a.jplayer.jPlayer("play");z&&!z[d.getOverallStep()-1]&&E();var b;0!=G?(b=G,G=0):b=y.getStepStepDurationFromSectionAndStep(m.playerHead.getX(),m.playerHead.getY());ya();oa(b);a.mouse.show();e.trigger(w.PLAY,d)}a.playButton.focus()}t=!t}function ta(){a.playButtonIcon.attr("class","fa fa-fw fa-play fa-2x");E();clearTimeout(L);
a.jplayer.data("jPlayer");var b=B,c=Q(),f=parseInt(a.carousel.find(".active").attr("data-start-time"),10),A=0;try{if(1<d.getCurrentSection())for(var x=a.sectionInfo.children(),g=0;g<d.getCurrentSection()-1;g++)A+=$(x[g]).data("section-duration")}catch(h){}G=f+A+parseInt(c,10)-b;V();e.trigger(w.PAUSE,d)}function Da(a){var c={};window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(a,b,d){c[b]=void 0!==d?d:""});return a?c[a]?c[a]:null:decodeURI(c)}var W=0,k={DRAG_START:"START_MOUSE_DRAGGED",
DRAG_FINISH:"FINISH_MOUSE_DRAGGED",SELECT:"SELECT",DECISION:"DECISION",STOP:"CAPTURE_STOP"},O={SECTION:"SECTION",BRANCH:"BRANCH",ALTERNATIVE_PATH:"ALTERNATIVE_PATH"},r={BASIC:{priority:0},WITH_CALLBACK:{priority:2},FROM_STEP:{priority:1}},w={PLAY:"showMe.play",PAUSE:"showMe.pause",STEP_CHANGED:"showMe.stepChanged",ENDED:"showMe.ended",READY:"showMe.ready"};showMe.STRINGS={PLAY:"Play",OK:"OK",CONTINUE:"Continue",ARIA_LABEL_DECISION:"Decision step frame",ARIA_LABEL_DECISION_INSTRUCTION:"Decision step instructions",
ARIA_LABEL_DECISION_OPTIONS:"Decision step options",ARIA_LABEL_INTRODUCTION:"Scene Introduction",ARIA_LABEL_SUMMARY:"Scene summary",ARIA_LABEL_GLOSSARY:"Glossary definition"};showMe.STRINGS=$.extend({},showMe.STRINGS,g.STRINGS);var L,X,t=!1,G=0,I,B=0,D=!1,M=!0,Y=!1,C=!1,fa=!1,ua=1,q,ha,va,z,e,a,wa,J,ma=!0,xa={},ia,d={},l={currentPanels:Array(3),currentActivePanel:new TwoDimensionalPosition,pauseTriggered:!1},y=new SectionManager,m={introductionPanelShowing:!1,playerHead:new TwoDimensionalPosition,
decisionTransition:!1};(function(b){q=b.sections;ha=b.fileName;va=b.m4aTag;z=b.audioSprite;M=b.panAndZoom;"undefined"!==typeof b.performAudioFetch&&(ma=b.performAudioFetch);"undefined"!==typeof b.uaSniffer&&(xa=b.uaSniffer);ia=null==b.controlsListenerElement?b.container:b.controlsListenerElement;e=b.container;a={sectionInfo:e.find("#sectionInfo"),carousel:e.find("#softwareSimCarousel"),inner:e.find(".carousel-inner"),sideContainer:e.find("#stepsSideContainer"),showMeContainer:e.find("#showMeContainer"),
playHeadButton:e.find(".play-head-button"),playButtonIcon:e.find("#playButton .fa"),playButton:e.find("#playButton"),playBar:e.find(".bar"),mouse:e.find("#mouse"),dragOverlay:e.find("#showMeDragOverlay"),jplayer:e.find("#jplayer"),forwardButton:e.find("#nextStep"),previousButton:e.find("#prevStep"),GenericPanelOverlay:e.find("#generalPanelOverlay"),GenericPanelContentContainer:e.find("#generalPanelContentContainer")};a.inner.find(".item:first").addClass("active");a.sideContainer.find(".item:first").addClass("active");
I=e.data("duration");m.playerHead.set(1,1);ha?za(va,ha):(a.playHeadButton.on("click",v),a.playButton.on("click",v),a.carousel.on("click",v),a.showMeContainer.find("#mute").remove(),a.playButtonIcon.attr("class","fa fa-fw fa-play fa-2x"));$.each($("img.unloaded"),function(){$(this).attr("src",$(this).data("src"));$(this).removeClass("unloaded")});F();a.mouse.hide();a.dragOverlay.hide();a.sideContainer.on("click",".step-item",function(){d.goToStep($(this).data("section-count"),$(this).data("step-count"));
H()});a.showMeContainer.on("click","#hideSteps",function(){d.toggleSteps()});a.showMeContainer.on("click","#fullScreen",function(){d.toggleFullscreen()});a.showMeContainer.on("click","#nextStep",function(){var b=d.getCurrentSection(),c=d.getCurrentStep(),e=a.sectionInfo.find("#section-"+b).data("section-size");a.sectionInfo.data("number-of-sections");c+1>e?d.goToStep(b+1,1):d.goToStep(b,c+1);H()});a.showMeContainer.on("click","#prevStep",function(){var b=d.getCurrentSection(),c=d.getCurrentStep();
a.sectionInfo.find("#section-"+b).data("section-size");a.sectionInfo.data("number-of-sections");if(1>c-1){for(var c=0,e=!1;!e;b--)c=a.sectionInfo.find("#section-"+(b-1)).data("section-size"),null!=c?e=!0:1==b&&(e=!0);d.goToStep(b,c)}else d.goToStep(b,c-1);H()});ia.on("keydown",function(b){if(dkiUA.isIE()){if(32===b.originalEvent.keyCode)return b.preventDefault(),a.playButton.prop("disabled")||a.playButton.trigger("click"),!1}else if(" "===b.key)return b.preventDefault(),a.playButton.prop("disabled")||
a.playButton.trigger("click"),!1});ia.on("keyup",function(b){if(dkiUA.isIE()){if(39===b.originalEvent.keyCode)return a.forwardButton.prop("disabled")||a.forwardButton.trigger("click"),!1;if(37===b.originalEvent.keyCode)return a.previousButton.prop("disabled")||a.previousButton.trigger("click"),!1}else{if("ArrowRight"===b.key)return a.forwardButton.prop("disabled")||a.forwardButton.trigger("click"),!1;if("ArrowLeft"===b.key)return a.previousButton.prop("disabled")||a.previousButton.trigger("click"),
!1}});a.showMeContainer.on("click","#toggleZoom",function(){if(M){var b=$(this);a.inner.stop();M=!1;b.find(".fa").attr("class","fa fa-2x fa-fw fa-search-plus");b.prop("disabled",!0);R(300);setTimeout(function(){a.mouse.css("transform","scale(1) translate3d(0, 0, 0)");a.dragOverlay.css("transform","scale(1) translate3d(-50%, -50%, 0)");b.prop("disabled",!1)},300)}else M=!0,sa(),$(this).find(".fa").attr("class","fa fa-2x fa-fw fa-search-minus")});if(xa.safari){var c=function(a){a[0]&&a.addClass("blurFix")};
c(a.carousel.find(".active img:not(.blurFix)"));a.carousel.on("slide.bs.carousel",function(a){c($(a.relatedTarget).find("img:not(.blurFix)"))})}S();wa=setInterval(S,1E3);1==Da("hideSteps")&&(a.sideContainer.remove(),a.showMeContainer.css("width","100%"));R(0);e.on(w.STEP_CHANGED,function(){a.carousel.find(".item.active[data-event-type\x3d'STOP_CAPTURE']")[0]&&e.trigger(w.ENDED,d)});$(window).on("resize."+e.attr("id"),S);P();l.initialize=function(){this.currentPanels[0]=[];this.currentPanels[1]=[];
this.currentPanels[2]=[];this.panelOverlay=a.GenericPanelOverlay;this.panelContentContainer=a.GenericPanelContentContainer;this.currentlyShowingPanel=!1};l.showPanel=function(){this.panelOverlay.removeClass("hide-general-panel");this.currentlyShowingPanel=!0};l.hidePanel=function(){this.panelOverlay.addClass("hide-general-panel");this.currentlyShowingPanel=!1};l.addPanelToQue=function(a,b){this.currentPanels[b].push(a)};l.addContentToPanel=function(a){this.clearContentFromPanel();a=a.clone(!0);this.panelContentContainer.append(a)};
l.clearContentFromPanel=function(){this.panelContentContainer.empty()};l.pause=function(){this.pauseTriggered=!0;ta();t=!0;P();a.playButton.prop("disabled",!0);u();Y=!0};l.unpause=function(){this.pauseTriggered&&(Y=this.pauseTriggered=!1,aa(),a.playButton.prop("disabled",!1),a.forwardButton.prop("disabled",!1),t=!1,v())};l.displayPanels=function(){0<this.currentPanels[0].length?(this.pause(),this.currentActivePanel.set(0,0),this.addContentToPanel(this.currentPanels[0][0]),this.showPanel()):0<this.currentPanels[1].length?
(this.pause(),this.currentActivePanel.set(1,0),this.addContentToPanel(this.currentPanels[1][0]),this.showPanel()):0<this.currentPanels[2].length?(this.pause(),this.currentActivePanel.set(2,0),this.addContentToPanel(this.currentPanels[2][0]),this.showPanel()):this.unpause()};l.addAndDisplayPanel=function(a,b){switch(b){case r.BASIC:this.addPanelToQue(a,r.BASIC.priority);this.displayPanels();break;case r.WITH_CALLBACK:this.addPanelToQue(a,r.WITH_CALLBACK.priority);this.displayPanels();break;case r.FROM_STEP:this.addPanelToQue(a,
r.FROM_STEP.priority),this.displayPanels()}};l.deleteActivePanel=function(){this.currentActivePanel.isValid()&&this.currentPanels[this.currentActivePanel.getX()].splice(this.currentActivePanel.getY());this.currentActivePanel.reset();this.displayPanels()};l.closePanel=function(){this.hidePanel();this.deleteActivePanel()};l.isShowing=function(){return this.currentlyShowingPanel};l.initialize();y.initSectionManager(q,a.sideContainer);e.on(w.STEP_CHANGED,function(a,b){m.playerHead.getX()!==b.x&&y.showSection(b.x);
m.playerHead.set(b.x,b.y);m.decisionTransition=!1});e.one(w.READY,function(){n(a.sectionInfo.find("#section-1").data("section-introduction"))});h()})(g);d.destroy=function(){$(window).off("resize."+e.attr("id"));$.each(a,function(){$(this).off()});a=a.jplayer=null;clearInterval(wa);clearInterval(J);clearTimeout(L)};d.getOverallStep=function(){var b=d.getCurrentStep(),c=d.getCurrentSection(),f;for(f=1;f<c;f++){var e=a.sectionInfo.find("#section-"+f).data("section-size");null!=e&&(b+=e)}return b};d.getCurrentStep=
function(){return a.carousel.find(".active").data("stepCount")};d.getCurrentSection=function(){return a.carousel.find(".active").data("sectionCount")};d.getNumberOfSections=function(){return a.sectionInfo.data("number-of-sections")};d.toggleActiveStep=function(){a.showMeContainer.find(".item.active .targetHotspot").remove();a.sideContainer.find(".active").attr("class","list-group-item step-item");a.sideContainer.find("[data-step-count\x3d'"+d.getCurrentStep()+"'][data-section-count\x3d'"+d.getCurrentSection()+
"']").attr("class","list-group-item step-item active");currentActive=a.sideContainer.find(".active");a.sideContainer.find(".narration-text").addClass("hidden");currentActive.find(".narration-text").hasClass("hidden")&&currentActive.find(".narration-text").removeClass("hidden");a.sideContainer.find(".markerList").addClass("hidden");currentActive.find(".markerList").hasClass("hidden")&&currentActive.find(".markerList").removeClass("hidden");var b=new ga;if(b.currentEvent===k.SELECT){for(var c=K(),f=
'\x3cdiv class\x3d"targetHotspot"\x3e\x3cselect\x3e',e=0;e<c.options.length;e++)f+="\x3coption value\x3d'"+c.options[e]+"'"+(c.initialSelection===c.options[e]?"selected":"")+' class\x3d"'+(c.options[e]===c.correct?"correct":"")+'"\x3e'+c.options[e]+"\x3c/option\x3e";f=$(f+"\x3c/select\x3e\x3c/div\x3e");a.showMeContainer.find(".item.active").append(f);f.css({top:b.minY*b.scale,left:b.minX*b.scale,"z-index":1E3,display:"block"});b=c.fontInfo;null!=b&&b.useCustomTheme&&(null!=b.backgroundColor&&f.css({"background-color":qa(b.backgroundColor)}),
null!=b.textFillColor&&f.css({color:qa(b.textFillColor)}),null!=b.fontSize&&f.css({"font-size":b.fontSize.split(" ").join("")}),null!=b.fontType&&f.css({"font-family":b.fontType}))}};d.getCurrentSectionInfo=function(){var b=d.getCurrentSection();return a.sectionInfo.find("#section-"+b)};d.nextStep=function(){E();if(p())Z(null);else if(K().eventType===k.DECISION){var b=null,c=d.getCurrentSectionInfo();(c=c.data("section-summary"))&&(b=c);d.handleDecisionFrame(K(),b)}else{var f=d.getCurrentSection();
a.carousel.carousel("next");b=d.getCurrentSection();if(f!=b){f=!1;for(--b;b<q.length;b++)if(q[b].sectionType!==O.ALTERNATIVE_PATH&&(q[b].sectionType!==O.BRANCH||q[b].sectionType===O.BRANCH&&m.decisionTransition)){d.goToStep(b+1,1,!0);f=!0;break}f||Z(c)}else{c=a.sectionInfo.find("#section-"+b);Q();d.toggleActiveStep();if(1==d.getCurrentStep()&&(c=c.data("section-introduction"))){ea();e.trigger(w.STEP_CHANGED,d);F();n(c);return}c=!1;e.find(".carousel-inner .item:first").hasClass("active")?(a.playButtonIcon.attr("class",
"fa fa-fw fa-play fa-2x"),t=!1,B=G=0,V(),U(0),a.playHeadButton.parent().removeClass("hidden"),a.mouse.hide()):c=!0;ea();b={y:d.getCurrentStep(),x:d.getCurrentSection()};e.trigger(w.STEP_CHANGED,b);c&&oa(y.getStepStepDurationFromSectionAndStep(m.playerHead.getX(),m.playerHead.getY()));F();p()&&u();z&&(z[d.getOverallStep()-1]?t&&a.jplayer.jPlayer("play",z[d.getOverallStep()-1][0]/1E3):E())}}};d.goToOverallStep=function(b){var c=1,f,e=!1;for(f=1;!e;f++){var g=a.sectionInfo.find("#section-"+f).data("section-size");
null!=g&&(g>=b?e=!0:(c++,b-=g))}d.goToStep(c,b)};d.decisionHandlers=[];d.handleDecisionFrame=function(a,c){var f=a.branchItems,e=$("\x3cdiv class\x3d'general-container-decision-package' aria-label\x3d'"+showMe.STRINGS.ARIA_LABEL_DECISION+"'\x3e\x3c/div\x3e"),g=$("\x3cdiv class \x3d 'general-container-decision-text-content' aria-label\x3d'"+showMe.STRINGS.ARIA_LABEL_DECISION_INSTRUCTION+"'\x3e\x3c/div\x3e");e.append(g);var h=$("\x3cul aria-label\x3d'"+showMe.STRINGS.ARIA_LABEL_DECISION_OPTIONS+"'\x3e\x3c/ul\x3e");
g.html(a.instructionalText);$.each(f,function(a,b){a=$('\x3cli class\x3d"decisionFrameChoice" id\x3ddecisionOption-section-'+b.sectionToJumpTo+'\x3e\x3ca class\x3d"btn btn-link" href\x3d"#"\x3e'+b.name+"\x3c/a\x3e\x3c/li\x3e");h.append(a);a.on("click",function(a){a=function(){d.goToStep(b.sectionToJumpTo+1,1,!0)};c?ka(c,a):a();l.closePanel()});d.decisionHandlers.push(a)});e.append(h);l.addAndDisplayPanel(e,r.FROM_STEP)};d.goToStep=function(b,c,f,g){Y&&l.closePanel();var h=!1;p()&&(h=!0);t=!1;a.playButtonIcon.attr("class",
"fa fa-fw fa-play fa-2x");a.mouse.stop();clearTimeout(L);a.dragOverlay.hide();if(1==b&&1<c||1<b)a.carousel.carousel(d.carouselStepNumber(b,c-1)),pa(0),a.mouse.show(),D=!0;else{var k=e.find("img")[0];a.mouse.animate({left:a.carousel.position().left+Math.max((a.carousel.width()-k.width)/2,0),top:a.carousel.position().top+Math.max((a.carousel.height()-k.height)/2,0)},0);a.mouse.hide()}k=!1;if(g||b!=d.getCurrentSection())k=!0;a.carousel.carousel(d.carouselStepNumber(b,c));g=a.carousel.find(".active").data("startTime");
d.toggleActiveStep();G=0;var m=a.jplayer.data("jPlayer");m&&m.status&&(z?(g=d.getOverallStep(),z[g-1]?a.jplayer.jPlayer("pause",z[g-1][0]/1E3):E()):a.jplayer.jPlayer("pause",g/1E3));ea();V();aa();a.playButton.prop("disabled",!1);a.forwardButton.prop("disabled",!1);1==b&&1==c?P():aa();p()&&u();g=!1;if(k||h)if(h=a.sectionInfo.find("#section-"+b).data("section-introduction"))g=!0,1==b&&1==c&&(D=!1),n(h);!g&&f&&d.play();b={y:d.getCurrentStep(),x:d.getCurrentSection()};e.trigger(w.STEP_CHANGED,b);ba()};
d.carouselStepNumber=function(b,c){if(1==b)return c-1;var d=0,e;for(e=1;e<b;e++){var g=a.sectionInfo.find("#section-"+e).data("section-size");null!=g&&(d+=g)}return d+c-1};var da=function(a,c){"scale"===c.prop&&($(this).css("transform","scale("+a+") translate3d(0, 0, 0)"),$(this).css("-webkit-transform","scale("+a+") translate3d(0, 0, 0)"),$(this).css("-moz-transform","scale("+a+") translate3d(0, 0, 0)"))},ca=function(a){for(var c=0;c<a.tweens.length;c++){var d=a.tweens[c];"scale"===d.prop&&0==d.start&&
(d.start=ua,ua=d.end)}},sa=function(){var b=new ga;duration=Q()/4;b.carouselWidth>b.naturalWidth&&(b.offset=(b.carouselWidth-b.naturalWidth)/2);var c=(parseInt(b.minX)+parseInt(b.width)/2)*b.scale+b.offset,d=(parseInt(b.minY)+parseInt(b.height)/2)*b.scale;a.inner.animate({top:-Math.min(Math.max(0,d/b.scale-b.carouselHeight/2),b.naturalHeight-b.carouselHeight),left:-Math.min(Math.max(0,c/b.scale-b.carouselWidth/2),b.naturalWidth-b.carouselWidth),scale:1/b.scale},{start:ca,step:da,duration:duration})};
d.toggleSteps=function(){a.sideContainer.is(":visible")?(a.sideContainer.fadeOut(300),setTimeout(function(){a.showMeContainer.addClass("full");a.showMeContainer.addClass("transition")},300)):(a.showMeContainer.removeClass("full"),setTimeout(function(){a.sideContainer.fadeIn();a.showMeContainer.removeClass("transition");S()},500))};d.toggleFullscreen=function(){captureProjectUtils.toggleFullscreen(e,a,T(),function(b){C=b;ra(C);C&&(a.inner.stop(),R(300),C?$(".capture-image").css("max-height",screen.availHeight-
$(".row.controls").height()-parseInt($(".bottom-buffer").css("margin-top").split("px")[0],10)):$(".capture-image").css("max-height",""))})};d.play=function(){t||v()};d.pause=function(){t&&v()};d.togglePlayback=function(){v()};d.reset=function(){d.goToStep(1,1,null,!0)};d.showGlossaryPane=function(a){a&&N(a,r.BASIC,null,showMe.STRINGS.CONTINUE,showMe.STRINGS.ARIA_LABEL_GLOSSARY)};return d}
var TwoDimensionalPosition=function(){this.y=this.x=-1;this.set=function(g,h){this.x=g;this.y=h};this.reset=function(){this.set(-1,-1)};this.isValid=function(){return-1!==this.x&&-1!==this.y};this.getX=function(){return this.x};this.getY=function(){return this.y}},Step=function(){this.duration=0;this.played=!1;this.element=null;this.init=function(g,h){this.element=h;this.duration=$(this.element).find("span.label").data("duration")}},SectionContainer=function(){this.sectionLengthinMillis=0;this.steps=
[];this.titleElement=this.element=null;this.type="";this.hidden=this.defaultHidden=!1;this.init=function(g,h){this.element=h;this.titleElement=$(h).find(".section-header");if(this.defaultHidden=$(this.element).hasClass("alternative-section"))this.hidden=!0;var n=$(h).find(".step-item-container"),p=this;$.each(g.steps,function(g,h){var u=new Step;u.init(h,n[g]);p.sectionLengthinMillis+=Number(u.duration);p.steps.push(u)})};this.hideSection=function(){$(this.element).addClass("hidden-section");$(this.element).removeClass("show-for-alternative");
this.hidden=!0};this.showSection=function(){$(this.element).addClass("show-for-alternative");this.hidden=!1};this.resetSection=function(){$(this.element).removeClass("show-for-alternative");$(this.element).removeClass("hidden-section");this.hidden=this.defaultHidden};this.getTimeIfActive=function(){return this.hidden?0:this.sectionLengthinMillis};this.getStepDuration=function(g){if(g)return this.steps[g-1].duration};this.getSectionLengthUpToStep=function(g){for(var h=0,n=1;n<g;n++)h+=Number(this.getStepDuration(n));
return h}},SectionManager=function(){this.sections=[];this.UIelement=null;this.initSectionManager=function(g,h){var n=this;this.UIelement=h;var p=this.UIelement.find(".side-container-section");$.each(g,function(g,h){var u=new SectionContainer;u.init(h,p[g]);n.sections.push(u)})};this.getStepStepDurationFromSectionAndStep=function(g,h){return this.sections[g-1].getStepDuration(h)};this.getTotalActiveSectionsTime=function(){var g=0;$.each(this.sections,function(h,n){g+=n.getTimeIfActive()});return g};
this.showSection=function(g){this.sections.length>=g&&this.sections[g-1].showSection()};this.calculateCurrentTotalPlayTime=function(g){var h=0;$.each(this.sections,function(n,p){n<g.getX()-1&&(h+=p.getTimeIfActive());n==g.getX()-1&&(h+=p.getSectionLengthUpToStep(g.getY()))});return h};this.resetSections=function(){$.each(this.sections,function(g,h){h.resetSection()})}};