import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex flex-col items-center font-bold py-5'>
      <h1 className='text-5xl py-3'>Oops!</h1>
      <p className='text-4xl py-3'>Sorry, an unexpected error has occurred.</p>
      <p className='text-4xl py-3'>
        <i>
          {error.status} - {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};
