import { useContext, useMemo, useState } from 'react';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS } from '../help-classes/Columns';
import { FilmsContext } from '../help-classes/FilmsContext';
import { Planet } from '../help-classes/types';
import SORTARROW from '../assets/SORTARROW.svg';
import SORTARROWSELECTED from '../assets/SORTARROWSELECTED.svg';

import PlanetInfo from './PlanetInfo';

interface Props {
  planetsIds: string[];
}

interface Data {
  planets: Planet[];
}

const TableOfPlanets = ({ planetsIds }: Props) => {
  const [isWidthScreen, setIsWidthScreen] = useState(window.screen.width > 680);

  const handleResize = () => {
    setIsWidthScreen(window.screen.width > 680);
  };

  //change table style when screen resize
  window.addEventListener('resize', handleResize);

  const columns = useMemo(() => COLUMNS, []);

  const { planets }: Data = useContext(FilmsContext);

  const filteredPlanets = planets.filter((planet) => {
    // sepreate string before being show in table
    if (!(typeof planet.climates === 'string')) {
      planet.climates = planet.climates.join('\n');
    }
    return planetsIds.includes(planet.id);
  });

  return (
    <>
      {isWidthScreen ? (
        <Table columns={columns} data={filteredPlanets} />
      ) : (
        filteredPlanets.map((planet) => (
          <PlanetInfo key={planet.id} {...planet} />
        ))
      )}
    </>
  );
};

interface TableProps {
  columns: any;
  data: Planet[];
}

const Table = ({ columns, data }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        //FIXME: handle error of typescript
        //@ts-ignore best way in this case to come abowe this error
        columns,
        data,
      },
      useSortBy
    );
  return (
    <div className='text-xs  text-textBlack w-full p-4'>
      <table {...getTableProps()}>
        {/* render all headers */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className='border-b border-border'
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className='first-header p-2'
                >
                  <div className='flex flex-row gap-1 items-center font-normal'>
                    <p>{column.render('Header')}</p>
                    <div>
                      <img
                        src={
                          column.isSorted
                            ? column.isSortedDesc
                              ? SORTARROWSELECTED
                              : SORTARROW
                            : SORTARROW
                        }
                        alt='up'
                        className='sorted-arrow'
                      />

                      <img
                        src={
                          column.isSorted
                            ? column.isSortedDesc
                              ? SORTARROW
                              : SORTARROWSELECTED
                            : SORTARROW
                        }
                        alt='down'
                        className={`sorted-arrow rotated-180`}
                      />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* render planet data */}
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className='first-column text-right font-normal h-12 '
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfPlanets;
