import Section from '../Section'
import { useState } from 'react'
import * as S from './styles'
import { FaPlayCircle, FaSearchPlus } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

type GalleryProps = {
  defaultCover: string | undefined
  name: string
  items: GalleryItem[]
}

type ModalState = {
  visible: boolean
  image: string
  isVideo: boolean
  videoId: string
}

const Gallery = ({ defaultCover, name, items }: GalleryProps) => {
  const [modal, setModal] = useState<ModalState>({
    visible: false,
    image: '',
    isVideo: false,
    videoId: ''
  })

  const openModal = (image: string, isVideo = false, videoId = '') => {
    setModal({
      visible: true,
      image,
      isVideo,
      videoId
    })
  }

  const closeModal = () => {
    setModal({
      visible: false,
      image: '',
      isVideo: false,
      videoId: ''
    })
  }

  return (
    <>
      <Section title="Galeria" $background="black">
        <S.Items>
          {items.length > 0 ? (
            items.map((item, index: number) => (
              <S.Item
                key={`${item.type}-${index}`}
                onClick={() => {
                  if (item.type === 'video') {
                    openModal(item.url, true, item.url)
                  } else {
                    openModal(item.url)
                  }
                }}
              >
                {item.type === 'video' ? (
                  <iframe src={item.url} title={name + ' video'} />
                ) : (
                  <img src={item.url} alt={name + ' image'} />
                )}
                <S.Action>{item.type === 'video' ? <FaPlayCircle /> : <FaSearchPlus />}</S.Action>
              </S.Item>
            ))
          ) : (
            <S.Item>
              <img src={defaultCover} alt={name + ' image'} />
              <S.Action
                onClick={() => {
                  openModal(defaultCover || '')
                }}
              >
                <FaSearchPlus />
              </S.Action>
            </S.Item>
          )}
        </S.Items>
      </Section>
      <S.Modal className={modal.visible ? 'is-visible' : ''}>
        <S.ModalContainer>
          <header>
            <h4>{name}</h4>
            <IoMdClose onClick={closeModal} />
          </header>
          {modal.isVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${modal.videoId}`}
              title={name + ' modalVideo'}
            />
          ) : (
            <img src={modal.image} alt={name + ' modalImage'} />
          )}
        </S.ModalContainer>
        <S.Overlay onClick={closeModal} />
      </S.Modal>
    </>
  )
}

export default Gallery
