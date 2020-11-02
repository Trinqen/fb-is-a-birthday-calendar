<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <title>{{ title }}</title>
    <g stroke-width="1" fill="#6fb8cc" stroke="#6fb8cc">
      <circle cx="8.5" cy="5" r="1" stroke="none" />
      <circle
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        cx="8.5"
        cy="8.5"
        r="7"
      />
      <line
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="8.5"
        y1="12.5"
        x2="8.5"
        y2="8.5"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'c info',
    },
  },
}
</script>
