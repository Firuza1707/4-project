import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      {/* header */}
      <nav className='shadow py-3'>
        <div class="container px-4 px-lg-5">

          <ul>
            <li> <a href="#!" className='title1'>Start Bootstrap</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
          <button>Cart</button>
        </div>
      </nav>
      <header>
        <div className='container-fluid'>
          <h1>Shop in style</h1>
          <h4>With this shop hompeage template</h4>
        </div>
      </header>
      {/* section */}
      <section className='py-5  '>

        {/* card 1 */}
        <div className='container px-4 px-lg-5 mt-5  '>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xxl-4 justify-content-center " >

            <div className='col mb-5 '>
              <div className="card h-100">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Fancy Product</h5>
                    $40.00 - $80.00
                    {/* <span className='text-muted text-decoration-line-through'>$20.00</span> */}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto'>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>


            {/* card 2 */}
            <div className='col mb-5 '>
              <div className='card h-100'>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Special Item</h5>
                    <span className='text-muted text-decoration-line-through'>$20.00</span> $18.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto'>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className='col mb-5 '>
              <div className='card h-100'>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Sale Item</h5>
                    <span className='text-muted text-decoration-line-through'>$50.00</span> $25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto'>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className='col mb-5 '>
              <div className='card h-100'>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Popular Item</h5>
                    $40.00

                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto'>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>

            {/* card 5 */}
            <div className='col mb-5 '>
              <div className='card h-100'>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Fancy Product</h5>
                    <span className='text-muted text-decoration-line-through'>$50.00</span>$25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto'>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>

            {/* card 6 */}
            <div className='col mb-5 '>
              <div className='card h-100'>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Fancy Product</h5>
                    $1200.00 - $280.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto'>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>

            {/* card 7 */}
            <div className='col mb-5 '>
              <div className='card h-100'>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Special Item</h5>
                    <span className='text-muted text-decoration-line-through'>$20.00</span>$18.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto'>Add to cart</a>
                  </div>
                </div>
              </div>
            </div>


            {/* card 8 */}
            <div className='col mb-5 '>
              <div className='card h-100'>
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='card-img-top' />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className='fw-bolder'>Popular Item</h5>
                    $40.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-9 bg-transparent">
                  <div className="text-center">
                    <a href="#" className='btn btn-outline-dark mt-auto '>view options</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
 </section>

{/* footer */}
<footer className='py-5 bg-dark'>
<div className="container">
  <p className='m-0 text-center text-white'>Copyright © Your Website 2023</p>
</div>
</footer>


    </div>
  );
}

export default App;
