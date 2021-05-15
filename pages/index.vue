<template>
  <layout-wrapper> myPage </layout-wrapper>
</template>

<script>
export default {
  created() {
    console.log(process.env.TEST)
  },
}
</script>
