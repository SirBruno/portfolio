import React, { useEffect } from 'react'
import './Nav.css'

function Nav() {

  useEffect(() => {
    const getData = async () => {
      const url = "https://api.github.com/repos/SirBruno/portfolio/pulls";

      try {
        const resp = await fetch(url, {
          method: "GET",
          credentials: 'include',
          owner: 'SirBruno',
          repo: 'portfolio',
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/vnd.github+json",
            auth: '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'
          }
        });
        const data = await resp.json();
        // Do anything you need to do to
        // data before this call:
        console.log('success====:', data);
      } catch (err) {
        console.error('error============:', err);
      }
    }

    getData();
  }, []);

  // fetch('https://api.github.com/repos/SirBruno/portfolio/pulls', {
  //   mode: 'no-cors',
  //   headers: {
  //     'Access-Control-Allow-Origin':'*',
  //     auth: 'Bearer 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'
  //   }
  // }).then(resp => resp.json()).then(json => console.log(JSON.stringify(json)))

  return (
    <nav className="nav">
      <span className="nav__text">Work in progress</span>
      <div className="nav__menu container">
        <div className="nav__logo">Cupcake</div>
        <div className="nav__links">
          <a href="#.com">Clothes</a>
          <a href="#.com">Jewelery</a>
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