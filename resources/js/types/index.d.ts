export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    role : "administrator" | "approver";
    
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface Vehicle {
    id: string; 
    name: string;
    number_plate: string;
    ownership: 'company' | 'rental';
    type: 'freight' | 'passenger';
    status: 'available' | 'unavailable' | 'maintenance';
    fuel_consumption: number; 
    last_service_date?: string; 
    next_service_date?: string; 
    created_at: string; 
    updated_at: string; 
}
  


interface Administrator {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  role: string;
  [key: string]: any;
}

interface Driver {
  id: number;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface Vehicle {
  id: number;
  name: string;
  number_plate: string;
  ownership: string;
  type: string;
  [key: string]: any; 
}

interface Approver {
  id: number;
  name: string;
  email: string;
  role: string;
  [key: string]: any; // Untuk properti tambahan jika ada
}

interface Driver {
    id: number;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
  }

  interface Approver {
    id: number;
    name: string;
    email: string;
    role: string;
    status : string;
    [key: string]: any;
  }

  interface Mine{
    id: number;
    name: string;
    region: string;
    [key: string]: any;
  }

  interface Service{
    id: number;
    name: string;
    price: number;
    vehicle_id: number;
    vehicle : Vehicle
    status : "ongoing"|"done";
    description: string;
    created_at: string;
    updated_at: string;
  }
  interface Log{
    id: number;
    user:User;
    action: string;
    details : string;
    created_at: date;
    updated_at: string;
  }
interface Booking {
  id: number;
  administrator: User;
  driver: Driver;
  vehicle: Vehicle;
  mine: Mine;
  approvers: {
    name:string,
    position : string,
    role: string,
    email :string,
    pivot:{
        status:"pending" | "approved" | "rejected"
    }
  }[];
  status: "pending" | "approved" | "rejected";
  progress : 'done' | 'ongoing' | null;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
}

interface FlashProps {
    message: string | null;
    status: 'success' | 'error' | null;
}