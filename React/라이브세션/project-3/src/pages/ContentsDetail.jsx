import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ContentsDetail = () => {
    const {id} = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const content = queryParams.get('content')
    return (
        <div>
            컨텐츠 id : {id} 컨텐츠 내용 : {content}
        </div>
    );
};

export default ContentsDetail;