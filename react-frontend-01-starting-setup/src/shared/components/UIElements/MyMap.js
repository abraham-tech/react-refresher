import React, { useRef, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';

import './Map.css';

const MyMap = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        new Map({
            target: mapRef.current.id,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [center.lng, center.lat],
                zoom: zoom
            })
        });
    }, [center, zoom]);

    return (
        <div
            ref={mapRef}
            className={`map ${props.className}`}
            style={props.style}
            id="map"
        ></div>
    );
};

export default MyMap;