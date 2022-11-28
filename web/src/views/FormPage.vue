<template>
  <div class="hero min-h-screen pt-10">
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 min-w-full min-h-full">
      <div class="max-w-full text-center text-xl my-auto ml-auto mr-8">
        <div class="hidden lg:inline">
          <div class="flex">
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 rounded-full border-4 border-dashed border-white"
                :class="{ 'border-accent': currentStep === 1 }"
              >
                <div
                  class="w-12 h-12 rounded-full bg-accent mt-1 ml-1"
                  :class="{ 'bg-base-200': currentStep < 1 }"
                >
                  <div class="text-2xl font-semibold pt-2">1</div>
                </div>
              </div>
              <div
                class="w-1 h-10 bg-accent"
                :class="{ 'bg-base-200': currentStep < 2 }"
              ></div>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center">
              <div
                class="w-1 h-10 bg-accent"
                :class="{ 'bg-base-200': currentStep < 2 }"
              ></div>
              <div
                class="w-16 h-16 rounded-full border-4 border-dashed border-white"
                :class="{ 'border-accent': currentStep === 2 }"
              >
                <div
                  class="w-12 h-12 rounded-full bg-accent mt-1 ml-1"
                  :class="{ 'bg-base-200': currentStep < 2 }"
                >
                  <div class="text-2xl font-semibold pt-2">2</div>
                </div>
              </div>
              <div
                class="w-1 h-10 bg-accent"
                :class="{ 'bg-base-200': currentStep < 3 }"
              ></div>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center">
              <div
                class="w-1 h-10 bg-accent"
                :class="{ 'bg-base-200': currentStep < 3 }"
              ></div>
              <div
                class="w-16 h-16 rounded-full border-4 border-dashed border-white"
                :class="{ 'border-accent': currentStep === 3 }"
              >
                <div
                  class="w-12 h-12 rounded-full bg-accent mt-1 ml-1"
                  :class="{ 'bg-base-200': currentStep < 3 }"
                >
                  <div class="text-2xl font-semibold pt-2">3</div>
                </div>
              </div>
              <div
                class="w-1 h-10 bg-accent"
                :class="{ 'bg-base-200': currentStep < 4 }"
              ></div>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center">
              <div
                class="w-1 h-10 bg-accent"
                :class="{ 'bg-base-200': currentStep < 4 }"
              ></div>
              <div
                class="w-16 h-16 rounded-full border-4 border-dashed border-white"
                :class="{ 'border-accent': currentStep === 4 }"
              >
                <div
                  class="w-12 h-12 rounded-full bg-accent mt-1 ml-1"
                  :class="{ 'bg-base-200': currentStep < 4 }"
                >
                  <div
                    v-if="currentStep < 4"
                    class="text-2xl font-semibold pt-2"
                  >
                    4
                  </div>
                  <font-awesome-icon
                    v-if="currentStep === 4"
                    icon="fa-solid fa-check"
                    class="text-2xl font-semibold pt-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="w-16 h-16 rounded-full border-4 border-dashed border-white">
          <div class="w-12 h-12 rounded-full bg-accent mt-1 ml-1">
            <div class="text-2xl font-semibold pt-2">1</div>
          </div>
        </div>

        <div
          class="w-16 h-16 rounded-full border-4 border-dashed border-accent"
        >
          <div class="w-12 h-12 rounded-full bg-accent mt-1 ml-1">
            <div class="text-2xl font-semibold pt-2">2</div>
          </div>
        </div>

        <div class="w-16 h-16 rounded-full border-4 border-dashed border-white">
          <div class="w-12 h-12 rounded-full bg-base-200 mt-1 ml-1">
            <div class="text-2xl font-semibold pt-2">3</div>
          </div>
        </div> -->
      </div>

      <!--  step 1 choose mbti -->
      <div
        v-if="currentStep === 1"
        class="mbti flex justify-between flex-col lg:col-span-5 max-w-full m-16 rounded-3xl border-2 border-neutral p-8 text-center"
      >
        <div class="text-right">
          <span class="text-lg font-semibold mr-4"> MBTI MODE</span>
          <button class="btn btn-circle btn-info btn-sm">
            <font-awesome-icon
              icon="fa-solid fa-question"
              class="text-neutral text-lg"
            />
          </button>
        </div>
        <div class="space-y-12">
          <div class="text-xl md:text-2xl font-semibold">
            เลือกบุคลิกภาพที่คุณต้องการสร้าง Character
          </div>
          <div>
            <div
              v-if="isError && mbti === 'default'"
              class="alert alert-error shadow-lg w-fit mx-auto text-sm mb-2"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ errorMsg }}</span>
              </div>
            </div>
            <select
              class="select select-primary select-lg w-full max-w-xs"
              :class="{ 'select-error': isError && mbti === 'default' }"
              v-model="mbti"
            >
              <option disabled selected value="default">
                What is your MBTI ?
              </option>
              <option
                v-for="(item, index) in mbtiList"
                :key="index"
                :value="item"
              >
                {{ item }}
              </option>
            </select>
          </div>
          <div v-if="mbti !== 'default'" class="text-xl px-20 lg:px-24">
            บุคลิกภาพที่คุณเลือกคือ
            <span class="font-semibold text-primary">{{ mbti }}</span> <br />
            เป็นคนที่ Lorem ipsum Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat a pariatur. Excepteur
            sint occaecat cupidatat non Lorem ipsum Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat a
            pariatur. Excepteur sint occaecat cupidatat non
          </div>
        </div>
        <div>
          <button
            class="btn btn-accent btn-wide rounded-full text-md"
            @click="nextToStepTwo"
          >
            NEXT
          </button>
        </div>
      </div>

      <!-- step 2 general question -->
      <div
        v-if="currentStep === 2"
        class="flex justify-between flex-col col-span-5 max-w-full m-16 rounded-3xl border-2 border-neutral p-8 text-center"
      >
        <div class="text-right">
          <span class="text-lg font-semibold mr-4"> MBTI MODE</span>
          <button class="btn btn-circle btn-info btn-sm">
            <font-awesome-icon
              icon="fa-solid fa-question"
              class="text-neutral text-lg"
            />
          </button>
        </div>
        <div class="space-y-12">
          <div class="text-xl md:text-2xl font-semibold">
            <div
              v-if="isError"
              class="alert alert-error shadow-lg w-fit mx-auto text-sm mb-2"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ errorMsg }}</span>
              </div>
            </div>
            โปรดตอบคำถามต่อไปนี้
          </div>

          <div class="flex flex-row justify-center space-x-20 text-xl">
            <div class="flex flex-col space-y-2">
              <font-awesome-icon
                icon="fa-solid fa-mars"
                class="text-6xl md:text-8xl text-blue-400"
              />
              <div>เพศชาย</div>
              <input
                type="radio"
                name="gender"
                class="radio checked:bg-accent m-auto"
                v-model="gender"
                value="male"
              />
            </div>
            <div class="flex flex-col space-y-2">
              <font-awesome-icon
                icon="fa-solid fa-venus"
                class="text-6xl md:text-8xl text-pink-400"
              />
              <div>เพศหญิง</div>
              <input
                type="radio"
                name="gender"
                class="radio checked:bg-accent m-auto"
                v-model="gender"
                value="female"
              />
            </div>
          </div>
          <div class="text-xl px-20 lg:px-24 space-y-4">
            <div>อายุของคุณ</div>
            <input
              type="number"
              min="0"
              max="120"
              placeholder="Type number here"
              class="input input-bordered w-full max-w-xs"
              v-model="age"
              :class="{ 'input-error': typeof age !== 'number' && isError }"
            />
          </div>
        </div>
        <div class="space-x-4">
          <button
            class="btn bg-base-200 border-base-200 text-gray-600 w-32 rounded-full text-md"
            @click="backToStepOne"
          >
            BACK
          </button>
          <button
            class="btn btn-accent w-32 rounded-full text-md"
            @click="nextToStepThree"
          >
            NEXT
          </button>
        </div>
      </div>

      <!-- step 3 personality question -->
      <div
        v-if="currentStep === 3"
        class="flex justify-between flex-col col-span-5 max-w-full m-16 rounded-3xl border-2 border-neutral p-8 text-center"
      >
        <div class="text-right">
          <span class="text-lg font-semibold mr-4"> MBTI MODE</span>
          <button class="btn btn-circle btn-info btn-sm">
            <font-awesome-icon
              icon="fa-solid fa-question"
              class="text-neutral text-lg"
            />
          </button>
        </div>
        <div class="space-y-12">
          <div class="text-xl">
            <div
              v-if="isError"
              class="alert alert-error shadow-lg w-fit mx-auto text-sm mb-2"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ errorMsg }}</span>
              </div>
            </div>
            <p class="text-xl md:text-2xl font-semibold">
              โปรดตอบคำถามต่อไปนี้อย่างตรงไปตรงมา
            </p>
            ตอบให้ใกล้เคียงกับความรู้สึกที่แท้จริงของคุณมากที่สุด
          </div>
          <div
            class="text-xl px-20 lg:px-36 xl:px-40 space-y-8 max-h-80 overflow-y-auto text-left"
          >
            <div v-for="(quiz, index) in quizzess" :key="index">
              <div>
                {{ index + 1 }}.
                <span v-html="quiz.question"></span>
              </div>
              <textarea
                class="textarea bg-info w-full text-lg h-28 mt-4"
                :class="{
                  'textarea-error':
                    (quiz.answer === '' ||
                      quiz.answer.length <= 3 ||
                      quiz.answer === '   ') &&
                    isError,
                }"
                placeholder="Type here"
                v-model="quiz.answer"
              ></textarea>
              <div class="text-sm text-error pr-2">{{ quiz.message }}</div>
            </div>
          </div>
        </div>
        <div class="space-x-4">
          <button
            class="btn bg-base-200 border-base-200 text-gray-600 w-32 rounded-full text-md"
            @click="backToStepTwo"
          >
            BACK
          </button>
          <button
            class="btn btn-accent w-32 rounded-full text-md"
            @click="nextToStepFour"
          >
            GENERATE !
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRaw } from "@vue/reactivity";

