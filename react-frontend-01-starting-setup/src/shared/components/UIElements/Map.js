import React, {useEffect, useRef} from 'react';
import './Map.css';



const Map = (props) => {
    const mapRef = useRef();
    const {center, zoom} = props;

    useEffect(() => {
        console.log("Window", window.google.maps.Map);
        // const map = window.google.maps.Map(mapRef.current, {
        //     center: center,
        //     zoom: zoom,
        // });

        // const map = document.querySelector('gmp-map').innerMap;
        //
        // new Window.google.maps.Marker({
        //     position: center,
        //     map: map
        // });
        function initMap() {
            const geocoder = new window.google.maps.Geocoder();
            const map = document.querySelector('gmp-map').innerMap;
            const infoWindow = new window.google.maps.InfoWindow();

            document.getElementById('submit').addEventListener('click', () => {
                geocodeLatLng(geocoder, map, infoWindow);
            });
        }

        async function geocodeLatLng(geocoder, map, infoWindow) {
            const input = document.getElementById('latlng').value;
            const latlngStr = input.split(',', 2);
            const latlng = {
                lat: parseFloat(latlngStr[0]),
                lng: parseFloat(latlngStr[1]),
            };

            try {
                const response = await geocoder.geocode({location: latlng});
                const marker = document.querySelector('gmp-advanced-marker');

                map.setZoom(11);
                marker.position = latlng;
                infoWindow.setContent(response.results[0].formatted_address);
                infoWindow.open({anchor: marker});
            } catch (e) {
                window.alert(`Geocoder failed due to: ${e}`);
            }
        }

        window.initMap = initMap;

    }, [center, zoom]);

    return (<div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}>

        <gmp-map center="40.12150192260742,-100.45039367675781" zoom="4" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="40.12150192260742,-100.45039367675781"
                                 title="My location"></gmp-advanced-marker>
        </gmp-map>
    </div>);
}

export default Map;
