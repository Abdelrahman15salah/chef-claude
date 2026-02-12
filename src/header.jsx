
import './App.css'
import claude from './assets/chef-claude-icon.png'
function Header() {

  return (
    <header>
    <img src={claude} alt="cluade logo"  className="logo" />
    <h1>Chef Claude</h1>
    </header>
  )
}

export default Header
