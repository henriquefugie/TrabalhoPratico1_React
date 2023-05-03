import React, { useState } from 'react';

function Pagina5({ setCurrentPage }) {

    const PaginaPrincipal = () => {
        setCurrentPage('Main');
        window.history.pushState({ page: 'Main' }, 'Main', '/');
      };

}

export default Pagina5;