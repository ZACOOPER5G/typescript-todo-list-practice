import { Card } from 'react-bootstrap'
import banner from '../assets/banner.jpg'

export const Header = () => {
  return (
    <Card className="bg-light text-black d-flex justify-content-end mb-3 ">
      <Card.Img src={banner} alt="Card image" className="h-75 w-100"/>
      <Card.ImgOverlay className="d-flex justify-content-end align-items-center bottom-50 me-4 fs-10">
        <Card.Text>
          List your to do items here!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
