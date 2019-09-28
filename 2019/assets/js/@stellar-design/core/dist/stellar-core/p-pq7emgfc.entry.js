import{r as t,h as s}from"./p-ca3a3989.js";const i=class{constructor(s){t(this,s),this.name="web_audio_sequencer",this.autoplay=!1,this.taps=4,this.context=async()=>await document.querySelector("web-audio").get_context(),this.noteTime=0,this.currentTap=0,this.totalPlayTime=0,this.custom=async()=>{}}componentDidLoad(){this.autoplay&&this.play()}async schedule(){var t=(await this.context()).currentTime;for(t-=this.startTime,console.log(this.totalPlayTime,this.iterations,this.currentTap);this.noteTime<t+.005;)try{await this.custom(),this.totalPlayTime=this.noteTime+this.startTime,0===this.currentTap&&this.iterations++,this.advance()}catch(t){console.error(t)}this.timer=setTimeout(async()=>{await this.schedule()},0)}advance(){var t=60/this.tempo;this.currentTap++,this.currentTap==this.taps&&(this.currentTap=0),this.noteTime+=.25*t}async play(){await this.context()||await document.querySelector("web-audio").connect_the_world(),this.iterations=0,this.startTime=(await this.context()).currentTime+.005||.005,await this.schedule()}async stop(){this.iterations=0,this.totalPlayTime=0,this.startTime=null,this.currentTap=0,(await this.context()).stop(),clearTimeout(this.timer)}render(){return[s("button",{class:"play",onClick:()=>{this.play()}},"Play"),s("button",{class:"stop",onClick:()=>{this.stop()}},"Stop")]}};export{i as web_audio_sequencer};