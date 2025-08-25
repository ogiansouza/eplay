import { useState } from 'react'

import { Section } from '../Section'

import { GalleryItem } from '../../pages/Home'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import closeIcon from '../../assets/images/fechar.png'

import * as S from './style'

type Props = {
  defaultCover: string
  nome: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

export const Gallery = ({ defaultCover, nome, items }: Props) => {
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

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
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
                alt={`Midia ${index + 1} de nome do jogo`}
              />
              <S.Action>
                <img src={getMediaIcon(media)} alt={nome} />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal
        className={modal.isVisible ? 'is-visible' : ''}
        onClick={() => closeModal()}
      >
        <S.ModalContent className="container">
          <header>
            <h4>{nome}</h4>
            <img src={closeIcon} alt="Botao de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.ModalContent>
      </S.Modal>
    </>
  )
}
