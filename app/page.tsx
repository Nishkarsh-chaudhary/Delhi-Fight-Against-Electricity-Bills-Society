/* Images use pre-sized, local WebP files and explicit responsive sources. */
/* eslint-disable @next/next/no-img-element */
import { ArrowRight, BookOpen, FileText, Users, Scale, HandHeart } from 'lucide-react';
import { society, guides, documents, issuePreview, participation, journey, workAreas } from '@/content/home';
import { InfoDialog } from '@/components/site/info-dialog';

const focusAreas = [
  { icon: BookOpen, title: 'Bill awareness' },
  { icon: Users, title: 'Consumer representation' },
  { icon: Scale, title: 'Regulatory awareness' },
  { icon: HandHeart, title: 'Collective participation' },
];

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
        <source media="(max-width: 639px)" srcSet="/images/neighbourhood-hero-mobile.webp" />
        <img src="/images/neighbourhood-hero.webp" width={1672} height={941} alt="" fetchPriority="high" decoding="async" />
      </picture>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow"><span /> For electricity consumers across Delhi</p>
        <h1 id="hero-title">Delhi Fight Against<br className="hero-break" /> Electricity Bills Society</h1>
        <p className="hero-lead">Standing Together for Electricity Consumers in Delhi</p>
        <div className="actions">
          <a href="#bill-help" className="button accent">Get Bill Help <ArrowRight size={18} /></a>
          <a href="#about" className="button hero-secondary">Know About Us <ArrowRight size={18} /></a>
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
        <EditorialImage name="community" alt="Illustrative image of people discussing paperwork around a table." />
        <span className="photo-label">A shared purpose</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">About the Society</p>
        <h2>Better informed.<br />Stronger together.</h2>
        <p>Delhi Fight Against Electricity Bills Society is a registered society working to raise awareness about electricity billing issues, document consumer concerns and encourage transparency around electricity-related charges in Delhi.</p>
        <div className="focus-list">{focusAreas.map(({ icon: Icon, title }) => <div key={title}><Icon size={21} strokeWidth={1.5} /><span>{title}</span></div>)}</div>
        <a href="#our-work" className="text-link">Our approach <ArrowRight size={18} /></a>
      </div>
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
      <div className="container"><div className="section-heading"><div><p className="eyebrow">News & Media</p><h2>Electricity updates that matter.</h2></div><p className="section-aside">Society activities, regulatory information and relevant media coverage.</p></div>
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
      <div className="participation-grid">{participation.map((p, i) => <article className="participation-card" key={p.title}><span className="participation-number">0{i + 1}</span><h3>{p.title}</h3><InfoDialog {...p} label="Learn more" /></article>)}</div>
    </section>

    <section id="share-concern" className="container concern-section"><div className="callout"><div><p className="eyebrow">Let’s start with your concern</p><h2>A question about your bill?</h2></div><div className="callout-action"><InfoDialog {...issuePreview} label="Submit your issue" className="button accent" /><p>Submissions are not open in this preview.</p></div></div></section>
  </main>;
}
