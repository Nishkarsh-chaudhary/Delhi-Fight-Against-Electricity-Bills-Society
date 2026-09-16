/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, FileText, MessageSquare } from 'lucide-react';
import ourWorkContent from '@/content/pages/our-work';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Learn how Delhi Fight Against Electricity Bills Society approaches awareness, documentation, engagement and representation.',
};

const { approach, activities } = ourWorkContent;

export default function OurWorkPage() {
  return <main id="main" className="our-work-page">
    <section className="inner-hero work-hero"><div className="container inner-hero-grid"><div><p className="eyebrow"><span /> Our Work</p><h1>Awareness. Engagement. Representation.</h1><p className="inner-hero-lead">Our work focuses on helping electricity consumers understand billing issues, documenting common concerns and encouraging constructive engagement with relevant stakeholders and institutions.</p><div className="identity-chips"><span><MessageSquare size={16} /> Consumer awareness</span><span><Building2 size={16} /> Stakeholder engagement</span></div></div><div className="about-hero-photo"><img src="/images/our-work-banner.webp" width="1200" height="800" alt="Group holding Delhi Fight Against Electricity Bill placards." fetchPriority="high" /></div></div></section>

    <section className="section container work-approach-section"><div className="section-heading"><div><p className="eyebrow">Our Approach</p><h2>Turning Individual Concerns Into Organised Action</h2></div><p className="section-aside">Electricity-billing issues can involve technical, regulatory and administrative questions. Our approach therefore begins with information rather than assumptions.</p></div><div className="work-approach-grid">{approach.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section engagement-section"><div className="container engagement-grid"><div className="engagement-photo"><img src="/images/public-grievances-commission.webp" width="1400" height="1050" alt="Public Grievances Commission building in New Delhi." loading="lazy" /><span>Public Grievances Commission, M-Block, Vikas Bhawan, IP Estate, New Delhi–110110</span></div><div><p className="eyebrow">Representations & Public Engagement</p><h2>Taking Concerns to Appropriate Forums</h2><p>An important part of the initiative has been engagement with public institutions and grievance mechanisms concerning electricity-related consumer issues.</p><p>The supplied activity photograph records a visit to the Public Grievances Commission. It supports the location description only; it does not by itself establish a filing, hearing, ruling or outcome.</p><Link href="/news-media" className="text-link">See related updates <ArrowRight size={18} /></Link></div></div></section>

    <section className="section container association-section"><div><p className="eyebrow">Working With Associations</p><h2>Building a Wider Conversation</h2><p>Electricity costs can affect households, businesses and industrial establishments differently. The broader electricity-bill initiative has therefore also involved discussions with industry and business associations.</p><p>A 24 July 2024 letter from the Patparganj F.I.E. Entrepreneurs Association (Regd.) records support for efforts concerning electricity-billing charges affecting Delhi industrialists. The letter followed a meeting held on 18 July 2024.</p><p className="source-note"><FileText size={17} /> Earlier initiative material predating the Society’s formal registration in 2026.</p></div><div className="association-card"><span className="association-year">2024</span><h3>Historical support record</h3><p>Patparganj F.I.E. Entrepreneurs Association (Regd.)</p><dl><div><dt>Reference</dt><dd>MMM/2024/286</dd></div><div><dt>Date</dt><dd>24 July 2024</dd></div></dl><Link href="/#resources" className="text-link">View source records <ArrowRight size={18} /></Link></div></section>

    <section className="section participation-work-section"><div className="container participation-work-grid"><div><p className="eyebrow">Awareness & Participation</p><h2>Creating Awareness Beyond Representations</h2><p>Institutional representation is one part of the work. Consumer participation and public awareness are equally important.</p></div><ul>{activities.map((activity,i)=><li key={activity}><span>0{i+1}</span>{activity}</li>)}</ul></div></section>

    <section className="section container work-cta"><div className="work-cta-card"><div><p className="eyebrow">Continue exploring</p><h2>Understand the issue first.</h2><p>Use Bill Help to learn about common electricity-bill components and prepare a documented concern.</p></div><Link href="/bill-help" className="button">Explore Bill Help <ArrowRight size={18} /></Link></div></section>
  </main>;
}
