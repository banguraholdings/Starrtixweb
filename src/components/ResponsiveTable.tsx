import React from 'react';

function ResponsiveTable({ data }:any) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        {/* ... Header code (same as previous example) ... */}
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((user:any, index:any) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap">
                <img
                  src={user.photoUrl}
                  alt={`${user.name}'s photo`}
                  className="h-8 w-8 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.phone}</td>
              <td className="px-6 py-4 whitespace-no-wrap">Action buttons</td>
              <td className="px-6 py-4 whitespace-no-wrap">Edit/Delete buttons</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResponsiveTable;
