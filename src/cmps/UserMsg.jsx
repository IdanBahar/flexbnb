import { eventBus, showSuccessMsg } from '../services/event-bus.service'
import { useState, useEffect, useRef } from 'react'
import { socketService, SOCKET_EVENT_REVIEW_ABOUT_YOU, SOCKET_EVENT_YOUR_HOME_BOOKED, SOCKET_EVENT_ORDER_APPROVED, SOCKET_EVENT_ORDER_REJECTED } from '../services/socket.service'

window.showSuccessMsg = showSuccessMsg
export function UserMsg() {
    const [msg, setMsg] = useState(null)
    const timeoutIdRef = useRef()
    
    useEffect(() => {
        console.log('✅ UserMsg mounted')
        const unsubscribe = eventBus.on('show-msg', msg => {
            console.log('📢 UserMsg got eventBus event:', msg)
            setMsg(msg)
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current)
                timeoutIdRef.current = null
            }
            timeoutIdRef.current = setTimeout(closeMsg, 3000)
        })

        socketService.on(SOCKET_EVENT_YOUR_HOME_BOOKED, order => {
            console.log('📩 got home-booked from server:', order)
            showSuccessMsg(`Your home ${order.home.name} was booked just now`)
        })

        socketService.on(SOCKET_EVENT_ORDER_APPROVED, order => {
            console.log('📩 got order-approved from server:', order)
            showSuccessMsg(`Your booking for ${order.home.name} has been approved ! 🎉`)
        })

        socketService.on(SOCKET_EVENT_ORDER_REJECTED, order => {
            console.log('📩 got order-rejected from server:', order)
            showSuccessMsg(`Unfortunately, your booking request for ${order.home.name} was declined.`)
        })
        socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, review => {
            showSuccessMsg(`New review about me ${review.txt}`)
        })

        return () => {
            console.log('❌ UserMsg unmounted, removing listeners')
            unsubscribe()
            socketService.off(SOCKET_EVENT_REVIEW_ABOUT_YOU)
            socketService.off(SOCKET_EVENT_YOUR_HOME_BOOKED)
            socketService.off(SOCKET_EVENT_ORDER_APPROVED)
            socketService.off(SOCKET_EVENT_ORDER_REJECTED)
        }
    }, [])

    function closeMsg() {
        setMsg(null)
    }

    function msgClass() {
        return msg ? 'visible' : ''
    }
    return (
        <section className={`user-msg ${msg?.type || ''} ${msgClass()}`}>
            <button onClick={closeMsg}>x</button>
            {msg?.txt}
        </section>
    )
}
