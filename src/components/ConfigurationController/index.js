import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickShowContent = () => {
        onToggleShowContent()
      }

      const onClickShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onClickShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav>
          <h1>Layout</h1>
          <input
            type="chexkbox"
            id="cb1"
            onClick={onClickShowContent}
            selected
          />
          <label htmlFor="cb1">Content</label>
          <input
            type="chexkbox"
            id="cb2"
            onClick={onClickShowLeftNavbar}
            selected
          />
          <label htmlFor="cb2">Left Navbar</label>
          <input
            type="chexkbox"
            id="cb3"
            onClick={onClickShowRightNavbar}
            selected
          />
          <label htmlFor="cb3">Right Navbar</label>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
