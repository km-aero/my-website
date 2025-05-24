type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Education = {
  name: string
  course: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Capgemini Invent',
    title: 'Platform Engineer',
    start: 'Oct 2024',
    end: 'Present',
    link: 'https://www.capgemini.com/au-en/about-us/who-we-are/our-brands/capgemini-invent/',
    id: 'work1',
  },
  {
    company: 'Capgemini Invent',
    title: 'Technical Lead',
    start: 'May 2023',
    end: 'Oct 2024',
    link: 'https://www.capgemini.com/au-en/about-us/who-we-are/our-brands/capgemini-invent/',
    id: 'work2',
  },
  {
    company: 'Capgemini Invent',
    title: 'Lead DevOps Engineer',
    start: 'Nov 2022',
    end: 'May 2023',
    link: 'https://www.capgemini.com/au-en/about-us/who-we-are/our-brands/capgemini-invent/',
    id: 'work3',
  },
  {
    company: 'Capgemini Invent',
    title: 'DevOps Engineer',
    start: 'Apr 2022',
    end: 'Nov 2023',
    link: 'https://www.capgemini.com/au-en/about-us/who-we-are/our-brands/capgemini-invent/',
    id: 'work4',
  },
  {
    company: 'Sparta Global',
    title: 'DevOps Engineer',
    start: 'Oct 2020',
    end: 'Apr 2023',
    link: 'https://www.spartaglobal.com/',
    id: 'work5',
  },
  {
    company: 'Sparta Global',
    title: 'Trainee DevOps Engineer',
    start: 'Feb 2020',
    end: 'Oct 2020',
    link: 'https://www.spartaglobal.com/',
    id: 'work6',
  },
  {
    company: 'Citco',
    title: 'Credit & FX Analyst',
    start: 'Sep 2019',
    end: 'Feb 2020',
    link: 'https://www.citco.com/',
    id: 'work7',
  },
]

export const EDUCATION: Education[] = [
  {
    name: 'Bayes Business School',
    course: 'MSc Mathematical Trading and Finance',
    start: '2018',
    end: '2019',
    link: 'https://www.bayes.citystgeorges.ac.uk/',
    id: 'school-1',
  },
  {
    name: 'University of East London',
    course: 'BSc (Hons) Finance',
    start: '2015',
    end: '2018',
    link: 'https://www.uel.ac.uk/',
    id: 'school-2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Creating and hosting my personal website',
    description: 'How I started my online presence by using a vercel starter next js app.',
    link: '/blog/my-personal-website',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/km-aero',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kbmm',
  },
]

export const EMAIL = 'kevin.monteiro96@gmail.com'
