import React, { createContext, useContext, useState } from 'react';

const ContatoContext = createContext();

export function ContatoProvider({ children }) {
  const [contatoId, setContatoId] = useState(null)
  const [telefoneId, setTelefoneId] = useState(null)

  return (
    <ContatoContext.Provider value={{ contatoId, setContatoId, telefoneId, setTelefoneId }}>
      {children}
    </ContatoContext.Provider>
  );
}

export function useContato() {
  return useContext(ContatoContext);
}
