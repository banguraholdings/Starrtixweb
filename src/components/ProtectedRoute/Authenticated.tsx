import React, { useContext, useState, useEffect, ReactNode, FC } from 'react';
import { redirect } from 'next/navigation';
import { userAuth } from '../../../useContext';


// Extend T to include React.JSX.IntrinsicAttributes
export function withProtected<T extends React.JSX.IntrinsicAttributes>(Component: React.ComponentType<T>) {
  return function ProtectedComponent(props: T) {
const {isAuthenticated, username} = userAuth()

    useEffect(() => {
      if (!username) {
        redirect('/'); // Redirects to login if user is not authenticated
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null; // Or return a loading component, etc.
    }

    return <Component {...props} />;
  };
}
