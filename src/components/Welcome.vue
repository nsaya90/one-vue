<template>
  <div class="welcome">
    <div class="relative" style="min-height: 100vh">
      <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div
        class="absolute top-0 h-full w-full bg-center bg-cover"
        style="
          background-image: url('https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
        ">
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-10 bg-white"></span>
        <section class="relative mx-auto px-2 pt-14 pb-18 md:px-0">
          <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div class="flex flex-wrap items-center sm:-mx-3">
              <div class="w-full md:w-1/2 md:px-3">
                <div
                  class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <transition appear name="title">
                    <h1
                      class="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span class="block text-green-400 xl:inline">ONE</span>
                      <span class="block text-white pl-2 xl:inline"
                        >Connect</span
                      >
                    </h1>
                  </transition>
                  <p
                    class="mx-auto text-base uppercase tracking-wide text-green-400 font-black sm:max-w-md lg:text-xl md:max-w-3xl">
                    Votre réseau social Vert
                  </p>
                  <p
                    class="mx-auto text-base text-green-400 font-bold sm:max-w-md lg:text-xl md:max-w-3xl">
                    Marquez votre <span class="text-white">différence</span>
                    <br />
                    <span
                      >Rejoignez-nous dés
                      <span class="text-white">maintenant</span>
                    </span>
                  </p>
                  <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                    <a
                      href="http://localhost:8080/register"
                      class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white font-bold bg-transparent rounded-md sm:mb-0 hover:bg-green-400 sm:w-auto">
                      Inscription
                      <!-- <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg> -->
                    </a>
                    <a
                      href="http://localhost:8080/login"
                      class="flex items-center px-6 py-3 text-lg font-bold text-white bg-transparent rounded-md hover:bg-white hover:text-green-400">
                      Connexion
                    </a>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/2">
                <div
                  class="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
                  <transition appear name="logo">
                    <img class="logo1" src="@/assets/logo2.png" />
                  </transition>
                </div>
              </div>
              <div
                class="flex justify-center w-full lg:items-start overflow-y-hidden">
                <div
                  class="flex cursor-pointer inline-block mr-4 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                  <div class="mr-3">
                    <svg viewBox="0 0 384 512" width="30">
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs">Download on the</div>
                    <div class="text-2xl font-semibold font-sans -mt-1">
                      App Store
                    </div>
                  </div>
                </div>
                <div
                  class="flex cursor-pointer inline-block w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                  <div class="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs">GET IT ON</div>
                    <div class="text-xl font-semibold font-sans -mt-1">
                      Google Play
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
  components: {},
};
</script>

<style>
.title-enter-active {
  transition: opacity 8s ease-in;
}
.title-leave-active {
  transition: opacity 8s ease-in;
}

.title-enter-from {
  opacity: 0;
}

.title-leave-to {
  opacity: 0;
}

.logo-enter-active {
  transition: opacity 5s ease-in;
}
.logo-leave-active {
  transition: opacity 5s ease-in;
}

.logo-enter-from {
  opacity: 0;
}

.logo-leave-to {
  opacity: 0;
}

.logo1 {
  transform: translateY(-100%);
  animation: logoanim 3s ease-in forwards;
  filter: brightness(110%);
}

@keyframes logoanim {
  100% {
    transform: translateY(-1%);
  }
}
</style>