const currentStep = ref(3);
const mbti = ref("default");
const mbtiList = ref([
  "ESTJ",
  "ENTJ",
  "ESFJ",
  "ENFJ",
  "ISTJ",
  "ISFJ",
  "INTJ",
  "INFJ",
  "ESTP",
  "ESFP",
  "ENTP",
  "ENFP",
  "ISTP",
  "ISFP",
  "INTP",
  "INFP",
]);
const isError = ref(false);
const errorMsg = ref("");
const gender = ref("");
const age = ref(null);
const quizzess = reactive([
  {
    message: "",
    question:
      "สมมติให้คุณเป็นคนอื่นๆรอบข้างตัวคุณ คุณจะอธิบายเกี่ยวกับตัวคุณว่าอย่างไร",
    answer: "",
  },
  {
    message: "",
    question: "คุณคิดอย่างไรเมื่อต้องเข้าสังคมหรือทำกิจกรรมต่างๆร่วมกับผู้อื่น",
    answer: "",
  },
  {
    message: "",
    question:
      "การได้พบเจอและพูดคุยกับคนแปลกหน้า สำหรับคุณแล้วมันเป็นเรื่องที่…",
    answer: "",
  },
  {
    message: "",
    question:
      'คุณคิดอย่างไรกับคำพูดที่ว่า <span class="font-semibold">" จินตนาการสำคัญกว่าความรู้ "</span>',
    answer: "",
  },
  {
    message: "",
    question:
      'จงพิมพ์สิ่งที่คุณเห็นจากภาพนี้ <img src="https://screenmusings.org/movie/blu-ray/Amelie/images/Amelie-0883.jpg" class="w-full mt-1" />',
    answer: "",
    image: "",
  },
  {
    message: "",
    question: "โดยปกติแล้วคุณจะให้คำชมกับผู้อื่นก็ต่อเมื่อ…",
    answer: "",
  },
  {
    message: "",
    question:
      "วิธีการแบบไหนที่จะสามารถโน้มน้าวใจคุณได้ดี (เช่น อธิบายอย่างสมเหตุสมผล หรือ การนึกถึงความต้องการและความรู้สึกของผู้อื่น)",
    answer: "",
  },
  {
    message: "",
    question: "โต๊ะหรือสถานที่ที่คุณใช้ทำงานมีลักษณะเป็นอย่างไร",
    answer: "",
  },
  {
    message: "",
    question:
      "หากคุณเป็นผู้จัดการโครงการแล้วพบว่าลูกน้องของคุณไม่ได้ทำตามแผนที่วางไว้ ทำให้งานล่าช้า คุณจะจัดการกับลูกน้องอย่างไร",
    answer: "",
  },
  {
    message: "",
    question:
      'สุดท้ายนี้ คุณคิดว่า <span class="font-semibold">ตัวตนที่แท้จริง</span> ของคุณเป็นอย่างไร',
    answer: "",
  },
]);

