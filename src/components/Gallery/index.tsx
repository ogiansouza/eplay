import * as S from './styles'
import Section from '../Section'

import iconZoom from '../../images/icon-zoom.png'
import iconPlay from '../../images/icon-play.png'
import iconClose from '../../images/fechar.png'
import { useState } from 'react'

type Props = {
  defaultCover: string
  name: string
  items: GalleryType[]
}

interface modalState extends GalleryType {
  visibily: boolean
}

export default function Gallery({ defaultCover, name, items }: Props) {
  const [modal, setModal] = useState<modalState>({
    visibily: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryType) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryType) => {
    if (item.type === 'image') return iconZoom
    return iconPlay
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Itens>
          {items.map((media, id) => (
            <S.Item
              key={id}
              onClick={() => {
                setModal({ visibily: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${id + 1} do ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Itens>
      </Section>
      <S.Modal className={modal.visibily ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={iconClose}
              alt="Fechar"
              onClick={() => {
                setModal({ visibily: false, type: 'image', url: '' })
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <div className="iframe-container">
              <iframe
                src={modal.url}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          )}
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}
