import type { Metadata } from 'next'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import billHelpContent from '@/content/pages/bill-help'

export const metadata: Metadata = {
  title: 'Bill Help',
  description: 'Clear, practical guidance for understanding electricity bills and documenting billing concerns.',
}

const { components, checks, documents, categories } = billHelpContent

export default function BillHelpPage() {
  return (
    <main>
      <section className="inner-hero bill-help-hero">
        <div className="container inner-hero-grid">
          <div>
            <p className="eyebrow"><span /> Electricity Bill Help</p>
            <h1>Understand Your Electricity Bill</h1>
            <p className="inner-hero-lead">Confused by a charge on your bill? Learn about common electricity-bill components, understand billing terminology and find information that can help you identify and document a billing concern.</p>
          </div>
          <div className="bill-help-hero-image"><img src="/images/bill-review.webp" alt="Illustration of reviewing an electricity bill" /></div>
        </div>
      </section>

      <section id="components" className="section component-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow"><span /> Bill basics</p><h2>What’s on an Electricity Bill?</h2><p>Most bills combine several charges and adjustments. Reading each line separately makes the total easier to check.</p></div>
          <div className="component-grid">{components.map(([title, text], i) => <article className="component-card" key={title}><div className="component-number">0{i + 1}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="ppac-fppas" className="ppac-section">
        <div className="container ppac-grid">
          <div className="ppac-copy"><p className="eyebrow light"><span /> Understand the adjustment</p><h2>PPAC / FPPAS in simple terms</h2><p>Distribution companies procure electricity from different sources. Fuel prices, generation costs and market conditions can change, so power-purchase related costs may be adjusted under the applicable regulatory framework.</p><p className="small-note">Check your latest bill, your provider’s official information and current DERC orders for the rate that applies to your connection.</p></div>
          <div className="ppac-qa"><div><h3>Why can the amount change?</h3><p>It may vary with the billing period, regulatory treatment and the underlying cost of power procurement.</p></div><div><h3>Does every consumer pay the same?</h3><p>Not necessarily. Provider, consumer category, period and applicable orders can affect the amount.</p></div></div>
        </div>
      </section>

      <section id="grievance-checklist" className="section checklist-section">
        <div className="container two-column-section"><div className="section-heading"><div><p className="eyebrow"><span /> A practical check</p><h2>Something Looks Wrong With My Bill</h2><p>Work through these steps before submitting a concern. A clear record helps the right channel respond.</p></div></div><div className="checklist">{checks.map(([title, text], i) => <div className="checklist-item" key={title}><div className="check-icon">{i + 1}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
      </section>

      <section id="source-records" className="section source-records-section"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> Society records</p><h2>Documents that show the work behind the platform</h2></div><p className="section-aside">These supplied records provide context for the Society’s registration and its earlier engagement on electricity-billing concerns.</p></div><div className="source-records-grid"><figure className="source-record-card"><div className="source-record-image"><img src="/images/registration-certificate.webp" alt="Certificate of registration for Delhi Fight Against Electricity Bills Society" /></div><figcaption><strong>Registration record</strong><span>Certificate under the Societies Registration Act XXI of 1860.</span></figcaption></figure><figure className="source-record-card"><div className="source-record-image"><img src="/images/association-support-letter.webp" alt="Association support letter concerning unfair electricity-bill charges" /></div><figcaption><strong>Earlier initiative record</strong><span>Support letter dated 24 July 2024 concerning unfair electricity-bill charges.</span></figcaption></figure></div></div></section>

      <section id="submit-concern" className="section submit-concern-section"><div className="container concern-grid"><div><p className="eyebrow"><span /> Submit your concern</p><h2>Prepare the details that matter</h2><p>Keep these items ready so your concern can be understood, documented and represented through an appropriate channel.</p><ul className="keep-list">{documents.map(item => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul></div><div className="category-panel"><h3>What is your concern about?</h3><div className="category-grid">{categories.map(item => <span className="category-chip" key={item}>{item}</span>)}</div><div className="review-note"><AlertCircle size={18} /><p>This page provides awareness and documentation guidance. It is not legal advice and does not replace your electricity provider’s or regulator’s official grievance mechanisms.</p></div></div></div></section>
    </main>
  )
}
