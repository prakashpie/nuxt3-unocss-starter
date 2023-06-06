<template>
  <div>
    <slot name="app-before"></slot>
    <div class="">
      <slot name="header"></slot>
      <div id="main">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
    <slot name="app-after"></slot>
  </div>
</template>
<script setup></script>
