import barba from '@barba/core'

export function initBarba() {
  barba.init({
    transitions: [
      {
        name: 'pixel-transition',
        leave(data) {
          return new Promise((resolve) => {
            // Pixel dissolve animation
            const done = this.async()
            
            // Animate out current container
            const container = data.current.container
            container.style.opacity = '0'
            container.style.transform = 'scale(0.95)'
            container.style.transition = 'all 0.3s steps(8)'
            
            setTimeout(() => {
              done()
              resolve()
            }, 300)
          })
        },
        enter(data) {
          const container = data.next.container
          container.style.opacity = '0'
          container.style.transform = 'scale(1.05)'
          
          setTimeout(() => {
            container.style.transition = 'all 0.4s steps(8)'
            container.style.opacity = '1'
            container.style.transform = 'scale(1)'
          }, 50)
        },
      },
    ],
  })
}
