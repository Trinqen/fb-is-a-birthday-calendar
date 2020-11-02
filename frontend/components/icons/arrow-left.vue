<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <title>{{ title }}</title>
    <g stroke-width="1" fill="#6fb8cc" stroke="#6fb8cc">
      <line
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="15.5"
        y1="8.5"
        x2="0.5"
        y2="8.5"
      />
      <polyline
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        points="5.5,3.5 0.5,8.5 5.5,13.5 "
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'arrow left',
    },
  },
}
</script>
