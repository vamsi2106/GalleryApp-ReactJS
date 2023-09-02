import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, updateImgFunction, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails
  const thumbnailStyle = isActive ? '' : 'thumbnail-opacity'
  const updateImg = () => {
    updateImgFunction(id)
  }

  return (
    <li>
      <button type="button" className={thumbnailStyle}>
        <img
          className="thumbnail-logo"
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={updateImg}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
