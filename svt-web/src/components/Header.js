// @flow

import React from 'react'

import type { Node } from 'react'

import './Header.css'

export default () : Node => (
  <header className="Header">
    <span className="Header-title">
      Tag cloud by Olof Kihlberg
    </span>
  </header>
)
