"use client";

import NextLink from "next/link";

// Drop-in for react-router's <Link to="..."> used throughout the original pages.
export default function Link({ to, href, ...rest }) {
  return <NextLink href={to ?? href} {...rest} />;
}
