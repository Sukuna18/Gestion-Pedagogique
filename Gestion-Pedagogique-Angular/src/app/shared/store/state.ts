import { Produits } from 'src/interfaces/produits';
import { User } from 'src/interfaces/user';

export interface CommunicationState {
  notification: any;
  product: Produits;
  total: number;
  reduction: number;
  userData: User;
}