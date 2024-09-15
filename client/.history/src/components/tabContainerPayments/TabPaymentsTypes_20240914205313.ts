// Tipagem do Evento (Event)


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
