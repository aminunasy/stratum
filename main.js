import './style.css'
import { Hero } from './components/Hero.js'
import { SocialProof } from './components/SocialProof.js'
import { Services } from './components/Services.js'
import { Methodology } from './components/Methodology.js'
import { Projects } from './components/Projects.js'
import { CTA } from './components/CTA.js'

document.querySelector('#app').innerHTML = `
  <main>
    ${Hero()}
    ${SocialProof()}
    ${Services()}
    ${Methodology()}
    ${Projects()}
    ${CTA()}
  </main>
`
