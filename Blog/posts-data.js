// posts-data.js
// Shared posts array used by index (render list) and post page.
// Add/edit posts here. Each post object can include a full 'content' HTML string.
window.POSTS = [
  // Featured post (Frankie) — the detailed view target
  {
    id: 100,
    title: "Breaking Into Product Design: Advice From Techpioneers Founder, Daniel",
    description: "You don't need a fancy Bachelor's degree to get into product design — advice, pathways, and real talk from Frankie Sullivan.",
    authorName: "Daniel Eyinle",
    authorPic: "thumbnails/Mrbeast-profile.jpg", // add an image or use a placeholder
    date: "10 Sep 2025",
    image: "blog_images/Javascript API.png", // hero image for the post page
    href: "post.html?id=100",
    // content can be HTML (paragraphs, headings, lists). Keep it safe if content will ever be user-submitted.
    
    content: `
  <p>Breaking into product design isn’t about waiting for someone to hand you a diploma and a job title — it’s about showing that you can solve real problems. Daniel, founder of Techpioneers, didn’t follow a “traditional” path. They started freelancing, learning on the fly, and shipping projects that eventually got them noticed by fast-growing startups.</p>

  
  <h3>1. Build a portfolio that tells a story</h3>
  <p>Daniel swears by curating 3–5 strong case studies instead of dumping every design you’ve ever touched. Employers want to see how you think — not just the pretty screens. Break down the problem, the context, your approach, the messy parts, and finally the outcome. A well-written case study can be more impressive than a flashy visual.</p>

  <p>Pro tip: even side projects count. Redesign an app you love but think could be better. Volunteer for a local nonprofit. Document the process in detail. The story behind the work is what sets you apart.</p>

  <h3>2. Learn the language of product</h3>
  <p>You’re not just designing for pixels, you’re designing for outcomes. Learn the basics of product metrics like <strong>DAU (Daily Active Users)</strong>, retention, and conversion. Practice interviewing users and distilling insights. And don’t overcomplicate it — being able to explain a tradeoff in plain language is often more valuable than throwing around jargon.</p>

  <p>When Frankie first joined a startup team, they weren’t the strongest visual designer in the room, but they stood out because they could connect design choices to business impact. That’s the difference between being “the person who makes things look nice” and being “the designer who shapes product direction.”</p>

  <h3>3. Ship things — even tiny ones</h3>
  <p>Shipping is a muscle. The more you do it, the stronger you get. Frankie recalls that their first shipped product was a rough, buggy Chrome extension — but it landed them an interview. Why? Because it showed initiative, grit, and the ability to take something from idea to launch.</p>

  <p>It doesn’t matter if it’s a portfolio site, a small mobile app, or a Notion template. Put something out there, gather feedback, iterate, and keep moving. A shipped project — no matter how small — always beats a polished mockup sitting in your drafts.</p>

  <h3>4. Find your community</h3>
  <p>Design can feel isolating if you’re learning alone. Frankie suggests joining design Slack groups, Discords, or local meetups. Sharing your work, giving feedback, and connecting with peers will accelerate your growth way faster than grinding in a vacuum.</p>

  <p>Don’t just lurk — participate. Offer feedback, ask questions, and make friends. The design world is smaller than it looks, and relationships often lead to opportunities.</p>

  <h3>5. Stay curious and avoid gatekeepers</h3>
  <p>The design world loves to gatekeep: “You need a design degree.” “You must master Figma before you can start.” Ignore all that. Every great designer started somewhere, usually clumsily. What matters most is staying curious, practicing consistently, and putting your work into the world.</p>

  <p>Daniel puts it simply: <em>“Be curious, be kind, and keep building.”</em></p>
`

  },

  // Non-featured posts (examples) — keep these consistent with your list page
  {
    id: 1,
    title: "Migrating to Linear 101",
    description: "Linear helps examine software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    authorName: "Jonathan Valentine",
    authorPic: "thumbnails/Mrbeast-profile.jpg",
    date: "19 Jan 2022",
    image: "blog_images/LINEAR 101.png",
    href: "post.html?id=1",
    content: "<p>Short preview content for Linear 101. Replace with full content when ready.</p>"
  },
  // ... (keep the rest of your posts here using the objects you already have)
  {
    id: 2, title: "Building your API stack", description: "The rise of RESTful APIs...", authorName: "Lana Steiner",
    authorPic: "thumbnails/sniperwolf.jpg", date: "19 Feb 2025", image: "blog_images/Javascript API.png", href: "post.html?id=2",
    content: "<p>Full article content placeholder for API stack.</p>"
  },
  {
    id: 3, title: "Bill Walsh: Leadership lessons", description: "Want the secrets...", authorName: "Divine Valentine",
    authorPic: "thumbnails/Csdojo.jpg", date: "26 Jun 2024", image: "blog_images/Bil_walsh.png", href: "post.html?id=3",
    content: "<p>Article body placeholder.</p>"
  },
  // add the rest (4..9) as you like
];
