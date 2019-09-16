<template>
  <div class="custom-scroll">
    <div class="custom-scroll-con">
      <div class="custom-scroll-con-in" ref="scrollConIn" @scroll.stop="barScroll">
        <div class="custom-scroll-main" ref="scrollMain">
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>dsda</h3>
          <h3>11111111</h3>
        </div>
      </div>
    </div>
    <!-- 垂直滚动条 -->
    <div class="custom-scroll_bar is-vartical">
      <div 
        class="custom-scroll_bar_block"
        :style="{height: verticalBarHeight + 'px', transform: `translateY(${varticalSlide}px)`}"></div>
    </div>
    <!-- 垂直滚动条 end -->
    <div class="custom-scroll_bar is-horizontal" @wheel.capture.stop="handlerWheel">
      <div
        @mousedown.stop='horizontalMove'
        class="custom-scroll_bar_block"
        :style="{width: horizontalBarWidth + 'px', transform: `translateY(${hotizontalSlide}px)`}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      verticalBarHeight: 0,
      varticalSlide: 0,
      horizontalBarWidth: 0,
      hotizontalSlide: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      let windowHeight = document.body.clientHeight || document.documentElement.clientHeight // 窗口高度
      let windowWidth = document.body.clientWidth || document.documentElement.clientWidth // 窗口宽度
      let scrollConInEle = this.$refs.scrollConIn // 内容外容器，用于计算容器宽度和高度
      let scrollMainEle = this.$refs.scrollMain // 放内容的容器
      // 垂直滚动条高度
      let veritcalHeight = (scrollConInEle.clientHeight * windowHeight) / scrollMainEle.clientHeight
      // this.verticalBarHeight = (ratio * scrollMainEle.clientHeight).toFixed(2)
      this.verticalBarHeight = veritcalHeight.toFixed(2) // 格式化
      // console.log(windowHeight, scrollMainEle.clientHeight)

      // console.log('ratio: ', windowHeight/scrollMainEle.clientHeight)
      // console.log('scrollConInEle.clientHeight: ', scrollConInEle.clientHeight)
      // console.log('windowHeight: ', windowHeight)
      // console.log('scrollMainEle.clientHeight: ', scrollMainEle.clientHeight)
      // console.log('verticalBarHeight: ', this.verticalBarHeight)

      // 水平宽度
      let horizontalWidth = (scrollConInEle.clientWidth * windowWidth) / scrollMainEle.clientWidth
      console.log("scrollConInEle.clientWidth: ", scrollConInEle.clientWidth)
      console.log("windowWidth: ", windowWidth)
      console.log("scrollMainEle.clientWidth: ", scrollMainEle.clientWidth)
      console.log("horizontalWidth: ", horizontalWidth)
      this.horizontalBarWidth = horizontalWidth.toFixed(2) // 格式化
      // 滚动长度/滚动条总长度 = 窗口宽度/元素总宽度
    })
  },
  methods: {
    // 滚动条滚动事件
    barScroll (e) {
      let windowHeight = document.body.clientHeight || document.documentElement.clientHeight
      let scrollMainEle = this.$refs.scrollMain
      let ratio = (windowHeight/scrollMainEle.clientHeight).toFixed(2)
      // console.log(this.$refs.scrollConIn.scrollTop)
      this.varticalSlide = (this.$refs.scrollConIn.scrollTop) * ratio
    },
    horizontalMove (e) {
      console.log(1, e)
    },
    handlerWheel (e) {
      console.log(2, e)
    }
  }
}
</script>

<style lang="scss" scope>
  .custom-scroll {
    overflow: hidden;
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
  }

  .custom-scroll-con {
    height: 100%;
    overflow: hidden;
    border-right: 20px solid transparent;

    .custom-scroll-con-in {
      overflow-y: scroll;
      // overflow-x: scroll;
      overflow-x: hidden;
      height: 100%;
      // width: calc(100% + 20px);
      min-width: calc(100% + 20px);
      
      .custom-scroll-main {
        // padding-right: 10px;
        overflow-y: hidden;
        overflow-x: auto;
        width: auto;
        height: auto;
        display: inline-block;
      }
    }
  }

  .custom-scroll_bar {
    &.is-vartical {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 100%;

      .custom-scroll_bar_block {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        border-radius: 10px;
      }
    }

    &.is-horizontal {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px;

      .custom-scroll_bar_block {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        border-radius: 10px;
      }
    }
  }
</style>

<style lang="scss">
  h3 {
    width: 2000px;
    text-align: left;
  }
</style>
