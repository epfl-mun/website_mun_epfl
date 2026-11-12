<template>
<section id="diplomacy" ref="scene" class="diplomacy-journey" :style="{'--progress':progress}">
 <div class="diplomacy-stage">
  <div class="journey-globe" :style="{transform:`translate(-50%,-50%) scale(${1+progress*1.7})`,opacity:Math.max(0,1-progress*2)}"><GlobeArt/></div>
  <div class="assembly" :style="{opacity:Math.max(0,1-Math.abs(progress-.52)*3.3),transform:`translate(-50%,-50%) perspective(900px) rotateX(${35-progress*30}deg) scale(${.7+progress*.5})`}" aria-hidden="true">
   <svg viewBox="0 0 1000 650"><g v-for="(radius,row) in [155,235,315,395]" :key="row"><path :d="`M${500-radius} 180a${radius} ${radius*.73} 0 0 0 ${radius*2} 0`" fill="none" :stroke="row===0?'#c81f32':'#ffffff33'" stroke-width="27"/><g v-for="i in (row+1)*6" :key="i" :transform="`translate(${500-Math.cos(Math.PI*i/((row+1)*6+1))*radius},${180+Math.sin(Math.PI*i/((row+1)*6+1))*radius*.73})`"><rect x="-5" y="-6" width="10" height="13" fill="#f1f1f1"/><rect x="-2" y="-5" width="4" height="3" fill="#c81f32"/></g></g><path d="M420 108h160v90H420Z" fill="#c81f32"/><path d="M464 96h72v25h-72Z" fill="#fff"/><circle cx="500" cy="65" r="24" fill="none" stroke="#fff8"/><path d="M476 65h48M500 41v48" stroke="#fff8"/><ellipse cx="500" cy="65" rx="12" ry="24" fill="none" stroke="#fff8"/></svg>
  </div>
  <div class="journey-photo" :style="{opacity:Math.max(0,(progress-.55)*2.6),clipPath:`inset(${Math.max(0,1-(progress-.5)*2)*18}% round ${Math.max(0,1-progress)*40}px)`}"><img src="/pictures/conf_2024/pictures/debate_mod.jpg" alt="MUN EPFL — débat en conférence"/><div class="journey-photo-shade"></div></div>
  <div class="diplomacy-caption"><span>UNE MÊME CONVERSATION</span><h2>du monde à l’EPFL</h2></div>
  <div class="journey-line"><span :style="{transform:`scaleX(${progress})`}"></span></div>
 </div>
</section>
</template>
<script>
import GlobeArt from './GlobeArt.vue'
export default{components:{GlobeArt},data:()=>({progress:0,reduced:false}),mounted(){this.reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;this.update();window.addEventListener('scroll',this.update,{passive:true});window.addEventListener('resize',this.update)},beforeUnmount(){window.removeEventListener('scroll',this.update);window.removeEventListener('resize',this.update)},methods:{update(){const s=this.$refs.scene;if(s)this.progress=this.reduced?1:Math.max(0,Math.min(1,-s.getBoundingClientRect().top/(s.offsetHeight-innerHeight)))}}}
</script>
<style scoped>
.diplomacy-journey{height:260svh;background:#090909}.diplomacy-stage{height:100svh;position:sticky;top:0;overflow:hidden;background:radial-gradient(ellipse at center,#292020,#090909 65%)}.journey-globe{position:absolute;left:50%;top:44%;width:min(64vh,70vw);height:min(64vh,70vw);will-change:transform,opacity}.assembly{position:absolute;left:50%;top:42%;width:min(1000px,90vw);will-change:transform,opacity}.assembly svg{width:100%;height:auto}.journey-photo{position:absolute;inset:0;will-change:opacity,clip-path}.journey-photo img{width:100%;height:100%;object-fit:cover;filter:grayscale(1)}.journey-photo-shade{position:absolute;inset:0;background:linear-gradient(0deg,#000c,transparent 65%),linear-gradient(90deg,#0004,transparent)}.diplomacy-caption{position:absolute;bottom:10vh;left:7vw;color:white}.diplomacy-caption span{font-size:10px;letter-spacing:.22em;font-weight:500;color:#ff5a69}.diplomacy-caption h2{font-size:clamp(2.6rem,6vw,6rem);font-weight:700;letter-spacing:-.055em;margin-top:12px}.journey-line{position:absolute;bottom:0;left:0;right:0;height:3px;background:#fff2}.journey-line span{height:100%;display:block;transform-origin:left;background:#d62336}@media(max-width:700px){.journey-globe{width:90vw;height:90vw;top:40%}.assembly{width:120vw;top:42%}.diplomacy-caption{bottom:12vh}.journey-photo img{object-position:58% center}}@media(prefers-reduced-motion:reduce){.diplomacy-journey{height:100svh}.journey-photo{opacity:1!important;clip-path:none!important}.journey-globe,.assembly{display:none}}
</style>
