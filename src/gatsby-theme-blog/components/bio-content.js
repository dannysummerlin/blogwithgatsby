import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Welcome to <Styled.a href="http://example.com/">Sambat</Styled.a>
    {` `}
    Blog.
    <br />
    I am a web developer.
  </Fragment>
)
