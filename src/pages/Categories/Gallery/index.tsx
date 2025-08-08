import videoHog from '../../../assets/images/video.png'
import homiAranha from '../../../assets/images/banner-homem-aranha.png'
import play from '../../../assets/images/play.png'
import zoom from '../../../assets/images/zoom.png'
import fechar from '../../../assets/images/fechar.png'

import { Section } from '../../../components/Section'

import { Items, Item, Action, Modal, ModalCOntent } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../Home'

const mock: GalleryItem[] = [
  {
    type: 'imagem',
    url: videoHog
  },
  {
    type: 'imagem',
    url: homiAranha
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/-9SJzvKcBhQ'
  }
]

type Props = {
  defaultCover: string
  nome: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  estaVisible: boolean
}

export const Galerry = ({ defaultCover, nome, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisible: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'video') return play
    return zoom
  }

  const CloseModal = () => {
    setModal({
      estaVisible: false,
      type: 'imagem',
      url: ''
    })
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  estaVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia de ${index + 1} de ${nome}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.estaVisible ? 'visivel' : ''}>
        <ModalCOntent className="container">
          <header>
            <h4> {nome} </h4>
            <img
              src={fechar}
              alt="ícone de fechar"
              onClick={() => {
                CloseModal()
              }}
            />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalCOntent>
        <div
          onClick={() => {
            CloseModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}
