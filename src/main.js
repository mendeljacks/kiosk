import {observer} from "mobx-react-lite"
import {FinalPage} from "./final_page"
import {main_store} from "./main_store"

const Menu = observer(() => {
    return <div className="menu">
        {main_store.cart.map((item, i) => {
            return <div className='menu-item'>
                <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>{item.title}</span>
                <img src={item.image_url} alt="food" height='150px' width='150px' style={{objectFit: 'contain', backgroundColor: 'white'}} />

                <div>
                    <div style={{display: 'grid', gridTemplateColumns: '30px 20px 30px 30px 30px', placeItems: 'center'}}>
                        ${item.price.toFixed(2)}
                        <div></div>
                        <button disabled={item.quantity === 0} onClick={() => main_store.cart[i].quantity = main_store.cart[i].quantity - 1}>-</button>
                        <h3 style={{textAlign: 'center'}}>{item.quantity}</h3>
                        <button onClick={() => main_store.cart[i].quantity = main_store.cart[i].quantity + 1}>+</button>
                    </div>
                </div>

            </div>
        })}
    </div>
})

const Sidebar = observer(() => {
    return <div className='sidebar'>
        <center style={{marginTop: '20px'}}>Your Order</center>
        <div>
            {main_store.cart
                .filter(el => el.quantity > 0)
                .map(el => <div style={{display: 'grid', marginLeft: '20px', gridTemplateColumns: '1fr 1fr 1fr'}}>
                    <span>{el.title}</span>
                    <span>x{el.quantity}</span>
                    <span>${(el.price * el.quantity).toFixed(2)}</span>
                </div>)}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'auto 80px', marginLeft: '20px', textAlign: 'left'}}>
            <div>Subtotal</div>
            <div>${(main_store.cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)).toFixed(2)}</div>
            <div>Tax</div>
            <div>${((main_store.cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)) * 0.09975).toFixed(2)}</div>
            <div>Total</div>
            <div>${(main_store.cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0) + (main_store.cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)) * 0.09975).toFixed(2)}</div>
        </div>
        <button style={{margin: '20px'}} onClick={() => main_store.current_page = main_store.current_page + 1}>Next</button>
    </div>
})



export const Main = observer(() => <>
    { main_store.current_page === 0 && <div className='frame'>
        <Menu />
        <Sidebar />
    </div>}

    { main_store.current_page === 1 && <FinalPage />}

</>
)