<template>
  <div class="hero min-h-screen pt-4">
    <div
      class="md:flex justify-center flex-col md:flex-row grid w-full h-4/5 px-4 py-2"
    >
      <div
        class="card w-full bg-base-100 m-8 md:py-8 border-2 border-primary bg-gradient-to-b from-pink-100"
      >
        <figure class="px-10 pt-24">
          <img
            src="../assets/MbtiMode.svg"
            alt=""
            class="rounded-xl h-0 md:h-32 invisible md:visible"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-primary text-3xl md:text-xl">MBTI MODE</h2>
          <p class="text-md my-2">สร้าง Character ตาม MBTI ที่คุณเลือก</p>
          <div class="card-actions">
            <router-link :to="{ name: 'MbtiMode' }">
              <button
                class="btn xl:btn-wide lg:btn-wide md:px-16 px-14 btn-accent rounded-full"
              >
                ENTER
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="card w-full bg-base-100 m-8 md:py-8 border-2 border-primary bg-gradient-to-b from-pink-100"
      >
        <figure class="px-10 pt-24">
          <img
            src="../assets/CustumeMode.svg"
            alt=""
            class="rounded-xl h-0 md:h-32 invisible md:visible"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-primary text-3xl md:text-xl">
            CUSTOM MODE
          </h2>
          <p class="text-md my-2">
            สร้าง Character <br />
            โดยสามารถปรับเปลี่ยนได้ตามใจชอบ
          </p>
          <div class="card-actions">
            <router-link :to="{ name: 'CustomMode' }">
              <button
                class="btn btn-disabled xl:btn-wide lg:btn-wide md:px-16 px-14 btn-accent rounded-full text-gray-600"
              >
                COMING SOON
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="card w-full bg-base-100 m-8 md:py-8 border-2 border-primary bg-gradient-to-b from-pink-100"
      >
        <figure class="px-10 pt-24">
          <img
            src="../assets/RealMode.svg"
            alt=""
            class="rounded-xl h-0 md:h-32 invisible md:visible"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-primary text-3xl md:text-xl">REAL MODE</h2>
          <p class="text-md my-2">
            สร้าง Character <br />
            โดยอ้างอิงจากตัวคุณ
          </p>
          <div class="card-actions">
            <router-link :to="{ name: 'RealMode' }">
              <button
                class="btn btn-disabled xl:btn-wide lg:btn-wide md:px-16 px-14 btn-accent rounded-full text-gray-600"
              >
                COMING SOON
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
