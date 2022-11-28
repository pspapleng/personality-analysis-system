<template>
  <div class="hero min-h-screen pt-10">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4 min-w-full min-h-full">
      <div class="max-w-full text-center text-xl bg-slate-50">
        <!-- <ul class="steps md:steps-vertical">
          <li class="step step-accent"></li>
          <li class="step"></li>
          <li class="step"></li>
          <li class="step"></li>
        </ul> -->
      </div>
      <div
        class="col-span-5 max-w-full m-16 rounded-3xl border-2 border-neutral p-8 text-center"
      >
        <div class="space-y-16">
          <div class="text-right">
            <button class="btn btn-circle btn-info btn-sm">
              <font-awesome-icon
                icon="fa-solid fa-question"
                class="text-neutral text-lg"
              />
            </button>
          </div>
          <div class="text-2xl font-semibold">
            เลือกบุคลิกภาพที่คุณต้องการสร้าง Character
          </div>
          <div>
            <select class="select select-primary select-lg w-full max-w-xs">
              <option disabled selected>What is your MBTI ?</option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </div>
          <div class="text-xl px-20 lg:px-24">
            บุคลิกภาพที่คุณเลือกคือ
            <span class="font-semibold text-primary">INFP</span>
            เป็นคนที่ Lorem ipsum Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non
          </div>
        </div>
        <div>
          <button class="btn btn-accent btn-wide rounded-full text-md">
            NEXT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
