export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  dateBadge: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  commentsCount: number;
  saleBanner?: {
    wasPrice: string;
    nowPrice: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'WHAT TO EXPECT WHEN YOUR STATIC CARAVAN IS DELIVERED',
    slug: 'what-to-expect-when-your-static-caravan-is-delivered',
    date: 'August 21, 2026',
    dateBadge: 'Aug 2026',
    author: 'Darrin Ramsey',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Understanding what to expect when your static caravan is delivered can make the buying experience far less stressful.',
    content: `
      Delivering a static caravan off-site requires specialized transport equipment, careful site preparation, and experienced logistics handlers. At Caravantastic, we deliver static caravans across the UK using specialized low-loader lorries and experienced drivers.

      ### 1. Site Access Check
      Before delivery, ensure the entrance to your land or plot is clear of low-hanging branches, narrow gates, or tight turns. Static caravans are typically 10 to 14 feet wide and up to 40 feet long.

      ### 2. Ground Preparation
      Your site should have a solid, level hardstanding area prepared—such as concrete pads, packed hardcore, or heavy-duty paving slabs—where the wheels and corner steadies will rest.

      ### 3. Siting and Levelling
      Our transport team will carefully maneuver the caravan onto your pitch using specialized winches or tractor units, level the unit using heavy-duty jacks, and secure the corner steadies.
    `,
    commentsCount: 0,
  },
  {
    id: '2',
    title: 'HOW TO CHOOSE THE RIGHT STATIC CARAVAN SIZE FOR YOUR NEEDS',
    slug: 'how-to-choose-the-right-static-caravan-size-for-your-needs',
    date: 'August 7, 2026',
    dateBadge: 'Aug 2026',
    author: 'Darrin Ramsey',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    excerpt: "Knowing how to choose the right static caravan size is one of the most important decisions you'll make when buying.",
    content: `
      Choosing the right size static caravan or lodge depends heavily on its intended use—whether you need temporary self-build accommodation, farm worker housing, or a permanent luxury home.

      ### Common Caravan Dimensions:
      - **30ft x 10ft (1-2 Bedrooms):** Compact layout, ideal for tight access sites or single occupants.
      - **35ft x 12ft (2-3 Bedrooms):** The UK standard for self-build accommodation, offering a great balance of spacious living room and comfortable bedrooms.
      - **40ft x 20ft (Twin Lodges):** Maximum luxury living space featuring 3 bedrooms, utility rooms, and residential specification insulation.
    `,
    commentsCount: 0,
    saleBanner: {
      wasPrice: '£28,900',
      nowPrice: '£27,900',
    },
  },
  {
    id: '3',
    title: 'WHY VISITING A SHOWGROUND MAKES BUYING EASIER',
    slug: 'why-visiting-a-showground-makes-buying-easier',
    date: 'July 24, 2026',
    dateBadge: 'Jul 2026',
    author: 'Darrin Ramsey',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    excerpt: "Buying a static caravan or luxury lodge is a significant investment, so it's important to feel confident in your decision.",
    content: `
      While browsing static caravans online is convenient, visiting one of our three showgrounds in **Exeter**, **West Sussex**, or **Taunton** gives you an invaluable hands-on feel for layout, ceiling heights, and build quality.

      ### Why Visit Caravantastic Showgrounds?
      - **Inspect Over 100 Caravans in Person:** Walk through various makes and models from Willerby, ABI, Swift, Cosalt, and Atlas.
      - **Expert Guidance:** Our experienced sales team is on hand to answer questions about delivery logistics, heating options, and our BuyBack scheme.
      - **Compare Layouts Side-by-Side:** Experience open-plan lounges versus closed kitchens to see what works best for your family.
    `,
    commentsCount: 0,
  },
];
