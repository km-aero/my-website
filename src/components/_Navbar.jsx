import { Link } from 'react-router-dom';

const NavLink = ({ href, text }) => {
  return (
    <>
      <li className='px-2'>
        <Link to={href}>{text}</Link>
      </li>
    </>
  );
};

export const Navbar = () => {
  return (
    <>
      <nav className='mx-auto my-4 px-6 py-8 max-w-full relative flex h-16 items-center justify-between bg-slate-300 rounded-3xl rounded-t-lg'>
        <ul className='text-[#11191f]'>
          <li>
            <strong>Kevin Monteiro - DevOps Engineer</strong>
          </li>
        </ul>
        <ul className='flex text-sky-500'>
          <NavLink href='/' text='Home' />
          <NavLink href='/projects' text='Projects' />
          <NavLink href='#contact' text='Contact' />
        </ul>
      </nav>
    </>
  );
};
