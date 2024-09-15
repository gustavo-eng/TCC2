
export type Event = {
    idEvent?: number;
    description?: string;
    price?: number;
    startDate?: string;  // ou Date, dependendo de como você quer lidar com datas
    endDate?: string;    // ou Date
    neighborhood?: string;
    street?: string;
    number?: number;
    city?: string;
    createdAt?: string;  // ou Date
    updatedAt?: string;  // ou Date
    idTypeEvent?: number;
    typeEvent?: TypeEvent;
  };

  export type TypeEvent = {
    idTypeEvent?: number;
    type?: string;
    createdAt?: string;  // ou Date
    updatedAt?: string;  // ou Date
  };