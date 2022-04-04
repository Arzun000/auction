import React from "react";

export const Testpage = () => {
  let cont = document.querySelector(".lines-container");
  let menu = document.querySelector(".menu");
  let pointer = document.querySelector(".pointer");
  let blog = document.querySelector(".blog");
  let contact = document.querySelector(".contact");
  let blogChild = document.querySelector(".blog-child");
  let contactChild = document.querySelector(".contact-child");
  cont.addEventListener("click", () => {
    blog.classList.remove("content");
    contact.classList.remove("content");
    if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
      blogChild.style.maxHeight = null;
      contactChild.style.maxHeight = null;
      pointer.style.display = "none";
      setTimeout(() => {
        pointer.classList.remove("pointer-up");
        pointer.style.display = "block";
      }, 500);
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
      pointer.style.display = "none";
      setTimeout(() => {
        pointer.classList.toggle("pointer-up");
        pointer.style.display = "block";
      }, 500);
    }
  });
  pointer.addEventListener("click", () => {
    blog.classList.remove("content");
    contact.classList.remove("content");
    if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
      blogChild.style.maxHeight = null;
      contactChild.style.maxHeight = null;
      pointer.style.display = "none";
      setTimeout(() => {
        pointer.classList.remove("pointer-up");
        pointer.style.display = "block";
      }, 500);
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
      pointer.style.display = "none";
      setTimeout(() => {
        pointer.classList.toggle("pointer-up");
        pointer.style.display = "block";
      }, 500);
    }
  });
  blog.addEventListener("click", () => {
    if (blogChild.style.maxHeight) {
      blogChild.style.maxHeight = null;
      blog.classList.add("btn-anime");
      blog.classList.remove("content");
      setTimeout(() => {
        blog.classList.remove("btn-anime");
      }, 100);
    } else {
      blogChild.style.maxHeight = blogChild.scrollHeight + "px";
      menu.style.maxHeight = menu.scrollHeight + blogChild.scrollHeight + "px";
      blog.classList.add("btn-anime");
      blog.classList.add("content");
      setTimeout(() => {
        blog.classList.remove("btn-anime");
      }, 100);
    }
  });
  contact.addEventListener("click", () => {
    if (contactChild.style.maxHeight) {
      contactChild.style.maxHeight = null;
      contact.classList.add("btn-anime");
      contact.classList.remove("content");
      setTimeout(() => {
        contact.classList.remove("btn-anime");
      }, 100);
    } else {
      contactChild.style.maxHeight = contactChild.scrollHeight + "px";
      menu.style.maxHeight =
        menu.scrollHeight + contactChild.scrollHeight + "px";
      contact.classList.add("btn-anime");
      contact.classList.add("content");
      setTimeout(() => {
        contact.classList.remove("btn-anime");
      }, 100);
    }
  });
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
