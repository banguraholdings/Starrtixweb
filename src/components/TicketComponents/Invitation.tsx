// In src/TableComponent.tsx
import Image from 'next/image';
import React from 'react';
import { useTable, Column, TableOptions } from 'react-table';

interface TableProps<T extends object> extends TableOptions<T> {}

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
 

  return (
    <table className="min-w-full table-auto">
    <thead className="bg-gray-100">
        <tr>
            <th className="px-4 py-2 text-left">Id</th>
            <th className="px-4 py-2 text-left">Name of Attendee</th>
            <th className="px-4 py-2 text-left">Expiration Date</th>
            <th className="px-4 py-2 text-left">Number of Invitations</th>
            <th className="px-4 py-2 text-left">Identifier</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">unique_id</th>
            <th className="px-4 py-2 text-left">qrcode</th>
            <th className="px-4 py-2 text-left">Event</th>
         
        </tr>
    </thead>
    <tbody>
        {/* <!-- Repeat this part for each event --> */}
            {
                    data && data.map((value:any, index:number)=>(
        <tr className="border-b" key={index}>
            <td className="px-4 py-2">{value.id}</td>
            <td className="px-4 py-2">{value.nameofattendee}</td>
            <td className="px-4 py-2">{value.expirationdate}</td>
            <td className="px-4 py-2">{value.numberofinvitaion}</td>
            <td className="px-4 py-2">{value.uniqueIdentidier}</td>
            <td className="px-4 py-2">
{value.email}
            </td>
            <td className="px-4 py-2">{value.unique_id}</td>
            <td className="px-4 py-2"><Image alt='qrcode' width={60} height={60} src={value.qrcode}/></td>
            <td className="px-4 py-2">{value.event}</td>

        </tr>

                    ))
            }
        {/* <!-- End of event row --> */}
    </tbody>
</table>
  );
};

export default Table;
