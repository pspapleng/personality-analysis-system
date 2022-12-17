<template>
  <div class="hero min-h-screen bg-info md:bg-transparent pt-16">
    <div>
      <div
        class="flex flex-col items-center lg:flex-row-reverse md:mx-12 md:my-4 p-6 md:p-8 md:bg-info rounded-3xl"
      >
        <img
          src="../assets/Girl_dancing.svg"
          class="max-w-xs md:max-w-md justify-self-center"
        />
        <div class="p-4 text-center lg:text-left text-neutral">
          <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold">
            Personality Character Generator
          </h1>
          <p class="py-6">
            ระบบวิเคราะห์บุคลิกภาพจากข้อความด้วยเทคโนโลยี Machine Learning
            นำผลบุคลิกภาพที่วิเคราะห์ได้มาสร้างเป็นตัวละครเพื่อเป็นตัวแทนของบุคลิกภาพแต่ละประเภท
            และสามารถนำผลบุคลิกภาพที่ได้มาต่อยอดได้หลากหลายได้ เช่น
            นำโมเดลการทำนายมาใช้วิเคราะห์บุคคล
          </p>
          <router-link :to="{ name: 'Mode' }">
            <button
              class="hidden md:inline btn btn-accent md:btn-wide rounded-full"
            >
              Generate
            </button>
          </router-link>
        </div>
      </div>
      <div
        class="flex flex-col items-center lg:flex-row min-w-full bg-base-100 p-8 md:pt-4 space-y-6 lg:space-y-0"
      >
        <div class="card w-11/12 lg:w-1/3 bg-slate-50 md:bg-transparent">
          <div class="card-body items-center text-center text-neutral">
            <font-awesome-icon
              icon="fa-solid fa-people-group"
              class="text-accent h-10 md:h-12"
            />
            <h2 class="card-title">บุคลิกภาพสำคัญอย่างไร</h2>
            <p class="px-6">
              เป็นสิ่งที่ทำให้บุคคลมีเอกลักษณ์โดดเด่นเฉพาะตัว
              สร้างความรู้สึกที่ดีต่อผู้พบเห็นได้
              บุคลิกภาพที่ดีช่วยส่งเสริมการเกิดความสำเร็จในด้านต่างๆได้ดีขึ้น
            </p>
          </div>
        </div>
        <div class="card w-11/12 lg:w-1/3 bg-slate-50 md:bg-transparent">
          <div class="card-body items-center text-center text-neutral">
            <font-awesome-icon
              icon="fa-regular fa-lightbulb"
              class="text-accent h-10 md:h-12"
            />
            <h2 class="card-title">Character Avatars</h2>
            <p class="px-6">
              นำผลบุคลิกภาพที่วิเคราะห์ได้ มาสร้างเป็น Character
              หลากหลายรูปแบบเพื่อเป็นตัวแทนของบุคลิกภาพแต่ละประเภท
            </p>
          </div>
        </div>
        <div class="card w-11/12 lg:w-1/3 bg-slate-50 md:bg-transparent">
          <div class="card-body items-center text-center text-neutral">
            <font-awesome-icon
              icon="fa-solid fa-code"
              class="text-accent h-10 md:h-12"
            />
            <h2 class="card-title">วิเคราะห์บุคลิกภาพของคุณด้วย AI</h2>
            <p class="px-6">
              นำเทคโนโลยี Machine Learning
              มาวิเคราะห์บุคลิกภาพโดยวิเคราะห์จากข้อความที่ผู้ใช้ตอบคำถาม
              เพื่อทำนายบุคลิกภาพของบุคคลนั้น
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
