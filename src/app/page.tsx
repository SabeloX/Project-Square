import { CaseStudy, getCaseStudies } from '@/utils/case_studies'
import { CaseStudies } from './components/case_studies/CaseStudies'
import { Hero } from './components/hero/Hero'
import { WhatWeDo } from './components/what_we_do/WhatWeDo'
import { Industries } from './components/industries/Industries';
import { Contact } from './components/contact/contact';

/**
 * The Home component represents the main page of the website.
 * @returns {JSX.Element} The Home component JSX.
 */
export default async function Home() {
  const data = await getCaseStudies();
  return (
    <div className='is-flex is-flex-direction-column'>
      <Hero />
      <WhatWeDo />
      <CaseStudies data={data} />
      <Industries />
      <Contact/>
    </div>
  )
}