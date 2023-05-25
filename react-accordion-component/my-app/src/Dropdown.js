export default function Dropdown({header, content, onClick, isActive}){
  const contentStyle = {
    display: isActive ? 'block' : 'none',
    borderTop: '1px solid'
  };


  const widthStyle = {
    width: '300px'
  };

  const borderStyle = {
      border: '1px solid'
  };

  const colorStyle = {
    backgroundColor: 'lightgray'
  }

  const combinedStyle = {
     ...widthStyle, ...borderStyle
  };

  return (
    <div style={combinedStyle}
      onClick={onClick}>

    <div style={colorStyle}>{header}</div>
    <div style={contentStyle}>{content}</div>

    </div>
  )
}
