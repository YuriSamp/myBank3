import { ListaDeGastos } from '../Interfaces/ListaDeGastos';
import { useSetRecoilState } from 'recoil';
import { ListadeGastos } from '@/context/atom';

export const useAdicionaEvento = () => {
  const setlistadeEventos = useSetRecoilState<ListaDeGastos[]>(ListadeGastos);
  return (e: ListaDeGastos) => {
    return setlistadeEventos((listaantiga) => [...listaantiga, e]);
  };
};
