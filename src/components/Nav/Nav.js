import { Switch, Route, Link, useLocation } from 'react-router-dom'
import App from '../../App'

export default function Nav() {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <>
      <nav>
        <Link className={location.pathname === "/" ? "highlightedNavLink" : null} to="/">Home</Link>
        <a href="google.com">About Me</a>
      </nav>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </>
  )
}