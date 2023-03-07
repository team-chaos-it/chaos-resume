import * as React from 'react'
import type { PageProps } from 'gatsby'
import { Header } from '../components/header/Header'
import {CONFIGURATION} from "../config/Configuration";

const IndexPage = (props: PageProps) => {
  return (
    <main>
      <Header name={CONFIGURATION.personal.name} jobTitle={CONFIGURATION.personal.jobTitle} {...props} />
    </main>
  )
}
export default IndexPage
