import React from 'react'

function ResponsiveEventTable() {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
            <tr>
                <th className="px-4 py-2 text-left">Event Name</th>
                <th className="px-4 py-2 text-left">Event Type</th>
                <th className="px-4 py-2 text-left">Event Start</th>
                <th className="px-4 py-2 text-left">Event End</th>
                <th className="px-4 py-2 text-left">Event Status</th>
                <th className="px-4 py-2 text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            {/* <!-- Repeat this part for each event --> */}
            <tr className="border-b">
                <td className="px-4 py-2">Sample Event</td>
                <td className="px-4 py-2">Type 1</td>
                <td className="px-4 py-2">2024-01-01</td>
                <td className="px-4 py-2">2024-01-02</td>
                <td className="px-4 py-2">
                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded">Active</span>
                </td>
                <td className="px-4 py-2">
                    <button className="bg-red-500 text-white px-3 py-1 rounded mr-2">Cancel</button>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">Postpone</button>
                </td>
            </tr>
            {/* <!-- End of event row --> */}
        </tbody>
    </table>
</div>

  )
}

export default ResponsiveEventTable
