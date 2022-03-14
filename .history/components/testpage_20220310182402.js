import React from "react";
import { useState } from "react";
export const Testpage = () => {
  return (
    <>
      <div class="max-w-4xl mx-auto mt-8 z-10">
        <div class="text-center text-4xl">LET'S COUNTDOWN TO NEW YEAR</div>

        <div class="mt-14 flex items-center justify-between">
          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span
              class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
              id="days"
            >
              <span class="top">00</span>
              <span class="top-back">
                <span>00</span>
              </span>
              <span class="bottom">08</span>
              <span class="bottom-back">
                <span>00</span>
              </span>
            </span>
            <span class="title">Days</span>
          </div>

          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span
              class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
              id="hours"
            >
              <span class="top">00</span>
              <span class="top-back">
                <span>00</span>
              </span>
              <span class="bottom">08</span>
              <span class="bottom-back">
                <span>00</span>
              </span>
            </span>
            <span class="title">Hours</span>
          </div>

          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span
              class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
              id="minutes"
            >
              <span class="top">00</span>
              <span class="top-back">
                <span>00</span>
              </span>
              <span class="bottom">08</span>
              <span class="bottom-back">
                <span>00</span>
              </span>
            </span>
            <span class="title">Minutes</span>
          </div>

          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span class="seconds time-elem mb-6 text-center" id="seconds">
              <span class="top">00</span>
              <span class="top-back">
                <span>00</span>
              </span>
              <span class="bottom">00</span>
              <span class="bottom-back">
                <span>00</span>
              </span>
            </span>
            <span class="title">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};
