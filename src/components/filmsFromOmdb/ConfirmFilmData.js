import React, { useContext } from 'react';
import { ImportFilmDataContext } from '../../contexts/ImportFilmDataContext';

const ConfirmFilmData = (props) => {
    const { importedFilmsData } = useContext(ImportFilmDataContext);
    console.log(importedFilmsData);
    return ( 
        <div>
            <p>confirm data</p>
            {importedFilmsData.title}
        </div>
     );
}
 
export default ConfirmFilmData;