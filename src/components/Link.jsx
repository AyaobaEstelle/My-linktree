import './Link.css'

export const Link = ({ children, ...props }) => {
  return (
    <a className="Link" {...props}>
      {children}
    </a>
  )
}
