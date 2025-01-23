import React, {useState} from 'react';

import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css';
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import MyMap from "../../shared/components/UIElements/MyMap";

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => {
        setShowMap(true);
    }
    const closeMapHandler = () => {
        setShowMap(false);
    }

    const showDeleteWarningHandler = (e) => {
        e.preventDefault();
        setShowConfirmModal(true);
    }

    const cancelDeleteHandler = (e) => {
        e.preventDefault();
        setShowConfirmModal(false);
    }

    const confirmDeleteHandler = (e) => {
        e.preventDefault();
        console.log('Deleting...');
        setShowConfirmModal(false);
    }

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-tiem__modal-content"
                footerClass="place-tiem__modal-footer"
                footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <MyMap
                        center={props.coordinates}
                        zoom={16}
                    />

                </div>
            </Modal>

            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure? "
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button onClick={cancelDeleteHandler}>Cancel</Button>
                        <Button onClick={confirmDeleteHandler} danger >Delete</Button>
                    </React.Fragment>
                }
            >
                <p>Do you want to proceed and delete this place?
                    Please note that it can't be undone thereafter.
                </p>
            </Modal>

            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;
