import { Outlet, Link } from 'react-router-dom'

function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home </Link>
              <Link to={`/projects`}>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

// eslint-disable-next-line prettier/prettier
export default Root
