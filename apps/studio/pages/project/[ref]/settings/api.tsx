import ServiceList from 'components/interfaces/Settings/API/ServiceList'
import AppLayout from 'components/layouts/AppLayout/AppLayout'
import DefaultLayout from 'components/layouts/DefaultLayout'
import SettingsLayout from 'components/layouts/ProjectSettingsLayout/SettingsLayout'
import { ScaffoldContainer, ScaffoldHeader, ScaffoldTitle } from 'components/layouts/Scaffold'
import type { NextPageWithLayout } from 'types'

const ApiSettings: NextPageWithLayout = () => {
  return (
    <>
      <ScaffoldContainer id="billing-page-top">
        <ScaffoldHeader>
          <ScaffoldTitle>API Settings</ScaffoldTitle>
        </ScaffoldHeader>
      </ScaffoldContainer>
      <ScaffoldContainer bottomPadding>
        <ServiceList />
      </ScaffoldContainer>
    </>
  )
}

ApiSettings.getLayout = (page) => (
  <AppLayout>
    <DefaultLayout product="API">
      <SettingsLayout title="API Settings">{page}</SettingsLayout>
    </DefaultLayout>
  </AppLayout>
)
export default ApiSettings
