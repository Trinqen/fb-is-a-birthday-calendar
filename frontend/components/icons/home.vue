<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
  >
    <title>{{ title }}</title>
    <g
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      fill="#6fb8cc"
      stroke="#6fb8cc"
    >
      <polyline points="1 14 16 2 31 14" fill="none" stroke-miterlimit="10" />
      <polyline
        points="13 30 13 22 19 22 19 30"
        fill="none"
        stroke="#3e6e98"
        stroke-miterlimit="10"
      />
      <polyline
        points="5 16 5 30 27 30 27 16"
        fill="none"
        stroke="#3e6e98"
        stroke-miterlimit="10"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'home',
    },
  },
}
</script>
