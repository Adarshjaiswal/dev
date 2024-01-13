
<template>
  <header>

    <div class="bg-banner_image bg-no-repeat bg-center bg-cover bg-fixed relative overflow-hidden bg-[#1D1D1D]">
      <!-- header start -->
      <header
        class="header relative w-full border-b border-b-clr_cusborder z-10 xxl:after:block after:hidden after:absolute after:right-[calc(20%-30px)] after:top-0 after:w-[1px] after:h-full after:content:[''] after:bg-clr_cusborder xxl:before:block before:hidden before:absolute before:left-[calc(15%-40px)] before:top-0 before:w-[1px] before:h-full before:content:[''] before:bg-clr_cusborder">
        <div class="xxl:max-w-[1805px] xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
          <div class="flex justify-between items-center w-full relative py-5">
            <div class="main__logo">
              <a href="index.html" class="block xl:w-[150px] w-[100px]">
                <img src="~/assets/img/logo/logo.png" alt="logo" class="w-full h-full object-contain" />
              </a>
            </div>
            <ul
              class="menus flex lg:flex-row flex-col lg:items-center opacity-0 invisible lg:opacity-100 lg:visible lg:gap-[14px] gap-0 fixed z-50 lg:static top-20 left-0 w-full lg:w-auto bg-clr_subtitle min-h-screen lg:min-h-full lg:bg-transparent duration-500 origin-top px-3">
              <li
                class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <a href="./index.html"
                  class="text-white font-500 xxl: text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:">
                  Home
                </a>
              </li>
              <li
                class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <a href="./index.html#about"
                  class="text-white font-500 xxl: text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:">
                  About
                </a>
              </li>
              <li
                class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <a href="./index.html#projects"
                  class="text-white font-500 xxl: text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:">
                  Work
                </a>
              </li>
              <li
                class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
                <a href="./index.html#services"
                  class="text-white font-500 xxl: text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:">
                  Services
                </a>
                <ul
                  class="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                  <li>
                    <a href="./services.html"
                      class="lg:text-clr_body text-white duration-500 hover: hover:pl-3 block">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="./serviceDetails.html"
                      class="lg:text-clr_body text-white duration-500 hover: hover:pl-3 block">
                      Service Details
                    </a>
                  </li>
                </ul>
              </li>
              <li
                class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <a href="./index.html#testimonial"
                  class="text-white font-500 xxl: text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:">
                  TESTIMONIAL
                </a>
              </li>
              <li
                class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
                <a href="./index.html#blog"
                  class="text-white font-500 xxl: text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:">
                  Blog
                </a>
                <ul
                  class="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                  <li>
                    <a href="./blogs.html"
                      class="lg:text-clr_body text-white duration-500 hover: hover:pl-3 block">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="./blogDetails.html"
                      class="lg:text-clr_body text-white duration-500 hover: hover:pl-3 block">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>
              <li
                class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <a href="./contact.html"
                  class="text-white font-500 xxl: text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:">
                  Contact
                </a>
              </li>
            </ul>
            <div class="flex items-center gap-4">
              <a href=""
                class="flex items-center gap-2 xxl:px-[26px] xxl:py-[19px] lg:px-[16px] lg:py-[9px] px-[11px] py-[7px] font-medium text-lg capitalize relative bg-lime-400 overflow-hidden rounded-[5px] transition-all text-clr_subtitle max-h-[58px] before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0">
                <span class="text-sm xl:text-lg z-10 relative duration-500">
                  Let's Talk
                </span>
                <span>
                  <i class="bi bi-arrow-right text-xl z-10 relative duration-500"></i>
                </span>
              </a>
              <div class="header-bar lg:hidden">
                <i class="bi bi-x text-[32px] text-white cursor-pointer hidden menuCloseIcon"></i>

                <i class="bi bi-list text-[32px] text-white cursor-pointer menuActiveIcon"></i>
              </div>
              <div
                class="drawerActiveIcon xl:w-[58px] xl:h-[58px] w-[39px] h-[39px] rounded-md flex items-center justify-center bg-clr_white cursor-pointer">
                <i class="bi bi-list lg:text-[32px] text-[22px] text-clr_title"></i>
              </div>
            </div>
          </div>

       
        </div>
      </header>
      <!-- header End -->

    </div>

  </header>
</template>
