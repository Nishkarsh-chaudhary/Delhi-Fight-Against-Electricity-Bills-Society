import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';
import { NewsArchive } from './news-archive';
import newsMediaContent from '@/content/pages/news-media';
export const metadata: Metadata = { title: 'News & Media | Delhi Fight Against Electricity Bills Society', description: 'Society activities, electricity-billing developments, regulatory updates and Hindi newspaper coverage.' };
export default function NewsMediaPage() {
 return <main id="main" className="media-page">
  <section className="inner-hero media-hero"><div className="container inner-hero-grid media-hero-grid"><div><p className="eyebrow"><span/> News & Media</p><h1>{newsMediaContent.heroTitle}</h1><p className="inner-hero-lead">{newsMediaContent.heroLead}</p><a className="text-link" href="#latest-updates">Explore the latest updates <ArrowRight size={18}/></a></div><div className="about-hero-photo media-hero-image"><img src="/images/news-media-banner.jpeg" width="899" height="1599" alt="Hindi newspaper coverage of electricity billing and PPAC changes." fetchPriority="high" /></div></div></section>
  <section id="latest-updates" className="section container"><div className="section-heading"><div><p className="eyebrow">Latest Updates</p><h2>Latest from the Society</h2></div><p className="section-aside">News and source material collected for consumer awareness.</p></div><NewsArchive/></section>
  <section className="section media-explainer" id="regulatory-updates"><div className="container"><div className="section-heading"><div><p className="eyebrow">Electricity & Regulatory Updates</p><h2>Understanding What Is Changing</h2></div><p className="section-aside">Electricity billing is influenced by tariff orders, regulatory decisions, power-purchase costs and other applicable mechanisms.</p></div><div className="media-context-grid">{[
   ['What changed?', 'The supplied newspaper reports describe a move from quarterly to monthly review of power-purchase adjustment costs (PPAC).'],
   ['Who does it affect?', 'The reporting concerns electricity consumers in Delhi. The effect described varies by distribution area and applicable charges.'],
   ['When does it apply?', 'The dated clipping was published on 14 July 2026 and discusses changes for July. It is an archive report, not a statement of today’s rates.'],
   ['Where is the official information?', 'An official regulatory order was not included with these clippings. Check the relevant DERC order and your electricity provider’s notice for the period on your bill.'],
  ].map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section container media-coverage-note"><Newspaper size={32}/><div><p className="eyebrow">Media Coverage</p><h2>Electricity Issues in the News</h2><p>Electricity costs and power-purchase-related adjustments have received significant public and media attention. The archive above brings together Hindi newspaper coverage discussing changes in electricity procurement cost adjustments and their possible effect on consumer bills.</p><p className="media-disclaimer"><strong>Media disclaimer:</strong> Articles displayed in this section represent reporting by the respective publications. Views or claims contained in external reports should not automatically be treated as statements of the Society.</p></div></section>
  <section className="container section work-cta"><div className="work-cta-card"><div><p className="eyebrow">Media & Public Information</p><h2>Looking for Information About the Society?</h2><p>Journalists, associations and organisations seeking information about the Society’s activities, documents or electricity-billing initiatives may contact us.</p></div><a href="/contact" className="button">Contact Us <ArrowRight size={18}/></a></div></section>
 </main>;
}
