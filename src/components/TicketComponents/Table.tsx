// In src/TableComponent.tsx
import React from 'react';
import { useTable, Column, TableOptions } from 'react-table';

interface TableProps<T extends object> extends TableOptions<T> {}

const TableComponent = <T extends object>({ columns, data }: TableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<T>({ columns, data });

  return (
    <table className="min-w-full table-auto">
    <thead className="bg-gray-100">
        <tr>
            <th className="px-4 py-2 text-left">Id</th>
            <th className="px-4 py-2 text-left">Ticket Number</th>
            <th className="px-4 py-2 text-left">Expiration Date</th>
            <th className="px-4 py-2 text-left">Ticket Sold</th>
            <th className="px-4 py-2 text-left">Tickets Left</th>
            <th className="px-4 py-2 text-left">Tickets Scanned</th>
            <th className="px-4 py-2 text-left">Event </th>
         
        </tr>
    </thead>
    <tbody>
        {/* <!-- Repeat this part for each event --> */}
            {
                    data && data.map((value:any, index:number)=>(
        <tr className="border-b" key={index}>
            <td className="px-4 py-2">{value.id}</td>
            <td className="px-4 py-2">{value.ticketnumber}</td>
            <td className="px-4 py-2">{value.expirationdate}</td>
            <td className="px-4 py-2">{value.ticketsold}</td>
            <td className="px-4 py-2">{value.ticketleft}</td>
            <td className="px-4 py-2">
{value.ticketscanned}
            </td>
            <td className="px-4 py-2">{value.event}</td>
         
        </tr>

                    ))
            }
        {/* <!-- End of event row --> */}
    </tbody>
</table>
  );
};

export default TableComponent;
