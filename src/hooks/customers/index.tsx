import React, { useState, useEffect, useContext, createContext } from 'react';

import api from '../../services/api';

interface customersData {
  id: number;
  name: string;
  plano: string;
  planejado: number;
  realizado: number;
  date: string;
  finished: boolean;
}

interface ContextData {
  customers: customersData[];
}

const CustomersContext = createContext<ContextData | null>(null);

const CustomersProvider: React.FC = ({ children }) => {
  const [customers, setcustomers] = useState<customersData[]>([]);
  useEffect(() => {
    api.get('/customers').then(results => {
      const finalResult = results.data;
      setcustomers(finalResult[0]);
    });
  }, []);

  return (
    <CustomersContext.Provider value={{ customers }}>
      {children}
    </CustomersContext.Provider>
  );
};

function useCustomers(): ContextData  {
  const context = useContext(CustomersContext);
  if (context){

    return context;
  }
  throw Error("Customers doesnt exist please run the server")
}

export { CustomersProvider, useCustomers };