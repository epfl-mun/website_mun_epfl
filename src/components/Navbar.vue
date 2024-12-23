<template>
  <!-- Pseudo element to do as if the navbar was real in the dom -->
   <div class="h-16"></div>
  <!-- Desktop Navbar -->
  <nav :class="['navbar fixed left-0 right-0 h-16 z-50 bg-gray-100 flex justify-center items-center font-bold text-lg hidden lg:flex transition-transform duration-300', { 'top-0 z-50 bg-opacity-90': isOverlay, '-translate-y-full': !isVisible }]" ref="navbar">
    <div class="container flex items-center max-w-6xl gap-10 px-4">
      <router-link to="/" class="text-black">
        <img src="/svg/logos/EPFLMUN.svg" alt="Logo" class="h-14" />
      </router-link>
      <div class="flex-1 flex justify-center items-center gap-10">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="text-black relative py-2 hover:text-black"
          active-class="text-red-600"
          @mouseenter="item.path === '/conference' ? isConferenceHovered = true : null"
          @mouseleave="item.path === '/conference' ? isConferenceHovered = false : null"
        >
          {{ $t(item.translationKey) }}
          
          <!-- Conference Popover -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div v-if="isConferenceHovered && item.path === '/conference'" class="relative z-50">
              <!-- Invisible bridge to prevent hover gap -->
              <div class="absolute h-2 w-full -bottom-2"></div>
              
              <div class="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                   @mouseenter="isConferenceHovered = true"
                   @mouseleave="isConferenceHovered = false">
                <div class="py-1">
                  <router-link
                    v-for="confItem in conferenceNavItems"
                    :key="confItem.path"
                    :to="confItem.path"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    active-class="text-red-600"
                  >
                    {{ $t(confItem.translationKey) }}
                  </router-link>
                </div>
              </div>
            </div>
          </Transition>
        </router-link>
        
      </div>

      <!-- Language switcher remains on the right -->
      <div class="flex items-center">
        <button @click="changeLanguage('en')" class="mx-2">
          <img src="/svg/flags/english.svg" alt="UK Flag" class="h-6" />
        </button>
        <button @click="changeLanguage('fr')" class="mx-2">
          <img src="/svg/flags/france.svg" alt="FR Flag" class="h-6" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Navbar -->
  <nav :class="['navbar fixed right-0 left-0 h-16 bg-gray-100 flex lg:hidden justify-between items-center font-bold text-lg px-4 transition-transform duration-300', { 'top-0 z-50 bg-opacity-90': isOverlay, '-translate-y-full': !isVisible }]" ref="navbar">
    <router-link to="/" class="text-black">
      <img src="/svg/logos/EPFLMUN.svg" alt="Logo" class="h-14" />
    </router-link>
    
    <!-- Hamburger Button -->
    <button @click="isMenuOpen = !isMenuOpen" class="text-black">
      <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
      <XMarkIcon v-else class="h-6 w-6" />
    </button>

    <!-- Mobile Menu -->
    <Transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMenuOpen" 
           class="absolute top-16 left-0 right-0 z-50 py-2">
        <div class="flex flex-col bg-white rounded-lg shadow-lg mx-5 border border-gray-200">
          <!-- Main nav items -->
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path" 
            class="px-4 py-3 text-black flex items-center gap-3 hover:bg-gray-50 transition-colors duration-200" 
            active-class="text-red-600"
          >
            <component :is="item.icon" class="h-5 w-5" />
            {{ $t(item.translationKey) }}
          </router-link>

          <!-- Conference section at the bottom -->
          <div class="mt-4 py-2 border-t border-gray-200">
            <div class="px-4 py-2 text-sm font-semibold text-gray-500">{{ $t('navbar.pastConferences') }}</div>
            <router-link 
              v-for="item in conferenceNavItems" 
              :key="item.path"
              :to="item.path" 
              class="px-4 py-2 text-black flex items-center gap-3 hover:text-gray-500 transition-colors duration-200" 
              active-class="text-red-600"
            >
              {{ $t(item.translationKey) }}
            </router-link>
          </div>

          <!-- Language Switcher -->
          <div class="flex justify-center gap-4 py-3">
            <button @click="changeLanguage('en')" class="mx-2">
              <img src="/svg/flags/english.svg" alt="UK Flag" class="h-6" />
            </button>
            <button @click="changeLanguage('fr')" class="mx-2">
              <img src="/svg/flags/france.svg" alt="FR Flag" class="h-6" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script>
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  BriefcaseIcon,
  CalendarIcon,
  UsersIcon,
  EnvelopeIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/outline';

export default {
  name: 'Navbar',
  components: {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    BriefcaseIcon,
    CalendarIcon,
    UsersIcon,
    EnvelopeIcon,
    AcademicCapIcon
  },
  data() {
    return {
      isMenuOpen: false,
      isConferenceOpen: false,
      isConferenceHovered: false,
      isVisible: true,
      isOverlay: false,
      lastScrollY: 0,
      navItems: [
        {
          path: '/',
          icon: HomeIcon,
          translationKey: 'navbar.items.home'
        },
        {
          path: '/society',
          icon: BriefcaseIcon,
          translationKey: 'navbar.items.society'
        },
        {
          path: '/conference',
          icon: AcademicCapIcon,
          translationKey: 'navbar.items.conference'
        },
        {
          path: '/events',
          icon: CalendarIcon,
          translationKey: 'navbar.items.events'
        },
        {
          path: '/team',
          icon: UsersIcon,
          translationKey: 'navbar.items.team'
        },
        {
          path: '/contact',
          icon: EnvelopeIcon,
          translationKey: 'navbar.items.contact'
        }
      ],
      conferenceNavItems: [
        {
          path: '/conference/2024',
          icon: AcademicCapIcon,
          translationKey: 'navbar.items.conference2024'
        }
      ]
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
        this.isVisible = false;
      } else if (currentScrollY < this.lastScrollY) {
        this.isVisible = true;
        this.isOverlay = currentScrollY > 0;
      }
      this.lastScrollY = currentScrollY;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
      this.isConferenceOpen = false;
    }
  }
}
</script>

<style>
.navbar {
  transition: transform 0.3s ease-in-out;
}
</style>