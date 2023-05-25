import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import isPhone from '../../scripts/checkIsPhone';

export const MapY = () => {

    return (
        <YMaps>
            <Map defaultState={{
                center: [55.988968, 92.892951],
                zoom: 18
            }}
                style={{ width: (isPhone()) ? '90vw' : '50vw', height: '40vh', borderRadius: '2px' }}
            >
                <Placemark defaultGeometry={[55.988968, 92.892951]} />
            </Map>
        </YMaps>
    );
};

export default MapY;
