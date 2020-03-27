export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;    // '?' is used for making the variable as optional
    
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}