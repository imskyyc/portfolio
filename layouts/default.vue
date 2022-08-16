<template>
  <div>
    <div class="navbar-container">
      <nuxt-link to="/">
        <img src="~/assets/images/sky_full.jpeg" />
      </nuxt-link>

      <div class="navbar-dropdown">
          <ul>
            <li><nuxt-link to="/about">About Me</nuxt-link></li>
            <li><nuxt-link to="/resume">Resume</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact Form</nuxt-link></li>
          </ul>
      </div>
    </div>

    <slot />
  </div>
</template>
