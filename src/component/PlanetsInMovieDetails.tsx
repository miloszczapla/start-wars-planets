import arrowOpen from '../assets/ARROW OPEN.svg';
import arrowClose from '../assets/ARROW CLOSE.svg';
import { useState } from 'react';
import TableOfPlanets from './TableOfPlanets';

interface Props {
  id: string;
  title: string;
}

const PlanetsInMovieDetails = ({ id, title }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className='flex flex-col  bg-white shadow-collapsableElement w-full rounded-lg'
      onClick={() => setOpen(!open)}
    >
      <div
        className={`flex justify-between items-center py-2 px-3 focus-within:sr-only ${
          open ? '' : 'shadow-collapsableTitle'
        }`}
      >
        <h2 className='text-textMain'>{title}</h2>
        <img
          src={open ? arrowClose : arrowOpen}
          alt='arrow'
          className={`${
            open ? 'text-textVariant' : 'text-textMain'
          } rounded-full w-8 h-8`}
        />
      </div>
      {open ? <TableOfPlanets /> : null}
    </div>
  );
};

export default PlanetsInMovieDetails;
