import { Head } from 'components/common/head'
import { HomeLayout } from 'layout/home'

export default function Home () {
  return (
    <>
      <Head
        title="Free planning poker for agile teams"
        description="Realtime rooms help you estimate your tasks in a collaborative scrum poker"
      />
      <HomeLayout />
    </>
  )
}
