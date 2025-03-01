import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPen,
  FaPinterest,
  FaReddit,
  FaShoppingCart,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const contentTemplates = [
  {
    name: "Youtube Video Description",
    desc: "AN AI Tool to generate youtube video description",
    category: "Youtube",
    icon: FaYoutube,
    aiPrompt:
      "Give me youtube description ideas based on given video description outline and title and give in rich text editor format ",
    slug: "youtube-description",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter Video Description Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Caption Generator",
    desc: "An AI Tool to generate Instagram captions",
    category: "Instagram",
    icon: FaInstagram,
    aiPrompt:
      "Generate creative Instagram captions based on the given post description and theme in a rich text format.",
    slug: "instagram-description",
    form: [
      {
        label: "Instagram Post Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Instagram Post Description",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Twitter Tweet Generator",
    desc: "An AI Tool to generate Twitter tweets",
    category: "Twitter",
    icon: FaTwitter,
    aiPrompt:
      "Generate engaging tweets based on the given post description and topic in a concise and engaging format.",
    slug: "twitter-description",
    form: [
      {
        label: "Tweet Topic",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Tweet Description",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Post Generator",
    desc: "An AI Tool to create professional and engaging LinkedIn posts to enhance your online presence.",
    category: "LinkedIn",
    icon: FaLinkedin,
    aiPrompt:
      "Generate LinkedIn posts based on the given professional outline and topic, formatted in a professional tone. Include suggestions for relevant hashtags to increase engagement and visibility.",
    slug: "linkedin-post",
    form: [
      {
        label: "LinkedIn Post Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "LinkedIn Post Description",
        field: "textarea",
        name: "outline",
        required: true,
      },
      {
        label: "Hashtags (optional)",
        field: "input",
        name: "hashtags",
        required: false,
        placeholder: "#Leadership #Innovation #Tech",
      },
    ],
  },
  {
    name: "Pinterest Pin Description Generator",
    desc: "An AI Tool to generate eye-catching and SEO-friendly Pinterest pin descriptions.",
    category: "Pinterest",
    icon: FaPinterest,
    aiPrompt:
      "Create SEO-optimized Pinterest pin descriptions based on the given topic, including relevant keywords, tags, and a call to action. The description should be designed to drive traffic to the linked website.",
    slug: "pinterest-pin-description",
    form: [
      {
        label: "Pinterest Pin Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Pinterest Pin Description",
        field: "textarea",
        name: "outline",
        required: true,
      },
      {
        label: "Target Audience (optional)",
        field: "input",
        name: "audience",
        required: false,
        placeholder: "e.g., Home Decor Enthusiasts",
      },
    ],
  },
  {
    name: "Blog Article Title Generator",
    desc: "An AI Tool to generate catchy and SEO-friendly blog article titles.",
    category: "Blog",
    icon: FaPen,
    aiPrompt:
      "Generate engaging and SEO-optimized blog article titles based on the given subject matter and focus keywords. Titles should be attention-grabbing while being concise and relevant to the content.",
    slug: "blog-article-title",
    form: [
      {
        label: "Blog Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Focus Keywords (optional)",
        field: "input",
        name: "keywords",
        required: false,
        placeholder: "e.g., AI, Technology, Innovation",
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "An AI Tool to create persuasive and SEO-friendly product descriptions for e-commerce websites.",
    category: "Ecommerce",
    icon: FaShoppingCart,
    aiPrompt:
      "Generate detailed product descriptions for e-commerce listings, ensuring that they highlight key features, benefits, and use cases. The descriptions should be written to encourage conversions and optimized for search engines.",
    slug: "product-description",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Features",
        field: "textarea",
        name: "features",
        required: true,
      },
      {
        label: "Product Use Cases",
        field: "textarea",
        name: "useCases",
        required: false,
      },
      {
        label: "Target Audience (optional)",
        field: "input",
        name: "audience",
        required: false,
        placeholder: "e.g., Fitness Enthusiasts",
      },
    ],
  },
  {
    name: "Reddit Post Generator",
    desc: "An AI Tool to create engaging and relevant Reddit posts based on the given topic or subreddit.",
    category: "Reddit",
    icon: FaReddit,
    aiPrompt:
      "Generate Reddit posts that are engaging and tailored to a specific subreddit. The posts should be relevant to the community, encourage discussion, and follow the platform's informal tone.",
    slug: "reddit-post",
    form: [
      {
        label: "Subreddit Name",
        field: "input",
        name: "subreddit",
        required: true,
      },
      {
        label: "Post Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Post Content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "TikTok Caption Generator",
    desc: "An AI Tool to generate catchy and viral TikTok captions that match the theme of your video.",
    category: "TikTok",
    icon: FaTiktok,
    aiPrompt:
      "Create catchy, fun, and engaging TikTok captions based on the given video theme, designed to grab attention and encourage user interaction, such as comments and shares.",
    slug: "tiktok-caption",
    form: [
      {
        label: "TikTok Video Description",
        field: "textarea",
        name: "description",
        required: true,
      },
      {
        label: "Hashtags (optional)",
        field: "input",
        name: "hashtags",
        required: false,
        placeholder: "#Viral #TikTok #Funny",
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "An AI Tool to create attention-grabbing and effective email subject lines for marketing campaigns.",
    category: "Email",
    icon: FaEnvelope,
    aiPrompt:
      "Generate compelling email subject lines based on the given topic or campaign goal. The subject lines should be concise, catchy, and designed to increase open rates.",
    slug: "email-subject-line",
    form: [
      {
        label: "Email Campaign Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Target Audience (optional)",
        field: "input",
        name: "audience",
        required: false,
        placeholder: "e.g., Newsletter Subscribers",
      },
    ],
  },
];
