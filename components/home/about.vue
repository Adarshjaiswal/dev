<template>
  <!-- ------------- About -->
  <section class="about__section pt_120 pb_120" id="about">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <!-- --------------- Heading -->
      <div class="personal__head text-center mx-auto xl:mb-[60px] md:mb-[50px] mb-[30px]">
        <img src="~/assets/img/about/section-star.png" class="my-[30px]  mx-auto" alt="star" data-aos="fade-up"
          data-aos-duration="1000" />
        <p class="descrp lg:text-[42px] md:text-[28px] sm:text-xl text-base font-medium text-clr_white lg:leading-[66px]"
          data-aos="fade-up" data-aos-duration="1500">
          I'm David Matias, I'm a Brand & Webflow Designer, Currently residing
          in the lush Victoria Street London, Matias operates globally and is
          ready to take on any design challenge.
        </p>
      </div>
      <!-- --------------- Heading -->
      <div class="singletab">
        <!-- ----------- Nav -->
        <ul class="tablinks flex items-center justify-center flex-wrap gap-5 mb-[100px]">
          <li>
            <button data="about"
              class="tablink bg-clr_base text-clr_title rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center active">
              About
            </button>
          </li>
          <li>
            <button data="experience"
              class="tablink bg-[#1D1D1D] text-clr_white rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center">
              Experience
            </button>
          </li>
          <li>
            <button data="education"
              class="tablink bg-[#1D1D1D] text-clr_white rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center">
              Education
            </button>
          </li>
          <li>
            <button data="skills"
              class="tablink bg-[#1D1D1D] text-clr_white rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center">
              Skills
            </button>
          </li>
        </ul>
        <!-- ----------- Nav -->
        <div class="tabcontents relative">
          <!-- ---------- Personal Info -->
          <div data="about" class="tabitem w-full duration-700 z-10 opacity-100 translate-y-0 active">
            <!-- translate-y-20 -z-10 opacity-0 -->
            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start align-items-center">
                <div>
                  <div class="about__onethumb w-full" data-aos="zoom-in" data-aos-duration="500">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img" class="w-full" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent lg:pl-10 pl-0">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5" data-aos="fade-up" data-aos-duration="500">
                      Personal Info
                    </h2>
                    <p class="text-lg text-clr_pra mb-0" data-aos="fade-up" data-aos-duration="500">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit consectetur, aliquam quaerats voluptatem. Ut enim ad
                      minima veniam, exercitationem laboriosam, nisi ut
                      aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div class="mt-10">
                      <div class="">
                        <div class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6"
                          data-aos="zoom-in">
                          <div
                            class="abox rounded-[10px] bg-[] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Email
                              </span>
                              <a href="" class="text-xl text-clr_white">dev.mostafizar.com</a>
                            </div>
                          </div>
                          <div
                            class="abox rounded-[10px] bg-[] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Phone
                              </span>
                              <a href="" class="text-xl text-clr_white">01575699193</a>
                            </div>
                          </div>
                          <div
                            class="abox rounded-[10px] bg-[] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Address
                              </span>
                              <a href="" class="text-xl text-clr_white">Dahagram, Lalmonirhat</a>
                            </div>
                          </div>
                          <div
                            class="abox rounded-[10px] bg-[] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Follow
                              </span>
                              <ul class="flex items-center xl:gap-4 gap-2">
                                <li>
                                  <a href="" class="text-clr_white text-xl">
                                    <i class="bi-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" class="text-clr_white text-xl">
                                    <i class="bi-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" class="text-clr_white text-xl">
                                    <i class="bi-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" class="text-clr_white text-xl">
                                    <i class="bi-youtube"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ---------- Personal Info -->

          <!-- ---------- Experience Info -->
          <div data="experience" class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0">
            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                <div>
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent lg:pl-10 pl-0">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                      Experience
                    </h2>
                    <p class="text-lg text-clr_pra mb-0">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit consectetur, aliquam quaerats voluptatem. Ut enim ad
                      minima veniam, exercitationem laboriosam, nisi ut
                      aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div class="exprience__box lg:mt-[30px] mt-5">
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          In 2011
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Software Engineer
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            UI Head & Manager
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          In 2016
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Product Designer
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            Head of Department
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          In 2023
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Senior UI Designer
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            Fiverr.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ---------- Experience Info -->

          <!-- ---------- Education Info -->
          <div data="education" class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0">
            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                <div>
                  <div class="about__onethumb">
                    <img src="~/assets/img/about/personal-infothumb.png" alt="img" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent lg:pl-10 pl-0">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                      Education
                    </h2>
                    <p class="text-lg text-clr_pra mb-0">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit consectetur, aliquam quaerats voluptatem. Ut enim ad
                      minima veniam, exercitationem laboriosam, nisi ut
                      aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div class="exprience__box lg:mt-[30px] mt-5">
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          2011 - 2013
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Programming Course
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            New York University
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          2013 - 2016
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            University Of Design
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            Kingston, United States
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          2016 - 2018
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Web Design Course
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            New York University
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ---------- Education Info -->

          <!-- ---------- Skill Info -->
          <div data="skills" class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0">
            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                <div>
                  <div class="about__onethumb">
                    <img src="assets/img/about/personal-infothumb.png" alt="img" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                      My Skills
                    </h2>
                    <p class="text-lg text-clr_pra mb-0">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit consectetur, aliquam quaerats voluptatem. Ut enim ad
                      minima veniam, exercitationem laboriosam, nisi ut
                      aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div class="mt-10">
                      <div class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6">
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/html.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">HTML</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                85%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/figma.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">Figma</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                90%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/word.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">Wordpress</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                95%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/boot.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">Bootstrap</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                97%
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ---------- Skill Info -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.initializeTabs();
  },
  methods: {
    initializeTabs() {
      const tablinks = document.querySelectorAll(".tablink");
      const tabcontents = document.querySelectorAll(".tabitem");

      tablinks.forEach((tablink) => {
        tablink.addEventListener("click", () => {
          const tabName = tablink.getAttribute("data");

          // Remove active class from all tabs and buttons
          tablinks.forEach((tl) => tl.classList.remove("active"));
          tabcontents.forEach((tc) => tc.classList.remove("active"));

          // Add active class to the clicked button
          tablink.classList.add("active");

          // Show the corresponding tab content
          const activeTab = document.querySelector(`.tabitem[data="${tabName}"]`);
          activeTab.classList.add("active");
        });
      });
    },
  },
};

</script>