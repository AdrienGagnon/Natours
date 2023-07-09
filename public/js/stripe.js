/* esling-disable */
import axios from 'axios';
import Stripe from 'stripe';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
    const stripe = Stripe(
        'pk_test_51NRigPChhBI1yHxnFZKNIPFMiyakNFJler3mVuGOWFQzOeoneSjN19hx78wFFbREOxfw9DxnV29Ex85CfFMaiGQc00upik8N5F'
    );
    try {
        // 1) Get checkout session from API
        const session = await axios(
            `/api/v1/bookings/checkout-session/${tourId}`
        );
        // 2) Create checkout from + charge credit card
        window.location.assign(session.data.session.url);
    } catch (err) {
        showAlert('error', err);
    }
};
