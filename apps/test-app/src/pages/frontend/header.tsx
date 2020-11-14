import { Pulldown, Header } from '@cenk1cenk2/react-template-components'
import { ReactComponent as LogoImage } from '@test-app/assets/img/logo/logo.svg'
import React, { Fragment } from 'react'

export const FrontendWithHeaderTemplate: React.FC = () => {
  const pkg = { name: CONFIG.package.name, version: CONFIG.package.version }
  return (
    <Fragment>
      <Header logo={LogoImage} package={pkg} />
      {/* <BackgroundImageContainer $url={BackgroundImage}> */}
      <Pulldown package={pkg} logo={LogoImage} maxWidth="md" offset={{ x: 0, y: 0 }}>
        some data
      </Pulldown>
      {/* </BackgroundImageContainer> */}
    </Fragment>
  )
}

export default FrontendWithHeaderTemplate
