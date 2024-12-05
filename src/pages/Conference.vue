<template>
    <div style="height : 600px; width : 100%;">
        <LazyImage src="/pictures/team/home_page_picture.jpg" alt="committee on EPFL logo" height="100%" montainsTransform="rotate(45deg) translate(50%, 70%)" sunOrigin="1000px 5000px" sunSize="5%"/>
    </div>

    <section claass="bg-red-primary">
      <div class="bg-red-primary py-6 flex flex-col items-center justify-normal">
        
        <h2 class="text-6xl font-bold text-white mb-10">EPFLMun is</h2>
        
        <div class="flex max-w-7xl">
          <div v-for="element in elements" :key="element.title" class="flex-1">
            <div class="flex flex-col items-center gap-4">

                <div class="rounded-full bg-white p-2">
                  
                  <LazyImage :src="`/svg/conference/${element.svg}.svg`" alt="icon" width="40px" height="40px"/>
                </div>
                <h3 class="text-xl text-gray-100">{{element.title}}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="py-6 flex flex-col items-center justify-normal">
        <h2 class="text-6xl font-bold mb-5">Participate in 2025</h2>
        <a href="https://mymun.com/conferences/EPFLMUN-2025/" target="_blank" rel="noopener noreferrer" class="bg-red-primary text-white px-6 py-2 rounded-full mt-4">Register now on MyMUN</a>
      </div>
    </section>

    <section>
      
    </section>
</template>

<script>
import LazyImage from '@/components/LazyImage.vue';

export default {
    name: 'Conference',
    components: {
      LazyImage
    },
    data() {
    return {
      elements: [
        {
          svg: "world",
          title: "150+ international participants",
        },
        {
          svg: "star",
          title: "6 commissions in French and English",
        },
        {
          svg: "happy_face",
          title: "Honor guests",
        },
        {
          svg: "lightning",
          title: "Post-conference opportunities",
        },
        {
          svg: "calendar",
          title: "3 incredible days, from March 21 to 23",
        },
      ]
    };
  }
  }
</script>