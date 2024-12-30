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
  