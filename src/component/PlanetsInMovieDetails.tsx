import arrowOpen from '../assets/ARROW OPEN.svg';
import arrowClose from '../assets/ARROW CLOSE.svg';
import { useState } from 'react';
import TableOfPlanets from './TableOfPlanets';
import { Collapse } from 'react-collapse';

interface Props {
  id: string;
  title: string;
}

const PlanetsInMovieDetails = ({ id, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col bg-white shadow-collapsableElement w-full rounded-t-md ${
        isOpen ? '' : 'rounded-b-md'
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center py-2 px-3 focus-within:sr-only ${
          isOpen ? 'shadow-collapsableTitle' : ''
        }`}
      >
        <h2 className='text-textMain font-bold rounded-md'>{title}</h2>
        <img
          src={isOpen ? arrowClose : arrowOpen}
          alt='arrow'
          className={`${
            isOpen ? 'text-textMain' : 'text-textVariant'
          } rounded-full w-4 h-4 transition duration-500`}
        />
      </div>

      <Collapse isOpened={isOpen}>
        {isOpen ? <TableOfPlanets id={id} /> : null}
      </Collapse>
    </div>
  );
};

export default PlanetsInMovieDetails;
