import Dashboardwrapper from '@/components/Dashboardwrapper'
import React from 'react'
import Authenticated from "../../../components/ProtectedRoute/Authenticated"

function Page() {
  return (
    <Authenticated>

    <Dashboardwrapper>
        
    </Dashboardwrapper>
    </Authenticated>
  )
}

export default Page
