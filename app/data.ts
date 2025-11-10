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

type Certification = {
  company: string
  title: string
  issued: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Capgemini Invent',
    title: 'Senior DevOps Engineer',
    start: 'Oct 2025',
    end: 'Present',
    link: 'https://www.capgemini.com/au-en/about-us/who-we-are/our-brands/capgemini-invent/',
    id: 'work1',
  },
  {
    company: 'Capgemini Invent',
    title: 'Platform Engineer',
    start: 'Oct 2024',
    end: 'Oct 2025',
    link: 'https://www.capgemini.com/au-en/about-us/who-we-are/our-brands/capgemini-invent/',
    id: 'work2',
  },
  {
    company: 'Capgemini Invent',
    title: 'Tech Lead',
    start: 'May 2023',
    end: 'Oct 2024',
    link: 'https://www.capgemini.com/au-en/about-us/who-we-are/our-brands/capgemini-invent/',
    id: 'work3',
  },
  {
    company: 'Capgemini Invent',
    title: 'DevOps Engineer',
    start: 'Apr 2022',
    end: 'May 2023',
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

export const CERTIFICATES: Certification[] = [
  {
    company: 'Cloud Native Computing Foundation',
    title: 'Certified Kubernetes Administrator',
    issued: 'Aug 2024',
    link: 'https://www.credly.com/badges/d9b7516b-1879-4ef4-8f17-b9672931f48d',
    id: 'cert-1',
  },
  {
    company: 'Amazon Web Services',
    title: 'DevOps Engineer - Professional',
    issued: 'Nov 2023',
    link: 'https://www.credly.com/badges/be53bd1d-fb3b-4b71-808f-cbec061d53d0',
    id: 'cert-2',
  },
  {
    company: 'HashiCorp',
    title: 'Terraform Associate (003)',
    issued: 'Jun 2023',
    link: 'https://www.credly.com/badges/b6748eed-066c-43d5-8596-b03784ba8ad5',
    id: 'cert-3',
  },
  {
    company: 'Microsoft',
    title: 'Azure Fundamentals',
    issued: 'Mar 2023',
    link: 'https://www.credly.com/badges/b888ebb3-5aa8-4e8f-acf8-fe50bf897161',
    id: 'cert-4',
  },
  {
    company: 'Amazon Web Services',
    title: 'SysOps Administrator',
    issued: 'Oct 2022',
    link: 'https://www.credly.com/badges/6808b510-79b5-4383-9fde-a7cdd123126b',
    id: 'cert-5',
  },
  {
    company: 'Google',
    title: 'Certified Associate Cloud Engineer',
    issued: 'Oct 2022',
    link: 'https://www.credly.com/badges/7daa3636-3c77-4bc3-bb4d-4144edbf30e6',
    id: 'cert-6',
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

export const EMAIL = 'kbmmonteiro@gmail.com'
