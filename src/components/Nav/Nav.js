import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Nav.css'

function Nav() {

  const [PRs, SetPRs] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('  https://api.github.com/repos/sirbruno/portfolio/pulls?state=closed', {
        headers: {
          'Authorization': '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',
          "Accept": "application/vnd.github+json"
        }
      });
      console.log(response.data[0])
      SetPRs(response.data)
      return response.data;
    }

    fetchData()
  }, []);

  return (
    <nav className="nav">
      <span className="nav__text">WIP / Latest update ({PRs != null && PRs[0].closed_at.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$2/$3/$1')
 }):&nbsp;<a href={PRs != null && PRs[0]._links.html.href} target="_blank" rel="noreferrer">{PRs != null && PRs[0].title}</a></span>
      <div className="nav__menu container">
        <div className="nav__logo">Cupcake</div>
        <div className="nav__links">
          <a href="#.com">Clothes</a>
          <a href="#.com">Jewelery</a>
        </div>
        <div className="mobileMenu">
          <div className="mobileMenu_bar1"></div>
          <div className="mobileMenu_bar2"></div>
        </div>
      </div>
      <span className="nav__text2">
        <span>⏱️Everything 50% off until {new Date((new Date()).getTime() + (60 * 60 * 24 * 1000)).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })}</span>
        <span className="nav__text2_sub">The more you buy, the more you save!</span>
      </span>
    </nav>
  )
}

export default Nav