import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Nav.css'
import { Link } from 'react-router-dom'
import bagIcon from '../../assets/bag-icon.svg'

function Nav() {

  const [PRs, SetPRs] = useState(null);
  const [mobileMenu, SetMobileMenu] = useState(true)
  const [cartItems, setCardItems] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('  https://api.github.com/repos/sirbruno/portfolio/pulls?state=closed', {
        headers: {
          'Authorization': process.env.GitHub_Token,
          "Accept": "application/vnd.github+json"
        }
      });
      console.log(response.data[0])
      SetPRs(response.data)
      return response.data;
    }

    fetchData()
  }, []);

  const MobileMenuClick = () => {
    if (mobileMenu) {
      document.querySelector(".mobileMenu_container").style.display = "flex"
      document.querySelector(".mobileMenu").classList.add("mobileMenu_Active")
    } else {
      document.querySelector(".mobileMenu_container").style.display = "none"
      document.querySelector(".mobileMenu").classList.remove("mobileMenu_Active")
    }

    SetMobileMenu(!mobileMenu)
  }

  return (
    <nav className="nav">
      <span className="nav__text">WIP / Latest update ({PRs != null && PRs[0].closed_at.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$2/$3/$1')
      }):&nbsp;<a href={PRs != null && PRs[0]._links.html.href} target="_blank" rel="noreferrer">{PRs != null && PRs[0].title}</a></span>
      <div className="nav__menu container">
        <div className="nav__logo">Cupcake</div>
        <div className="nav__links">
          <Link to="/">Home</Link>
          <a href="https://github.com/SirBruno/portfolio" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/brusilva_jp" target="_blank" rel="noreferrer">Instagram</a>
          <Link to="/categories/men">Men</Link>
          <Link to="/categories/women">Women</Link>
        </div>
        <div className="nav__bagIcon_desktop">
          <img src={bagIcon} alt="shopping bag" />
          <span className='nav_bagItemNumber'>{cartItems}</span>
        </div>
        <div className="nav_mobileButtons">
          <img src={bagIcon} className="nav__bagIcon_mobile" alt="shopping bag" />
          <div onClick={() => MobileMenuClick()} className="mobileMenu">
            <div className="mobileMenu_bar1"></div>
            <div className="mobileMenu_bar2"></div>
          </div>
        </div>
        <div className="mobileMenu_container">
          <Link onClick={() => MobileMenuClick()} to="/">Home</Link>
          <a onClick={() => MobileMenuClick()} href="https://github.com/SirBruno/portfolio" target="_blank" rel="noreferrer">GitHub</a>
          <a onClick={() => MobileMenuClick()} href="https://www.instagram.com/brusilva_jp" target="_blank" rel="noreferrer">Instagram</a>
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