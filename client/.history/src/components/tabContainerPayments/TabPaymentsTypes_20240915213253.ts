// Tipagem do Evento (Event)
export interface Event {
  idEvent: number;
  description: string;
  price: number;
  startDate: string; // Usar string para representar datas ISO
  endDate: string;
  neighborhood: string;
  street: string;
  number: number;
  city: string;
  createdAt: string;
  updatedAt: string;
  idTypeEvent: number;
}

export interface Category {
  idCategory?: number;
  gender?: string;
  classCategory?: string;
  weight?: number | string;
}

// Tipagem do Pagamento (Payment)
export interface Payment {
  idPayment: number;
  voucherPath: string;
  aproved: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
  idAthlete: number;
  idCategory: number | null; // Pode ser nulo
  idEvent: number;
  Event: Event; // Relacionamento com o evento

}
