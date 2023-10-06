import { CaseStudy, getCaseStudies } from '@/utils/case_studies'
import { CaseStudies } from './components/case_studies/CaseStudies'
import { Hero } from './components/hero/Hero'
import { WhatWeDo } from './components/what_we_do/WhatWeDo'

export default async function Home() {
  const data = await getCaseStudies();
  return (
    <div className='is-flex is-flex-direction-column'>
      <Hero />
      <WhatWeDo />
      <CaseStudies data={data} />
    </div>
  )
}