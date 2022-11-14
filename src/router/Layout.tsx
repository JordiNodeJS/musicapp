
type LayoutProps = {
  children: JSX.Element // 👈️ added type for children JSX.Element | JSX.Element[] | React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ color: 'cornflowerblue' }}>{children}</div>
  )
}

export default Layout
