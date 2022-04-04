import React from "react";

export const Testpage = () => {
  return (
    <div>
      <div class="container">
        <div class="lines-container">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
        <ul class="menu">
          <li>
            <a href="#" class="outer">
              About
            </a>
          </li>
          <li>
            <a href="#" class="outer blog">
              Blog
            </a>
            <ul class="blog-child">
              <li>
                <a href="#" class="inner">
                  Tech
                </a>
              </li>
              <li>
                <a href="#" class="inner">
                  Travels
                </a>
              </li>
              <li>
                <a href="#" class="inner">
                  Gaming
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="outer contact">
              Contacts
            </a>
            <ul class="contact-child">
              <li>
                <a href="#" class="inner">
                  Email
                </a>
              </li>
              <li>
                <a href="#" class="inner">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" class="inner">
                  Address
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="outer">
              CV
            </a>
          </li>
        </ul>
        <div class="pointer"></div>
      </div>
    </div>
  );
};
