import React, { useState } from 'react';

function Pagina4({ setCurrentPage }) {

    const PaginaPrincipal = () => {
        setCurrentPage('Main');
        window.history.pushState({ page: 'Main' }, 'Main', '/');
      };

}
export default Pagina4;