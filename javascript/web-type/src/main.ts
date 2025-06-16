import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h4>hello world</h4>
    <h4>hello world</h4>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
