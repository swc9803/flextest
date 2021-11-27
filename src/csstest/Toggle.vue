<template>
  <div class="cont">
    <input type="checkbox" id="toggle-slider">
    <label for="toggle-slider">On/Off</label>
  </div>
</template>

<style lang="scss" scoped>
.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
label {
  cursor: pointer;
  width: 100px;
  height: 50px;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  background: #dff7fa;
  border-radius: 25px;
  position: relative;
  transition: 0.4s ease-out;
}
label:after {
  content: '';
  width: 40px;
  height: 40px;
  background: #a5cace;
  position: absolute;
  border-radius: 50%;
  top: 5px;
  left: 5px;
}
#toggle-slider:checked + label {
  background: #96e7ef;
}
#toggle-slider:checked + label:after {
  background: #1d6269;
  left: 50px;
}
</style>>
