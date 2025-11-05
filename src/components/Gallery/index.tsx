import { useState } from 'react'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'

import Section from '../Section'

import * as S from './style'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Item>
          {items.map((media, index) => (
            <S.Items
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img src={getMediaIcon(media)} alt="maximar a Mídia" />
              </S.Action>
            </S.Items>
          ))}
        </S.Item>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              className="close-icon"
              src={close}
              alt="icon fechar"
              onClick={() => {
                setModal({
                  isVisible: false,
                  type: 'image',
                  url: ''
                })
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModal({
              isVisible: false,
              type: 'image',
              url: ''
            })
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default Gallery
