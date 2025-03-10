import * as S from './style';
import zoom from '../../images/zoom.png';
import play from '../../images/play.png';
import close from '../../images/fechar.png';
import { Section } from '../Section';
import { useState } from 'react';

interface GalleryItem {
  type: string;
  url: string;
}

type Props = {
  defaultCover: string;
  name: string;
  items: GalleryItem[];
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

export function Gallery({ defaultCover, name, items }: Props) {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
  });

  function getMediaCover(item: GalleryItem) {
    if (item.type === 'image') return item.url;
    return defaultCover;
  }

  function getMediaIcon(item: GalleryItem) {
    if (item.type === 'image') return zoom;
    return play;
  }

  function closeModal() {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
    });
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={index}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url,
                });
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  );
}
