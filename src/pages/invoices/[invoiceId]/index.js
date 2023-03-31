import React from 'react';
import { useRouter } from 'next/router';

const InvoiceDetails = () => {
  const router = useRouter();

  const goBack = () => router.push('/');

  return (
    <div className='main__container'>
      <div className='back__btn'>
        <h6 onClick={goBack}> Go Back</h6>
      </div>
      {/*invoice details header */}
      <div className='invoice__details-header'>
        <div className='details__status'>
          <p>Status</p>

          <button className='pending__status'>pending</button>
        </div>
        <div className='details__btns'>
          <button className='edit__btn'>Edit</button>
          <button className='delete__btn'>Delete</button>
          <button className='mark__as-btn'>Mark as Paid</button>
        </div>
      </div>
      {/* invoice details */}
      <div className='invoice__details'>
        <div className='details__box'>
          <div>
            <h4>RT580G</h4>
            <p>Re-branding</p>
          </div>
          <div>
            <p>Block - B, Road -41</p>
            <p>Ciseeng</p>
            <p>Jawa Barat</p>
            <p>Indonesia</p>
          </div>
        </div>

        {/* details box 2 */}
        <div className='details__box'>
          <div className='invoice__created-date'>
            <p>Invoice Date</p>
            <h4>29-07-2022</h4>
          </div>
          <div>
            <p className='invoice__payment'>Payment Due</p>
            <h4>29-07-2023</h4>
          </div>
          {/* Invoice client address */}
          <div className='invoice__client-address'>
            <p>Bill to</p>
            <h4>Jane Doe</h4>
            <div>
              <p>Block - A, Road -11</p>
              <p>Parigi</p>
              <p>Jawa Barat 16330</p>
              <p>Indonesia</p>
            </div>
          </div>

          <div>
            <p>Send to</p>
            <h4>someone@sample.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
