<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <title>{{ title }}</title>
    <g stroke-width="1" fill="#6fb8cc" stroke="#6fb8cc">
      <path
        d="M10.857,5.518l1.915-4.325A1.163,1.163,0,0,1,14.307.6q.037.017.075.036h0a1.165,1.165,0,0,1,.482,1.574q-.02.037-.042.072L12.441,6.087"
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="0.5"
        y1="11.5"
        x2="15.5"
        y2="11.5"
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5,11.5l-.621,2.485A2,2,0,0,1,11.938,15.5H4.062a2,2,0,0,1-1.941-1.515L1.5,11.5"
        fill="none"
        stroke="#3e6e98"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8,3V4H8A2,2,0,0,1,6,2V1H6A2,2,0,0,1,8,3Z"
        fill="#3e6e98"
        stroke="none"
      />
      <path
        d="M7,9a3.5,3.5,0,0,1,7,0"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9,9a1.5,1.5,0,0,1,3,0"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2,9A3.5,3.5,0,0,1,8,6.551"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4,9A1.5,1.5,0,0,1,5.5,7.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'pasta',
    },
  },
}
</script>
