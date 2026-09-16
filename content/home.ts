// Homepage content from website-content.docx. Review factual and proposed wording before launch.
export const society = {
  name: 'Delhi Fight Against Electricity Bills Society',
  caption: 'Governed by a private body/society.',
  registration: 'ROS/OUTER NORTH/2026/52',
  date: '20 July 2026',
  address: 'Plot No. 86, Pocket-C, Sector-2, DSIIDC Bawana, Delhi–110039',
};

// These destinations become full routes as the remaining pages are built.
export const navigation = [
  ['About', '/about'], ['Our Work', '/#our-work'], ['News & Media', '/#news-media'],
  ['Bill Help', '/#bill-help'], ['Contact', '/#contact'],
] as const;

export const guides = [
  { title: 'Learn about your bill', category: 'Understand the basics', description: 'Common electricity-bill components, explained clearly.', paragraphs: ['Electricity bills can include consumption charges, fixed charges, adjustments, taxes or duties and a previous balance.', 'The exact components depend on the provider, consumer category, tariff and applicable regulatory framework.', 'Detailed examples and current rates will be added only after source review.'] },
  { title: 'Understand PPAC / FPPAS', category: 'Power-purchase adjustments', description: 'Learn why some power-purchase-related charges can change.', paragraphs: ['Power-purchase costs can vary with fuel prices, generation costs and market conditions.', 'Applicability can depend on the provider, tariff category, period and relevant regulatory orders.', 'Always verify the current bill and official provider or DERC information rather than relying on an old rate.'] },
  { title: 'Know the grievance process', category: 'Prepare your records', description: 'Understand the steps to consider when a bill looks wrong.', paragraphs: ['Check the billing period, meter reading, consumption and individual charges. Keep previous bills and correspondence.', 'Use the provider’s official complaint mechanism where appropriate and save the complaint or reference number.', 'A Society enquiry is separate from a formal complaint to an electricity provider or authority.'] },
];

export const documents = [
  { title: 'Society registration certificate', category: 'Registration', date: '20 July 2026', description: 'The Society’s registered identity and working area.', paragraphs: ['Registered name: DELHI FIGHT AGAINST ELECTRICITY BILLS SOCIETY.', 'Registration number: ROS/OUTER NORTH/2026/52. Registered under the Societies Registration Act XXI of 1860. Working area: Delhi.', 'Registered office: Plot No. 86, Pocket-C, Sector-2, DSIIDC Bawana, Delhi–110039.', 'The original certificate and public derivative require final review before publication.'] },
  { title: 'Earlier initiative: association support letter', category: 'Historical record', date: '24 July 2024', description: 'A record from the broader electricity-bill initiative before registration.', paragraphs: ['The Patparganj F.I.E. Entrepreneurs Association (Regd.) letter is dated 24 July 2024 and references MMM/2024/286.', 'It refers to a meeting held on 18 July 2024 and concerns electricity-billing charges affecting Delhi industrialists.', 'This is earlier initiative material, not a 2024 endorsement of the Society registered in 2026.'] },
];

export const issuePreview = { title: 'Have an electricity-billing concern?', paragraphs: ['The issue form is not open in this homepage preview. No information or files are collected here.', 'The planned facility will help consumers share a short explanation, provider details and supporting records with the Society.', 'Submitting an issue to the Society does not automatically constitute a formal complaint to a provider, DERC or another authority.'] };

export const participation = [
  { title: 'Contact the Society', description: 'Ask a question about activities, documents or electricity-billing concerns.', paragraphs: ['A contact route will be added once verified Society channels are available.', 'Please retain official complaint numbers and supporting records for provider or authority processes.'] },
  { title: 'Association / organisation', description: 'Start a conversation about a shared electricity-related concern.', paragraphs: ['Associations and organisations will be able to describe their purpose and the matter they wish to discuss.', 'An enquiry does not create a formal partnership or membership.'] },
  { title: 'Media enquiry', description: 'Request public information about the Society and its activities.', paragraphs: ['Journalists and publications may request approved information, documents or activity context.', 'External reporting remains the responsibility of its original publisher.'] },
];

export const workAreas = [
  { title: 'Consumer awareness', description: 'Make electricity-billing information easier to understand.' },
  { title: 'Representations & engagement', description: 'Bring documented concerns to appropriate institutions and forums.' },
  { title: 'Association engagement', description: 'Build a wider conversation across households, businesses and industries.' },
  { title: 'News & regulatory awareness', description: 'Share relevant developments with clear source context.' },
];

export const journey = ['Listen to consumers', 'Understand the concern', 'Document the issue', 'Engage constructively', 'Represent through appropriate channels', 'Inform consumers about developments'];
