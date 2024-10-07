
export type EventTypes = {
    idEvent?: number;
    description?: string;
    price?: number | string;
    startDate?: string;
    endDate?: string;
    neighborhood?: string;
    street?: string;
    number?: number;
    city?: string;
    createdAt?: string;
    updatedAt?: string;
    idTypeEvent?: number;
    typeEvent?: TypeEvent;
  };

  export type TypeEvent = {
    idTypeEvent?: number;
    type?: string;
    createdAt?: string;
    updatedAt?: string;
  };