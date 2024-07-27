import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialOptions = {
  "client-id": "ARj_0wL06vvtR4krH2Kk84PbHlo1ouvWQyvMJmR-ECYXsFU4py2Sn3GcP83vwGPkb1_sFA-u5OLBZA3t",
  currency: "USD",
  intent: "capture",
};

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const docRef = doc(db, "courses", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getCourse();
  }, [id]);

  const handlePaymentSuccess = (details) => {
    toast.success(`Transaction completed by ${details.payer.name.given_name}`);
    toast.success('Payment successful!');
  };

  return (
    <div className="container mx-auto my-8">
      <ToastContainer />
      {course ? (
        <div className="max-w-4xl mx-auto">
          <img
            src={course.thumbnailURL}
            alt={course.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{course.name}</h1>
          <p className="text-gray-600 mt-2">{course.description}</p>
          <p className="text-lg font-bold mt-2">Duration: {course.duration} hours</p>
          <p className="text-lg font-bold mt-2">${course.price}</p>
          <div className="mt-8">
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: course.price,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(handlePaymentSuccess);
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseDetails;
