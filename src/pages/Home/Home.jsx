import { Heading, Paragraph } from '@/components';

export const Home = () => {
  return (
    <>
      <div className='container w-3/4 bg-slate-300 my-10 px-5 py-1 rounded-3xl'>
        <Heading text='About Me' />
        <Paragraph text='Welcome to my website! I am a DevOps Engineer (currently technical lead) with a foundation in finance, transitioned to IT. Holding degrees from the University of East London and CASS Business School, I’ve furthered my expertise with certifications in AWS, GCP, and Azure technologies. At a public sector company, I lead a team in developing secure UIs and enhancing DevOps processes, leveraging AWS, Terraform, Docker, Java, and JavaScript. My role encompasses the automation of development cycles, contributing to microservices architectures, and implementing cutting-edge deployment strategies. Passionate about solving complex problems, I thrive in dynamic environments, always eager to learn and innovate. My career is marked by a commitment to operational excellence and a collaborative spirit. Welcome again to my space where I share my journey and insights into the evolving world of DevOps.' />
      </div>
    </>
  );
};
