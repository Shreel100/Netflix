import React, { useEffect, useState } from 'react'
import '../screens/PlanScreen.css'
import db from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import {loadStripe} from '@stripe/stripe-js'


export default function PlanScreen() {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser)
  
  useEffect(()=>{
    db.collection('customers')
    .doc(user.uid)
    .collection('subscriptions')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(async subscription =>{
            setSubscription({
                role: subscription.data().role,
                current_period_end: subscription.data().current_period_end.seconds,
                current_period_start: subscription.data().current_period_start.seconds,
            })
            
        })
    })
  },[user.uid])

  useEffect(()=>{
    db.collection('products').where('active','==',true)
    .get()
    .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection('prices').get();
            priceSnap.docs.forEach(function (price) {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data(),
                    };
                })
        })
        setProducts(products)
    })
  },[])

  console.log(products)
  console.log(subscription)

  const loadCheckout = async (priceId) => {
    const docref = await db.collection('customers')
    .doc(user.uid)
    .collection('checkout_sessions')
    .add({
        price:priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    })
    docref.onSnapshot(async(snap) => {
        const {error, sessionId} = snap.data()
        if (error){
            alert(`An alert occured:${error.message} `)
        }

        if(sessionId){
            const stripe = await loadStripe('pk_test_51MkIICHsHolBHvm5MvURz5QKaJgVUqfVXSHhr6ps3mMC6XLtl46YQZe4JR5ww5h09PIaaowdOCGlozLXMwldiBvi00IK2lcqQB')
            stripe.redirectToCheckout({sessionId})
        }
    })
  }

  return (
    <div>
      {Object.entries(products).map(([productId,productData])=>{
        const isCurrentPackage = productData.name
        ?.includes(subscription?.role)

        return (
            <div className={`planScreen_plan`}>
                <div className='planScreen_info'>
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
                </div>

                <div>
                    <button 
                    onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}
                    className= {`${isCurrentPackage && 'planScreen_subscribe_disabled'} planScreen_subscribe`} >
                        {isCurrentPackage ? 'Current Package' : 'Subscribe'}
                    </button>
                </div>
            </div>
        )
      })}
    </div>
  )
}
