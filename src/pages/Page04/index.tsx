import React from 'react'
import { useContributors } from './useContributors';
import './index.scss';

export const Page04 = () => {

  const {contributors} = useContributors();

  return (
    <div className='page4'>
      {contributors.map((c:any) => (
        <a href={c.html_url} key={c.id}>
          <p>{c.login}</p>
          <img src={c.avatar_url} alt={c.name} />
        </a>
      ))}
    </div>
  )
}