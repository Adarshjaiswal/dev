<template>
  <!-- ---------- Marquee 1 -->
  <div class=" marquee-wrapper  bg-lime-400   ">
    <div class="slide-track">
      <div class="slide">
        <img src="~/assets/img/banner/ts1.png" alt="" />
      </div>
      <div class="slide">
        <img src="~/assets/img/banner/ts2.png" alt="" />
      </div>
      <div class="slide">
        <img src="~/assets/img/banner/ts3.png" alt="" />
      </div>
      <div class="slide">
        <img src="~/assets/img/banner/ts4.png" alt="" />
      </div>
      <div class="slide">
        <img src="~/assets/img/banner/ts1.png" alt="" />
      </div>
      <div class="slide">
        <img src="~/assets/img/banner/ts2.png" alt="" />
      </div>
      <div class="slide">
        <img src="~/assets/img/banner/ts3.png" alt="" />
      </div>
      <div class="slide">
        <img src="~/assets/img/banner/ts4.png" alt="" />
      </div>
    </div>
  </div>
  <!-- ---------- Marquee 1 -->
</template>


<style scoped>
.marquee-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 90px;
  /* Adjust height as needed */
  display: flex;
  align-items: center;
}

.slide-track {
  display: flex;
  animation: marquee 20s linear infinite;
  /* Adjust duration as needed */
}

.slide {
  min-width: 40%;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}</style>