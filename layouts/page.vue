<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="meow-flex meow-flex-col meow-min-h-screen">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="meow-flex-1 meow-w-full meow-flex meow-flex-col">
        <div
          class="meow-relative meow-flex-1 meow-flex meow-flex-col meow-mx-auto meow-max-w-8xl meow-w-full meow-h-full"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
