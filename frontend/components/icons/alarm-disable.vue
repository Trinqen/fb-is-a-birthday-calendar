<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48"
    height="48"
  >
    <title>{{ title }}</title>
    <g>
      <path d="M30,40a6,6,0,0,1-12,0Z" fill="#a58c21" />
      <path
        d="M42,41H6a1,1,0,0,1-.833-1.554A26.91,26.91,0,0,0,9,26V16a15,15,0,1,1,30,0V26a26.782,26.782,0,0,0,3.832,13.445A1,1,0,0,1,42,41Z"
        fill="#efd358"
      />
      <path
        d="M44.293,43.707l-40-40A1,1,0,0,1,5.707,2.293l40,40a1,1,0,0,1-1.414,1.414Z"
        fill="#e86c60"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'alarm disable',
    },
  },
}
</script>
