const ContentItem = ({ children, title }) => {
  return (
    <li>
      {title && <h3>{title}</h3>}
      <div>
        {children}
      </div>
    </li>
  )
}

export default ContentItem;
