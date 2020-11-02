<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    :width="width"
    :height="height"
  >
    <title>{{ title }}</title>
    <g stroke-width="1" fill="#6fb8cc" stroke="#6fb8cc">
      <path
        d="M2.5,5.5h10a0,0,0,0,1,0,0v3a5,5,0,0,1-5,5h0a5,5,0,0,1-5-5v-3a0,0,0,0,1,0,0Z"
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="7.5"
        y1="0.5"
        x2="7.5"
        y2="2.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="4.5"
        y1="0.5"
        x2="4.5"
        y2="2.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="10.5"
        y1="0.5"
        x2="10.5"
        y2="2.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5,9.5h1a2,2,0,0,0,2-2v-2h-3"
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="14.5"
        y1="15.5"
        x2="0.5"
        y2="15.5"
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: '100%',
    },
    title: {
      type: String,
      default: 'coffee',
    },
  },
}
</script>
