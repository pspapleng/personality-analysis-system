<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost hidden md:flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="hidden md:flex h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <label
          tabindex="0"
          class="btn btn-ghost md:hidden"
          style="padding: 3px"
        >
          <img class="p-0" src="../assets/logo.svg" width="70%" />
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>HOME</a></li>
          <li tabindex="0">
            <a class="justify-between">
              GENERATE CHARACTER
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><a>MBTI MODE</a></li>
              <li><a>CUSTOM MODE</a></li>
              <li><a>REAL MODE</a></li>
            </ul>
          </li>
          <li><a>PERSONALITY TYPES</a></li>
          <li><a>ABOUT</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost hidden md:flex">
        <img src="../assets/logo.svg" width="28px" />
        <p class="hidden md:flex lg:hidden xl:flex text-xs ml-3">
          PERSONALITY CHARACTER GENERATOR
        </p>
      </a>
    </div>
    <div class="navbar-center md:hidden">HOME</div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li tabindex="0">
          <a>
            GENERATE CHARACTER
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><a>MBTI MODE</a></li>
            <li><a>CUSTOM MODE</a></li>
            <li><a>REAL MODE</a></li>
          </ul>
        </li>
        <li><a>PERSONALITY TYPES</a></li>
        <li><a>ABOUT</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-accent">
        <p class="hidden lg:flex mr-2">GENERATE</p>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
      </a>
      <!-- <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>HOME</a></li>
          <li tabindex="0">
            <a class="justify-between">
              GENERATE CHARACTER
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2">
              <li><a>MBTI MODE</a></li>
              <li><a>CUSTOM MODE</a></li>
              <li><a>REAL MODE</a></li>
            </ul>
          </li>
          <li><a>PERSONALITY TYPES</a></li>
          <li><a>ABOUT</a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>
