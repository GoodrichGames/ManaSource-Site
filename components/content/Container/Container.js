const Container = ({ children, ...props }) => {
  return (
    <div className={props.classes}>
      {children}
    </div>
  )
}

export default Container;
