/* Images use pre-sized, local WebP files and explicit responsive sources. */
/* eslint-disable @next/next/no-img-element */
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import pageContent, { society } from '@/content/pages/home';
import { InfoDialog } from '@/components/site/info-dialog';

const { guides, documents, participation, journey, workAreas } = pageContent;

function EditorialImage({ name, alt, className = '' }: { name: string; alt: string; className?: string }) {
  return <img
    className={className}
    src={`/images/${name}.webp`}
    srcSet={`/images/${name}-640.webp 640w, /images/${name}.webp 1200w`}
    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 900px) calc(50vw - 32px), 600px"
    width={1200} height={800} alt={alt} loading="lazy" decoding="async"
  />;
}

export default function Home() {
  return <main id="main">
    <section className="hero photo-hero" aria-labelledby="hero-title">
      <picture className="hero-background">
        <source media="(max-width: 639px)" srcSet="/images/public-grievances-commission-mobile.webp" />
        <img src="/images/public-grievances-commission.webp" width={1400} height={1050} alt="" fetchPriority="high" decoding="async" />
      </picture>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow"><span /> For electricity consumers across Delhi</p>
        <h1 id="hero-title">Delhi Fight Against<br className="hero-break" /> Electricity Bills Society</h1>
        <p className="hero-lead">Standing Together for Electricity Consumers in Delhi</p>
        <div className="actions">
          <a href="/bill-help" className="button accent">Get Bill Help <ArrowRight size={18} /></a>
          <a href="/about" className="button hero-secondary">Know About Us <ArrowRight size={18} /></a>
        </div>
      </div>
      <div className="hero-bottom container"><span>Awareness</span><i /><span>Transparency</span><i /><span>Representation</span></div>
    </section>

    <div className="container">
      <div className="facts-strip" id="registration">
        <div><span className="meta">Registration number</span><strong>{society.registration}</strong></div>
        <div><span className="meta">Certificate date</span><strong>{society.date}</strong></div>
        <div><span className="meta">Working area</span><strong>Delhi</strong></div>
        <InfoDialog title="Society registration" paragraphs={documents[0].paragraphs} label="View registration" />
      </div>
    </div>

    <section id="about" className="section container about-section">
      <div className="editorial-photo community-photo">
        <EditorialImage name="electricity-bills-group" alt="Group holding Delhi Fight Against Electricity Bill placards." />
        <span className="photo-label">Consumer awareness</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">About the Society</p>
        <h2>A Collective Voice for Electricity Consumers</h2>
        <p>Electricity bills can involve multiple charges, adjustments and regulatory components that are not always easy for consumers to understand.</p>
        <p>Delhi Fight Against Electricity Bills Society provides an organised platform for raising awareness about such issues and documenting concerns faced by consumers.</p>
        <p>Our work focuses on consumer awareness, representation, stakeholder engagement and access to useful information so that electricity consumers can better understand their bills and the channels available for raising grievances.</p>
        <div className="who-facts"><div><strong>Registered Society</strong><span>Formally registered in Delhi under the Societies Registration Act XXI of 1860.</span></div><div><strong>Working Across Delhi</strong><span>The Society&apos;s registered working area is Delhi.</span></div><div><strong>Consumer-Focused</strong><span>Our activities are centred around electricity-billing awareness and issues affecting consumers.</span></div></div>
        <a href="#our-work" className="text-link">Learn More About the Society <ArrowRight size={18} /></a>
      </div>
    </section>

    <section id="purpose" className="section purpose-section">
      <div className="container purpose-grid"><div><p className="eyebrow">Our Purpose</p><h2>Electricity Bills Should Be Easier to Understand</h2><p>Changes in electricity tariffs, power-purchase-related adjustments and other billing components can have a direct impact on consumers.</p><p>Our purpose is to help create greater awareness around these matters and provide consumers with a platform through which their concerns can be documented and appropriately represented.</p></div><div className="purpose-list">{[{title:'Understand',text:'Make electricity-billing information easier for consumers to understand.'},{title:'Document',text:'Collect and organise genuine electricity-billing concerns and supporting information.'},{title:'Represent',text:'Raise documented issues before relevant institutions and authorities through appropriate channels.'},{title:'Inform',text:'Share important regulatory, billing and consumer-related developments.'}].map((item,i)=><article key={item.title}><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div>
    </section>

    <section className="section work-section" aria-labelledby="work-title">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">What We Do</p><h2 id="work-title">From consumer concerns to constructive representation.</h2></div></div>
        <div className="work-grid">{workAreas.map((area, i) => <article key={area.title}><span>0{i + 1}</span><h3>{area.title}</h3><p>{area.description}</p></article>)}</div>
      </div>
    </section>

    <section id="bill-help" className="section bill-section">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow">Bill Help</p><h2>Your bill, made clearer.</h2></div><span className="section-label">One question at a time</span></div>
        <div className="bill-grid">
          <div className="editorial-photo bill-photo">
            <EditorialImage name="bill-review" alt="Illustrative close-up of hands reviewing an electricity statement with a calculator." />
            <div className="photo-caption"><BookOpen size={26} strokeWidth={1.4} /><span>Start with the basics.</span></div>
          </div>
          <div className="guide-list">{guides.map((g, i) => <article className="guide-row" id={`guide-${i}`} key={g.title}>
            <span className="guide-number">0{i + 1}</span><div><p className="meta">{g.category}</p><h3>{g.title}</h3><InfoDialog {...g} label="Explore topic" /></div>
          </article>)}</div>
        </div>
      </div>
    </section>

    <section id="our-work" className="section container approach-section">
      <div><p className="eyebrow">Our journey</p><h2>Taking consumer concerns forward.</h2></div>
      <ol className="approach-list">{journey.map((title, i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3></li>)}</ol>
    </section>

    <section id="news-media" className="section news-section">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">News & Media</p><h2>Electricity updates that matter.</h2><a href="/news-media" className="text-link">View News &amp; Media <ArrowRight size={18}/></a></div><p className="section-aside">Society activities, regulatory information and relevant media coverage.</p></div>
        <div className="news-grid"><article><span className="news-tag">Society updates</span><h3>Meetings, representations and awareness initiatives</h3><p>Updates will be added as approved records become available.</p></article><article><span className="news-tag">Electricity updates</span><h3>Understanding changes affecting electricity bills</h3><p>Plain-language explanations will link to the relevant official source.</p></article><article><span className="news-tag">Media coverage</span><h3>Electricity issues in the news</h3><p>External reporting will remain clearly attributed to its original publication.</p></article></div>
      </div>
    </section>

    <section id="resources" className="resources-section">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow">Records & transparency</p><h2>Know the source.</h2></div></div>
        <div className="document-grid">{documents.map((d, i) => <article className="document-card" key={d.title}>
          <FileText size={27} strokeWidth={1.4} /><div><p className="meta">{d.category} · <time dateTime={i ? '2024-07-24' : '2026-07-20'}>{d.date}</time></p><h3>{d.title}</h3><InfoDialog {...d} label="View details" /></div>
        </article>)}</div>
      </div>
    </section>

    <section id="join" className="section container join-section">
      <div className="section-heading"><div><p className="eyebrow">Contact & participation</p><h2>Start a conversation.</h2></div><p className="join-note">Ask a question, share a concern or request public information.</p></div>
      <div className="participation-grid">{participation.map((p, i) => <article className="participation-card" key={p.title}><span className="participation-number">0{i + 1}</span><h3>{p.title}</h3><p>{p.description}</p><a href="/contact" className="text-link">Contact the Society <ArrowRight size={17}/></a></article>)}</div>
    </section>

    <section id="share-concern" className="container concern-section"><div className="callout"><div><p className="eyebrow">Let’s start with your concern</p><h2>A question about your bill?</h2></div><div className="callout-action"><a href="/contact" className="button accent">Submit your issue <ArrowRight size={17}/></a><p>Contact the Society about your concern.</p></div></div></section>
  </main>;
}
