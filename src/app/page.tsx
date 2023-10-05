import { CaseStudies } from './components/case_studies/CaseStudies'
import { Hero } from './components/hero/Hero'
import { WhatWeDo } from './components/what_we_do/WhatWeDo'

export default function Home() {
  return (
    <div className='is-flex is-flex-direction-column'>
      <Hero />
      <WhatWeDo />
      <CaseStudies/>
    </div>
  )
}