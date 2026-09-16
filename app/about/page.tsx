/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Building2, MapPin, ShieldCheck } from 'lucide-react';
import { society } from '@/content/pages/home';
import aboutContent from '@/content/pages/about';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About the Society',
  description: 'Learn about Delhi Fight Against Electricity Bills Society, its purpose, objectives and registration.',
};

const { objectives, values } = aboutContent;

export default function AboutPage() {
  return <main id="main" className="about-page">
    <section className="inner-hero"><div className="container inner-hero-grid"><div><p className="eyebrow"><span /> About Us</p><h1>Delhi Fight Against Electricity Bills Society</h1><p className="inner-hero-lead">An organised platform dedicated to electricity-billing awareness, consumer participation and representation of electricity-related concerns in Delhi.</p><div className="identity-chips"><span><ShieldCheck size={16} /> Registered Society</span><span><MapPin size={16} /> Working Area: Delhi</span></div></div><div className="about-hero-photo"><img src="/images/public-grievances-commission.webp" width="1400" height="1050" alt="Public Grievances Commission building in New Delhi." fetchPriority="high" /></div></div></section>

    <section className="section container who-page-section"><div className="who-page-photo"><img src="/images/electricity-bills-group.webp" width="1200" height="800" alt="Group holding Delhi Fight Against Electricity Bill placards." loading="lazy" /></div><div><p className="eyebrow">Who We Are</p><h2>Bringing Consumers Together Around a Common Concern</h2><p>Delhi Fight Against Electricity Bills Society is a registered society working in Delhi with a focus on electricity-billing awareness and consumer concerns.</p><p>The Society seeks to create an organised platform where electricity consumers can better understand billing-related matters, access useful information, share concerns and participate in constructive engagement around issues affecting them.</p><p>Our approach is centred on awareness, documentation, representation and stakeholder engagement.</p><p>Rather than treating electricity-billing issues as isolated individual problems, the Society seeks to identify common concerns and encourage informed participation through appropriate channels.</p></div></section>

    <section className="section mission-section"><div className="container mission-grid"><div><p className="eyebrow">Mission & Vision</p><h2>Clear information.<br />Constructive participation.</h2><div className="mission-block"><h3>Our Mission</h3><p>To increase awareness and understanding of electricity-billing matters and provide an organised platform for documenting and appropriately representing consumer concerns.</p></div><div className="mission-block"><h3>Our Vision</h3><p>A transparent and informed electricity ecosystem in which consumers understand the charges appearing on their bills, remain aware of relevant developments and know the appropriate channels available for raising genuine concerns.</p></div></div><div className="values-card"><p className="eyebrow">Our Values</p>{values.map(([title,text])=><div className="value-row" key={title}><strong>{title}</strong><span>{text}</span></div>)}</div></div></section>

    <section className="section container objectives-section"><div className="section-heading"><div><p className="eyebrow">Our Objectives</p><h2>What We Work Towards</h2></div><p className="section-aside">Practical aims that guide the Society’s work.</p></div><div className="objectives-grid">{objectives.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="registration-section"><div className="container registration-grid"><div><p className="eyebrow">Officially Registered</p><h2>Our Registration</h2><p className="registration-intro">The Society’s identity and registration details are recorded below. The certificate source and public derivative will be linked after final review.</p><Link href="/#registration" className="text-link">View registration on homepage <ArrowRight size={18} /></Link></div><dl className="registration-facts"><div><dt>Registered name</dt><dd>{society.name}</dd></div><div><dt>Registration number</dt><dd>{society.registration}</dd></div><div><dt>Registered under</dt><dd>Societies Registration Act XXI of 1860</dd></div><div><dt>Date of registration</dt><dd>{society.date}</dd></div><div><dt>Working area</dt><dd>Delhi</dd></div><div><dt>Registered office</dt><dd>{society.address}</dd></div><div><dt>Issuing authority</dt><dd>Registrar of Societies, District Outer North, Government of NCT of Delhi</dd></div></dl></div></section>

    <section className="section container about-next"><div className="about-next-card"><Building2 size={28} /><div><p className="eyebrow">Continue exploring</p><h2>See how the Society works</h2><p>Explore the proposed approach to awareness, documentation, engagement and representation.</p></div><a href="/our-work" className="button">Explore Our Work <ArrowRight size={18} /></a></div></section>
  </main>;
}
