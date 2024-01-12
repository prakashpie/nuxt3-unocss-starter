<template>
  <div>
    <slot name="app-before"></slot>
    <div>
      <slot name="header"></slot>
      <div id="main" ref="rootRef">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
    <slot name="app-after"></slot>
  </div>
</template>
