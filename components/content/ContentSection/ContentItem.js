const ContentItem = ({ children, title, classes }) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <div className={classes}>
        {children}
      </div>
    </>
  )
}

export default ContentItem;