const nextToStepTwo = () => {
  if (mbti.value !== "default") {
    currentStep.value = 2;
    isError.value = false;
    errorMsg.value = "";
  } else {
    isError.value = true;
    errorMsg.value = "กรุณาเลือกประเภทบุคลิกภาพ(MBTI)";
  }
};

const backToStepOne = () => {
  currentStep.value = 1;
};

const nextToStepThree = () => {
  if (gender.value !== "" && typeof toRaw(age.value) === "number") {
    currentStep.value = 3;
    isError.value = false;
    errorMsg.value = "";
  } else {
    isError.value = true;
    errorMsg.value = "กรุณาตอบคำถามให้ครบ";
  }
};

const backToStepTwo = () => {
  currentStep.value = 2;
};

const checkQuiz = (quiz) => {
  if (quiz.answer === "") {
    isError.value = true;
    errorMsg.value = "กรุณาตอบคำถามให้ครบ";
    if (quiz.answer.length <= 3 || quiz.answer === "    ") {
      quiz.message = "คำตอบต้องมากกว่า 3 ตัวอักษร";
    } else {
      quiz.message = "";
      isError.value = true;
      errorMsg.value = "กรุณาตอบคำถามให้ครบ";
      currentStep.value = 3;
    }
  } else {
    quiz.message = "";
    isError.value = false;
    errorMsg.value = "";
    currentStep.value = 4;
  }
  // if (
  //   quiz.answer !== "" &&
  //   (quiz.answer.length >= 3 || quiz.answer !== "    ")
  // ) {
  //   quiz.message = "";
  //   isError.value = false;
  //   errorMsg.value = "";
  //   currentStep.value = 4;
  // } else {
  //   isError.value = true;
  //   errorMsg.value = "กรุณาตอบคำถามให้ครบ";
  //   if (quiz.answer.length <= 3 || quiz.answer === "    ") {
  //     quiz.message = "คำตอบต้องมากกว่า 3 ตัวอักษร";
  //   }
  // }

  // if (quiz.answer !== "") {
  //   if (
  //     quiz.answer.length <= 3 ||
  //     quiz.answer === " " ||
  //     quiz.answer === "    "
  //   ) {
  //     isError.value = true;
  //     errorMsg.value = "กรุณาตอบคำถามให้ครบ";
  //     quiz.message = "คำตอบต้องมากกว่า 3 ตัวอักษร";
  //   } else {
  //     quiz.message = "";
  //     isError.value = false;
  //     errorMsg.value = "";
  //     currentStep.value = 4;
  //   }
  // } else {
  //   isError.value = true;
  //   errorMsg.value = "กรุณาตอบคำถามให้ครบ";
  //   if (
  //     quiz.answer.length <= 3 ||
  //     quiz.answer === " " ||
  //     quiz.answer === "    "
  //   ) {
  //     isError.value = true;
  //     errorMsg.value = "กรุณาตอบคำถามให้ครบ";
  //     quiz.message = "คำตอบต้องมากกว่า 3 ตัวอักษร";
  //   } else {
  //     quiz.message = "";
  //     isError.value = false;
  //     errorMsg.value = "";
  //     currentStep.value = 4;
  //   }
  // }
};

const nextToStepFour = () => {
  quizzess.some(checkQuiz);
  console.log(toRaw(quizzess));
  // if () {

  //   isError.value = false;
  //   errorMsg.value = "";
  // } else {
  //   isError.value = true;
  //   errorMsg.value = "กรุณาตอบคำถามให้ครบ";
  // }
};

// saveCharacterForm("INFP",12,"male",["ans 1","ans 2"])
const saveCharacterForm = (mbti, age, gender, quizzess) => {
  const body = {
    mbti,
    age,
    gender,
    quizzess: quizzess.map((quiz, index) => ({
      index,
      answer: quiz,
    })),
  };

  // sent http request
};
</script>
