import { Banner } from '../../Components/Banner';
import { ProductsList } from '../../Components/ProductsList';
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api';

export type Game = {
  id: number;
  name: string;
  description: string;
  release_date: string;
  prices: {
    discount: number;
    old: number;
    current: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: [
      {
        type: string;
        url: string;
      }
    ];
  };
};

export function Home() {
  const { data: onSaleGame, isLoading: isLoadingSale } = useGetOnSaleQuery();
  const { data: soonGame, isLoading: isLoadingSoon } = useGetSoonQuery();

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        title="Promoções"
        background="gray"
        games={onSaleGame}
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        title="Em reve"
        background="black"
        games={soonGame}
        isLoading={isLoadingSoon}
      />
    </>
  );
}
