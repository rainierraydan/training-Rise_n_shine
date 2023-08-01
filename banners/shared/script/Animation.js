import FrameAnimation from "@mediamonks/display-temple/animation/FrameAnimation"

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container, config) {
  super();

    this.container = container;
    this.config = config;
    this.size = this.config.content.size;
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
  frame0(tl){
    tl.add('frame0', 0)
    tl.to('.content', {duration:1, opacity: 1}, 'frame0')
  }

  frame1(tl){
    tl.add('frame1', 'frame0+=.3')
    tl.from('.bg', {duration:.8, opacity: 0}, 'frame1')
    tl.from('.bgAsset', {duration:2.5, scale: 1.5, ease: "power4.out"}, 'frame1')
    if(this.size === '300x600'){
      tl.from('.whitePath', {duration:1.5, y: '10%', ease: "power4.out"}, 'frame1')
      tl.from('.shadow ', {duration:1.5, opacity:.3, y: '10%', ease: "power4.out"}, 'frame1')
    }else if(this.size === '336x280'){
      tl.from('.whitePath', {duration:1.5, y: '60%', ease: "power4.out"}, 'frame1')
      tl.from('.shadow ', {duration:1.5, opacity:.3, y: '85%', ease: "power4.out"}, 'frame1')
    }else if(this.size === '300x250'){
      tl.from('.whitePath', {duration:1.5, y: '60%', ease: "power4.out"}, 'frame1')
      tl.from('.shadow ', {duration:1.5, opacity:.3, y: '85%', ease: "power4.out"}, 'frame1')
    }else{
      tl.from('.whitePath', {duration:1.5, y: '60%', ease: "power4.out"}, 'frame1')
      tl.from('.shadow ', {duration:1.5, opacity:.3, y: '60%', ease: "power4.out"}, 'frame1')
    }
    if(this.size === '300x600'){
      tl.from('.violetPath ', {duration:1.5, y: '30%', ease: "power4.out"}, 'frame1+=.2')
    }else if(this.size === '1080x1920'){
      tl.from('.violetPath ', {duration:1.5, y: '90%', ease: "power4.out"}, 'frame1+=.2')
    }else if(this.size === '1080x1080'){
      tl.from('.violetPath ', {duration:1.5, y: '90%', ease: "power4.out"}, 'frame1+=.2')
    }else if(this.size === '300x250'){
      tl.from('.violetPath ', {duration:1.5, y: '70%', ease: "power4.out"}, 'frame1+=.2')
    }else if(this.size === '336x280'){
      tl.from('.violetPath ', {duration:1.5, y: '90%', ease: "power4.out"}, 'frame1+=.2')
    }else{
      tl.from('.violetPath ', {duration:1.5, y: 90, ease: "power4.out"}, 'frame1+=.2')
    }
    tl.from('.copy1 ', {duration:1.2, opacity: 0, y:-50, ease: "power4.out"}, 'frame1+=.8')
    tl.from('.copy2 ', {duration:.5, opacity: 0, ease: "power4.out"}, 'frame1+=.5')
    tl.from('.copy3 ', {duration:.2, opacity: 0}, 'frame1+=.2')
    tl.from('.logo ', {duration:1, opacity: 0, scale:.95, ease: "power4.out"}, 'frame1+=.45')
  }
}
