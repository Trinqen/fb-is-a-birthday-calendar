<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48"
    height="48"
  >
    <title>{{ title }}</title>
    <g>
      <path d="M30,41a6,6,0,0,1-12,0Z" fill="#a58c21" />
      <path
        d="M42,42H6a1,1,0,0,1-.833-1.554A26.91,26.91,0,0,0,9,27V17a15,15,0,0,1,30,0V27a26.782,26.782,0,0,0,3.832,13.445A1,1,0,0,1,42,42Z"
        fill="#efd358"
      />
      <path d="M27,13A10,10,0,1,0,37,3,10,10,0,0,0,27,13Z" fill="#72c472" />
      <path
        d="M38,9v3h3a1,1,0,0,1,0,2H38v3a1,1,0,0,1-2,0V14H33a1,1,0,0,1,0-2h3V9a1,1,0,0,1,2,0Z"
        fill="#fff"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'alarm add',
    },
  },
}
</script>
