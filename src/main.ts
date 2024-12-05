"use strict";

import "./styles.css";

import "./navbar.ts"
import "./manage_theme.ts"

const blogs_left_button = document.getElementById('slide-left') as HTMLButtonElement;
const blogs_right_button = document.getElementById('slide-right') as HTMLButtonElement;
const blogs_list = document.querySelector('#blogs-list') as HTMLDivElement;

blogs_left_button.addEventListener('click', () => {
  blogs_list.scrollBy({
    left: -300,
    behavior: 'smooth'
  })
});
blogs_right_button.addEventListener('click', () => {
  blogs_list.scrollBy({
    left: 300,
    behavior: 'smooth'
  })
});