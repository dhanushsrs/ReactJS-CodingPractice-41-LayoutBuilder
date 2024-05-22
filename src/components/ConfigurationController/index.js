// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout Heading</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  checked={showContent}
                  type="checkbox"
                  id="content"
                  onChange={onChangeContent}
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>

              <div className="checkbox-container">
                <input
                  checked={showLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeLeftNavbar}
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>

              <div className="checkbox-container">
                <input
                  checked={showRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onChangeRightNavbar}
                />
                <label className="label-text" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
