import React, { Component, PropTypes } from 'react'
import store from './store'
import Comp from './components'
import storeWrap from './storewrap'

const { Base, Counter, Combine, Catalog } = Comp

export default {
  Input:storeWrap(Combine,store),
  Catalog: storeWrap(Catalog,store)
}
