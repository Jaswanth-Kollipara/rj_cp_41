import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const content = () => (
        <>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amit, consectetur aditiscing elit, sed do
            eiusmod tempor incididunt ut ladore et dolore magna alique. Ut enim
            ad minim veniam.
          </p>
        </>
      )

      const leftNavbar = () => (
        <>
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </>
      )

      const rightNavbar = () => (
        <>
          <h1>Right Navbar Menu</h1>
          <div>
            <p>Ad 1</p>
          </div>
          <div>
            <p>Ad 2</p>
          </div>
        </>
      )

      return (
        <div>
          {showContent && content()}
          {showLeftNavbar && leftNavbar()}
          {showRightNavbar && rightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
