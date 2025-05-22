
export const CAL_LINKS = {
  discovery: "https://cal.com/devsomeware-jqvlc6/discovery-calls",
  
  strategy: "https://cal.com/devsomeware-jqvlc6/strategy-sessions",
  
  enterprise: "https://cal.com/devsomeware-jqvlc6/enterprise-consultation",
  
  consultation: "https://cal.com/devsomeware-jqvlc6/general-consultation",
  
  kickoff: "https://cal.com/devsomeware-jqvlc6/project-kickoff",
  
  followup: "https://cal.com/devsomeware-jqvlc6/follow-up-meetings"
} as const;

export const openCalendlyLink = (linkType: keyof typeof CAL_LINKS) => {
  const url = CAL_LINKS[linkType];
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const COMPANY_INFO = {
  name: "DevSomeware",
  tagline: "Building the future of digital solutions",
  email: "hello@devsomeware.com",
  website: "https://www.devsomeware.com",
  location: "Bhubaneswar, Odisha, India",
  social: {
    instagram: "https://www.instagram.com/devsomeware/",
    twitter: "https://x.com/DevSomware", 
    linkedin: "https://www.linkedin.com/company/devsomeware/",
    github: "https://github.com/DevSomware",
    hashnode: "https://hashnode.com/@devsomeware",
    threads: "https://www.threads.net/@devsomeware"
  }
} as const;

export const CAL_EMBED_CONFIG = {
  inline: {
    elementOrSelector: "#cal-inline",
    calLink: "devsomeware-jqvlc6/discovery-call",
    layout: "month_view"
  },
  
  popup: {
    calLink: "devsomeware-jqvlc6/consultation",
    config: {
      layout: "month_view",
      theme: "dark"
    }
  }
};