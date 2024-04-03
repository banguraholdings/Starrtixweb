'use client'
import { getAllEvents } from '@/api/Auth'
import React, { useEffect, useState } from 'react'

function ResponsiveEventTable() {
    const [events,setEvents]=useState<any>([])
    useEffect(()=>{
        getAllEvents().then((events)=>{
            setEvents(events?.data)
            console.log(events?.data)
        })
    },[])
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
            <tr>
                <th className="px-4 py-2 text-left">Event Name</th>
                <th className="px-4 py-2 text-left">Event Type</th>
                <th className="px-4 py-2 text-left">Event Start</th>
                <th className="px-4 py-2 text-left">Event End</th>
                <th className="px-4 py-2 text-left">Event Date</th>
                <th className="px-4 py-2 text-left">Event tags</th>
                <th className="px-4 py-2 text-left">Event Location</th>
                <th className="px-4 py-2 text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            {/* <!-- Repeat this part for each event --> */}
                {
                        events && events.map((value:any, index:number)=>(
            <tr className="border-b" key={index}>
                <td className="px-4 py-2">{value.title}</td>
                <td className="px-4 py-2">{value.types}</td>
                <td className="px-4 py-2">{value.eventstarttime}</td>
                <td className="px-4 py-2">{value.eventendtime}</td>
                <td className="px-4 py-2">{value.date}</td>
                <td className="px-4 py-2">
                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded">{value.eventtags}</span>
                </td>
                <td className="px-4 py-2">{value.location}</td>

                <td className="px-4 py-2">
                    <button className="bg-red-500 text-white px-3 py-1 rounded mr-2">Cancel</button>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">Postpone</button>
                </td>
            </tr>

                        ))
                }
            {/* <!-- End of event row --> */}
        </tbody>
    </table>
</div>

  )
}

export default ResponsiveEventTable
